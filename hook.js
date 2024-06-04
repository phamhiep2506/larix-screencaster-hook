Java.perform(function () {
  console.log("[INFO] Starting hook com.wmspanel.larix_screencaster");

  Java.use("com.wmspanel.screencast.MainActivity").isSubscribed.overload(
    "com.wmspanel.screencast.billing.PremiumFeature",
  ).implementation = function (arg) {
    console.log("[INFO] Hook MainActivity.isSubscribed()");
    console.log("[LOG] " + arg);
    return true;
  };

  Java.use("com.wmspanel.screencast.StreamerService").isSubscribed.overload(
    "com.wmspanel.screencast.billing.PremiumFeature",
  ).implementation = function (arg) {
    console.log("[INFO] Hook StreamerService.isSubscribed()");
    console.log("[LOG] " + arg);
    return true;
  };

  Java.use(
    "com.wmspanel.screencast.preference.PreferenceFragmentBase",
  ).isSubscribed.overload(
    "com.wmspanel.screencast.billing.PremiumFeature",
  ).implementation = function (arg) {
    console.log("[INFO] Hook PreferenceFragmentBase.isSubscribed()");
    console.log("[LOG] " + arg);
    return true;
  };

  Java.use(
    "com.wmspanel.screencast.preference.SettingsActivity",
  ).isSubscribed.overload(
    "com.wmspanel.screencast.billing.PremiumFeature",
  ).implementation = function (arg) {
    console.log("[INFO] Hook SettingsActivity.PremiumFeature.isSubscribed()");
    console.log("[LOG] " + arg);
    return true;
  };

  Java.use(
    "com.wmspanel.screencast.preference.SettingsActivity",
  ).isSubscribed.overload(
    "com.wmspanel.screencast.billing.SubscriptionPlan",
  ).implementation = function (arg) {
    console.log("[INFO] Hook SettingsActivity.SubscriptionPlan.isSubscribed()");
    console.log("[LOG] " + arg);
    return true;
  };
});
