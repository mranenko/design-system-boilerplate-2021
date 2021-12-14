class Tabs {

  static initialize() {
    document.querySelectorAll('.tab-container').forEach((tabContainer) => {

      // if there are no active tabs, mark first tab as active
      if (tabContainer.querySelectorAll('.tab.active').length === 0) {
        // reset all tab content to inactive
        tabContainer.querySelectorAll('.tab-content.active').forEach(activeTab => activeTab.classList.remove('active'));

        const firstTab = tabContainer.querySelectorAll('.tab')[0];
        firstTab.classList.add('active');
        tabContainer.querySelector(firstTab.getAttribute('href')).classList.add('active');
      }

      // add click event listeners to tabs
      tabContainer.querySelectorAll('.tab').forEach((tab) => {
        tab.addEventListener('click', (event) => {
          event.preventDefault();

          // if current tab is not active
          if (!tab.classList.contains('active')) {

            // hide other active tabs + tab content
            tabContainer.querySelectorAll('.tab.active').forEach(activeTab => activeTab.classList.remove('active'));
            tabContainer.querySelectorAll('.tab-content.active').forEach(activeTab => activeTab.classList.remove('active'));

            // make current tab and corresponding content active
            tab.classList.add('active');
            tabContainer.querySelector(tab.getAttribute('href')).classList.add('active');
          }
        });
      });

    });
  }

};


export default Tabs;
