const dummyApiResponse = {
  showLightAndDarkMode: true,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showAccordian: false,
  showTreeView: false,
  showTabs: true,
};

function featureFlagDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("Some Error Occured! Please Try Again");
  });
}

export default featureFlagDataServiceCall;
