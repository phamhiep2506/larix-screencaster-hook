Java.perform(function() {

  console.log("[+] Starting hook com.wmspanel.larix_screencaster");

  Java.use("com.wmspanel.screencast.MainActivity").isSubscribed.overload('com.wmspanel.screencast.billing.PremiumFeature').implementation  = function(arg1) {
    console.log("[+] Hook MainActivity isSubscribed()");
    console.log("Params: " + arg1);
    return true;
  }

  Java.use("com.wmspanel.screencast.StreamerService").isSubscribed.overload('com.wmspanel.screencast.billing.PremiumFeature').implementation  = function(arg1) {
    console.log("[+] Hook StreamerService isSubscribed()");
    console.log("Params: " + arg1);
    return true;
  }

  Java.use("com.wmspanel.screencast.preference.PreferenceFragmentBase").isSubscribed.overload('com.wmspanel.screencast.billing.PremiumFeature').implementation  = function(arg1) {
    console.log("[+] Hook PreferenceFragmentBase isSubscribed()");
    console.log("Params: " + arg1);
    return true;
  }

  Java.use("com.wmspanel.screencast.preference.SettingsActivity").isSubscribed.overload('com.wmspanel.screencast.billing.PremiumFeature').implementation  = function(arg1) {
    console.log("[+] Hook SettingsActivity PremiumFeature isSubscribed()");
    console.log("Params: " + arg1);
    return true;
  }

  Java.use("com.wmspanel.screencast.preference.SettingsActivity").isSubscribed.overload('com.wmspanel.screencast.billing.SubscriptionPlan').implementation  = function(arg1) {
    console.log("[+] Hook SettingsActivity SubscriptionPlan isSubscribed()");
    console.log("Params: " + arg1);
    return true;
  }

});
