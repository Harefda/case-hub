(window.webpackJsonp = window.webpackJsonp || []).push([
    [3], {
        "0TWp": function(e, t, n) {
            var r, o;
            void 0 === (o = "function" == typeof(r = function() {
                "use strict";
                ! function(e) {
                    var t = e.performance;

                    function n(e) {
                        t && t.mark && t.mark(e)
                    }

                    function r(e, n) {
                        t && t.measure && t.measure(e, n)
                    }
                    n("Zone");
                    var o = e.__Zone_symbol_prefix || "__zone_symbol__";

                    function i(e) {
                        return o + e
                    }
                    var a = !0 === e[i("forceDuplicateZoneCheck")];
                    if (e.Zone) {
                        if (a || "function" != typeof e.Zone.__symbol__) throw new Error("Zone already loaded.");
                        return e.Zone
                    }
                    var s = function() {
                        function t(e, t) {
                            this._parent = e, this._name = t ? t.name || "unnamed" : "<root>", this._properties = t && t.properties || {}, this._zoneDelegate = new l(this, this._parent && this._parent._zoneDelegate, t)
                        }
                        return t.assertZonePatched = function() {
                            if (e.Promise !== C.ZoneAwarePromise) throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")
                        }, Object.defineProperty(t, "root", {
                            get: function() {
                                for (var e = t.current; e.parent;) e = e.parent;
                                return e
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t, "current", {
                            get: function() {
                                return I.zone
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t, "currentTask", {
                            get: function() {
                                return j
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t.__load_patch = function(o, i) {
                            if (C.hasOwnProperty(o)) {
                                if (a) throw Error("Already loaded patch: " + o)
                            } else if (!e["__Zone_disable_" + o]) {
                                var s = "Zone:" + o;
                                n(s), C[o] = i(e, t, Z), r(s, s)
                            }
                        }, Object.defineProperty(t.prototype, "parent", {
                            get: function() {
                                return this._parent
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "name", {
                            get: function() {
                                return this._name
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t.prototype.get = function(e) {
                            var t = this.getZoneWith(e);
                            if (t) return t._properties[e]
                        }, t.prototype.getZoneWith = function(e) {
                            for (var t = this; t;) {
                                if (t._properties.hasOwnProperty(e)) return t;
                                t = t._parent
                            }
                            return null
                        }, t.prototype.fork = function(e) {
                            if (!e) throw new Error("ZoneSpec required!");
                            return this._zoneDelegate.fork(this, e)
                        }, t.prototype.wrap = function(e, t) {
                            if ("function" != typeof e) throw new Error("Expecting function got: " + e);
                            var n = this._zoneDelegate.intercept(this, e, t),
                                r = this;
                            return function() {
                                return r.runGuarded(n, this, arguments, t)
                            }
                        }, t.prototype.run = function(e, t, n, r) {
                            I = {
                                parent: I,
                                zone: this
                            };
                            try {
                                return this._zoneDelegate.invoke(this, e, t, n, r)
                            } finally {
                                I = I.parent
                            }
                        }, t.prototype.runGuarded = function(e, t, n, r) {
                            void 0 === t && (t = null), I = {
                                parent: I,
                                zone: this
                            };
                            try {
                                try {
                                    return this._zoneDelegate.invoke(this, e, t, n, r)
                                } catch (o) {
                                    if (this._zoneDelegate.handleError(this, o)) throw o
                                }
                            } finally {
                                I = I.parent
                            }
                        }, t.prototype.runTask = function(e, t, n) {
                            if (e.zone != this) throw new Error("A task can only be run in the zone of creation! (Creation: " + (e.zone || _).name + "; Execution: " + this.name + ")");
                            if (e.state !== b || e.type !== D && e.type !== P) {
                                var r = e.state != E;
                                r && e._transitionTo(E, k), e.runCount++;
                                var o = j;
                                j = e, I = {
                                    parent: I,
                                    zone: this
                                };
                                try {
                                    e.type == P && e.data && !e.data.isPeriodic && (e.cancelFn = void 0);
                                    try {
                                        return this._zoneDelegate.invokeTask(this, e, t, n)
                                    } catch (i) {
                                        if (this._zoneDelegate.handleError(this, i)) throw i
                                    }
                                } finally {
                                    e.state !== b && e.state !== S && (e.type == D || e.data && e.data.isPeriodic ? r && e._transitionTo(k, E) : (e.runCount = 0, this._updateTaskCount(e, -1), r && e._transitionTo(b, E, b))), I = I.parent, j = o
                                }
                            }
                        }, t.prototype.scheduleTask = function(e) {
                            if (e.zone && e.zone !== this)
                                for (var t = this; t;) {
                                    if (t === e.zone) throw Error("can not reschedule task to " + this.name + " which is descendants of the original zone " + e.zone.name);
                                    t = t.parent
                                }
                            e._transitionTo(T, b);
                            var n = [];
                            e._zoneDelegates = n, e._zone = this;
                            try {
                                e = this._zoneDelegate.scheduleTask(this, e)
                            } catch (r) {
                                throw e._transitionTo(S, T, b), this._zoneDelegate.handleError(this, r), r
                            }
                            return e._zoneDelegates === n && this._updateTaskCount(e, 1), e.state == T && e._transitionTo(k, T), e
                        }, t.prototype.scheduleMicroTask = function(e, t, n, r) {
                            return this.scheduleTask(new h(O, e, t, n, r, void 0))
                        }, t.prototype.scheduleMacroTask = function(e, t, n, r, o) {
                            return this.scheduleTask(new h(P, e, t, n, r, o))
                        }, t.prototype.scheduleEventTask = function(e, t, n, r, o) {
                            return this.scheduleTask(new h(D, e, t, n, r, o))
                        }, t.prototype.cancelTask = function(e) {
                            if (e.zone != this) throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (e.zone || _).name + "; Execution: " + this.name + ")");
                            e._transitionTo(w, k, E);
                            try {
                                this._zoneDelegate.cancelTask(this, e)
                            } catch (t) {
                                throw e._transitionTo(S, w), this._zoneDelegate.handleError(this, t), t
                            }
                            return this._updateTaskCount(e, -1), e._transitionTo(b, w), e.runCount = 0, e
                        }, t.prototype._updateTaskCount = function(e, t) {
                            var n = e._zoneDelegates; - 1 == t && (e._zoneDelegates = null);
                            for (var r = 0; r < n.length; r++) n[r]._updateTaskCount(e.type, t)
                        }, t
                    }();
                    s.__symbol__ = i;
                    var c, u = {
                            name: "",
                            onHasTask: function(e, t, n, r) {
                                return e.hasTask(n, r)
                            },
                            onScheduleTask: function(e, t, n, r) {
                                return e.scheduleTask(n, r)
                            },
                            onInvokeTask: function(e, t, n, r, o, i) {
                                return e.invokeTask(n, r, o, i)
                            },
                            onCancelTask: function(e, t, n, r) {
                                return e.cancelTask(n, r)
                            }
                        },
                        l = function() {
                            function e(e, t, n) {
                                this._taskCounts = {
                                    microTask: 0,
                                    macroTask: 0,
                                    eventTask: 0
                                }, this.zone = e, this._parentDelegate = t, this._forkZS = n && (n && n.onFork ? n : t._forkZS), this._forkDlgt = n && (n.onFork ? t : t._forkDlgt), this._forkCurrZone = n && (n.onFork ? this.zone : t._forkCurrZone), this._interceptZS = n && (n.onIntercept ? n : t._interceptZS), this._interceptDlgt = n && (n.onIntercept ? t : t._interceptDlgt), this._interceptCurrZone = n && (n.onIntercept ? this.zone : t._interceptCurrZone), this._invokeZS = n && (n.onInvoke ? n : t._invokeZS), this._invokeDlgt = n && (n.onInvoke ? t : t._invokeDlgt), this._invokeCurrZone = n && (n.onInvoke ? this.zone : t._invokeCurrZone), this._handleErrorZS = n && (n.onHandleError ? n : t._handleErrorZS), this._handleErrorDlgt = n && (n.onHandleError ? t : t._handleErrorDlgt), this._handleErrorCurrZone = n && (n.onHandleError ? this.zone : t._handleErrorCurrZone), this._scheduleTaskZS = n && (n.onScheduleTask ? n : t._scheduleTaskZS), this._scheduleTaskDlgt = n && (n.onScheduleTask ? t : t._scheduleTaskDlgt), this._scheduleTaskCurrZone = n && (n.onScheduleTask ? this.zone : t._scheduleTaskCurrZone), this._invokeTaskZS = n && (n.onInvokeTask ? n : t._invokeTaskZS), this._invokeTaskDlgt = n && (n.onInvokeTask ? t : t._invokeTaskDlgt), this._invokeTaskCurrZone = n && (n.onInvokeTask ? this.zone : t._invokeTaskCurrZone), this._cancelTaskZS = n && (n.onCancelTask ? n : t._cancelTaskZS), this._cancelTaskDlgt = n && (n.onCancelTask ? t : t._cancelTaskDlgt), this._cancelTaskCurrZone = n && (n.onCancelTask ? this.zone : t._cancelTaskCurrZone), this._hasTaskZS = null, this._hasTaskDlgt = null, this._hasTaskDlgtOwner = null, this._hasTaskCurrZone = null;
                                var r = n && n.onHasTask;
                                (r || t && t._hasTaskZS) && (this._hasTaskZS = r ? n : u, this._hasTaskDlgt = t, this._hasTaskDlgtOwner = this, this._hasTaskCurrZone = e, n.onScheduleTask || (this._scheduleTaskZS = u, this._scheduleTaskDlgt = t, this._scheduleTaskCurrZone = this.zone), n.onInvokeTask || (this._invokeTaskZS = u, this._invokeTaskDlgt = t, this._invokeTaskCurrZone = this.zone), n.onCancelTask || (this._cancelTaskZS = u, this._cancelTaskDlgt = t, this._cancelTaskCurrZone = this.zone))
                            }
                            return e.prototype.fork = function(e, t) {
                                return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, e, t) : new s(e, t)
                            }, e.prototype.intercept = function(e, t, n) {
                                return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, e, t, n) : t
                            }, e.prototype.invoke = function(e, t, n, r, o) {
                                return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, e, t, n, r, o) : t.apply(n, r)
                            }, e.prototype.handleError = function(e, t) {
                                return !this._handleErrorZS || this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, e, t)
                            }, e.prototype.scheduleTask = function(e, t) {
                                var n = t;
                                if (this._scheduleTaskZS) this._hasTaskZS && n._zoneDelegates.push(this._hasTaskDlgtOwner), (n = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, e, t)) || (n = t);
                                else if (t.scheduleFn) t.scheduleFn(t);
                                else {
                                    if (t.type != O) throw new Error("Task is missing scheduleFn.");
                                    m(t)
                                }
                                return n
                            }, e.prototype.invokeTask = function(e, t, n, r) {
                                return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, e, t, n, r) : t.callback.apply(n, r)
                            }, e.prototype.cancelTask = function(e, t) {
                                var n;
                                if (this._cancelTaskZS) n = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, e, t);
                                else {
                                    if (!t.cancelFn) throw Error("Task is not cancelable");
                                    n = t.cancelFn(t)
                                }
                                return n
                            }, e.prototype.hasTask = function(e, t) {
                                try {
                                    this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, e, t)
                                } catch (n) {
                                    this.handleError(e, n)
                                }
                            }, e.prototype._updateTaskCount = function(e, t) {
                                var n = this._taskCounts,
                                    r = n[e],
                                    o = n[e] = r + t;
                                if (o < 0) throw new Error("More tasks executed then were scheduled.");
                                0 != r && 0 != o || this.hasTask(this.zone, {
                                    microTask: n.microTask > 0,
                                    macroTask: n.macroTask > 0,
                                    eventTask: n.eventTask > 0,
                                    change: e
                                })
                            }, e
                        }(),
                        h = function() {
                            function t(n, r, o, i, a, s) {
                                if (this._zone = null, this.runCount = 0, this._zoneDelegates = null, this._state = "notScheduled", this.type = n, this.source = r, this.data = i, this.scheduleFn = a, this.cancelFn = s, !o) throw new Error("callback is not defined");
                                this.callback = o;
                                var c = this;
                                this.invoke = n === D && i && i.useG ? t.invokeTask : function() {
                                    return t.invokeTask.call(e, c, this, arguments)
                                }
                            }
                            return t.invokeTask = function(e, t, n) {
                                e || (e = this), z++;
                                try {
                                    return e.runCount++, e.zone.runTask(e, t, n)
                                } finally {
                                    1 == z && y(), z--
                                }
                            }, Object.defineProperty(t.prototype, "zone", {
                                get: function() {
                                    return this._zone
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(t.prototype, "state", {
                                get: function() {
                                    return this._state
                                },
                                enumerable: !0,
                                configurable: !0
                            }), t.prototype.cancelScheduleRequest = function() {
                                this._transitionTo(b, T)
                            }, t.prototype._transitionTo = function(e, t, n) {
                                if (this._state !== t && this._state !== n) throw new Error(this.type + " '" + this.source + "': can not transition to '" + e + "', expecting state '" + t + "'" + (n ? " or '" + n + "'" : "") + ", was '" + this._state + "'.");
                                this._state = e, e == b && (this._zoneDelegates = null)
                            }, t.prototype.toString = function() {
                                return this.data && void 0 !== this.data.handleId ? this.data.handleId.toString() : Object.prototype.toString.call(this)
                            }, t.prototype.toJSON = function() {
                                return {
                                    type: this.type,
                                    state: this.state,
                                    source: this.source,
                                    zone: this.zone.name,
                                    runCount: this.runCount
                                }
                            }, t
                        }(),
                        p = i("setTimeout"),
                        f = i("Promise"),
                        d = i("then"),
                        v = [],
                        g = !1;

                    function m(t) {
                        if (0 === z && 0 === v.length)
                            if (c || e[f] && (c = e[f].resolve(0)), c) {
                                var n = c[d];
                                n || (n = c.then), n.call(c, y)
                            } else e[p](y, 0);
                        t && v.push(t)
                    }

                    function y() {
                        if (!g) {
                            for (g = !0; v.length;) {
                                var e = v;
                                v = [];
                                for (var t = 0; t < e.length; t++) {
                                    var n = e[t];
                                    try {
                                        n.zone.runTask(n, null, null)
                                    } catch (r) {
                                        Z.onUnhandledError(r)
                                    }
                                }
                            }
                            Z.microtaskDrainDone(), g = !1
                        }
                    }
                    var _ = {
                            name: "NO ZONE"
                        },
                        b = "notScheduled",
                        T = "scheduling",
                        k = "scheduled",
                        E = "running",
                        w = "canceling",
                        S = "unknown",
                        O = "microTask",
                        P = "macroTask",
                        D = "eventTask",
                        C = {},
                        Z = {
                            symbol: i,
                            currentZoneFrame: function() {
                                return I
                            },
                            onUnhandledError: M,
                            microtaskDrainDone: M,
                            scheduleMicroTask: m,
                            showUncaughtError: function() {
                                return !s[i("ignoreConsoleErrorUncaughtError")]
                            },
                            patchEventTarget: function() {
                                return []
                            },
                            patchOnProperties: M,
                            patchMethod: function() {
                                return M
                            },
                            bindArguments: function() {
                                return []
                            },
                            patchThen: function() {
                                return M
                            },
                            patchMacroTask: function() {
                                return M
                            },
                            setNativePromise: function(e) {
                                e && "function" == typeof e.resolve && (c = e.resolve(0))
                            },
                            patchEventPrototype: function() {
                                return M
                            },
                            isIEOrEdge: function() {
                                return !1
                            },
                            getGlobalObjects: function() {},
                            ObjectDefineProperty: function() {
                                return M
                            },
                            ObjectGetOwnPropertyDescriptor: function() {},
                            ObjectCreate: function() {},
                            ArraySlice: function() {
                                return []
                            },
                            patchClass: function() {
                                return M
                            },
                            wrapWithCurrentZone: function() {
                                return M
                            },
                            filterProperties: function() {
                                return []
                            },
                            attachOriginToPatched: function() {
                                return M
                            },
                            _redefineProperty: function() {
                                return M
                            },
                            patchCallbacks: function() {
                                return M
                            }
                        },
                        I = {
                            parent: null,
                            zone: new s(null, null)
                        },
                        j = null,
                        z = 0;

                    function M() {}
                    r("Zone", "Zone"), e.Zone = s
                }("undefined" != typeof window && window || "undefined" != typeof self && self || global), Zone.__load_patch("ZoneAwarePromise", (function(e, t, n) {
                    var r = Object.getOwnPropertyDescriptor,
                        o = Object.defineProperty,
                        i = n.symbol,
                        a = [],
                        s = !0 === e[i("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],
                        c = i("Promise"),
                        u = i("then");
                    n.onUnhandledError = function(e) {
                        if (n.showUncaughtError()) {
                            var t = e && e.rejection;
                            t ? console.error("Unhandled Promise rejection:", t instanceof Error ? t.message : t, "; Zone:", e.zone.name, "; Task:", e.task && e.task.source, "; Value:", t, t instanceof Error ? t.stack : void 0) : console.error(e)
                        }
                    }, n.microtaskDrainDone = function() {
                        for (var e = function() {
                                var e = a.shift();
                                try {
                                    e.zone.runGuarded((function() {
                                        throw e
                                    }))
                                } catch (r) {
                                    ! function(e) {
                                        n.onUnhandledError(e);
                                        try {
                                            var r = t[l];
                                            "function" == typeof r && r.call(this, e)
                                        } catch (o) {}
                                    }(r)
                                }
                            }; a.length;) e()
                    };
                    var l = i("unhandledPromiseRejectionHandler");

                    function h(e) {
                        return e && e.then
                    }

                    function p(e) {
                        return e
                    }

                    function f(e) {
                        return O.reject(e)
                    }
                    var d = i("state"),
                        v = i("value"),
                        g = i("finally"),
                        m = i("parentPromiseValue"),
                        y = i("parentPromiseState");

                    function _(e, t) {
                        return function(n) {
                            try {
                                T(e, t, n)
                            } catch (r) {
                                T(e, !1, r)
                            }
                        }
                    }
                    var b = i("currentTaskTrace");

                    function T(e, r, i) {
                        var c, u, l = (c = !1, function(e) {
                            return function() {
                                c || (c = !0, e.apply(null, arguments))
                            }
                        });
                        if (e === i) throw new TypeError("Promise resolved with itself");
                        if (null === e[d]) {
                            var h = null;
                            try {
                                "object" != typeof i && "function" != typeof i || (h = i && i.then)
                            } catch (P) {
                                return l((function() {
                                    T(e, !1, P)
                                }))(), e
                            }
                            if (!1 !== r && i instanceof O && i.hasOwnProperty(d) && i.hasOwnProperty(v) && null !== i[d]) E(i), T(e, i[d], i[v]);
                            else if (!1 !== r && "function" == typeof h) try {
                                h.call(i, l(_(e, r)), l(_(e, !1)))
                            } catch (P) {
                                l((function() {
                                    T(e, !1, P)
                                }))()
                            } else {
                                e[d] = r;
                                var p = e[v];
                                if (e[v] = i, e[g] === g && !0 === r && (e[d] = e[y], e[v] = e[m]), !1 === r && i instanceof Error) {
                                    var f = t.currentTask && t.currentTask.data && t.currentTask.data.__creationTrace__;
                                    f && o(i, b, {
                                        configurable: !0,
                                        enumerable: !1,
                                        writable: !0,
                                        value: f
                                    })
                                }
                                for (var k = 0; k < p.length;) w(e, p[k++], p[k++], p[k++], p[k++]);
                                if (0 == p.length && 0 == r) {
                                    e[d] = 0;
                                    var S = i;
                                    if (!s) try {
                                        throw new Error("Uncaught (in promise): " + ((u = i) && u.toString === Object.prototype.toString ? (u.constructor && u.constructor.name || "") + ": " + JSON.stringify(u) : u ? u.toString() : Object.prototype.toString.call(u)) + (i && i.stack ? "\n" + i.stack : ""))
                                    } catch (P) {
                                        S = P
                                    }
                                    S.rejection = i, S.promise = e, S.zone = t.current, S.task = t.currentTask, a.push(S), n.scheduleMicroTask()
                                }
                            }
                        }
                        return e
                    }
                    var k = i("rejectionHandledHandler");

                    function E(e) {
                        if (0 === e[d]) {
                            try {
                                var n = t[k];
                                n && "function" == typeof n && n.call(this, {
                                    rejection: e[v],
                                    promise: e
                                })
                            } catch (o) {}
                            e[d] = !1;
                            for (var r = 0; r < a.length; r++) e === a[r].promise && a.splice(r, 1)
                        }
                    }

                    function w(e, t, n, r, o) {
                        E(e);
                        var i = e[d],
                            a = i ? "function" == typeof r ? r : p : "function" == typeof o ? o : f;
                        t.scheduleMicroTask("Promise.then", (function() {
                            try {
                                var r = e[v],
                                    o = !!n && g === n[g];
                                o && (n[m] = r, n[y] = i);
                                var s = t.run(a, void 0, o && a !== f && a !== p ? [] : [r]);
                                T(n, !0, s)
                            } catch (c) {
                                T(n, !1, c)
                            }
                        }), n)
                    }
                    var S = function() {},
                        O = function() {
                            function e(t) {
                                if (!(this instanceof e)) throw new Error("Must be an instanceof Promise.");
                                this[d] = null, this[v] = [];
                                try {
                                    t && t(_(this, !0), _(this, !1))
                                } catch (n) {
                                    T(this, !1, n)
                                }
                            }
                            return e.toString = function() {
                                return "function ZoneAwarePromise() { [native code] }"
                            }, e.resolve = function(e) {
                                return T(new this(null), !0, e)
                            }, e.reject = function(e) {
                                return T(new this(null), !1, e)
                            }, e.race = function(e) {
                                var t, n, r = new this((function(e, r) {
                                    t = e, n = r
                                }));

                                function o(e) {
                                    t(e)
                                }

                                function i(e) {
                                    n(e)
                                }
                                for (var a = 0, s = e; a < s.length; a++) {
                                    var c = s[a];
                                    h(c) || (c = this.resolve(c)), c.then(o, i)
                                }
                                return r
                            }, e.all = function(t) {
                                return e.allWithCallback(t)
                            }, e.allSettled = function(t) {
                                return (this && this.prototype instanceof e ? this : e).allWithCallback(t, {
                                    thenCallback: function(e) {
                                        return {
                                            status: "fulfilled",
                                            value: e
                                        }
                                    },
                                    errorCallback: function(e) {
                                        return {
                                            status: "rejected",
                                            reason: e
                                        }
                                    }
                                })
                            }, e.allWithCallback = function(e, t) {
                                for (var n, r, o = new this((function(e, t) {
                                        n = e, r = t
                                    })), i = 2, a = 0, s = [], c = function(e) {
                                        h(e) || (e = u.resolve(e));
                                        var o = a;
                                        try {
                                            e.then((function(e) {
                                                s[o] = t ? t.thenCallback(e) : e, 0 == --i && n(s)
                                            }), (function(e) {
                                                t ? (s[o] = t.errorCallback(e), 0 == --i && n(s)) : r(e)
                                            }))
                                        } catch (c) {
                                            r(c)
                                        }
                                        i++, a++
                                    }, u = this, l = 0, p = e; l < p.length; l++) c(p[l]);
                                return 0 == (i -= 2) && n(s), o
                            }, Object.defineProperty(e.prototype, Symbol.toStringTag, {
                                get: function() {
                                    return "Promise"
                                },
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(e.prototype, Symbol.species, {
                                get: function() {
                                    return e
                                },
                                enumerable: !0,
                                configurable: !0
                            }), e.prototype.then = function(n, r) {
                                var o = this.constructor[Symbol.species];
                                o && "function" == typeof o || (o = this.constructor || e);
                                var i = new o(S),
                                    a = t.current;
                                return null == this[d] ? this[v].push(a, i, n, r) : w(this, a, i, n, r), i
                            }, e.prototype.catch = function(e) {
                                return this.then(null, e)
                            }, e.prototype.finally = function(n) {
                                var r = this.constructor[Symbol.species];
                                r && "function" == typeof r || (r = e);
                                var o = new r(S);
                                o[g] = g;
                                var i = t.current;
                                return null == this[d] ? this[v].push(i, o, n, n) : w(this, i, o, n, n), o
                            }, e
                        }();
                    O.resolve = O.resolve, O.reject = O.reject, O.race = O.race, O.all = O.all;
                    var P = e[c] = e.Promise,
                        D = t.__symbol__("ZoneAwarePromise"),
                        C = r(e, "Promise");
                    C && !C.configurable || (C && delete C.writable, C && delete C.value, C || (C = {
                        configurable: !0,
                        enumerable: !0
                    }), C.get = function() {
                        return e[D] ? e[D] : e[c]
                    }, C.set = function(t) {
                        t === O ? e[D] = t : (e[c] = t, t.prototype[u] || j(t), n.setNativePromise(t))
                    }, o(e, "Promise", C)), e.Promise = O;
                    var Z, I = i("thenPatched");

                    function j(e) {
                        var t = e.prototype,
                            n = r(t, "then");
                        if (!n || !1 !== n.writable && n.configurable) {
                            var o = t.then;
                            t[u] = o, e.prototype.then = function(e, t) {
                                var n = this;
                                return new O((function(e, t) {
                                    o.call(n, e, t)
                                })).then(e, t)
                            }, e[I] = !0
                        }
                    }
                    if (n.patchThen = j, P) {
                        j(P);
                        var z = e.fetch;
                        "function" == typeof z && (e[n.symbol("fetch")] = z, e.fetch = (Z = z, function() {
                            var e = Z.apply(this, arguments);
                            if (e instanceof O) return e;
                            var t = e.constructor;
                            return t[I] || j(t), e
                        }))
                    }
                    return Promise[t.__symbol__("uncaughtPromiseErrors")] = a, O
                }));
                var e = Object.getOwnPropertyDescriptor,
                    t = Object.defineProperty,
                    n = Object.getPrototypeOf,
                    r = Object.create,
                    o = Array.prototype.slice,
                    i = Zone.__symbol__("addEventListener"),
                    a = Zone.__symbol__("removeEventListener"),
                    s = Zone.__symbol__("");

                function c(e, t) {
                    return Zone.current.wrap(e, t)
                }

                function u(e, t, n, r, o) {
                    return Zone.current.scheduleMacroTask(e, t, n, r, o)
                }
                var l = Zone.__symbol__,
                    h = "undefined" != typeof window,
                    p = h ? window : void 0,
                    f = h && p || "object" == typeof self && self || global,
                    d = [null];

                function v(e, t) {
                    for (var n = e.length - 1; n >= 0; n--) "function" == typeof e[n] && (e[n] = c(e[n], t + "_" + n));
                    return e
                }

                function g(e) {
                    return !e || !1 !== e.writable && !("function" == typeof e.get && void 0 === e.set)
                }
                var m = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope,
                    y = !("nw" in f) && void 0 !== f.process && "[object process]" === {}.toString.call(f.process),
                    _ = !y && !m && !(!h || !p.HTMLElement),
                    b = void 0 !== f.process && "[object process]" === {}.toString.call(f.process) && !m && !(!h || !p.HTMLElement),
                    T = {},
                    k = function(e) {
                        if (e = e || f.event) {
                            var t = T[e.type];
                            t || (t = T[e.type] = l("ON_PROPERTY" + e.type));
                            var n, r = this || e.target || f,
                                o = r[t];
                            if (_ && r === p && "error" === e.type) {
                                var i = e;
                                !0 === (n = o && o.call(this, i.message, i.filename, i.lineno, i.colno, i.error)) && e.preventDefault()
                            } else null == (n = o && o.apply(this, arguments)) || n || e.preventDefault();
                            return n
                        }
                    };

                function E(n, r, o) {
                    var i = e(n, r);
                    if (!i && o && e(o, r) && (i = {
                            enumerable: !0,
                            configurable: !0
                        }), i && i.configurable) {
                        var a = l("on" + r + "patched");
                        if (!n.hasOwnProperty(a) || !n[a]) {
                            delete i.writable, delete i.value;
                            var s = i.get,
                                c = i.set,
                                u = r.substr(2),
                                h = T[u];
                            h || (h = T[u] = l("ON_PROPERTY" + u)), i.set = function(e) {
                                var t = this;
                                t || n !== f || (t = f), t && (t[h] && t.removeEventListener(u, k), c && c.apply(t, d), "function" == typeof e ? (t[h] = e, t.addEventListener(u, k, !1)) : t[h] = null)
                            }, i.get = function() {
                                var e = this;
                                if (e || n !== f || (e = f), !e) return null;
                                var t = e[h];
                                if (t) return t;
                                if (s) {
                                    var o = s && s.call(this);
                                    if (o) return i.set.call(this, o), "function" == typeof e.removeAttribute && e.removeAttribute(r), o
                                }
                                return null
                            }, t(n, r, i), n[a] = !0
                        }
                    }
                }

                function w(e, t, n) {
                    if (t)
                        for (var r = 0; r < t.length; r++) E(e, "on" + t[r], n);
                    else {
                        var o = [];
                        for (var i in e) "on" == i.substr(0, 2) && o.push(i);
                        for (var a = 0; a < o.length; a++) E(e, o[a], n)
                    }
                }
                var S = l("originalInstance");

                function O(e) {
                    var n = f[e];
                    if (n) {
                        f[l(e)] = n, f[e] = function() {
                            var t = v(arguments, e);
                            switch (t.length) {
                                case 0:
                                    this[S] = new n;
                                    break;
                                case 1:
                                    this[S] = new n(t[0]);
                                    break;
                                case 2:
                                    this[S] = new n(t[0], t[1]);
                                    break;
                                case 3:
                                    this[S] = new n(t[0], t[1], t[2]);
                                    break;
                                case 4:
                                    this[S] = new n(t[0], t[1], t[2], t[3]);
                                    break;
                                default:
                                    throw new Error("Arg list too long.")
                            }
                        }, C(f[e], n);
                        var r, o = new n((function() {}));
                        for (r in o) "XMLHttpRequest" === e && "responseBlob" === r || function(n) {
                            "function" == typeof o[n] ? f[e].prototype[n] = function() {
                                return this[S][n].apply(this[S], arguments)
                            } : t(f[e].prototype, n, {
                                set: function(t) {
                                    "function" == typeof t ? (this[S][n] = c(t, e + "." + n), C(this[S][n], t)) : this[S][n] = t
                                },
                                get: function() {
                                    return this[S][n]
                                }
                            })
                        }(r);
                        for (r in n) "prototype" !== r && n.hasOwnProperty(r) && (f[e][r] = n[r])
                    }
                }

                function P(t, r, o) {
                    for (var i = t; i && !i.hasOwnProperty(r);) i = n(i);
                    !i && t[r] && (i = t);
                    var a = l(r),
                        s = null;
                    if (i && !(s = i[a]) && (s = i[a] = i[r], g(i && e(i, r)))) {
                        var c = o(s, a, r);
                        i[r] = function() {
                            return c(this, arguments)
                        }, C(i[r], s)
                    }
                    return s
                }

                function D(e, t, n) {
                    var r = null;

                    function o(e) {
                        var t = e.data;
                        return t.args[t.cbIdx] = function() {
                            e.invoke.apply(this, arguments)
                        }, r.apply(t.target, t.args), e
                    }
                    r = P(e, t, (function(e) {
                        return function(t, r) {
                            var i = n(t, r);
                            return i.cbIdx >= 0 && "function" == typeof r[i.cbIdx] ? u(i.name, r[i.cbIdx], i, o) : e.apply(t, r)
                        }
                    }))
                }

                function C(e, t) {
                    e[l("OriginalDelegate")] = t
                }
                var Z = !1,
                    I = !1;

                function j() {
                    try {
                        var e = p.navigator.userAgent;
                        if (-1 !== e.indexOf("MSIE ") || -1 !== e.indexOf("Trident/")) return !0
                    } catch (t) {}
                    return !1
                }

                function z() {
                    if (Z) return I;
                    Z = !0;
                    try {
                        var e = p.navigator.userAgent; - 1 === e.indexOf("MSIE ") && -1 === e.indexOf("Trident/") && -1 === e.indexOf("Edge/") || (I = !0)
                    } catch (t) {}
                    return I
                }
                Zone.__load_patch("toString", (function(e) {
                    var t = Function.prototype.toString,
                        n = l("OriginalDelegate"),
                        r = l("Promise"),
                        o = l("Error"),
                        i = function() {
                            if ("function" == typeof this) {
                                var i = this[n];
                                if (i) return "function" == typeof i ? t.call(i) : Object.prototype.toString.call(i);
                                if (this === Promise) {
                                    var a = e[r];
                                    if (a) return t.call(a)
                                }
                                if (this === Error) {
                                    var s = e[o];
                                    if (s) return t.call(s)
                                }
                            }
                            return t.call(this)
                        };
                    i[n] = t, Function.prototype.toString = i;
                    var a = Object.prototype.toString;
                    Object.prototype.toString = function() {
                        return this instanceof Promise ? "[object Promise]" : a.call(this)
                    }
                }));
                var M = !1;
                if ("undefined" != typeof window) try {
                    var R = Object.defineProperty({}, "passive", {
                        get: function() {
                            M = !0
                        }
                    });
                    window.addEventListener("test", R, R), window.removeEventListener("test", R, R)
                } catch (be) {
                    M = !1
                }
                var x = {
                        useG: !0
                    },
                    A = {},
                    N = {},
                    L = new RegExp("^" + s + "(\\w+)(true|false)$"),
                    F = l("propagationStopped");

                function H(e, t) {
                    var n = (t ? t(e) : e) + "false",
                        r = (t ? t(e) : e) + "true",
                        o = s + n,
                        i = s + r;
                    A[e] = {}, A[e].false = o, A[e].true = i
                }

                function W(e, t, r) {
                    var o = r && r.add || "addEventListener",
                        i = r && r.rm || "removeEventListener",
                        a = r && r.listeners || "eventListeners",
                        c = r && r.rmAll || "removeAllListeners",
                        u = l(o),
                        h = "." + o + ":",
                        p = function(e, t, n) {
                            if (!e.isRemoved) {
                                var r = e.callback;
                                "object" == typeof r && r.handleEvent && (e.callback = function(e) {
                                    return r.handleEvent(e)
                                }, e.originalDelegate = r), e.invoke(e, t, [n]);
                                var o = e.options;
                                o && "object" == typeof o && o.once && t[i].call(t, n.type, e.originalDelegate ? e.originalDelegate : e.callback, o)
                            }
                        },
                        f = function(t) {
                            if (t = t || e.event) {
                                var n = this || t.target || e,
                                    r = n[A[t.type].false];
                                if (r)
                                    if (1 === r.length) p(r[0], n, t);
                                    else
                                        for (var o = r.slice(), i = 0; i < o.length && (!t || !0 !== t[F]); i++) p(o[i], n, t)
                            }
                        },
                        d = function(t) {
                            if (t = t || e.event) {
                                var n = this || t.target || e,
                                    r = n[A[t.type].true];
                                if (r)
                                    if (1 === r.length) p(r[0], n, t);
                                    else
                                        for (var o = r.slice(), i = 0; i < o.length && (!t || !0 !== t[F]); i++) p(o[i], n, t)
                            }
                        };

                    function v(t, r) {
                        if (!t) return !1;
                        var p = !0;
                        r && void 0 !== r.useG && (p = r.useG);
                        var v = r && r.vh,
                            g = !0;
                        r && void 0 !== r.chkDup && (g = r.chkDup);
                        var m = !1;
                        r && void 0 !== r.rt && (m = r.rt);
                        for (var _ = t; _ && !_.hasOwnProperty(o);) _ = n(_);
                        if (!_ && t[o] && (_ = t), !_) return !1;
                        if (_[u]) return !1;
                        var b, T = r && r.eventNameToString,
                            k = {},
                            E = _[u] = _[o],
                            w = _[l(i)] = _[i],
                            S = _[l(a)] = _[a],
                            O = _[l(c)] = _[c];

                        function P(e, t) {
                            return !M && "object" == typeof e && e ? !!e.capture : M && t ? "boolean" == typeof e ? {
                                capture: e,
                                passive: !0
                            } : e ? "object" == typeof e && !1 !== e.passive ? Object.assign(Object.assign({}, e), {
                                passive: !0
                            }) : e : {
                                passive: !0
                            } : e
                        }
                        r && r.prepend && (b = _[l(r.prepend)] = _[r.prepend]);
                        var D = p ? function(e) {
                                if (!k.isExisting) return E.call(k.target, k.eventName, k.capture ? d : f, k.options)
                            } : function(e) {
                                return E.call(k.target, k.eventName, e.invoke, k.options)
                            },
                            Z = p ? function(e) {
                                if (!e.isRemoved) {
                                    var t = A[e.eventName],
                                        n = void 0;
                                    t && (n = t[e.capture ? "true" : "false"]);
                                    var r = n && e.target[n];
                                    if (r)
                                        for (var o = 0; o < r.length; o++)
                                            if (r[o] === e) {
                                                r.splice(o, 1), e.isRemoved = !0, 0 === r.length && (e.allRemoved = !0, e.target[n] = null);
                                                break
                                            }
                                }
                                if (e.allRemoved) return w.call(e.target, e.eventName, e.capture ? d : f, e.options)
                            } : function(e) {
                                return w.call(e.target, e.eventName, e.invoke, e.options)
                            },
                            I = r && r.diff ? r.diff : function(e, t) {
                                var n = typeof t;
                                return "function" === n && e.callback === t || "object" === n && e.originalDelegate === t
                            },
                            j = Zone[l("BLACK_LISTED_EVENTS")],
                            z = e[l("PASSIVE_EVENTS")],
                            R = function(t, n, o, i, a, s) {
                                return void 0 === a && (a = !1), void 0 === s && (s = !1),
                                    function() {
                                        var c = this || e,
                                            u = arguments[0];
                                        r && r.transferEventName && (u = r.transferEventName(u));
                                        var l = arguments[1];
                                        if (!l) return t.apply(this, arguments);
                                        if (y && "uncaughtException" === u) return t.apply(this, arguments);
                                        var h = !1;
                                        if ("function" != typeof l) {
                                            if (!l.handleEvent) return t.apply(this, arguments);
                                            h = !0
                                        }
                                        if (!v || v(t, l, c, arguments)) {
                                            var f = M && !!z && -1 !== z.indexOf(u),
                                                d = P(arguments[2], f);
                                            if (j)
                                                for (var m = 0; m < j.length; m++)
                                                    if (u === j[m]) return f ? t.call(c, u, l, d) : t.apply(this, arguments);
                                            var _ = !!d && ("boolean" == typeof d || d.capture),
                                                b = !(!d || "object" != typeof d) && d.once,
                                                E = Zone.current,
                                                w = A[u];
                                            w || (H(u, T), w = A[u]);
                                            var S, O = w[_ ? "true" : "false"],
                                                D = c[O],
                                                C = !1;
                                            if (D) {
                                                if (C = !0, g)
                                                    for (m = 0; m < D.length; m++)
                                                        if (I(D[m], l)) return
                                            } else D = c[O] = [];
                                            var Z = c.constructor.name,
                                                R = N[Z];
                                            R && (S = R[u]), S || (S = Z + n + (T ? T(u) : u)), k.options = d, b && (k.options.once = !1), k.target = c, k.capture = _, k.eventName = u, k.isExisting = C;
                                            var L = p ? x : void 0;
                                            L && (L.taskData = k);
                                            var F = E.scheduleEventTask(S, l, L, o, i);
                                            return k.target = null, L && (L.taskData = null), b && (d.once = !0), (M || "boolean" != typeof F.options) && (F.options = d), F.target = c, F.capture = _, F.eventName = u, h && (F.originalDelegate = l), s ? D.unshift(F) : D.push(F), a ? c : void 0
                                        }
                                    }
                            };
                        return _[o] = R(E, h, D, Z, m), b && (_.prependListener = R(b, ".prependListener:", (function(e) {
                            return b.call(k.target, k.eventName, e.invoke, k.options)
                        }), Z, m, !0)), _[i] = function() {
                            var t = this || e,
                                n = arguments[0];
                            r && r.transferEventName && (n = r.transferEventName(n));
                            var o = arguments[2],
                                i = !!o && ("boolean" == typeof o || o.capture),
                                a = arguments[1];
                            if (!a) return w.apply(this, arguments);
                            if (!v || v(w, a, t, arguments)) {
                                var c, u = A[n];
                                u && (c = u[i ? "true" : "false"]);
                                var l = c && t[c];
                                if (l)
                                    for (var h = 0; h < l.length; h++) {
                                        var p = l[h];
                                        if (I(p, a)) {
                                            if (l.splice(h, 1), p.isRemoved = !0, 0 === l.length && (p.allRemoved = !0, t[c] = null, "string" == typeof n)) {
                                                var f = s + "ON_PROPERTY" + n;
                                                t[f] = null
                                            }
                                            return p.zone.cancelTask(p), m ? t : void 0
                                        }
                                    }
                                return w.apply(this, arguments)
                            }
                        }, _[a] = function() {
                            var t = this || e,
                                n = arguments[0];
                            r && r.transferEventName && (n = r.transferEventName(n));
                            for (var o = [], i = q(t, T ? T(n) : n), a = 0; a < i.length; a++) {
                                var s = i[a],
                                    c = s.originalDelegate ? s.originalDelegate : s.callback;
                                o.push(c)
                            }
                            return o
                        }, _[c] = function() {
                            var t = this || e,
                                n = arguments[0];
                            if (n) {
                                r && r.transferEventName && (n = r.transferEventName(n));
                                var o = A[n];
                                if (o) {
                                    var a = o.false,
                                        s = o.true,
                                        u = t[a],
                                        l = t[s];
                                    if (u) {
                                        var h = u.slice();
                                        for (d = 0; d < h.length; d++) this[i].call(this, n, (p = h[d]).originalDelegate ? p.originalDelegate : p.callback, p.options)
                                    }
                                    if (l)
                                        for (h = l.slice(), d = 0; d < h.length; d++) {
                                            var p;
                                            this[i].call(this, n, (p = h[d]).originalDelegate ? p.originalDelegate : p.callback, p.options)
                                        }
                                }
                            } else {
                                for (var f = Object.keys(t), d = 0; d < f.length; d++) {
                                    var v = f[d],
                                        g = L.exec(v),
                                        y = g && g[1];
                                    y && "removeListener" !== y && this[c].call(this, y)
                                }
                                this[c].call(this, "removeListener")
                            }
                            if (m) return this
                        }, C(_[o], E), C(_[i], w), O && C(_[c], O), S && C(_[a], S), !0
                    }
                    for (var g = [], m = 0; m < t.length; m++) g[m] = v(t[m], r);
                    return g
                }

                function q(e, t) {
                    if (!t) {
                        var n = [];
                        for (var r in e) {
                            var o = L.exec(r),
                                i = o && o[1];
                            if (i && (!t || i === t)) {
                                var a = e[r];
                                if (a)
                                    for (var s = 0; s < a.length; s++) n.push(a[s])
                            }
                        }
                        return n
                    }
                    var c = A[t];
                    c || (H(t), c = A[t]);
                    var u = e[c.false],
                        l = e[c.true];
                    return u ? l ? u.concat(l) : u.slice() : l ? l.slice() : []
                }

                function X(e, t) {
                    var n = e.Event;
                    n && n.prototype && t.patchMethod(n.prototype, "stopImmediatePropagation", (function(e) {
                        return function(t, n) {
                            t[F] = !0, e && e.apply(t, n)
                        }
                    }))
                }

                function G(e, t, n, r, o) {
                    var i = Zone.__symbol__(r);
                    if (!t[i]) {
                        var a = t[i] = t[r];
                        t[r] = function(i, s, c) {
                            return s && s.prototype && o.forEach((function(t) {
                                var o = n + "." + r + "::" + t,
                                    i = s.prototype;
                                if (i.hasOwnProperty(t)) {
                                    var a = e.ObjectGetOwnPropertyDescriptor(i, t);
                                    a && a.value ? (a.value = e.wrapWithCurrentZone(a.value, o), e._redefineProperty(s.prototype, t, a)) : i[t] && (i[t] = e.wrapWithCurrentZone(i[t], o))
                                } else i[t] && (i[t] = e.wrapWithCurrentZone(i[t], o))
                            })), a.call(t, i, s, c)
                        }, e.attachOriginToPatched(t[r], a)
                    }
                }
                var B, Y, U, V, J, K = ["absolutedeviceorientation", "afterinput", "afterprint", "appinstalled", "beforeinstallprompt", "beforeprint", "beforeunload", "devicelight", "devicemotion", "deviceorientation", "deviceorientationabsolute", "deviceproximity", "hashchange", "languagechange", "message", "mozbeforepaint", "offline", "online", "paint", "pageshow", "pagehide", "popstate", "rejectionhandled", "storage", "unhandledrejection", "unload", "userproximity", "vrdisplayconnected", "vrdisplaydisconnected", "vrdisplaypresentchange"],
                    $ = ["encrypted", "waitingforkey", "msneedkey", "mozinterruptbegin", "mozinterruptend"],
                    Q = ["load"],
                    ee = ["blur", "error", "focus", "load", "resize", "scroll", "messageerror"],
                    te = ["bounce", "finish", "start"],
                    ne = ["loadstart", "progress", "abort", "error", "load", "progress", "timeout", "loadend", "readystatechange"],
                    re = ["upgradeneeded", "complete", "abort", "success", "error", "blocked", "versionchange", "close"],
                    oe = ["close", "error", "open", "message"],
                    ie = ["error", "message"],
                    ae = ["abort", "animationcancel", "animationend", "animationiteration", "auxclick", "beforeinput", "blur", "cancel", "canplay", "canplaythrough", "change", "compositionstart", "compositionupdate", "compositionend", "cuechange", "click", "close", "contextmenu", "curechange", "dblclick", "drag", "dragend", "dragenter", "dragexit", "dragleave", "dragover", "drop", "durationchange", "emptied", "ended", "error", "focus", "focusin", "focusout", "gotpointercapture", "input", "invalid", "keydown", "keypress", "keyup", "load", "loadstart", "loadeddata", "loadedmetadata", "lostpointercapture", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "orientationchange", "pause", "play", "playing", "pointercancel", "pointerdown", "pointerenter", "pointerleave", "pointerlockchange", "mozpointerlockchange", "webkitpointerlockerchange", "pointerlockerror", "mozpointerlockerror", "webkitpointerlockerror", "pointermove", "pointout", "pointerover", "pointerup", "progress", "ratechange", "reset", "resize", "scroll", "seeked", "seeking", "select", "selectionchange", "selectstart", "show", "sort", "stalled", "submit", "suspend", "timeupdate", "volumechange", "touchcancel", "touchmove", "touchstart", "touchend", "transitioncancel", "transitionend", "waiting", "wheel"].concat(["webglcontextrestored", "webglcontextlost", "webglcontextcreationerror"], ["autocomplete", "autocompleteerror"], ["toggle"], ["afterscriptexecute", "beforescriptexecute", "DOMContentLoaded", "freeze", "fullscreenchange", "mozfullscreenchange", "webkitfullscreenchange", "msfullscreenchange", "fullscreenerror", "mozfullscreenerror", "webkitfullscreenerror", "msfullscreenerror", "readystatechange", "visibilitychange", "resume"], K, ["beforecopy", "beforecut", "beforepaste", "copy", "cut", "paste", "dragstart", "loadend", "animationstart", "search", "transitionrun", "transitionstart", "webkitanimationend", "webkitanimationiteration", "webkitanimationstart", "webkittransitionend"], ["activate", "afterupdate", "ariarequest", "beforeactivate", "beforedeactivate", "beforeeditfocus", "beforeupdate", "cellchange", "controlselect", "dataavailable", "datasetchanged", "datasetcomplete", "errorupdate", "filterchange", "layoutcomplete", "losecapture", "move", "moveend", "movestart", "propertychange", "resizeend", "resizestart", "rowenter", "rowexit", "rowsdelete", "rowsinserted", "command", "compassneedscalibration", "deactivate", "help", "mscontentzoom", "msmanipulationstatechanged", "msgesturechange", "msgesturedoubletap", "msgestureend", "msgesturehold", "msgesturestart", "msgesturetap", "msgotpointercapture", "msinertiastart", "mslostpointercapture", "mspointercancel", "mspointerdown", "mspointerenter", "mspointerhover", "mspointerleave", "mspointermove", "mspointerout", "mspointerover", "mspointerup", "pointerout", "mssitemodejumplistitemremoved", "msthumbnailclick", "stop", "storagecommit"]);

                function se(e, t, n) {
                    if (!n || 0 === n.length) return t;
                    var r = n.filter((function(t) {
                        return t.target === e
                    }));
                    if (!r || 0 === r.length) return t;
                    var o = r[0].ignoreProperties;
                    return t.filter((function(e) {
                        return -1 === o.indexOf(e)
                    }))
                }

                function ce(e, t, n, r) {
                    e && w(e, se(e, t, n), r)
                }

                function ue(e, t) {
                    if ((!y || b) && !Zone[e.symbol("patchEvents")]) {
                        var r = "undefined" != typeof WebSocket,
                            o = t.__Zone_ignore_on_properties;
                        if (_) {
                            var i = window,
                                a = j ? [{
                                    target: i,
                                    ignoreProperties: ["error"]
                                }] : [];
                            ce(i, ae.concat(["messageerror"]), o ? o.concat(a) : o, n(i)), ce(Document.prototype, ae, o), void 0 !== i.SVGElement && ce(i.SVGElement.prototype, ae, o), ce(Element.prototype, ae, o), ce(HTMLElement.prototype, ae, o), ce(HTMLMediaElement.prototype, $, o), ce(HTMLFrameSetElement.prototype, K.concat(ee), o), ce(HTMLBodyElement.prototype, K.concat(ee), o), ce(HTMLFrameElement.prototype, Q, o), ce(HTMLIFrameElement.prototype, Q, o);
                            var s = i.HTMLMarqueeElement;
                            s && ce(s.prototype, te, o);
                            var c = i.Worker;
                            c && ce(c.prototype, ie, o)
                        }
                        var u = t.XMLHttpRequest;
                        u && ce(u.prototype, ne, o);
                        var l = t.XMLHttpRequestEventTarget;
                        l && ce(l && l.prototype, ne, o), "undefined" != typeof IDBIndex && (ce(IDBIndex.prototype, re, o), ce(IDBRequest.prototype, re, o), ce(IDBOpenDBRequest.prototype, re, o), ce(IDBDatabase.prototype, re, o), ce(IDBTransaction.prototype, re, o), ce(IDBCursor.prototype, re, o)), r && ce(WebSocket.prototype, oe, o)
                    }
                }

                function le() {
                    B = Zone.__symbol__, Y = Object[B("defineProperty")] = Object.defineProperty, U = Object[B("getOwnPropertyDescriptor")] = Object.getOwnPropertyDescriptor, V = Object.create, J = B("unconfigurables"), Object.defineProperty = function(e, t, n) {
                        if (pe(e, t)) throw new TypeError("Cannot assign to read only property '" + t + "' of " + e);
                        var r = n.configurable;
                        return "prototype" !== t && (n = fe(e, t, n)), de(e, t, n, r)
                    }, Object.defineProperties = function(e, t) {
                        return Object.keys(t).forEach((function(n) {
                            Object.defineProperty(e, n, t[n])
                        })), e
                    }, Object.create = function(e, t) {
                        return "object" != typeof t || Object.isFrozen(t) || Object.keys(t).forEach((function(n) {
                            t[n] = fe(e, n, t[n])
                        })), V(e, t)
                    }, Object.getOwnPropertyDescriptor = function(e, t) {
                        var n = U(e, t);
                        return n && pe(e, t) && (n.configurable = !1), n
                    }
                }

                function he(e, t, n) {
                    var r = n.configurable;
                    return de(e, t, n = fe(e, t, n), r)
                }

                function pe(e, t) {
                    return e && e[J] && e[J][t]
                }

                function fe(e, t, n) {
                    return Object.isFrozen(n) || (n.configurable = !0), n.configurable || (e[J] || Object.isFrozen(e) || Y(e, J, {
                        writable: !0,
                        value: {}
                    }), e[J] && (e[J][t] = !0)), n
                }

                function de(e, t, n, r) {
                    try {
                        return Y(e, t, n)
                    } catch (i) {
                        if (!n.configurable) throw i;
                        void 0 === r ? delete n.configurable : n.configurable = r;
                        try {
                            return Y(e, t, n)
                        } catch (i) {
                            var o = null;
                            try {
                                o = JSON.stringify(n)
                            } catch (i) {
                                o = n.toString()
                            }
                            console.log("Attempting to configure '" + t + "' with descriptor '" + o + "' on object '" + e + "' and got error, giving up: " + i)
                        }
                    }
                }

                function ve(e, t) {
                    var n = t.getGlobalObjects(),
                        r = n.eventNames,
                        o = n.globalSources,
                        i = n.zoneSymbolEventNames,
                        a = n.TRUE_STR,
                        s = n.FALSE_STR,
                        c = n.ZONE_SYMBOL_PREFIX,
                        u = "ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket".split(","),
                        l = [],
                        h = e.wtf,
                        p = "Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video".split(",");
                    h ? l = p.map((function(e) {
                        return "HTML" + e + "Element"
                    })).concat(u) : e.EventTarget ? l.push("EventTarget") : l = u;
                    for (var f = e.__Zone_disable_IE_check || !1, d = e.__Zone_enable_cross_context_check || !1, v = t.isIEOrEdge(), g = "function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }", m = {
                            MSPointerCancel: "pointercancel",
                            MSPointerDown: "pointerdown",
                            MSPointerEnter: "pointerenter",
                            MSPointerHover: "pointerhover",
                            MSPointerLeave: "pointerleave",
                            MSPointerMove: "pointermove",
                            MSPointerOut: "pointerout",
                            MSPointerOver: "pointerover",
                            MSPointerUp: "pointerup"
                        }, y = 0; y < r.length; y++) {
                        var _ = c + ((w = r[y]) + s),
                            b = c + (w + a);
                        i[w] = {}, i[w][s] = _, i[w][a] = b
                    }
                    for (y = 0; y < p.length; y++)
                        for (var T = p[y], k = o[T] = {}, E = 0; E < r.length; E++) {
                            var w;
                            k[w = r[E]] = T + ".addEventListener:" + w
                        }
                    var S = [];
                    for (y = 0; y < l.length; y++) {
                        var O = e[l[y]];
                        S.push(O && O.prototype)
                    }
                    return t.patchEventTarget(e, S, {
                        vh: function(e, t, n, r) {
                            if (!f && v) {
                                if (d) try {
                                    var o;
                                    if ("[object FunctionWrapper]" === (o = t.toString()) || o == g) return e.apply(n, r), !1
                                } catch (i) {
                                    return e.apply(n, r), !1
                                } else if ("[object FunctionWrapper]" === (o = t.toString()) || o == g) return e.apply(n, r), !1
                            } else if (d) try {
                                t.toString()
                            } catch (i) {
                                return e.apply(n, r), !1
                            }
                            return !0
                        },
                        transferEventName: function(e) {
                            return m[e] || e
                        }
                    }), Zone[t.symbol("patchEventTarget")] = !!e.EventTarget, !0
                }

                function ge(e, t) {
                    var n = e.getGlobalObjects();
                    if ((!n.isNode || n.isMix) && ! function(e, t) {
                            var n = e.getGlobalObjects();
                            if ((n.isBrowser || n.isMix) && !e.ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, "onclick") && "undefined" != typeof Element) {
                                var r = e.ObjectGetOwnPropertyDescriptor(Element.prototype, "onclick");
                                if (r && !r.configurable) return !1;
                                if (r) {
                                    e.ObjectDefineProperty(Element.prototype, "onclick", {
                                        enumerable: !0,
                                        configurable: !0,
                                        get: function() {
                                            return !0
                                        }
                                    });
                                    var o = !!document.createElement("div").onclick;
                                    return e.ObjectDefineProperty(Element.prototype, "onclick", r), o
                                }
                            }
                            var i = t.XMLHttpRequest;
                            if (!i) return !1;
                            var a = i.prototype,
                                s = e.ObjectGetOwnPropertyDescriptor(a, "onreadystatechange");
                            if (s) return e.ObjectDefineProperty(a, "onreadystatechange", {
                                enumerable: !0,
                                configurable: !0,
                                get: function() {
                                    return !0
                                }
                            }), o = !!(u = new i).onreadystatechange, e.ObjectDefineProperty(a, "onreadystatechange", s || {}), o;
                            var c = e.symbol("fake");
                            e.ObjectDefineProperty(a, "onreadystatechange", {
                                enumerable: !0,
                                configurable: !0,
                                get: function() {
                                    return this[c]
                                },
                                set: function(e) {
                                    this[c] = e
                                }
                            });
                            var u = new i,
                                l = function() {};
                            return u.onreadystatechange = l, o = u[c] === l, u.onreadystatechange = null, o
                        }(e, t)) {
                        var r = "undefined" != typeof WebSocket;
                        ! function(e) {
                            for (var t = e.getGlobalObjects().eventNames, n = e.symbol("unbound"), r = function(r) {
                                    var o = t[r],
                                        i = "on" + o;
                                    self.addEventListener(o, (function(t) {
                                        var r, o, a = t.target;
                                        for (o = a ? a.constructor.name + "." + i : "unknown." + i; a;) a[i] && !a[i][n] && ((r = e.wrapWithCurrentZone(a[i], o))[n] = a[i], a[i] = r), a = a.parentElement
                                    }), !0)
                                }, o = 0; o < t.length; o++) r(o)
                        }(e), e.patchClass("XMLHttpRequest"), r && function(e, t) {
                            var n = e.getGlobalObjects(),
                                r = n.ADD_EVENT_LISTENER_STR,
                                o = n.REMOVE_EVENT_LISTENER_STR,
                                i = t.WebSocket;
                            t.EventTarget || e.patchEventTarget(t, [i.prototype]), t.WebSocket = function(t, n) {
                                var a, s, c = arguments.length > 1 ? new i(t, n) : new i(t),
                                    u = e.ObjectGetOwnPropertyDescriptor(c, "onmessage");
                                return u && !1 === u.configurable ? (a = e.ObjectCreate(c), s = c, [r, o, "send", "close"].forEach((function(t) {
                                    a[t] = function() {
                                        var n = e.ArraySlice.call(arguments);
                                        if (t === r || t === o) {
                                            var i = n.length > 0 ? n[0] : void 0;
                                            if (i) {
                                                var s = Zone.__symbol__("ON_PROPERTY" + i);
                                                c[s] = a[s]
                                            }
                                        }
                                        return c[t].apply(c, n)
                                    }
                                }))) : a = c, e.patchOnProperties(a, ["close", "error", "message", "open"], s), a
                            };
                            var a = t.WebSocket;
                            for (var s in i) a[s] = i[s]
                        }(e, t), Zone[e.symbol("patchEvents")] = !0
                    }
                }
                Zone.__load_patch("util", (function(n, i, a) {
                        a.patchOnProperties = w, a.patchMethod = P, a.bindArguments = v, a.patchMacroTask = D;
                        var u = i.__symbol__("BLACK_LISTED_EVENTS"),
                            l = i.__symbol__("UNPATCHED_EVENTS");
                        n[l] && (n[u] = n[l]), n[u] && (i[u] = i[l] = n[u]), a.patchEventPrototype = X, a.patchEventTarget = W, a.isIEOrEdge = z, a.ObjectDefineProperty = t, a.ObjectGetOwnPropertyDescriptor = e, a.ObjectCreate = r, a.ArraySlice = o, a.patchClass = O, a.wrapWithCurrentZone = c, a.filterProperties = se, a.attachOriginToPatched = C, a._redefineProperty = Object.defineProperty, a.patchCallbacks = G, a.getGlobalObjects = function() {
                            return {
                                globalSources: N,
                                zoneSymbolEventNames: A,
                                eventNames: ae,
                                isBrowser: _,
                                isMix: b,
                                isNode: y,
                                TRUE_STR: "true",
                                FALSE_STR: "false",
                                ZONE_SYMBOL_PREFIX: s,
                                ADD_EVENT_LISTENER_STR: "addEventListener",
                                REMOVE_EVENT_LISTENER_STR: "removeEventListener"
                            }
                        }
                    })),
                    function(e) {
                        e[(e.__Zone_symbol_prefix || "__zone_symbol__") + "legacyPatch"] = function() {
                            var t = e.Zone;
                            t.__load_patch("defineProperty", (function(e, t, n) {
                                n._redefineProperty = he, le()
                            })), t.__load_patch("registerElement", (function(e, t, n) {
                                ! function(e, t) {
                                    var n = t.getGlobalObjects();
                                    (n.isBrowser || n.isMix) && "registerElement" in e.document && t.patchCallbacks(t, document, "Document", "registerElement", ["createdCallback", "attachedCallback", "detachedCallback", "attributeChangedCallback"])
                                }(e, n)
                            })), t.__load_patch("EventTargetLegacy", (function(e, t, n) {
                                ve(e, n), ge(n, e)
                            }))
                        }
                    }("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {});
                var me = l("zoneTask");

                function ye(e, t, n, r) {
                    var o = null,
                        i = null;
                    n += r;
                    var a = {};

                    function s(t) {
                        var n = t.data;
                        return n.args[0] = function() {
                            try {
                                t.invoke.apply(this, arguments)
                            } finally {
                                t.data && t.data.isPeriodic || ("number" == typeof n.handleId ? delete a[n.handleId] : n.handleId && (n.handleId[me] = null))
                            }
                        }, n.handleId = o.apply(e, n.args), t
                    }

                    function c(e) {
                        return i(e.data.handleId)
                    }
                    o = P(e, t += r, (function(n) {
                        return function(o, i) {
                            if ("function" == typeof i[0]) {
                                var l = u(t, i[0], {
                                    isPeriodic: "Interval" === r,
                                    delay: "Timeout" === r || "Interval" === r ? i[1] || 0 : void 0,
                                    args: i
                                }, s, c);
                                if (!l) return l;
                                var h = l.data.handleId;
                                return "number" == typeof h ? a[h] = l : h && (h[me] = l), h && h.ref && h.unref && "function" == typeof h.ref && "function" == typeof h.unref && (l.ref = h.ref.bind(h), l.unref = h.unref.bind(h)), "number" == typeof h || h ? h : l
                            }
                            return n.apply(e, i)
                        }
                    })), i = P(e, n, (function(t) {
                        return function(n, r) {
                            var o, i = r[0];
                            "number" == typeof i ? o = a[i] : (o = i && i[me]) || (o = i), o && "string" == typeof o.type ? "notScheduled" !== o.state && (o.cancelFn && o.data.isPeriodic || 0 === o.runCount) && ("number" == typeof i ? delete a[i] : i && (i[me] = null), o.zone.cancelTask(o)) : t.apply(e, r)
                        }
                    }))
                }

                function _e(e, t) {
                    if (!Zone[t.symbol("patchEventTarget")]) {
                        for (var n = t.getGlobalObjects(), r = n.eventNames, o = n.zoneSymbolEventNames, i = n.TRUE_STR, a = n.FALSE_STR, s = n.ZONE_SYMBOL_PREFIX, c = 0; c < r.length; c++) {
                            var u = r[c],
                                l = s + (u + a),
                                h = s + (u + i);
                            o[u] = {}, o[u][a] = l, o[u][i] = h
                        }
                        var p = e.EventTarget;
                        if (p && p.prototype) return t.patchEventTarget(e, [p && p.prototype]), !0
                    }
                }
                Zone.__load_patch("legacy", (function(e) {
                    var t = e[Zone.__symbol__("legacyPatch")];
                    t && t()
                })), Zone.__load_patch("timers", (function(e) {
                    ye(e, "set", "clear", "Timeout"), ye(e, "set", "clear", "Interval"), ye(e, "set", "clear", "Immediate")
                })), Zone.__load_patch("requestAnimationFrame", (function(e) {
                    ye(e, "request", "cancel", "AnimationFrame"), ye(e, "mozRequest", "mozCancel", "AnimationFrame"), ye(e, "webkitRequest", "webkitCancel", "AnimationFrame")
                })), Zone.__load_patch("blocking", (function(e, t) {
                    for (var n = ["alert", "prompt", "confirm"], r = 0; r < n.length; r++) P(e, n[r], (function(n, r, o) {
                        return function(r, i) {
                            return t.current.run(n, e, i, o)
                        }
                    }))
                })), Zone.__load_patch("EventTarget", (function(e, t, n) {
                    ! function(e, t) {
                        t.patchEventPrototype(e, t)
                    }(e, n), _e(e, n);
                    var r = e.XMLHttpRequestEventTarget;
                    r && r.prototype && n.patchEventTarget(e, [r.prototype]), O("MutationObserver"), O("WebKitMutationObserver"), O("IntersectionObserver"), O("FileReader")
                })), Zone.__load_patch("on_property", (function(e, t, n) {
                    ue(n, e)
                })), Zone.__load_patch("customElements", (function(e, t, n) {
                    ! function(e, t) {
                        var n = t.getGlobalObjects();
                        (n.isBrowser || n.isMix) && e.customElements && "customElements" in e && t.patchCallbacks(t, e.customElements, "customElements", "define", ["connectedCallback", "disconnectedCallback", "adoptedCallback", "attributeChangedCallback"])
                    }(e, n)
                })), Zone.__load_patch("XHR", (function(e, t) {
                    ! function(e) {
                        var p = e.XMLHttpRequest;
                        if (p) {
                            var f = p.prototype,
                                d = f[i],
                                v = f[a];
                            if (!d) {
                                var g = e.XMLHttpRequestEventTarget;
                                if (g) {
                                    var m = g.prototype;
                                    d = m[i], v = m[a]
                                }
                            }
                            var y = P(f, "open", (function() {
                                    return function(e, t) {
                                        return e[r] = 0 == t[2], e[c] = t[1], y.apply(e, t)
                                    }
                                })),
                                _ = l("fetchTaskAborting"),
                                b = l("fetchTaskScheduling"),
                                T = P(f, "send", (function() {
                                    return function(e, n) {
                                        if (!0 === t.current[b]) return T.apply(e, n);
                                        if (e[r]) return T.apply(e, n);
                                        var o = {
                                                target: e,
                                                url: e[c],
                                                isPeriodic: !1,
                                                args: n,
                                                aborted: !1
                                            },
                                            i = u("XMLHttpRequest.send", w, o, E, S);
                                        e && !0 === e[h] && !o.aborted && "scheduled" === i.state && i.invoke()
                                    }
                                })),
                                k = P(f, "abort", (function() {
                                    return function(e, r) {
                                        var o = e[n];
                                        if (o && "string" == typeof o.type) {
                                            if (null == o.cancelFn || o.data && o.data.aborted) return;
                                            o.zone.cancelTask(o)
                                        } else if (!0 === t.current[_]) return k.apply(e, r)
                                    }
                                }))
                        }

                        function E(e) {
                            var r = e.data,
                                c = r.target;
                            c[s] = !1, c[h] = !1;
                            var u = c[o];
                            d || (d = c[i], v = c[a]), u && v.call(c, "readystatechange", u);
                            var l = c[o] = function() {
                                if (c.readyState === c.DONE)
                                    if (!r.aborted && c[s] && "scheduled" === e.state) {
                                        var n = c[t.__symbol__("loadfalse")];
                                        if (n && n.length > 0) {
                                            var o = e.invoke;
                                            e.invoke = function() {
                                                for (var n = c[t.__symbol__("loadfalse")], i = 0; i < n.length; i++) n[i] === e && n.splice(i, 1);
                                                r.aborted || "scheduled" !== e.state || o.call(e)
                                            }, n.push(e)
                                        } else e.invoke()
                                    } else r.aborted || !1 !== c[s] || (c[h] = !0)
                            };
                            return d.call(c, "readystatechange", l), c[n] || (c[n] = e), T.apply(c, r.args), c[s] = !0, e
                        }

                        function w() {}

                        function S(e) {
                            var t = e.data;
                            return t.aborted = !0, k.apply(t.target, t.args)
                        }
                    }(e);
                    var n = l("xhrTask"),
                        r = l("xhrSync"),
                        o = l("xhrListener"),
                        s = l("xhrScheduled"),
                        c = l("xhrURL"),
                        h = l("xhrErrorBeforeScheduled")
                })), Zone.__load_patch("geolocation", (function(t) {
                    t.navigator && t.navigator.geolocation && function(t, n) {
                        for (var r = t.constructor.name, o = function(o) {
                                var i = n[o],
                                    a = t[i];
                                if (a) {
                                    if (!g(e(t, i))) return "continue";
                                    t[i] = function(e) {
                                        var t = function() {
                                            return e.apply(this, v(arguments, r + "." + i))
                                        };
                                        return C(t, e), t
                                    }(a)
                                }
                            }, i = 0; i < n.length; i++) o(i)
                    }(t.navigator.geolocation, ["getCurrentPosition", "watchPosition"])
                })), Zone.__load_patch("PromiseRejectionEvent", (function(e, t) {
                    function n(t) {
                        return function(n) {
                            q(e, t).forEach((function(r) {
                                var o = e.PromiseRejectionEvent;
                                if (o) {
                                    var i = new o(t, {
                                        promise: n.promise,
                                        reason: n.rejection
                                    });
                                    r.invoke(i)
                                }
                            }))
                        }
                    }
                    e.PromiseRejectionEvent && (t[l("unhandledPromiseRejectionHandler")] = n("unhandledrejection"), t[l("rejectionHandledHandler")] = n("rejectionhandled"))
                }))
            }) ? r.call(t, n, t, e) : r) || (e.exports = o)
        },
        2: function(e, t, n) {
            e.exports = n("hN/g")
        },
        HMEy: function(e, t) {
            var n = "undefined" != typeof globalThis && globalThis,
                r = "undefined" != typeof window && window,
                o = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
                i = "undefined" != typeof global && global,
                a = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    if (a.translate) {
                        var r = a.translate(e, t);
                        e = r[0], t = r[1]
                    }
                    for (var o = s(e[0], e.raw[0]), i = 1; i < e.length; i++) o += t[i - 1] + s(e[i], e.raw[i]);
                    return o
                };

            function s(e, t) {
                return ":" === t.charAt(0) ? e.substring(function(e, t) {
                    for (var n = 1, r = 1; n < e.length; n++, r++)
                        if ("\\" === t[r]) r++;
                        else if (":" === e[n]) return n;
                    throw new Error('Unterminated $localize metadata block in "' + t + '".')
                }(e, t) + 1) : e
            }(n || i || r || o).$localize = a
        },
        "hN/g": function(e, t, n) {
            "use strict";
            n.r(t), n("0TWp"), n("HMEy"), n("yLV6"), "scrollBehavior" in document.documentElement.style || n.e(14).then(n.t.bind(null, "YxO1", 7))
        },
        yLV6: function(e, t, n) {
            var r;
            ! function(o, i, a, s) {
                "use strict";
                var c, u = ["", "webkit", "Moz", "MS", "ms", "o"],
                    l = i.createElement("div"),
                    h = Math.round,
                    p = Math.abs,
                    f = Date.now;

                function d(e, t, n) {
                    return setTimeout(T(e, n), t)
                }

                function v(e, t, n) {
                    return !!Array.isArray(e) && (g(e, n[t], n), !0)
                }

                function g(e, t, n) {
                    var r;
                    if (e)
                        if (e.forEach) e.forEach(t, n);
                        else if (void 0 !== e.length)
                        for (r = 0; r < e.length;) t.call(n, e[r], r, e), r++;
                    else
                        for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e)
                }

                function m(e, t, n) {
                    var r = "DEPRECATED METHOD: " + t + "\n" + n + " AT \n";
                    return function() {
                        var t = new Error("get-stack-trace"),
                            n = t && t.stack ? t.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                            i = o.console && (o.console.warn || o.console.log);
                        return i && i.call(o.console, r, n), e.apply(this, arguments)
                    }
                }
                c = "function" != typeof Object.assign ? function(e) {
                    if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                    for (var t = Object(e), n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        if (null != r)
                            for (var o in r) r.hasOwnProperty(o) && (t[o] = r[o])
                    }
                    return t
                } : Object.assign;
                var y = m((function(e, t, n) {
                        for (var r = Object.keys(t), o = 0; o < r.length;)(!n || n && void 0 === e[r[o]]) && (e[r[o]] = t[r[o]]), o++;
                        return e
                    }), "extend", "Use `assign`."),
                    _ = m((function(e, t) {
                        return y(e, t, !0)
                    }), "merge", "Use `assign`.");

                function b(e, t, n) {
                    var r, o = t.prototype;
                    (r = e.prototype = Object.create(o)).constructor = e, r._super = o, n && c(r, n)
                }

                function T(e, t) {
                    return function() {
                        return e.apply(t, arguments)
                    }
                }

                function k(e, t) {
                    return "function" == typeof e ? e.apply(t && t[0] || void 0, t) : e
                }

                function E(e, t) {
                    return void 0 === e ? t : e
                }

                function w(e, t, n) {
                    g(D(t), (function(t) {
                        e.addEventListener(t, n, !1)
                    }))
                }

                function S(e, t, n) {
                    g(D(t), (function(t) {
                        e.removeEventListener(t, n, !1)
                    }))
                }

                function O(e, t) {
                    for (; e;) {
                        if (e == t) return !0;
                        e = e.parentNode
                    }
                    return !1
                }

                function P(e, t) {
                    return e.indexOf(t) > -1
                }

                function D(e) {
                    return e.trim().split(/\s+/g)
                }

                function C(e, t, n) {
                    if (e.indexOf && !n) return e.indexOf(t);
                    for (var r = 0; r < e.length;) {
                        if (n && e[r][n] == t || !n && e[r] === t) return r;
                        r++
                    }
                    return -1
                }

                function Z(e) {
                    return Array.prototype.slice.call(e, 0)
                }

                function I(e, t, n) {
                    for (var r = [], o = [], i = 0; i < e.length;) {
                        var a = t ? e[i][t] : e[i];
                        C(o, a) < 0 && r.push(e[i]), o[i] = a, i++
                    }
                    return n && (r = t ? r.sort((function(e, n) {
                        return e[t] > n[t]
                    })) : r.sort()), r
                }

                function j(e, t) {
                    for (var n, r, o = t[0].toUpperCase() + t.slice(1), i = 0; i < u.length;) {
                        if ((r = (n = u[i]) ? n + o : t) in e) return r;
                        i++
                    }
                }
                var z = 1;

                function M(e) {
                    var t = e.ownerDocument || e;
                    return t.defaultView || t.parentWindow || o
                }
                var R = "ontouchstart" in o,
                    x = void 0 !== j(o, "PointerEvent"),
                    A = R && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
                    N = ["x", "y"],
                    L = ["clientX", "clientY"];

                function F(e, t) {
                    var n = this;
                    this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(t) {
                        k(e.options.enable, [e]) && n.handler(t)
                    }, this.init()
                }

                function H(e, t, n) {
                    var r = n.pointers.length,
                        o = n.changedPointers.length,
                        i = 1 & t && r - o == 0,
                        a = 12 & t && r - o == 0;
                    n.isFirst = !!i, n.isFinal = !!a, i && (e.session = {}), n.eventType = t,
                        function(e, t) {
                            var n = e.session,
                                r = t.pointers,
                                o = r.length;
                            n.firstInput || (n.firstInput = W(t)), o > 1 && !n.firstMultiple ? n.firstMultiple = W(t) : 1 === o && (n.firstMultiple = !1);
                            var i = n.firstInput,
                                a = n.firstMultiple,
                                s = a ? a.center : i.center,
                                c = t.center = q(r);
                            t.timeStamp = f(), t.deltaTime = t.timeStamp - i.timeStamp, t.angle = Y(s, c), t.distance = B(s, c),
                                function(e, t) {
                                    var n = t.center,
                                        r = e.offsetDelta || {},
                                        o = e.prevDelta || {},
                                        i = e.prevInput || {};
                                    1 !== t.eventType && 4 !== i.eventType || (o = e.prevDelta = {
                                        x: i.deltaX || 0,
                                        y: i.deltaY || 0
                                    }, r = e.offsetDelta = {
                                        x: n.x,
                                        y: n.y
                                    }), t.deltaX = o.x + (n.x - r.x), t.deltaY = o.y + (n.y - r.y)
                                }(n, t), t.offsetDirection = G(t.deltaX, t.deltaY);
                            var u, l, h = X(t.deltaTime, t.deltaX, t.deltaY);
                            t.overallVelocityX = h.x, t.overallVelocityY = h.y, t.overallVelocity = p(h.x) > p(h.y) ? h.x : h.y, t.scale = a ? (u = a.pointers, B((l = r)[0], l[1], L) / B(u[0], u[1], L)) : 1, t.rotation = a ? function(e, t) {
                                    return Y(t[1], t[0], L) + Y(e[1], e[0], L)
                                }(a.pointers, r) : 0, t.maxPointers = n.prevInput ? t.pointers.length > n.prevInput.maxPointers ? t.pointers.length : n.prevInput.maxPointers : t.pointers.length,
                                function(e, t) {
                                    var n, r, o, i, a = e.lastInterval || t,
                                        s = t.timeStamp - a.timeStamp;
                                    if (8 != t.eventType && (s > 25 || void 0 === a.velocity)) {
                                        var c = t.deltaX - a.deltaX,
                                            u = t.deltaY - a.deltaY,
                                            l = X(s, c, u);
                                        r = l.x, o = l.y, n = p(l.x) > p(l.y) ? l.x : l.y, i = G(c, u), e.lastInterval = t
                                    } else n = a.velocity, r = a.velocityX, o = a.velocityY, i = a.direction;
                                    t.velocity = n, t.velocityX = r, t.velocityY = o, t.direction = i
                                }(n, t);
                            var d = e.element;
                            O(t.srcEvent.target, d) && (d = t.srcEvent.target), t.target = d
                        }(e, n), e.emit("hammer.input", n), e.recognize(n), e.session.prevInput = n
                }

                function W(e) {
                    for (var t = [], n = 0; n < e.pointers.length;) t[n] = {
                        clientX: h(e.pointers[n].clientX),
                        clientY: h(e.pointers[n].clientY)
                    }, n++;
                    return {
                        timeStamp: f(),
                        pointers: t,
                        center: q(t),
                        deltaX: e.deltaX,
                        deltaY: e.deltaY
                    }
                }

                function q(e) {
                    var t = e.length;
                    if (1 === t) return {
                        x: h(e[0].clientX),
                        y: h(e[0].clientY)
                    };
                    for (var n = 0, r = 0, o = 0; o < t;) n += e[o].clientX, r += e[o].clientY, o++;
                    return {
                        x: h(n / t),
                        y: h(r / t)
                    }
                }

                function X(e, t, n) {
                    return {
                        x: t / e || 0,
                        y: n / e || 0
                    }
                }

                function G(e, t) {
                    return e === t ? 1 : p(e) >= p(t) ? e < 0 ? 2 : 4 : t < 0 ? 8 : 16
                }

                function B(e, t, n) {
                    n || (n = N);
                    var r = t[n[0]] - e[n[0]],
                        o = t[n[1]] - e[n[1]];
                    return Math.sqrt(r * r + o * o)
                }

                function Y(e, t, n) {
                    return n || (n = N), 180 * Math.atan2(t[n[1]] - e[n[1]], t[n[0]] - e[n[0]]) / Math.PI
                }
                F.prototype = {
                    handler: function() {},
                    init: function() {
                        this.evEl && w(this.element, this.evEl, this.domHandler), this.evTarget && w(this.target, this.evTarget, this.domHandler), this.evWin && w(M(this.element), this.evWin, this.domHandler)
                    },
                    destroy: function() {
                        this.evEl && S(this.element, this.evEl, this.domHandler), this.evTarget && S(this.target, this.evTarget, this.domHandler), this.evWin && S(M(this.element), this.evWin, this.domHandler)
                    }
                };
                var U = {
                    mousedown: 1,
                    mousemove: 2,
                    mouseup: 4
                };

                function V() {
                    this.evEl = "mousedown", this.evWin = "mousemove mouseup", this.pressed = !1, F.apply(this, arguments)
                }
                b(V, F, {
                    handler: function(e) {
                        var t = U[e.type];
                        1 & t && 0 === e.button && (this.pressed = !0), 2 & t && 1 !== e.which && (t = 4), this.pressed && (4 & t && (this.pressed = !1), this.callback(this.manager, t, {
                            pointers: [e],
                            changedPointers: [e],
                            pointerType: "mouse",
                            srcEvent: e
                        }))
                    }
                });
                var J = {
                        pointerdown: 1,
                        pointermove: 2,
                        pointerup: 4,
                        pointercancel: 8,
                        pointerout: 8
                    },
                    K = {
                        2: "touch",
                        3: "pen",
                        4: "mouse",
                        5: "kinect"
                    },
                    $ = "pointerdown",
                    Q = "pointermove pointerup pointercancel";

                function ee() {
                    this.evEl = $, this.evWin = Q, F.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
                }
                o.MSPointerEvent && !o.PointerEvent && ($ = "MSPointerDown", Q = "MSPointerMove MSPointerUp MSPointerCancel"), b(ee, F, {
                    handler: function(e) {
                        var t = this.store,
                            n = !1,
                            r = e.type.toLowerCase().replace("ms", ""),
                            o = J[r],
                            i = K[e.pointerType] || e.pointerType,
                            a = "touch" == i,
                            s = C(t, e.pointerId, "pointerId");
                        1 & o && (0 === e.button || a) ? s < 0 && (t.push(e), s = t.length - 1) : 12 & o && (n = !0), s < 0 || (t[s] = e, this.callback(this.manager, o, {
                            pointers: t,
                            changedPointers: [e],
                            pointerType: i,
                            srcEvent: e
                        }), n && t.splice(s, 1))
                    }
                });
                var te = {
                    touchstart: 1,
                    touchmove: 2,
                    touchend: 4,
                    touchcancel: 8
                };

                function ne() {
                    this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = !1, F.apply(this, arguments)
                }

                function re(e, t) {
                    var n = Z(e.touches),
                        r = Z(e.changedTouches);
                    return 12 & t && (n = I(n.concat(r), "identifier", !0)), [n, r]
                }
                b(ne, F, {
                    handler: function(e) {
                        var t = te[e.type];
                        if (1 === t && (this.started = !0), this.started) {
                            var n = re.call(this, e, t);
                            12 & t && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, t, {
                                pointers: n[0],
                                changedPointers: n[1],
                                pointerType: "touch",
                                srcEvent: e
                            })
                        }
                    }
                });
                var oe = {
                    touchstart: 1,
                    touchmove: 2,
                    touchend: 4,
                    touchcancel: 8
                };

                function ie() {
                    this.evTarget = "touchstart touchmove touchend touchcancel", this.targetIds = {}, F.apply(this, arguments)
                }

                function ae(e, t) {
                    var n = Z(e.touches),
                        r = this.targetIds;
                    if (3 & t && 1 === n.length) return r[n[0].identifier] = !0, [n, n];
                    var o, i, a = Z(e.changedTouches),
                        s = [],
                        c = this.target;
                    if (i = n.filter((function(e) {
                            return O(e.target, c)
                        })), 1 === t)
                        for (o = 0; o < i.length;) r[i[o].identifier] = !0, o++;
                    for (o = 0; o < a.length;) r[a[o].identifier] && s.push(a[o]), 12 & t && delete r[a[o].identifier], o++;
                    return s.length ? [I(i.concat(s), "identifier", !0), s] : void 0
                }

                function se() {
                    F.apply(this, arguments);
                    var e = T(this.handler, this);
                    this.touch = new ie(this.manager, e), this.mouse = new V(this.manager, e), this.primaryTouch = null, this.lastTouches = []
                }

                function ce(e, t) {
                    1 & e ? (this.primaryTouch = t.changedPointers[0].identifier, ue.call(this, t)) : 12 & e && ue.call(this, t)
                }

                function ue(e) {
                    var t = e.changedPointers[0];
                    if (t.identifier === this.primaryTouch) {
                        var n = {
                            x: t.clientX,
                            y: t.clientY
                        };
                        this.lastTouches.push(n);
                        var r = this.lastTouches;
                        setTimeout((function() {
                            var e = r.indexOf(n);
                            e > -1 && r.splice(e, 1)
                        }), 2500)
                    }
                }

                function le(e) {
                    for (var t = e.srcEvent.clientX, n = e.srcEvent.clientY, r = 0; r < this.lastTouches.length; r++) {
                        var o = this.lastTouches[r],
                            i = Math.abs(t - o.x),
                            a = Math.abs(n - o.y);
                        if (i <= 25 && a <= 25) return !0
                    }
                    return !1
                }
                b(ie, F, {
                    handler: function(e) {
                        var t = oe[e.type],
                            n = ae.call(this, e, t);
                        n && this.callback(this.manager, t, {
                            pointers: n[0],
                            changedPointers: n[1],
                            pointerType: "touch",
                            srcEvent: e
                        })
                    }
                }), b(se, F, {
                    handler: function(e, t, n) {
                        var r = "mouse" == n.pointerType;
                        if (!(r && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                            if ("touch" == n.pointerType) ce.call(this, t, n);
                            else if (r && le.call(this, n)) return;
                            this.callback(e, t, n)
                        }
                    },
                    destroy: function() {
                        this.touch.destroy(), this.mouse.destroy()
                    }
                });
                var he = j(l.style, "touchAction"),
                    pe = void 0 !== he,
                    fe = function() {
                        if (!pe) return !1;
                        var e = {},
                            t = o.CSS && o.CSS.supports;
                        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function(n) {
                            e[n] = !t || o.CSS.supports("touch-action", n)
                        })), e
                    }();

                function de(e, t) {
                    this.manager = e, this.set(t)
                }

                function ve(e) {
                    this.options = c({}, this.defaults, e || {}), this.id = z++, this.manager = null, this.options.enable = E(this.options.enable, !0), this.state = 1, this.simultaneous = {}, this.requireFail = []
                }

                function ge(e) {
                    return 16 & e ? "cancel" : 8 & e ? "end" : 4 & e ? "move" : 2 & e ? "start" : ""
                }

                function me(e) {
                    return 16 == e ? "down" : 8 == e ? "up" : 2 == e ? "left" : 4 == e ? "right" : ""
                }

                function ye(e, t) {
                    var n = t.manager;
                    return n ? n.get(e) : e
                }

                function _e() {
                    ve.apply(this, arguments)
                }

                function be() {
                    _e.apply(this, arguments), this.pX = null, this.pY = null
                }

                function Te() {
                    _e.apply(this, arguments)
                }

                function ke() {
                    ve.apply(this, arguments), this._timer = null, this._input = null
                }

                function Ee() {
                    _e.apply(this, arguments)
                }

                function we() {
                    _e.apply(this, arguments)
                }

                function Se() {
                    ve.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
                }

                function Oe(e, t) {
                    return (t = t || {}).recognizers = E(t.recognizers, Oe.defaults.preset), new Pe(e, t)
                }

                function Pe(e, t) {
                    var n;
                    this.options = c({}, Oe.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = new((n = this).options.inputClass || (x ? ee : A ? ie : R ? se : V))(n, H), this.touchAction = new de(this, this.options.touchAction), De(this, !0), g(this.options.recognizers, (function(e) {
                        var t = this.add(new e[0](e[1]));
                        e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
                    }), this)
                }

                function De(e, t) {
                    var n, r = e.element;
                    r.style && (g(e.options.cssProps, (function(o, i) {
                        n = j(r.style, i), t ? (e.oldCssProps[n] = r.style[n], r.style[n] = o) : r.style[n] = e.oldCssProps[n] || ""
                    })), t || (e.oldCssProps = {}))
                }
                de.prototype = {
                    set: function(e) {
                        "compute" == e && (e = this.compute()), pe && this.manager.element.style && fe[e] && (this.manager.element.style[he] = e), this.actions = e.toLowerCase().trim()
                    },
                    update: function() {
                        this.set(this.manager.options.touchAction)
                    },
                    compute: function() {
                        var e = [];
                        return g(this.manager.recognizers, (function(t) {
                                k(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
                            })),
                            function(e) {
                                if (P(e, "none")) return "none";
                                var t = P(e, "pan-x"),
                                    n = P(e, "pan-y");
                                return t && n ? "none" : t || n ? t ? "pan-x" : "pan-y" : P(e, "manipulation") ? "manipulation" : "auto"
                            }(e.join(" "))
                    },
                    preventDefaults: function(e) {
                        var t = e.srcEvent,
                            n = e.offsetDirection;
                        if (this.manager.session.prevented) t.preventDefault();
                        else {
                            var r = this.actions,
                                o = P(r, "none") && !fe.none,
                                i = P(r, "pan-y") && !fe["pan-y"],
                                a = P(r, "pan-x") && !fe["pan-x"];
                            if (o && 1 === e.pointers.length && e.distance < 2 && e.deltaTime < 250) return;
                            if (!a || !i) return o || i && 6 & n || a && 24 & n ? this.preventSrc(t) : void 0
                        }
                    },
                    preventSrc: function(e) {
                        this.manager.session.prevented = !0, e.preventDefault()
                    }
                }, ve.prototype = {
                    defaults: {},
                    set: function(e) {
                        return c(this.options, e), this.manager && this.manager.touchAction.update(), this
                    },
                    recognizeWith: function(e) {
                        if (v(e, "recognizeWith", this)) return this;
                        var t = this.simultaneous;
                        return t[(e = ye(e, this)).id] || (t[e.id] = e, e.recognizeWith(this)), this
                    },
                    dropRecognizeWith: function(e) {
                        return v(e, "dropRecognizeWith", this) ? this : (e = ye(e, this), delete this.simultaneous[e.id], this)
                    },
                    requireFailure: function(e) {
                        if (v(e, "requireFailure", this)) return this;
                        var t = this.requireFail;
                        return -1 === C(t, e = ye(e, this)) && (t.push(e), e.requireFailure(this)), this
                    },
                    dropRequireFailure: function(e) {
                        if (v(e, "dropRequireFailure", this)) return this;
                        e = ye(e, this);
                        var t = C(this.requireFail, e);
                        return t > -1 && this.requireFail.splice(t, 1), this
                    },
                    hasRequireFailures: function() {
                        return this.requireFail.length > 0
                    },
                    canRecognizeWith: function(e) {
                        return !!this.simultaneous[e.id]
                    },
                    emit: function(e) {
                        var t = this,
                            n = this.state;

                        function r(n) {
                            t.manager.emit(n, e)
                        }
                        n < 8 && r(t.options.event + ge(n)), r(t.options.event), e.additionalEvent && r(e.additionalEvent), n >= 8 && r(t.options.event + ge(n))
                    },
                    tryEmit: function(e) {
                        if (this.canEmit()) return this.emit(e);
                        this.state = 32
                    },
                    canEmit: function() {
                        for (var e = 0; e < this.requireFail.length;) {
                            if (!(33 & this.requireFail[e].state)) return !1;
                            e++
                        }
                        return !0
                    },
                    recognize: function(e) {
                        var t = c({}, e);
                        if (!k(this.options.enable, [this, t])) return this.reset(), void(this.state = 32);
                        56 & this.state && (this.state = 1), this.state = this.process(t), 30 & this.state && this.tryEmit(t)
                    },
                    process: function(e) {},
                    getTouchAction: function() {},
                    reset: function() {}
                }, b(_e, ve, {
                    defaults: {
                        pointers: 1
                    },
                    attrTest: function(e) {
                        var t = this.options.pointers;
                        return 0 === t || e.pointers.length === t
                    },
                    process: function(e) {
                        var t = this.state,
                            n = e.eventType,
                            r = 6 & t,
                            o = this.attrTest(e);
                        return r && (8 & n || !o) ? 16 | t : r || o ? 4 & n ? 8 | t : 2 & t ? 4 | t : 2 : 32
                    }
                }), b(be, _e, {
                    defaults: {
                        event: "pan",
                        threshold: 10,
                        pointers: 1,
                        direction: 30
                    },
                    getTouchAction: function() {
                        var e = this.options.direction,
                            t = [];
                        return 6 & e && t.push("pan-y"), 24 & e && t.push("pan-x"), t
                    },
                    directionTest: function(e) {
                        var t = this.options,
                            n = !0,
                            r = e.distance,
                            o = e.direction,
                            i = e.deltaX,
                            a = e.deltaY;
                        return o & t.direction || (6 & t.direction ? (o = 0 === i ? 1 : i < 0 ? 2 : 4, n = i != this.pX, r = Math.abs(e.deltaX)) : (o = 0 === a ? 1 : a < 0 ? 8 : 16, n = a != this.pY, r = Math.abs(e.deltaY))), e.direction = o, n && r > t.threshold && o & t.direction
                    },
                    attrTest: function(e) {
                        return _e.prototype.attrTest.call(this, e) && (2 & this.state || !(2 & this.state) && this.directionTest(e))
                    },
                    emit: function(e) {
                        this.pX = e.deltaX, this.pY = e.deltaY;
                        var t = me(e.direction);
                        t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e)
                    }
                }), b(Te, _e, {
                    defaults: {
                        event: "pinch",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function() {
                        return ["none"]
                    },
                    attrTest: function(e) {
                        return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || 2 & this.state)
                    },
                    emit: function(e) {
                        1 !== e.scale && (e.additionalEvent = this.options.event + (e.scale < 1 ? "in" : "out")), this._super.emit.call(this, e)
                    }
                }), b(ke, ve, {
                    defaults: {
                        event: "press",
                        pointers: 1,
                        time: 251,
                        threshold: 9
                    },
                    getTouchAction: function() {
                        return ["auto"]
                    },
                    process: function(e) {
                        var t = this.options,
                            n = e.pointers.length === t.pointers,
                            r = e.distance < t.threshold,
                            o = e.deltaTime > t.time;
                        if (this._input = e, !r || !n || 12 & e.eventType && !o) this.reset();
                        else if (1 & e.eventType) this.reset(), this._timer = d((function() {
                            this.state = 8, this.tryEmit()
                        }), t.time, this);
                        else if (4 & e.eventType) return 8;
                        return 32
                    },
                    reset: function() {
                        clearTimeout(this._timer)
                    },
                    emit: function(e) {
                        8 === this.state && (e && 4 & e.eventType ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = f(), this.manager.emit(this.options.event, this._input)))
                    }
                }), b(Ee, _e, {
                    defaults: {
                        event: "rotate",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function() {
                        return ["none"]
                    },
                    attrTest: function(e) {
                        return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || 2 & this.state)
                    }
                }), b(we, _e, {
                    defaults: {
                        event: "swipe",
                        threshold: 10,
                        velocity: .3,
                        direction: 30,
                        pointers: 1
                    },
                    getTouchAction: function() {
                        return be.prototype.getTouchAction.call(this)
                    },
                    attrTest: function(e) {
                        var t, n = this.options.direction;
                        return 30 & n ? t = e.overallVelocity : 6 & n ? t = e.overallVelocityX : 24 & n && (t = e.overallVelocityY), this._super.attrTest.call(this, e) && n & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && p(t) > this.options.velocity && 4 & e.eventType
                    },
                    emit: function(e) {
                        var t = me(e.offsetDirection);
                        t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
                    }
                }), b(Se, ve, {
                    defaults: {
                        event: "tap",
                        pointers: 1,
                        taps: 1,
                        interval: 300,
                        time: 250,
                        threshold: 9,
                        posThreshold: 10
                    },
                    getTouchAction: function() {
                        return ["manipulation"]
                    },
                    process: function(e) {
                        var t = this.options,
                            n = e.pointers.length === t.pointers,
                            r = e.distance < t.threshold,
                            o = e.deltaTime < t.time;
                        if (this.reset(), 1 & e.eventType && 0 === this.count) return this.failTimeout();
                        if (r && o && n) {
                            if (4 != e.eventType) return this.failTimeout();
                            var i = !this.pTime || e.timeStamp - this.pTime < t.interval,
                                a = !this.pCenter || B(this.pCenter, e.center) < t.posThreshold;
                            if (this.pTime = e.timeStamp, this.pCenter = e.center, a && i ? this.count += 1 : this.count = 1, this._input = e, 0 == this.count % t.taps) return this.hasRequireFailures() ? (this._timer = d((function() {
                                this.state = 8, this.tryEmit()
                            }), t.interval, this), 2) : 8
                        }
                        return 32
                    },
                    failTimeout: function() {
                        return this._timer = d((function() {
                            this.state = 32
                        }), this.options.interval, this), 32
                    },
                    reset: function() {
                        clearTimeout(this._timer)
                    },
                    emit: function() {
                        8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
                    }
                }), Oe.VERSION = "2.0.7", Oe.defaults = {
                    domEvents: !1,
                    touchAction: "compute",
                    enable: !0,
                    inputTarget: null,
                    inputClass: null,
                    preset: [
                        [Ee, {
                            enable: !1
                        }],
                        [Te, {
                                enable: !1
                            },
                            ["rotate"]
                        ],
                        [we, {
                            direction: 6
                        }],
                        [be, {
                                direction: 6
                            },
                            ["swipe"]
                        ],
                        [Se],
                        [Se, {
                                event: "doubletap",
                                taps: 2
                            },
                            ["tap"]
                        ],
                        [ke]
                    ],
                    cssProps: {
                        userSelect: "none",
                        touchSelect: "none",
                        touchCallout: "none",
                        contentZooming: "none",
                        userDrag: "none",
                        tapHighlightColor: "rgba(0,0,0,0)"
                    }
                }, Pe.prototype = {
                    set: function(e) {
                        return c(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
                    },
                    stop: function(e) {
                        this.session.stopped = e ? 2 : 1
                    },
                    recognize: function(e) {
                        var t = this.session;
                        if (!t.stopped) {
                            var n;
                            this.touchAction.preventDefaults(e);
                            var r = this.recognizers,
                                o = t.curRecognizer;
                            (!o || o && 8 & o.state) && (o = t.curRecognizer = null);
                            for (var i = 0; i < r.length;) n = r[i], 2 === t.stopped || o && n != o && !n.canRecognizeWith(o) ? n.reset() : n.recognize(e), !o && 14 & n.state && (o = t.curRecognizer = n), i++
                        }
                    },
                    get: function(e) {
                        if (e instanceof ve) return e;
                        for (var t = this.recognizers, n = 0; n < t.length; n++)
                            if (t[n].options.event == e) return t[n];
                        return null
                    },
                    add: function(e) {
                        if (v(e, "add", this)) return this;
                        var t = this.get(e.options.event);
                        return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
                    },
                    remove: function(e) {
                        if (v(e, "remove", this)) return this;
                        if (e = this.get(e)) {
                            var t = this.recognizers,
                                n = C(t, e); - 1 !== n && (t.splice(n, 1), this.touchAction.update())
                        }
                        return this
                    },
                    on: function(e, t) {
                        if (void 0 !== e && void 0 !== t) {
                            var n = this.handlers;
                            return g(D(e), (function(e) {
                                n[e] = n[e] || [], n[e].push(t)
                            })), this
                        }
                    },
                    off: function(e, t) {
                        if (void 0 !== e) {
                            var n = this.handlers;
                            return g(D(e), (function(e) {
                                t ? n[e] && n[e].splice(C(n[e], t), 1) : delete n[e]
                            })), this
                        }
                    },
                    emit: function(e, t) {
                        this.options.domEvents && function(e, t) {
                            var n = i.createEvent("Event");
                            n.initEvent(e, !0, !0), n.gesture = t, t.target.dispatchEvent(n)
                        }(e, t);
                        var n = this.handlers[e] && this.handlers[e].slice();
                        if (n && n.length) {
                            t.type = e, t.preventDefault = function() {
                                t.srcEvent.preventDefault()
                            };
                            for (var r = 0; r < n.length;) n[r](t), r++
                        }
                    },
                    destroy: function() {
                        this.element && De(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
                    }
                }, c(Oe, {
                    INPUT_START: 1,
                    INPUT_MOVE: 2,
                    INPUT_END: 4,
                    INPUT_CANCEL: 8,
                    STATE_POSSIBLE: 1,
                    STATE_BEGAN: 2,
                    STATE_CHANGED: 4,
                    STATE_ENDED: 8,
                    STATE_RECOGNIZED: 8,
                    STATE_CANCELLED: 16,
                    STATE_FAILED: 32,
                    DIRECTION_NONE: 1,
                    DIRECTION_LEFT: 2,
                    DIRECTION_RIGHT: 4,
                    DIRECTION_UP: 8,
                    DIRECTION_DOWN: 16,
                    DIRECTION_HORIZONTAL: 6,
                    DIRECTION_VERTICAL: 24,
                    DIRECTION_ALL: 30,
                    Manager: Pe,
                    Input: F,
                    TouchAction: de,
                    TouchInput: ie,
                    MouseInput: V,
                    PointerEventInput: ee,
                    TouchMouseInput: se,
                    SingleTouchInput: ne,
                    Recognizer: ve,
                    AttrRecognizer: _e,
                    Tap: Se,
                    Pan: be,
                    Swipe: we,
                    Pinch: Te,
                    Rotate: Ee,
                    Press: ke,
                    on: w,
                    off: S,
                    each: g,
                    merge: _,
                    extend: y,
                    assign: c,
                    inherit: b,
                    bindFn: T,
                    prefixed: j
                }), (void 0 !== o ? o : "undefined" != typeof self ? self : {}).Hammer = Oe, void 0 === (r = (function() {
                    return Oe
                }).call(t, n, t, e)) || (e.exports = r)
            }(window, document)
        }
    },
    [
        [2, 0]
    ]
]);