package com.reactnativeandroidshadow;

import android.graphics.Color;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;

import net.orandja.shadowlayout.ShadowLayout;

public class AndroidShadowViewManager extends ViewGroupManager<ShadowLayout> {
    public static final String REACT_CLASS = "AndroidShadowView";

    @NonNull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @NonNull
    @Override
    protected ShadowLayout createViewInstance(@NonNull ThemedReactContext reactContext) {
        return new ShadowLayout(reactContext);
    }

    @ReactProp(name = "shadow")
    public void setShadow(ShadowLayout view, ReadableMap style) {
        double shadowOpacity = 1;
        if (style.hasKey("shadowOpacity")) {
            shadowOpacity = style.getDouble("shadowOpacity");
        }

        if (style.hasKey("shadowColor")) {
            int shadowColor = style.getInt("shadowColor");
            view.setShadow_color(Color.argb((int) Math.round(shadowOpacity * 255.0),
                    Color.red(shadowColor), Color.green(shadowColor), Color.blue(shadowColor)));
        }

        if (style.hasKey("shadowOffset")) {
            ReadableMap shadowOffset = style.getMap("shadowOffset");
            if (shadowOffset.hasKey("width")) {
                int shadowOffsetWidth = shadowOffset.getInt("width");
                view.setShadow_x_shift((float) shadowOffsetWidth);
            }
            if (shadowOffset.hasKey("height")) {
                int shadowOffsetHeight = shadowOffset.getInt("height");
                view.setShadow_y_shift((float) shadowOffsetHeight);
            }
        }

        if (style.hasKey("shadowRadius")) {
            double shadowRadius = style.getDouble("shadowRadius");
            view.setShadow_radius((float) shadowRadius);
        }
    }
}
