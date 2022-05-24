package com.reactnativeandroidshadow;

import android.graphics.Color;
import android.view.View;

import androidx.annotation.NonNull;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class AndroidShadowViewManager extends SimpleViewManager<View> {
    public static final String REACT_CLASS = "AndroidShadowView";

    @Override
    @NonNull
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    @NonNull
    public View createViewInstance(ThemedReactContext reactContext) {
        return new View(reactContext);
    }

    @ReactProp(name = "color")
    public void setColor(View view, String color) {
        view.setBackgroundColor(Color.parseColor(color));
    }
}
