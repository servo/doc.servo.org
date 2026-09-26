(function() {
    var type_impls = Object.fromEntries([["ash",[]],["fontconfig_sys",[]],["freetype_sys",[]],["gio_sys",[]],["glib_sys",[]],["gobject_sys",[]],["gstreamer_audio_sys",[]],["gstreamer_base_sys",[]],["gstreamer_gl_sys",[]],["gstreamer_sys",[]],["gstreamer_video_sys",[]],["harfbuzz_sys",[]],["khronos_egl",[]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[10,22,20,15,16,19,27,26,24,21,27,20,19]}