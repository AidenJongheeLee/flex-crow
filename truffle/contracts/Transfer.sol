pragma solidity ^0.4.22;

contract Transfer {
    uint public value;
    address public sender;
    address public receiver;
    enum State { Created, Paid, Inactive }
    State public state;

    constructor() public payable {
        sender = msg.sender;
        value = msg.value / 2;
        require((2 * value) == msg.value, "Value has to be even.");
    }

    modifier condition(bool _condition) {
        require(_condition);
        _;
    }

    modifier onlySender() {
        require(
            msg.sender == sender,
            "Only sender can call this."
        );
        _;
    }

    modifier onlyReceiver() {
        require(
            msg.sender == receiver,
            "Only receiver can call this."
        );
        _;
    }

    modifier inState(State _state) {
        require(
            state == _state,
            "Invalid state."
        );
        _;
    }

    event Aborted();
    event TransferSent();
    event TransferReceived();

    function confirmSender()
        public
        inState(State.Created)
        condition(msg.value == (2 * value))
        payable
    {
        emit TransferSent();
        sender = msg.sender;
        state = State.Paid;
    }

    function confirmReceived()
        public
        onlyReceiver
        inState(State.Paid)
    {
        emit TransferReceived();
        state = State.Inactive;

        receiver.transfer(value);
        sender.transfer(address(this).balance);
    }
}