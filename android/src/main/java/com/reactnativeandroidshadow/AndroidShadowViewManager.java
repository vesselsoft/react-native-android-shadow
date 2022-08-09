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
        if (style.hasKey("enableCSSScale")) {
            view.setShadow_with_css_scale(style.getBoolean("enableCSSScale"));
        }

        if (style.hasKey("enableDpiScale")) {
            view.setShadow_with_dpi_scale(style.getBoolean("enableDpiScale"));
        }

        if (style.hasKey("enableShadowWithColor")) {
            view.setShadow_with_color(style.getBoolean("enableShadowWithColor"));
        }

        if (style.hasKey("enableShadowWithContent")) {
            view.setShadow_with_content(style.getBoolean("enableShadowWithContent"));
        }

        if (style.hasKey("enableCastOnlyBackground")) {
            view.setShadow_cast_only_background(style.getBoolean("enableCastOnlyBackground"));
        }

        if (style.hasKey("shadowDownScale")) {
            view.setShadow_downscale((float) style.getDouble("shadowDownScale"));
        }

        double shadowOpacity = -1;
        if (style.hasKey("shadowOpacity")) {
            shadowOpacity = style.getDouble("shadowOpacity");
        }

        if (style.hasKey("shadowColor")) {
            int shadowColor = style.getInt("shadowColor");
            if (shadowOpacity >= 0) {
                view.setShadow_color(Color.argb((int) Math.round(shadowOpacity * 255.0),
                        Color.red(shadowColor), Color.green(shadowColor), Color.blue(shadowColor)));
            } else {
                view.setShadow_color(shadowColor);
            }
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
