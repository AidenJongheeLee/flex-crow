pragma solidity ^0.4.23;

import "openzeppelin-solidity/contracts/payment/SplitPayment.sol";

contract Invoices is Ownable {
  struct Funder {
      address addr;
      uint amount;
   }
   
   struct Campaign {
      address beneficiary;
      uint fundingGoal;
      uint numFunders;
      uint amount;
      uint deadline;
      mapping (uint => Funder) funders;
   }
}