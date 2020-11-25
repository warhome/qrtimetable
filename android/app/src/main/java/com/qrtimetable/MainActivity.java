package com.qrtimetable;
import com.facebook.react.ReactActivity;

import android.os.Bundle; // here

// react-native-splash-screen >= 0.3.1
import org.devio.rn.splashscreen.SplashScreen; // here


public class MainActivity extends ReactActivity {

 @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
  }
  
  @Override
  protected String getMainComponentName() {
    return "qrtimetable";
  }
}
