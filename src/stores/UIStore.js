export class UIStoreClass {
  tabIndexes = {
    dashboard_tab: 1,
    create_tab: 2,
  };
  currentTab = this.tabIndexes.dashboard_tab;
}

const store = new UIStoreClass();
export default store;
