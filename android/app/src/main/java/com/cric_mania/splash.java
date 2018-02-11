package com.cric_mania;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.support.annotation.Nullable;

/**
 * Created by siddharth on 12/14/2017.
 */

public class splash extends Activity{
    private final int SPLASH_DISPLAY_LENGTH = 5000;

    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        new Handler().postDelayed(new Runnable(){
            @Override
            public void run() {
        Intent intent = new Intent(getApplicationContext(), MainActivity.class);
        startActivity(intent);
        finish();
            }
        }, SPLASH_DISPLAY_LENGTH);
    }
}
