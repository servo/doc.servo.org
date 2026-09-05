(function() {
    const implementors = Object.fromEntries([["digest",[]],["elliptic_curve",[]],["hmac",[]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":59,"fragment_lengths":[13,22,12]}