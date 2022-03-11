#!/usr/bin/env node
(function(){
var shadow$provide = {};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
var $JSCompiler_prototypeAlias$$;
function $goog$typeOf$$($value$jscomp$92$$) {
  var $s$jscomp$5$$ = typeof $value$jscomp$92$$;
  return "object" != $s$jscomp$5$$ ? $s$jscomp$5$$ : $value$jscomp$92$$ ? Array.isArray($value$jscomp$92$$) ? "array" : $s$jscomp$5$$ : "null";
}
function $goog$getUid$$($obj$jscomp$26$$) {
  return Object.prototype.hasOwnProperty.call($obj$jscomp$26$$, $goog$UID_PROPERTY_$$) && $obj$jscomp$26$$[$goog$UID_PROPERTY_$$] || ($obj$jscomp$26$$[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$);
}
var $goog$UID_PROPERTY_$$ = "closure_uid_" + (1e9 * Math.random() >>> 0), $goog$uidCounter_$$ = 0;
function $goog$object$getKeys$$($obj$jscomp$54$$) {
  const $res$jscomp$8$$ = [];
  let $i$jscomp$69$$ = 0;
  for (const $key$jscomp$59$$ in $obj$jscomp$54$$) {
    $res$jscomp$8$$[$i$jscomp$69$$++] = $key$jscomp$59$$;
  }
  return $res$jscomp$8$$;
}
function $goog$object$get$$($obj$jscomp$64$$, $key$jscomp$67$$) {
  return null !== $obj$jscomp$64$$ && $key$jscomp$67$$ in $obj$jscomp$64$$ ? $obj$jscomp$64$$[$key$jscomp$67$$] : void 0;
}
var $goog$object$PROTOTYPE_FIELDS_$$ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function $goog$object$extend$$($target$jscomp$95$$, $var_args$jscomp$71$$) {
  let $key$jscomp$74$$, $source$jscomp$18$$;
  for (let $i$jscomp$72$$ = 1; $i$jscomp$72$$ < arguments.length; $i$jscomp$72$$++) {
    $source$jscomp$18$$ = arguments[$i$jscomp$72$$];
    for ($key$jscomp$74$$ in $source$jscomp$18$$) {
      $target$jscomp$95$$[$key$jscomp$74$$] = $source$jscomp$18$$[$key$jscomp$74$$];
    }
    for (let $j$jscomp$4$$ = 0; $j$jscomp$4$$ < $goog$object$PROTOTYPE_FIELDS_$$.length; $j$jscomp$4$$++) {
      $key$jscomp$74$$ = $goog$object$PROTOTYPE_FIELDS_$$[$j$jscomp$4$$], Object.prototype.hasOwnProperty.call($source$jscomp$18$$, $key$jscomp$74$$) && ($target$jscomp$95$$[$key$jscomp$74$$] = $source$jscomp$18$$[$key$jscomp$74$$]);
    }
  }
}
;function $goog$string$StringBuffer$$($opt_a1$$, $var_args$jscomp$93$$) {
  null != $opt_a1$$ && this.append.apply(this, arguments);
}
$JSCompiler_prototypeAlias$$ = $goog$string$StringBuffer$$.prototype;
$JSCompiler_prototypeAlias$$.$buffer_$ = "";
$JSCompiler_prototypeAlias$$.set = function($s$jscomp$20$$) {
  this.$buffer_$ = "" + $s$jscomp$20$$;
};
$JSCompiler_prototypeAlias$$.append = function($a1$jscomp$2$$, $opt_a2$$, $var_args$jscomp$94$$) {
  this.$buffer_$ += String($a1$jscomp$2$$);
  if (null != $opt_a2$$) {
    for (let $i$jscomp$121$$ = 1; $i$jscomp$121$$ < arguments.length; $i$jscomp$121$$++) {
      this.$buffer_$ += arguments[$i$jscomp$121$$];
    }
  }
  return this;
};
$JSCompiler_prototypeAlias$$.clear = function() {
  this.$buffer_$ = "";
};
$JSCompiler_prototypeAlias$$.toString = function() {
  return this.$buffer_$;
};
var $cljs$$ = {}, $cljs$core$$ = {}, $cljs$core$t_cljs$0core31813$$, $cljs$core$PROTOCOL_SENTINEL$$ = {}, $cljs$core$_STAR_print_fn_STAR_$$ = null, $cljs$core$_STAR_print_newline_STAR_$$ = !0, $cljs$core$_STAR_print_level_STAR_$$ = null;
function $cljs$core$pr_opts$$() {
  return new $cljs$core$PersistentArrayMap$$(null, 5, [$cljs$cst$keyword$flush_DASH_on_DASH_newline$$, !0, $cljs$cst$keyword$readably$$, !0, $cljs$cst$keyword$meta$$, !1, $cljs$cst$keyword$dup$$, !1, $cljs$cst$keyword$print_DASH_length$$, null], null);
}
function $cljs$core$enable_console_print_BANG_$$() {
  $cljs$core$_STAR_print_newline_STAR_$$ = !1;
  $cljs$core$_STAR_print_fn_STAR_$$ = function() {
    var $JSCompiler_temp_const$jscomp$2$$ = console.log, $JSCompiler_temp_const$jscomp$1$$ = $JSCompiler_temp_const$jscomp$2$$.apply, $JSCompiler_temp_const$jscomp$0$$ = console;
    var $JSCompiler_inline_result$jscomp$3_object$jscomp$inline_177$$ = arguments;
    var $length$jscomp$inline_178$$ = $JSCompiler_inline_result$jscomp$3_object$jscomp$inline_177$$.length;
    if (0 < $length$jscomp$inline_178$$) {
      for (var $rv$jscomp$inline_179$$ = Array($length$jscomp$inline_178$$), $i$jscomp$inline_180$$ = 0; $i$jscomp$inline_180$$ < $length$jscomp$inline_178$$; $i$jscomp$inline_180$$++) {
        $rv$jscomp$inline_179$$[$i$jscomp$inline_180$$] = $JSCompiler_inline_result$jscomp$3_object$jscomp$inline_177$$[$i$jscomp$inline_180$$];
      }
      $JSCompiler_inline_result$jscomp$3_object$jscomp$inline_177$$ = $rv$jscomp$inline_179$$;
    } else {
      $JSCompiler_inline_result$jscomp$3_object$jscomp$inline_177$$ = [];
    }
    return $JSCompiler_temp_const$jscomp$1$$.call($JSCompiler_temp_const$jscomp$2$$, $JSCompiler_temp_const$jscomp$0$$, $JSCompiler_inline_result$jscomp$3_object$jscomp$inline_177$$);
  };
}
function $cljs$core$truth_$$($x$jscomp$95$$) {
  return null != $x$jscomp$95$$ && !1 !== $x$jscomp$95$$;
}
function $cljs$core$native_satisfies_QMARK_$$($p$$, $x$jscomp$106$$) {
  return $p$$[$goog$typeOf$$(null == $x$jscomp$106$$ ? null : $x$jscomp$106$$)] ? !0 : $p$$._ ? !0 : !1;
}
function $cljs$core$missing_protocol$$($proto$jscomp$5$$, $obj$jscomp$78$$) {
  var $ty$jscomp$2$$ = null == $obj$jscomp$78$$ ? null : $obj$jscomp$78$$.constructor;
  return Error(["No protocol method ", $proto$jscomp$5$$, " defined for type ", $cljs$core$truth_$$($cljs$core$truth_$$($ty$jscomp$2$$) ? $ty$jscomp$2$$.$cljs$lang$type$ : $ty$jscomp$2$$) ? $ty$jscomp$2$$.$cljs$lang$ctorStr$ : $goog$typeOf$$($obj$jscomp$78$$), ": ", $obj$jscomp$78$$].join(""));
}
function $cljs$core$type__GT_str$$($ty$jscomp$3$$) {
  var $temp__5751__auto__$$ = $ty$jscomp$3$$.$cljs$lang$ctorStr$;
  return $cljs$core$truth_$$($temp__5751__auto__$$) ? $temp__5751__auto__$$ : $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($ty$jscomp$3$$);
}
var $cljs$core$ITER_SYMBOL$$ = "undefined" !== typeof Symbol && "function" === $goog$typeOf$$(Symbol) ? Symbol.iterator : "@@iterator";
function $cljs$core$aclone$$($arr$jscomp$71$$) {
  for (var $len$jscomp$9$$ = $arr$jscomp$71$$.length, $new_arr$$ = Array($len$jscomp$9$$), $i_32840$$ = 0;;) {
    if ($i_32840$$ < $len$jscomp$9$$) {
      $new_arr$$[$i_32840$$] = $arr$jscomp$71$$[$i_32840$$], $i_32840$$ += 1;
    } else {
      break;
    }
  }
  return $new_arr$$;
}
function $cljs$core$into_array$cljs$0core$0IFn$0_invoke$0arity$02$$($aseq$jscomp$1$$) {
  function $G__31375$$($a$jscomp$18$$, $x$jscomp$109$$) {
    $a$jscomp$18$$.push($x$jscomp$109$$);
    return $a$jscomp$18$$;
  }
  var $G__31376$$ = [];
  return $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$ ? $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($G__31375$$, $G__31376$$, $aseq$jscomp$1$$) : $cljs$core$reduce$$.call(null, $G__31375$$, $G__31376$$, $aseq$jscomp$1$$);
}
function $cljs$core$Fn$$() {
}
function $cljs$core$IFn$$() {
}
function $cljs$core$ICounted$$() {
}
function $cljs$core$_count$$($JSCompiler_temp$jscomp$4_coll$jscomp$1$$) {
  if (null != $JSCompiler_temp$jscomp$4_coll$jscomp$1$$ && null != $JSCompiler_temp$jscomp$4_coll$jscomp$1$$.$cljs$core$ICounted$_count$arity$1$) {
    $JSCompiler_temp$jscomp$4_coll$jscomp$1$$ = $JSCompiler_temp$jscomp$4_coll$jscomp$1$$.$cljs$core$ICounted$_count$arity$1$($JSCompiler_temp$jscomp$4_coll$jscomp$1$$);
  } else {
    var $m__4508__auto__$jscomp$inline_184_m__4510__auto__$jscomp$inline_183$$ = $cljs$core$_count$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$4_coll$jscomp$1$$ ? null : $JSCompiler_temp$jscomp$4_coll$jscomp$1$$)];
    if (null != $m__4508__auto__$jscomp$inline_184_m__4510__auto__$jscomp$inline_183$$) {
      $JSCompiler_temp$jscomp$4_coll$jscomp$1$$ = $m__4508__auto__$jscomp$inline_184_m__4510__auto__$jscomp$inline_183$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_184_m__4510__auto__$jscomp$inline_183$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$4_coll$jscomp$1$$) : $m__4508__auto__$jscomp$inline_184_m__4510__auto__$jscomp$inline_183$$.call(null, $JSCompiler_temp$jscomp$4_coll$jscomp$1$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_184_m__4510__auto__$jscomp$inline_183$$ = $cljs$core$_count$$._, null != $m__4508__auto__$jscomp$inline_184_m__4510__auto__$jscomp$inline_183$$) {
        $JSCompiler_temp$jscomp$4_coll$jscomp$1$$ = $m__4508__auto__$jscomp$inline_184_m__4510__auto__$jscomp$inline_183$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_184_m__4510__auto__$jscomp$inline_183$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$4_coll$jscomp$1$$) : $m__4508__auto__$jscomp$inline_184_m__4510__auto__$jscomp$inline_183$$.call(null, $JSCompiler_temp$jscomp$4_coll$jscomp$1$$);
      } else {
        throw $cljs$core$missing_protocol$$("ICounted.-count", $JSCompiler_temp$jscomp$4_coll$jscomp$1$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$4_coll$jscomp$1$$;
}
function $cljs$core$IEmptyableCollection$$() {
}
function $cljs$core$_empty$$($JSCompiler_temp$jscomp$5_coll$jscomp$3$$) {
  if (null != $JSCompiler_temp$jscomp$5_coll$jscomp$3$$ && null != $JSCompiler_temp$jscomp$5_coll$jscomp$3$$.$cljs$core$IEmptyableCollection$_empty$arity$1$) {
    $JSCompiler_temp$jscomp$5_coll$jscomp$3$$ = $JSCompiler_temp$jscomp$5_coll$jscomp$3$$.$cljs$core$IEmptyableCollection$_empty$arity$1$($JSCompiler_temp$jscomp$5_coll$jscomp$3$$);
  } else {
    var $m__4508__auto__$jscomp$inline_188_m__4510__auto__$jscomp$inline_187$$ = $cljs$core$_empty$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$5_coll$jscomp$3$$ ? null : $JSCompiler_temp$jscomp$5_coll$jscomp$3$$)];
    if (null != $m__4508__auto__$jscomp$inline_188_m__4510__auto__$jscomp$inline_187$$) {
      $JSCompiler_temp$jscomp$5_coll$jscomp$3$$ = $m__4508__auto__$jscomp$inline_188_m__4510__auto__$jscomp$inline_187$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_188_m__4510__auto__$jscomp$inline_187$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$5_coll$jscomp$3$$) : $m__4508__auto__$jscomp$inline_188_m__4510__auto__$jscomp$inline_187$$.call(null, $JSCompiler_temp$jscomp$5_coll$jscomp$3$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_188_m__4510__auto__$jscomp$inline_187$$ = $cljs$core$_empty$$._, null != $m__4508__auto__$jscomp$inline_188_m__4510__auto__$jscomp$inline_187$$) {
        $JSCompiler_temp$jscomp$5_coll$jscomp$3$$ = $m__4508__auto__$jscomp$inline_188_m__4510__auto__$jscomp$inline_187$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_188_m__4510__auto__$jscomp$inline_187$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$5_coll$jscomp$3$$) : $m__4508__auto__$jscomp$inline_188_m__4510__auto__$jscomp$inline_187$$.call(null, $JSCompiler_temp$jscomp$5_coll$jscomp$3$$);
      } else {
        throw $cljs$core$missing_protocol$$("IEmptyableCollection.-empty", $JSCompiler_temp$jscomp$5_coll$jscomp$3$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$5_coll$jscomp$3$$;
}
function $cljs$core$ICollection$$() {
}
function $cljs$core$_conj$$($JSCompiler_temp$jscomp$6_coll$jscomp$5$$, $o$jscomp$34$$) {
  if (null != $JSCompiler_temp$jscomp$6_coll$jscomp$5$$ && null != $JSCompiler_temp$jscomp$6_coll$jscomp$5$$.$cljs$core$ICollection$_conj$arity$2$) {
    $JSCompiler_temp$jscomp$6_coll$jscomp$5$$ = $JSCompiler_temp$jscomp$6_coll$jscomp$5$$.$cljs$core$ICollection$_conj$arity$2$($JSCompiler_temp$jscomp$6_coll$jscomp$5$$, $o$jscomp$34$$);
  } else {
    var $m__4508__auto__$jscomp$inline_193_m__4510__auto__$jscomp$inline_192$$ = $cljs$core$_conj$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$6_coll$jscomp$5$$ ? null : $JSCompiler_temp$jscomp$6_coll$jscomp$5$$)];
    if (null != $m__4508__auto__$jscomp$inline_193_m__4510__auto__$jscomp$inline_192$$) {
      $JSCompiler_temp$jscomp$6_coll$jscomp$5$$ = $m__4508__auto__$jscomp$inline_193_m__4510__auto__$jscomp$inline_192$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$inline_193_m__4510__auto__$jscomp$inline_192$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$jscomp$6_coll$jscomp$5$$, $o$jscomp$34$$) : $m__4508__auto__$jscomp$inline_193_m__4510__auto__$jscomp$inline_192$$.call(null, $JSCompiler_temp$jscomp$6_coll$jscomp$5$$, $o$jscomp$34$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_193_m__4510__auto__$jscomp$inline_192$$ = $cljs$core$_conj$$._, null != $m__4508__auto__$jscomp$inline_193_m__4510__auto__$jscomp$inline_192$$) {
        $JSCompiler_temp$jscomp$6_coll$jscomp$5$$ = $m__4508__auto__$jscomp$inline_193_m__4510__auto__$jscomp$inline_192$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$inline_193_m__4510__auto__$jscomp$inline_192$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$jscomp$6_coll$jscomp$5$$, $o$jscomp$34$$) : $m__4508__auto__$jscomp$inline_193_m__4510__auto__$jscomp$inline_192$$.call(null, $JSCompiler_temp$jscomp$6_coll$jscomp$5$$, $o$jscomp$34$$);
      } else {
        throw $cljs$core$missing_protocol$$("ICollection.-conj", $JSCompiler_temp$jscomp$6_coll$jscomp$5$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$6_coll$jscomp$5$$;
}
function $cljs$core$IIndexed$$() {
}
var $cljs$core$IIndexed$_nth$dyn_33136$$ = function() {
  function $G__33137__3$$($coll$jscomp$7$$, $n$jscomp$26$$, $not_found$$) {
    var $m__4508__auto__$jscomp$27_m__4510__auto__$jscomp$27$$ = $cljs$core$_nth$$[$goog$typeOf$$(null == $coll$jscomp$7$$ ? null : $coll$jscomp$7$$)];
    if (null != $m__4508__auto__$jscomp$27_m__4510__auto__$jscomp$27$$) {
      return $m__4508__auto__$jscomp$27_m__4510__auto__$jscomp$27$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__4508__auto__$jscomp$27_m__4510__auto__$jscomp$27$$.$cljs$core$IFn$_invoke$arity$3$($coll$jscomp$7$$, $n$jscomp$26$$, $not_found$$) : $m__4508__auto__$jscomp$27_m__4510__auto__$jscomp$27$$.call(null, $coll$jscomp$7$$, $n$jscomp$26$$, $not_found$$);
    }
    $m__4508__auto__$jscomp$27_m__4510__auto__$jscomp$27$$ = $cljs$core$_nth$$._;
    if (null != $m__4508__auto__$jscomp$27_m__4510__auto__$jscomp$27$$) {
      return $m__4508__auto__$jscomp$27_m__4510__auto__$jscomp$27$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__4508__auto__$jscomp$27_m__4510__auto__$jscomp$27$$.$cljs$core$IFn$_invoke$arity$3$($coll$jscomp$7$$, $n$jscomp$26$$, $not_found$$) : $m__4508__auto__$jscomp$27_m__4510__auto__$jscomp$27$$.call(null, $coll$jscomp$7$$, $n$jscomp$26$$, $not_found$$);
    }
    throw $cljs$core$missing_protocol$$("IIndexed.-nth", $coll$jscomp$7$$);
  }
  function $G__33137__2$$($coll$jscomp$6$$, $n$jscomp$25$$) {
    var $m__4508__auto__$jscomp$26_m__4510__auto__$jscomp$26$$ = $cljs$core$_nth$$[$goog$typeOf$$(null == $coll$jscomp$6$$ ? null : $coll$jscomp$6$$)];
    if (null != $m__4508__auto__$jscomp$26_m__4510__auto__$jscomp$26$$) {
      return $m__4508__auto__$jscomp$26_m__4510__auto__$jscomp$26$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$26_m__4510__auto__$jscomp$26$$.$cljs$core$IFn$_invoke$arity$2$($coll$jscomp$6$$, $n$jscomp$25$$) : $m__4508__auto__$jscomp$26_m__4510__auto__$jscomp$26$$.call(null, $coll$jscomp$6$$, $n$jscomp$25$$);
    }
    $m__4508__auto__$jscomp$26_m__4510__auto__$jscomp$26$$ = $cljs$core$_nth$$._;
    if (null != $m__4508__auto__$jscomp$26_m__4510__auto__$jscomp$26$$) {
      return $m__4508__auto__$jscomp$26_m__4510__auto__$jscomp$26$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$26_m__4510__auto__$jscomp$26$$.$cljs$core$IFn$_invoke$arity$2$($coll$jscomp$6$$, $n$jscomp$25$$) : $m__4508__auto__$jscomp$26_m__4510__auto__$jscomp$26$$.call(null, $coll$jscomp$6$$, $n$jscomp$25$$);
    }
    throw $cljs$core$missing_protocol$$("IIndexed.-nth", $coll$jscomp$6$$);
  }
  var $G__33137$$ = null;
  $G__33137$$ = function($coll$jscomp$8$$, $n$jscomp$27$$, $not_found$jscomp$1$$) {
    switch(arguments.length) {
      case 2:
        return $G__33137__2$$.call(this, $coll$jscomp$8$$, $n$jscomp$27$$);
      case 3:
        return $G__33137__3$$.call(this, $coll$jscomp$8$$, $n$jscomp$27$$, $not_found$jscomp$1$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__33137$$.$cljs$core$IFn$_invoke$arity$2$ = $G__33137__2$$;
  $G__33137$$.$cljs$core$IFn$_invoke$arity$3$ = $G__33137__3$$;
  return $G__33137$$;
}(), $cljs$core$_nth$$ = function $cljs$core$_nth$$($var_args$jscomp$106$$) {
  switch(arguments.length) {
    case 2:
      return $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$3$(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length)].join(""));
  }
};
$cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$2$ = function($coll$jscomp$9$$, $n$jscomp$28$$) {
  return null != $coll$jscomp$9$$ && null != $coll$jscomp$9$$.$cljs$core$IIndexed$_nth$arity$2$ ? $coll$jscomp$9$$.$cljs$core$IIndexed$_nth$arity$2$($coll$jscomp$9$$, $n$jscomp$28$$) : $cljs$core$IIndexed$_nth$dyn_33136$$($coll$jscomp$9$$, $n$jscomp$28$$);
};
$cljs$core$_nth$$.$cljs$core$IFn$_invoke$arity$3$ = function($coll$jscomp$10$$, $n$jscomp$29$$, $not_found$jscomp$2$$) {
  return null != $coll$jscomp$10$$ && null != $coll$jscomp$10$$.$cljs$core$IIndexed$_nth$arity$3$ ? $coll$jscomp$10$$.$cljs$core$IIndexed$_nth$arity$3$($coll$jscomp$10$$, $n$jscomp$29$$, $not_found$jscomp$2$$) : $cljs$core$IIndexed$_nth$dyn_33136$$($coll$jscomp$10$$, $n$jscomp$29$$, $not_found$jscomp$2$$);
};
$cljs$core$_nth$$.$cljs$lang$maxFixedArity$ = 3;
function $cljs$core$ISeq$$() {
}
function $cljs$core$_first$$($JSCompiler_temp$jscomp$7_coll$jscomp$12$$) {
  if (null != $JSCompiler_temp$jscomp$7_coll$jscomp$12$$ && null != $JSCompiler_temp$jscomp$7_coll$jscomp$12$$.$cljs$core$ISeq$_first$arity$1$) {
    $JSCompiler_temp$jscomp$7_coll$jscomp$12$$ = $JSCompiler_temp$jscomp$7_coll$jscomp$12$$.$cljs$core$ISeq$_first$arity$1$($JSCompiler_temp$jscomp$7_coll$jscomp$12$$);
  } else {
    var $m__4508__auto__$jscomp$inline_197_m__4510__auto__$jscomp$inline_196$$ = $cljs$core$_first$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$7_coll$jscomp$12$$ ? null : $JSCompiler_temp$jscomp$7_coll$jscomp$12$$)];
    if (null != $m__4508__auto__$jscomp$inline_197_m__4510__auto__$jscomp$inline_196$$) {
      $JSCompiler_temp$jscomp$7_coll$jscomp$12$$ = $m__4508__auto__$jscomp$inline_197_m__4510__auto__$jscomp$inline_196$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_197_m__4510__auto__$jscomp$inline_196$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$7_coll$jscomp$12$$) : $m__4508__auto__$jscomp$inline_197_m__4510__auto__$jscomp$inline_196$$.call(null, $JSCompiler_temp$jscomp$7_coll$jscomp$12$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_197_m__4510__auto__$jscomp$inline_196$$ = $cljs$core$_first$$._, null != $m__4508__auto__$jscomp$inline_197_m__4510__auto__$jscomp$inline_196$$) {
        $JSCompiler_temp$jscomp$7_coll$jscomp$12$$ = $m__4508__auto__$jscomp$inline_197_m__4510__auto__$jscomp$inline_196$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_197_m__4510__auto__$jscomp$inline_196$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$7_coll$jscomp$12$$) : $m__4508__auto__$jscomp$inline_197_m__4510__auto__$jscomp$inline_196$$.call(null, $JSCompiler_temp$jscomp$7_coll$jscomp$12$$);
      } else {
        throw $cljs$core$missing_protocol$$("ISeq.-first", $JSCompiler_temp$jscomp$7_coll$jscomp$12$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$7_coll$jscomp$12$$;
}
function $cljs$core$_rest$$($JSCompiler_temp$jscomp$8_coll$jscomp$14$$) {
  if (null != $JSCompiler_temp$jscomp$8_coll$jscomp$14$$ && null != $JSCompiler_temp$jscomp$8_coll$jscomp$14$$.$cljs$core$ISeq$_rest$arity$1$) {
    $JSCompiler_temp$jscomp$8_coll$jscomp$14$$ = $JSCompiler_temp$jscomp$8_coll$jscomp$14$$.$cljs$core$ISeq$_rest$arity$1$($JSCompiler_temp$jscomp$8_coll$jscomp$14$$);
  } else {
    var $m__4508__auto__$jscomp$inline_201_m__4510__auto__$jscomp$inline_200$$ = $cljs$core$_rest$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$8_coll$jscomp$14$$ ? null : $JSCompiler_temp$jscomp$8_coll$jscomp$14$$)];
    if (null != $m__4508__auto__$jscomp$inline_201_m__4510__auto__$jscomp$inline_200$$) {
      $JSCompiler_temp$jscomp$8_coll$jscomp$14$$ = $m__4508__auto__$jscomp$inline_201_m__4510__auto__$jscomp$inline_200$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_201_m__4510__auto__$jscomp$inline_200$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$8_coll$jscomp$14$$) : $m__4508__auto__$jscomp$inline_201_m__4510__auto__$jscomp$inline_200$$.call(null, $JSCompiler_temp$jscomp$8_coll$jscomp$14$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_201_m__4510__auto__$jscomp$inline_200$$ = $cljs$core$_rest$$._, null != $m__4508__auto__$jscomp$inline_201_m__4510__auto__$jscomp$inline_200$$) {
        $JSCompiler_temp$jscomp$8_coll$jscomp$14$$ = $m__4508__auto__$jscomp$inline_201_m__4510__auto__$jscomp$inline_200$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_201_m__4510__auto__$jscomp$inline_200$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$8_coll$jscomp$14$$) : $m__4508__auto__$jscomp$inline_201_m__4510__auto__$jscomp$inline_200$$.call(null, $JSCompiler_temp$jscomp$8_coll$jscomp$14$$);
      } else {
        throw $cljs$core$missing_protocol$$("ISeq.-rest", $JSCompiler_temp$jscomp$8_coll$jscomp$14$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$8_coll$jscomp$14$$;
}
function $cljs$core$INext$$() {
}
function $cljs$core$ILookup$$() {
}
var $cljs$core$ILookup$_lookup$dyn_33142$$ = function() {
  function $G__33143__3$$($o$jscomp$36$$, $k$jscomp$26$$, $not_found$jscomp$3$$) {
    var $m__4508__auto__$jscomp$32_m__4510__auto__$jscomp$32$$ = $cljs$core$_lookup$$[$goog$typeOf$$(null == $o$jscomp$36$$ ? null : $o$jscomp$36$$)];
    if (null != $m__4508__auto__$jscomp$32_m__4510__auto__$jscomp$32$$) {
      return $m__4508__auto__$jscomp$32_m__4510__auto__$jscomp$32$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__4508__auto__$jscomp$32_m__4510__auto__$jscomp$32$$.$cljs$core$IFn$_invoke$arity$3$($o$jscomp$36$$, $k$jscomp$26$$, $not_found$jscomp$3$$) : $m__4508__auto__$jscomp$32_m__4510__auto__$jscomp$32$$.call(null, $o$jscomp$36$$, $k$jscomp$26$$, $not_found$jscomp$3$$);
    }
    $m__4508__auto__$jscomp$32_m__4510__auto__$jscomp$32$$ = $cljs$core$_lookup$$._;
    if (null != $m__4508__auto__$jscomp$32_m__4510__auto__$jscomp$32$$) {
      return $m__4508__auto__$jscomp$32_m__4510__auto__$jscomp$32$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__4508__auto__$jscomp$32_m__4510__auto__$jscomp$32$$.$cljs$core$IFn$_invoke$arity$3$($o$jscomp$36$$, $k$jscomp$26$$, $not_found$jscomp$3$$) : $m__4508__auto__$jscomp$32_m__4510__auto__$jscomp$32$$.call(null, $o$jscomp$36$$, $k$jscomp$26$$, $not_found$jscomp$3$$);
    }
    throw $cljs$core$missing_protocol$$("ILookup.-lookup", $o$jscomp$36$$);
  }
  function $G__33143__2$$($o$jscomp$35$$, $k$jscomp$25$$) {
    var $m__4508__auto__$jscomp$31_m__4510__auto__$jscomp$31$$ = $cljs$core$_lookup$$[$goog$typeOf$$(null == $o$jscomp$35$$ ? null : $o$jscomp$35$$)];
    if (null != $m__4508__auto__$jscomp$31_m__4510__auto__$jscomp$31$$) {
      return $m__4508__auto__$jscomp$31_m__4510__auto__$jscomp$31$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$31_m__4510__auto__$jscomp$31$$.$cljs$core$IFn$_invoke$arity$2$($o$jscomp$35$$, $k$jscomp$25$$) : $m__4508__auto__$jscomp$31_m__4510__auto__$jscomp$31$$.call(null, $o$jscomp$35$$, $k$jscomp$25$$);
    }
    $m__4508__auto__$jscomp$31_m__4510__auto__$jscomp$31$$ = $cljs$core$_lookup$$._;
    if (null != $m__4508__auto__$jscomp$31_m__4510__auto__$jscomp$31$$) {
      return $m__4508__auto__$jscomp$31_m__4510__auto__$jscomp$31$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$31_m__4510__auto__$jscomp$31$$.$cljs$core$IFn$_invoke$arity$2$($o$jscomp$35$$, $k$jscomp$25$$) : $m__4508__auto__$jscomp$31_m__4510__auto__$jscomp$31$$.call(null, $o$jscomp$35$$, $k$jscomp$25$$);
    }
    throw $cljs$core$missing_protocol$$("ILookup.-lookup", $o$jscomp$35$$);
  }
  var $G__33143$$ = null;
  $G__33143$$ = function($o$jscomp$37$$, $k$jscomp$27$$, $not_found$jscomp$4$$) {
    switch(arguments.length) {
      case 2:
        return $G__33143__2$$.call(this, $o$jscomp$37$$, $k$jscomp$27$$);
      case 3:
        return $G__33143__3$$.call(this, $o$jscomp$37$$, $k$jscomp$27$$, $not_found$jscomp$4$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__33143$$.$cljs$core$IFn$_invoke$arity$2$ = $G__33143__2$$;
  $G__33143$$.$cljs$core$IFn$_invoke$arity$3$ = $G__33143__3$$;
  return $G__33143$$;
}(), $cljs$core$_lookup$$ = function $cljs$core$_lookup$$($var_args$jscomp$107$$) {
  switch(arguments.length) {
    case 2:
      return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length)].join(""));
  }
};
$cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$2$ = function($o$jscomp$38$$, $k$jscomp$28$$) {
  return null != $o$jscomp$38$$ && null != $o$jscomp$38$$.$cljs$core$ILookup$_lookup$arity$2$ ? $o$jscomp$38$$.$cljs$core$ILookup$_lookup$arity$2$($o$jscomp$38$$, $k$jscomp$28$$) : $cljs$core$ILookup$_lookup$dyn_33142$$($o$jscomp$38$$, $k$jscomp$28$$);
};
$cljs$core$_lookup$$.$cljs$core$IFn$_invoke$arity$3$ = function($o$jscomp$39$$, $k$jscomp$29$$, $not_found$jscomp$5$$) {
  return null != $o$jscomp$39$$ && null != $o$jscomp$39$$.$cljs$core$ILookup$_lookup$arity$3$ ? $o$jscomp$39$$.$cljs$core$ILookup$_lookup$arity$3$($o$jscomp$39$$, $k$jscomp$29$$, $not_found$jscomp$5$$) : $cljs$core$ILookup$_lookup$dyn_33142$$($o$jscomp$39$$, $k$jscomp$29$$, $not_found$jscomp$5$$);
};
$cljs$core$_lookup$$.$cljs$lang$maxFixedArity$ = 3;
function $cljs$core$IAssociative$$() {
}
function $cljs$core$_contains_key_QMARK_$$($JSCompiler_temp$jscomp$9_coll$jscomp$18$$, $k$jscomp$31$$) {
  if (null != $JSCompiler_temp$jscomp$9_coll$jscomp$18$$ && null != $JSCompiler_temp$jscomp$9_coll$jscomp$18$$.$cljs$core$IAssociative$_contains_key_QMARK_$arity$2$) {
    $JSCompiler_temp$jscomp$9_coll$jscomp$18$$ = $JSCompiler_temp$jscomp$9_coll$jscomp$18$$.$cljs$core$IAssociative$_contains_key_QMARK_$arity$2$($JSCompiler_temp$jscomp$9_coll$jscomp$18$$, $k$jscomp$31$$);
  } else {
    var $m__4508__auto__$jscomp$inline_206_m__4510__auto__$jscomp$inline_205$$ = $cljs$core$_contains_key_QMARK_$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$9_coll$jscomp$18$$ ? null : $JSCompiler_temp$jscomp$9_coll$jscomp$18$$)];
    if (null != $m__4508__auto__$jscomp$inline_206_m__4510__auto__$jscomp$inline_205$$) {
      $JSCompiler_temp$jscomp$9_coll$jscomp$18$$ = $m__4508__auto__$jscomp$inline_206_m__4510__auto__$jscomp$inline_205$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$inline_206_m__4510__auto__$jscomp$inline_205$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$jscomp$9_coll$jscomp$18$$, $k$jscomp$31$$) : $m__4508__auto__$jscomp$inline_206_m__4510__auto__$jscomp$inline_205$$.call(null, $JSCompiler_temp$jscomp$9_coll$jscomp$18$$, $k$jscomp$31$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_206_m__4510__auto__$jscomp$inline_205$$ = $cljs$core$_contains_key_QMARK_$$._, null != $m__4508__auto__$jscomp$inline_206_m__4510__auto__$jscomp$inline_205$$) {
        $JSCompiler_temp$jscomp$9_coll$jscomp$18$$ = $m__4508__auto__$jscomp$inline_206_m__4510__auto__$jscomp$inline_205$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$inline_206_m__4510__auto__$jscomp$inline_205$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$jscomp$9_coll$jscomp$18$$, $k$jscomp$31$$) : $m__4508__auto__$jscomp$inline_206_m__4510__auto__$jscomp$inline_205$$.call(null, $JSCompiler_temp$jscomp$9_coll$jscomp$18$$, $k$jscomp$31$$);
      } else {
        throw $cljs$core$missing_protocol$$("IAssociative.-contains-key?", $JSCompiler_temp$jscomp$9_coll$jscomp$18$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$9_coll$jscomp$18$$;
}
function $cljs$core$_assoc$$($JSCompiler_temp$jscomp$10_coll$jscomp$20$$, $k$jscomp$33$$, $v$jscomp$1$$) {
  if (null != $JSCompiler_temp$jscomp$10_coll$jscomp$20$$ && null != $JSCompiler_temp$jscomp$10_coll$jscomp$20$$.$cljs$core$IAssociative$_assoc$arity$3$) {
    $JSCompiler_temp$jscomp$10_coll$jscomp$20$$ = $JSCompiler_temp$jscomp$10_coll$jscomp$20$$.$cljs$core$IAssociative$_assoc$arity$3$($JSCompiler_temp$jscomp$10_coll$jscomp$20$$, $k$jscomp$33$$, $v$jscomp$1$$);
  } else {
    var $m__4508__auto__$jscomp$inline_212_m__4510__auto__$jscomp$inline_211$$ = $cljs$core$_assoc$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$10_coll$jscomp$20$$ ? null : $JSCompiler_temp$jscomp$10_coll$jscomp$20$$)];
    if (null != $m__4508__auto__$jscomp$inline_212_m__4510__auto__$jscomp$inline_211$$) {
      $JSCompiler_temp$jscomp$10_coll$jscomp$20$$ = $m__4508__auto__$jscomp$inline_212_m__4510__auto__$jscomp$inline_211$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__4508__auto__$jscomp$inline_212_m__4510__auto__$jscomp$inline_211$$.$cljs$core$IFn$_invoke$arity$3$($JSCompiler_temp$jscomp$10_coll$jscomp$20$$, $k$jscomp$33$$, $v$jscomp$1$$) : $m__4508__auto__$jscomp$inline_212_m__4510__auto__$jscomp$inline_211$$.call(null, $JSCompiler_temp$jscomp$10_coll$jscomp$20$$, $k$jscomp$33$$, $v$jscomp$1$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_212_m__4510__auto__$jscomp$inline_211$$ = $cljs$core$_assoc$$._, null != $m__4508__auto__$jscomp$inline_212_m__4510__auto__$jscomp$inline_211$$) {
        $JSCompiler_temp$jscomp$10_coll$jscomp$20$$ = $m__4508__auto__$jscomp$inline_212_m__4510__auto__$jscomp$inline_211$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__4508__auto__$jscomp$inline_212_m__4510__auto__$jscomp$inline_211$$.$cljs$core$IFn$_invoke$arity$3$($JSCompiler_temp$jscomp$10_coll$jscomp$20$$, $k$jscomp$33$$, $v$jscomp$1$$) : $m__4508__auto__$jscomp$inline_212_m__4510__auto__$jscomp$inline_211$$.call(null, $JSCompiler_temp$jscomp$10_coll$jscomp$20$$, $k$jscomp$33$$, $v$jscomp$1$$);
      } else {
        throw $cljs$core$missing_protocol$$("IAssociative.-assoc", $JSCompiler_temp$jscomp$10_coll$jscomp$20$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$10_coll$jscomp$20$$;
}
function $cljs$core$_find$$($JSCompiler_temp$jscomp$11_coll$jscomp$22$$, $k$jscomp$35$$) {
  if (null != $JSCompiler_temp$jscomp$11_coll$jscomp$22$$ && null != $JSCompiler_temp$jscomp$11_coll$jscomp$22$$.$cljs$core$IFind$_find$arity$2$) {
    $JSCompiler_temp$jscomp$11_coll$jscomp$22$$ = $JSCompiler_temp$jscomp$11_coll$jscomp$22$$.$cljs$core$IFind$_find$arity$2$($JSCompiler_temp$jscomp$11_coll$jscomp$22$$, $k$jscomp$35$$);
  } else {
    var $m__4508__auto__$jscomp$inline_217_m__4510__auto__$jscomp$inline_216$$ = $cljs$core$_find$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$11_coll$jscomp$22$$ ? null : $JSCompiler_temp$jscomp$11_coll$jscomp$22$$)];
    if (null != $m__4508__auto__$jscomp$inline_217_m__4510__auto__$jscomp$inline_216$$) {
      $JSCompiler_temp$jscomp$11_coll$jscomp$22$$ = $m__4508__auto__$jscomp$inline_217_m__4510__auto__$jscomp$inline_216$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$inline_217_m__4510__auto__$jscomp$inline_216$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$jscomp$11_coll$jscomp$22$$, $k$jscomp$35$$) : $m__4508__auto__$jscomp$inline_217_m__4510__auto__$jscomp$inline_216$$.call(null, $JSCompiler_temp$jscomp$11_coll$jscomp$22$$, $k$jscomp$35$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_217_m__4510__auto__$jscomp$inline_216$$ = $cljs$core$_find$$._, null != $m__4508__auto__$jscomp$inline_217_m__4510__auto__$jscomp$inline_216$$) {
        $JSCompiler_temp$jscomp$11_coll$jscomp$22$$ = $m__4508__auto__$jscomp$inline_217_m__4510__auto__$jscomp$inline_216$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$inline_217_m__4510__auto__$jscomp$inline_216$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$jscomp$11_coll$jscomp$22$$, $k$jscomp$35$$) : $m__4508__auto__$jscomp$inline_217_m__4510__auto__$jscomp$inline_216$$.call(null, $JSCompiler_temp$jscomp$11_coll$jscomp$22$$, $k$jscomp$35$$);
      } else {
        throw $cljs$core$missing_protocol$$("IFind.-find", $JSCompiler_temp$jscomp$11_coll$jscomp$22$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$11_coll$jscomp$22$$;
}
function $cljs$core$IMap$$() {
}
function $cljs$core$_dissoc$$($JSCompiler_temp$jscomp$12_coll$jscomp$24$$, $k$jscomp$37$$) {
  if (null != $JSCompiler_temp$jscomp$12_coll$jscomp$24$$ && null != $JSCompiler_temp$jscomp$12_coll$jscomp$24$$.$cljs$core$IMap$_dissoc$arity$2$) {
    $JSCompiler_temp$jscomp$12_coll$jscomp$24$$ = $JSCompiler_temp$jscomp$12_coll$jscomp$24$$.$cljs$core$IMap$_dissoc$arity$2$($JSCompiler_temp$jscomp$12_coll$jscomp$24$$, $k$jscomp$37$$);
  } else {
    var $m__4508__auto__$jscomp$inline_222_m__4510__auto__$jscomp$inline_221$$ = $cljs$core$_dissoc$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$12_coll$jscomp$24$$ ? null : $JSCompiler_temp$jscomp$12_coll$jscomp$24$$)];
    if (null != $m__4508__auto__$jscomp$inline_222_m__4510__auto__$jscomp$inline_221$$) {
      $JSCompiler_temp$jscomp$12_coll$jscomp$24$$ = $m__4508__auto__$jscomp$inline_222_m__4510__auto__$jscomp$inline_221$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$inline_222_m__4510__auto__$jscomp$inline_221$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$jscomp$12_coll$jscomp$24$$, $k$jscomp$37$$) : $m__4508__auto__$jscomp$inline_222_m__4510__auto__$jscomp$inline_221$$.call(null, $JSCompiler_temp$jscomp$12_coll$jscomp$24$$, $k$jscomp$37$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_222_m__4510__auto__$jscomp$inline_221$$ = $cljs$core$_dissoc$$._, null != $m__4508__auto__$jscomp$inline_222_m__4510__auto__$jscomp$inline_221$$) {
        $JSCompiler_temp$jscomp$12_coll$jscomp$24$$ = $m__4508__auto__$jscomp$inline_222_m__4510__auto__$jscomp$inline_221$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$inline_222_m__4510__auto__$jscomp$inline_221$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$jscomp$12_coll$jscomp$24$$, $k$jscomp$37$$) : $m__4508__auto__$jscomp$inline_222_m__4510__auto__$jscomp$inline_221$$.call(null, $JSCompiler_temp$jscomp$12_coll$jscomp$24$$, $k$jscomp$37$$);
      } else {
        throw $cljs$core$missing_protocol$$("IMap.-dissoc", $JSCompiler_temp$jscomp$12_coll$jscomp$24$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$12_coll$jscomp$24$$;
}
function $cljs$core$_key$$($JSCompiler_temp$jscomp$13_coll$jscomp$26$$) {
  if (null != $JSCompiler_temp$jscomp$13_coll$jscomp$26$$ && null != $JSCompiler_temp$jscomp$13_coll$jscomp$26$$.$cljs$core$IMapEntry$_key$arity$1$) {
    $JSCompiler_temp$jscomp$13_coll$jscomp$26$$ = $JSCompiler_temp$jscomp$13_coll$jscomp$26$$.key;
  } else {
    var $m__4508__auto__$jscomp$inline_226_m__4510__auto__$jscomp$inline_225$$ = $cljs$core$_key$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$13_coll$jscomp$26$$ ? null : $JSCompiler_temp$jscomp$13_coll$jscomp$26$$)];
    if (null != $m__4508__auto__$jscomp$inline_226_m__4510__auto__$jscomp$inline_225$$) {
      $JSCompiler_temp$jscomp$13_coll$jscomp$26$$ = $m__4508__auto__$jscomp$inline_226_m__4510__auto__$jscomp$inline_225$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_226_m__4510__auto__$jscomp$inline_225$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$13_coll$jscomp$26$$) : $m__4508__auto__$jscomp$inline_226_m__4510__auto__$jscomp$inline_225$$.call(null, $JSCompiler_temp$jscomp$13_coll$jscomp$26$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_226_m__4510__auto__$jscomp$inline_225$$ = $cljs$core$_key$$._, null != $m__4508__auto__$jscomp$inline_226_m__4510__auto__$jscomp$inline_225$$) {
        $JSCompiler_temp$jscomp$13_coll$jscomp$26$$ = $m__4508__auto__$jscomp$inline_226_m__4510__auto__$jscomp$inline_225$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_226_m__4510__auto__$jscomp$inline_225$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$13_coll$jscomp$26$$) : $m__4508__auto__$jscomp$inline_226_m__4510__auto__$jscomp$inline_225$$.call(null, $JSCompiler_temp$jscomp$13_coll$jscomp$26$$);
      } else {
        throw $cljs$core$missing_protocol$$("IMapEntry.-key", $JSCompiler_temp$jscomp$13_coll$jscomp$26$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$13_coll$jscomp$26$$;
}
function $cljs$core$_val$$($JSCompiler_temp$jscomp$14_coll$jscomp$28$$) {
  if (null != $JSCompiler_temp$jscomp$14_coll$jscomp$28$$ && null != $JSCompiler_temp$jscomp$14_coll$jscomp$28$$.$cljs$core$IMapEntry$_val$arity$1$) {
    $JSCompiler_temp$jscomp$14_coll$jscomp$28$$ = $JSCompiler_temp$jscomp$14_coll$jscomp$28$$.$val$;
  } else {
    var $m__4508__auto__$jscomp$inline_230_m__4510__auto__$jscomp$inline_229$$ = $cljs$core$_val$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$14_coll$jscomp$28$$ ? null : $JSCompiler_temp$jscomp$14_coll$jscomp$28$$)];
    if (null != $m__4508__auto__$jscomp$inline_230_m__4510__auto__$jscomp$inline_229$$) {
      $JSCompiler_temp$jscomp$14_coll$jscomp$28$$ = $m__4508__auto__$jscomp$inline_230_m__4510__auto__$jscomp$inline_229$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_230_m__4510__auto__$jscomp$inline_229$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$14_coll$jscomp$28$$) : $m__4508__auto__$jscomp$inline_230_m__4510__auto__$jscomp$inline_229$$.call(null, $JSCompiler_temp$jscomp$14_coll$jscomp$28$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_230_m__4510__auto__$jscomp$inline_229$$ = $cljs$core$_val$$._, null != $m__4508__auto__$jscomp$inline_230_m__4510__auto__$jscomp$inline_229$$) {
        $JSCompiler_temp$jscomp$14_coll$jscomp$28$$ = $m__4508__auto__$jscomp$inline_230_m__4510__auto__$jscomp$inline_229$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_230_m__4510__auto__$jscomp$inline_229$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$14_coll$jscomp$28$$) : $m__4508__auto__$jscomp$inline_230_m__4510__auto__$jscomp$inline_229$$.call(null, $JSCompiler_temp$jscomp$14_coll$jscomp$28$$);
      } else {
        throw $cljs$core$missing_protocol$$("IMapEntry.-val", $JSCompiler_temp$jscomp$14_coll$jscomp$28$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$14_coll$jscomp$28$$;
}
function $cljs$core$ISet$$() {
}
function $cljs$core$_disjoin$$($JSCompiler_temp$jscomp$15_coll$jscomp$30$$, $v$jscomp$3$$) {
  if (null != $JSCompiler_temp$jscomp$15_coll$jscomp$30$$ && null != $JSCompiler_temp$jscomp$15_coll$jscomp$30$$.$cljs$core$ISet$_disjoin$arity$2$) {
    $JSCompiler_temp$jscomp$15_coll$jscomp$30$$ = $JSCompiler_temp$jscomp$15_coll$jscomp$30$$.$cljs$core$ISet$_disjoin$arity$2$($JSCompiler_temp$jscomp$15_coll$jscomp$30$$, $v$jscomp$3$$);
  } else {
    var $m__4508__auto__$jscomp$inline_235_m__4510__auto__$jscomp$inline_234$$ = $cljs$core$_disjoin$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$15_coll$jscomp$30$$ ? null : $JSCompiler_temp$jscomp$15_coll$jscomp$30$$)];
    if (null != $m__4508__auto__$jscomp$inline_235_m__4510__auto__$jscomp$inline_234$$) {
      $JSCompiler_temp$jscomp$15_coll$jscomp$30$$ = $m__4508__auto__$jscomp$inline_235_m__4510__auto__$jscomp$inline_234$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$inline_235_m__4510__auto__$jscomp$inline_234$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$jscomp$15_coll$jscomp$30$$, $v$jscomp$3$$) : $m__4508__auto__$jscomp$inline_235_m__4510__auto__$jscomp$inline_234$$.call(null, $JSCompiler_temp$jscomp$15_coll$jscomp$30$$, $v$jscomp$3$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_235_m__4510__auto__$jscomp$inline_234$$ = $cljs$core$_disjoin$$._, null != $m__4508__auto__$jscomp$inline_235_m__4510__auto__$jscomp$inline_234$$) {
        $JSCompiler_temp$jscomp$15_coll$jscomp$30$$ = $m__4508__auto__$jscomp$inline_235_m__4510__auto__$jscomp$inline_234$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$inline_235_m__4510__auto__$jscomp$inline_234$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$jscomp$15_coll$jscomp$30$$, $v$jscomp$3$$) : $m__4508__auto__$jscomp$inline_235_m__4510__auto__$jscomp$inline_234$$.call(null, $JSCompiler_temp$jscomp$15_coll$jscomp$30$$, $v$jscomp$3$$);
      } else {
        throw $cljs$core$missing_protocol$$("ISet.-disjoin", $JSCompiler_temp$jscomp$15_coll$jscomp$30$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$15_coll$jscomp$30$$;
}
function $cljs$core$_peek$$($JSCompiler_temp$jscomp$16_coll$jscomp$32$$) {
  if (null != $JSCompiler_temp$jscomp$16_coll$jscomp$32$$ && null != $JSCompiler_temp$jscomp$16_coll$jscomp$32$$.$cljs$core$IStack$_peek$arity$1$) {
    $JSCompiler_temp$jscomp$16_coll$jscomp$32$$ = $JSCompiler_temp$jscomp$16_coll$jscomp$32$$.$cljs$core$IStack$_peek$arity$1$($JSCompiler_temp$jscomp$16_coll$jscomp$32$$);
  } else {
    var $m__4508__auto__$jscomp$inline_239_m__4510__auto__$jscomp$inline_238$$ = $cljs$core$_peek$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$16_coll$jscomp$32$$ ? null : $JSCompiler_temp$jscomp$16_coll$jscomp$32$$)];
    if (null != $m__4508__auto__$jscomp$inline_239_m__4510__auto__$jscomp$inline_238$$) {
      $JSCompiler_temp$jscomp$16_coll$jscomp$32$$ = $m__4508__auto__$jscomp$inline_239_m__4510__auto__$jscomp$inline_238$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_239_m__4510__auto__$jscomp$inline_238$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$16_coll$jscomp$32$$) : $m__4508__auto__$jscomp$inline_239_m__4510__auto__$jscomp$inline_238$$.call(null, $JSCompiler_temp$jscomp$16_coll$jscomp$32$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_239_m__4510__auto__$jscomp$inline_238$$ = $cljs$core$_peek$$._, null != $m__4508__auto__$jscomp$inline_239_m__4510__auto__$jscomp$inline_238$$) {
        $JSCompiler_temp$jscomp$16_coll$jscomp$32$$ = $m__4508__auto__$jscomp$inline_239_m__4510__auto__$jscomp$inline_238$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_239_m__4510__auto__$jscomp$inline_238$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$16_coll$jscomp$32$$) : $m__4508__auto__$jscomp$inline_239_m__4510__auto__$jscomp$inline_238$$.call(null, $JSCompiler_temp$jscomp$16_coll$jscomp$32$$);
      } else {
        throw $cljs$core$missing_protocol$$("IStack.-peek", $JSCompiler_temp$jscomp$16_coll$jscomp$32$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$16_coll$jscomp$32$$;
}
function $cljs$core$_pop$$($JSCompiler_temp$jscomp$17_coll$jscomp$34$$) {
  if (null != $JSCompiler_temp$jscomp$17_coll$jscomp$34$$ && null != $JSCompiler_temp$jscomp$17_coll$jscomp$34$$.$cljs$core$IStack$_pop$arity$1$) {
    $JSCompiler_temp$jscomp$17_coll$jscomp$34$$ = $JSCompiler_temp$jscomp$17_coll$jscomp$34$$.$cljs$core$IStack$_pop$arity$1$($JSCompiler_temp$jscomp$17_coll$jscomp$34$$);
  } else {
    var $m__4508__auto__$jscomp$inline_243_m__4510__auto__$jscomp$inline_242$$ = $cljs$core$_pop$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$17_coll$jscomp$34$$ ? null : $JSCompiler_temp$jscomp$17_coll$jscomp$34$$)];
    if (null != $m__4508__auto__$jscomp$inline_243_m__4510__auto__$jscomp$inline_242$$) {
      $JSCompiler_temp$jscomp$17_coll$jscomp$34$$ = $m__4508__auto__$jscomp$inline_243_m__4510__auto__$jscomp$inline_242$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_243_m__4510__auto__$jscomp$inline_242$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$17_coll$jscomp$34$$) : $m__4508__auto__$jscomp$inline_243_m__4510__auto__$jscomp$inline_242$$.call(null, $JSCompiler_temp$jscomp$17_coll$jscomp$34$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_243_m__4510__auto__$jscomp$inline_242$$ = $cljs$core$_pop$$._, null != $m__4508__auto__$jscomp$inline_243_m__4510__auto__$jscomp$inline_242$$) {
        $JSCompiler_temp$jscomp$17_coll$jscomp$34$$ = $m__4508__auto__$jscomp$inline_243_m__4510__auto__$jscomp$inline_242$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_243_m__4510__auto__$jscomp$inline_242$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$17_coll$jscomp$34$$) : $m__4508__auto__$jscomp$inline_243_m__4510__auto__$jscomp$inline_242$$.call(null, $JSCompiler_temp$jscomp$17_coll$jscomp$34$$);
      } else {
        throw $cljs$core$missing_protocol$$("IStack.-pop", $JSCompiler_temp$jscomp$17_coll$jscomp$34$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$17_coll$jscomp$34$$;
}
function $cljs$core$IVector$$() {
}
function $cljs$core$_assoc_n$$($JSCompiler_temp$jscomp$18_coll$jscomp$36$$, $n$jscomp$31$$, $val$jscomp$44$$) {
  if (null != $JSCompiler_temp$jscomp$18_coll$jscomp$36$$ && null != $JSCompiler_temp$jscomp$18_coll$jscomp$36$$.$cljs$core$IVector$_assoc_n$arity$3$) {
    $JSCompiler_temp$jscomp$18_coll$jscomp$36$$ = $JSCompiler_temp$jscomp$18_coll$jscomp$36$$.$cljs$core$IVector$_assoc_n$arity$3$($JSCompiler_temp$jscomp$18_coll$jscomp$36$$, $n$jscomp$31$$, $val$jscomp$44$$);
  } else {
    var $m__4508__auto__$jscomp$inline_249_m__4510__auto__$jscomp$inline_248$$ = $cljs$core$_assoc_n$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$18_coll$jscomp$36$$ ? null : $JSCompiler_temp$jscomp$18_coll$jscomp$36$$)];
    if (null != $m__4508__auto__$jscomp$inline_249_m__4510__auto__$jscomp$inline_248$$) {
      $JSCompiler_temp$jscomp$18_coll$jscomp$36$$ = $m__4508__auto__$jscomp$inline_249_m__4510__auto__$jscomp$inline_248$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__4508__auto__$jscomp$inline_249_m__4510__auto__$jscomp$inline_248$$.$cljs$core$IFn$_invoke$arity$3$($JSCompiler_temp$jscomp$18_coll$jscomp$36$$, $n$jscomp$31$$, $val$jscomp$44$$) : $m__4508__auto__$jscomp$inline_249_m__4510__auto__$jscomp$inline_248$$.call(null, $JSCompiler_temp$jscomp$18_coll$jscomp$36$$, $n$jscomp$31$$, $val$jscomp$44$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_249_m__4510__auto__$jscomp$inline_248$$ = $cljs$core$_assoc_n$$._, null != $m__4508__auto__$jscomp$inline_249_m__4510__auto__$jscomp$inline_248$$) {
        $JSCompiler_temp$jscomp$18_coll$jscomp$36$$ = $m__4508__auto__$jscomp$inline_249_m__4510__auto__$jscomp$inline_248$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__4508__auto__$jscomp$inline_249_m__4510__auto__$jscomp$inline_248$$.$cljs$core$IFn$_invoke$arity$3$($JSCompiler_temp$jscomp$18_coll$jscomp$36$$, $n$jscomp$31$$, $val$jscomp$44$$) : $m__4508__auto__$jscomp$inline_249_m__4510__auto__$jscomp$inline_248$$.call(null, $JSCompiler_temp$jscomp$18_coll$jscomp$36$$, $n$jscomp$31$$, $val$jscomp$44$$);
      } else {
        throw $cljs$core$missing_protocol$$("IVector.-assoc-n", $JSCompiler_temp$jscomp$18_coll$jscomp$36$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$18_coll$jscomp$36$$;
}
function $cljs$core$_deref$$($JSCompiler_temp$jscomp$19_o$jscomp$41$$) {
  if (null != $JSCompiler_temp$jscomp$19_o$jscomp$41$$ && null != $JSCompiler_temp$jscomp$19_o$jscomp$41$$.$cljs$core$IDeref$_deref$arity$1$) {
    $JSCompiler_temp$jscomp$19_o$jscomp$41$$ = $JSCompiler_temp$jscomp$19_o$jscomp$41$$.$cljs$core$IDeref$_deref$arity$1$($JSCompiler_temp$jscomp$19_o$jscomp$41$$);
  } else {
    var $m__4508__auto__$jscomp$inline_253_m__4510__auto__$jscomp$inline_252$$ = $cljs$core$_deref$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$19_o$jscomp$41$$ ? null : $JSCompiler_temp$jscomp$19_o$jscomp$41$$)];
    if (null != $m__4508__auto__$jscomp$inline_253_m__4510__auto__$jscomp$inline_252$$) {
      $JSCompiler_temp$jscomp$19_o$jscomp$41$$ = $m__4508__auto__$jscomp$inline_253_m__4510__auto__$jscomp$inline_252$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_253_m__4510__auto__$jscomp$inline_252$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$19_o$jscomp$41$$) : $m__4508__auto__$jscomp$inline_253_m__4510__auto__$jscomp$inline_252$$.call(null, $JSCompiler_temp$jscomp$19_o$jscomp$41$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_253_m__4510__auto__$jscomp$inline_252$$ = $cljs$core$_deref$$._, null != $m__4508__auto__$jscomp$inline_253_m__4510__auto__$jscomp$inline_252$$) {
        $JSCompiler_temp$jscomp$19_o$jscomp$41$$ = $m__4508__auto__$jscomp$inline_253_m__4510__auto__$jscomp$inline_252$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_253_m__4510__auto__$jscomp$inline_252$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$19_o$jscomp$41$$) : $m__4508__auto__$jscomp$inline_253_m__4510__auto__$jscomp$inline_252$$.call(null, $JSCompiler_temp$jscomp$19_o$jscomp$41$$);
      } else {
        throw $cljs$core$missing_protocol$$("IDeref.-deref", $JSCompiler_temp$jscomp$19_o$jscomp$41$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$19_o$jscomp$41$$;
}
function $cljs$core$IMeta$$() {
}
function $cljs$core$_meta$$($JSCompiler_temp$jscomp$20_o$jscomp$45$$) {
  if (null != $JSCompiler_temp$jscomp$20_o$jscomp$45$$ && null != $JSCompiler_temp$jscomp$20_o$jscomp$45$$.$cljs$core$IMeta$_meta$arity$1$) {
    $JSCompiler_temp$jscomp$20_o$jscomp$45$$ = $JSCompiler_temp$jscomp$20_o$jscomp$45$$.$cljs$core$IMeta$_meta$arity$1$($JSCompiler_temp$jscomp$20_o$jscomp$45$$);
  } else {
    var $m__4508__auto__$jscomp$inline_257_m__4510__auto__$jscomp$inline_256$$ = $cljs$core$_meta$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$20_o$jscomp$45$$ ? null : $JSCompiler_temp$jscomp$20_o$jscomp$45$$)];
    if (null != $m__4508__auto__$jscomp$inline_257_m__4510__auto__$jscomp$inline_256$$) {
      $JSCompiler_temp$jscomp$20_o$jscomp$45$$ = $m__4508__auto__$jscomp$inline_257_m__4510__auto__$jscomp$inline_256$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_257_m__4510__auto__$jscomp$inline_256$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$20_o$jscomp$45$$) : $m__4508__auto__$jscomp$inline_257_m__4510__auto__$jscomp$inline_256$$.call(null, $JSCompiler_temp$jscomp$20_o$jscomp$45$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_257_m__4510__auto__$jscomp$inline_256$$ = $cljs$core$_meta$$._, null != $m__4508__auto__$jscomp$inline_257_m__4510__auto__$jscomp$inline_256$$) {
        $JSCompiler_temp$jscomp$20_o$jscomp$45$$ = $m__4508__auto__$jscomp$inline_257_m__4510__auto__$jscomp$inline_256$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_257_m__4510__auto__$jscomp$inline_256$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$20_o$jscomp$45$$) : $m__4508__auto__$jscomp$inline_257_m__4510__auto__$jscomp$inline_256$$.call(null, $JSCompiler_temp$jscomp$20_o$jscomp$45$$);
      } else {
        throw $cljs$core$missing_protocol$$("IMeta.-meta", $JSCompiler_temp$jscomp$20_o$jscomp$45$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$20_o$jscomp$45$$;
}
function $cljs$core$_with_meta$$($JSCompiler_temp$jscomp$21_o$jscomp$47$$, $meta$jscomp$1$$) {
  if (null != $JSCompiler_temp$jscomp$21_o$jscomp$47$$ && null != $JSCompiler_temp$jscomp$21_o$jscomp$47$$.$cljs$core$IWithMeta$_with_meta$arity$2$) {
    $JSCompiler_temp$jscomp$21_o$jscomp$47$$ = $JSCompiler_temp$jscomp$21_o$jscomp$47$$.$cljs$core$IWithMeta$_with_meta$arity$2$($JSCompiler_temp$jscomp$21_o$jscomp$47$$, $meta$jscomp$1$$);
  } else {
    var $m__4508__auto__$jscomp$inline_262_m__4510__auto__$jscomp$inline_261$$ = $cljs$core$_with_meta$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$21_o$jscomp$47$$ ? null : $JSCompiler_temp$jscomp$21_o$jscomp$47$$)];
    if (null != $m__4508__auto__$jscomp$inline_262_m__4510__auto__$jscomp$inline_261$$) {
      $JSCompiler_temp$jscomp$21_o$jscomp$47$$ = $m__4508__auto__$jscomp$inline_262_m__4510__auto__$jscomp$inline_261$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$inline_262_m__4510__auto__$jscomp$inline_261$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$jscomp$21_o$jscomp$47$$, $meta$jscomp$1$$) : $m__4508__auto__$jscomp$inline_262_m__4510__auto__$jscomp$inline_261$$.call(null, $JSCompiler_temp$jscomp$21_o$jscomp$47$$, $meta$jscomp$1$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_262_m__4510__auto__$jscomp$inline_261$$ = $cljs$core$_with_meta$$._, null != $m__4508__auto__$jscomp$inline_262_m__4510__auto__$jscomp$inline_261$$) {
        $JSCompiler_temp$jscomp$21_o$jscomp$47$$ = $m__4508__auto__$jscomp$inline_262_m__4510__auto__$jscomp$inline_261$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$inline_262_m__4510__auto__$jscomp$inline_261$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$jscomp$21_o$jscomp$47$$, $meta$jscomp$1$$) : $m__4508__auto__$jscomp$inline_262_m__4510__auto__$jscomp$inline_261$$.call(null, $JSCompiler_temp$jscomp$21_o$jscomp$47$$, $meta$jscomp$1$$);
      } else {
        throw $cljs$core$missing_protocol$$("IWithMeta.-with-meta", $JSCompiler_temp$jscomp$21_o$jscomp$47$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$21_o$jscomp$47$$;
}
function $cljs$core$IReduce$$() {
}
var $cljs$core$IReduce$_reduce$dyn_33162$$ = function() {
  function $G__33163__3$$($coll$jscomp$38$$, $f$jscomp$93$$, $start$jscomp$18$$) {
    var $m__4508__auto__$jscomp$48_m__4510__auto__$jscomp$48$$ = $cljs$core$_reduce$$[$goog$typeOf$$(null == $coll$jscomp$38$$ ? null : $coll$jscomp$38$$)];
    if (null != $m__4508__auto__$jscomp$48_m__4510__auto__$jscomp$48$$) {
      return $m__4508__auto__$jscomp$48_m__4510__auto__$jscomp$48$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__4508__auto__$jscomp$48_m__4510__auto__$jscomp$48$$.$cljs$core$IFn$_invoke$arity$3$($coll$jscomp$38$$, $f$jscomp$93$$, $start$jscomp$18$$) : $m__4508__auto__$jscomp$48_m__4510__auto__$jscomp$48$$.call(null, $coll$jscomp$38$$, $f$jscomp$93$$, $start$jscomp$18$$);
    }
    $m__4508__auto__$jscomp$48_m__4510__auto__$jscomp$48$$ = $cljs$core$_reduce$$._;
    if (null != $m__4508__auto__$jscomp$48_m__4510__auto__$jscomp$48$$) {
      return $m__4508__auto__$jscomp$48_m__4510__auto__$jscomp$48$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__4508__auto__$jscomp$48_m__4510__auto__$jscomp$48$$.$cljs$core$IFn$_invoke$arity$3$($coll$jscomp$38$$, $f$jscomp$93$$, $start$jscomp$18$$) : $m__4508__auto__$jscomp$48_m__4510__auto__$jscomp$48$$.call(null, $coll$jscomp$38$$, $f$jscomp$93$$, $start$jscomp$18$$);
    }
    throw $cljs$core$missing_protocol$$("IReduce.-reduce", $coll$jscomp$38$$);
  }
  function $G__33163__2$$($coll$jscomp$37$$, $f$jscomp$92$$) {
    var $m__4508__auto__$jscomp$47_m__4510__auto__$jscomp$47$$ = $cljs$core$_reduce$$[$goog$typeOf$$(null == $coll$jscomp$37$$ ? null : $coll$jscomp$37$$)];
    if (null != $m__4508__auto__$jscomp$47_m__4510__auto__$jscomp$47$$) {
      return $m__4508__auto__$jscomp$47_m__4510__auto__$jscomp$47$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$47_m__4510__auto__$jscomp$47$$.$cljs$core$IFn$_invoke$arity$2$($coll$jscomp$37$$, $f$jscomp$92$$) : $m__4508__auto__$jscomp$47_m__4510__auto__$jscomp$47$$.call(null, $coll$jscomp$37$$, $f$jscomp$92$$);
    }
    $m__4508__auto__$jscomp$47_m__4510__auto__$jscomp$47$$ = $cljs$core$_reduce$$._;
    if (null != $m__4508__auto__$jscomp$47_m__4510__auto__$jscomp$47$$) {
      return $m__4508__auto__$jscomp$47_m__4510__auto__$jscomp$47$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$47_m__4510__auto__$jscomp$47$$.$cljs$core$IFn$_invoke$arity$2$($coll$jscomp$37$$, $f$jscomp$92$$) : $m__4508__auto__$jscomp$47_m__4510__auto__$jscomp$47$$.call(null, $coll$jscomp$37$$, $f$jscomp$92$$);
    }
    throw $cljs$core$missing_protocol$$("IReduce.-reduce", $coll$jscomp$37$$);
  }
  var $G__33163$$ = null;
  $G__33163$$ = function($coll$jscomp$39$$, $f$jscomp$94$$, $start$jscomp$19$$) {
    switch(arguments.length) {
      case 2:
        return $G__33163__2$$.call(this, $coll$jscomp$39$$, $f$jscomp$94$$);
      case 3:
        return $G__33163__3$$.call(this, $coll$jscomp$39$$, $f$jscomp$94$$, $start$jscomp$19$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__33163$$.$cljs$core$IFn$_invoke$arity$2$ = $G__33163__2$$;
  $G__33163$$.$cljs$core$IFn$_invoke$arity$3$ = $G__33163__3$$;
  return $G__33163$$;
}(), $cljs$core$_reduce$$ = function $cljs$core$_reduce$$($var_args$jscomp$108$$) {
  switch(arguments.length) {
    case 2:
      return $cljs$core$_reduce$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$_reduce$$.$cljs$core$IFn$_invoke$arity$3$(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length)].join(""));
  }
};
$cljs$core$_reduce$$.$cljs$core$IFn$_invoke$arity$2$ = function($coll$jscomp$40$$, $f$jscomp$95$$) {
  return null != $coll$jscomp$40$$ && null != $coll$jscomp$40$$.$cljs$core$IReduce$_reduce$arity$2$ ? $coll$jscomp$40$$.$cljs$core$IReduce$_reduce$arity$2$($coll$jscomp$40$$, $f$jscomp$95$$) : $cljs$core$IReduce$_reduce$dyn_33162$$($coll$jscomp$40$$, $f$jscomp$95$$);
};
$cljs$core$_reduce$$.$cljs$core$IFn$_invoke$arity$3$ = function($coll$jscomp$41$$, $f$jscomp$96$$, $start$jscomp$20$$) {
  return null != $coll$jscomp$41$$ && null != $coll$jscomp$41$$.$cljs$core$IReduce$_reduce$arity$3$ ? $coll$jscomp$41$$.$cljs$core$IReduce$_reduce$arity$3$($coll$jscomp$41$$, $f$jscomp$96$$, $start$jscomp$20$$) : $cljs$core$IReduce$_reduce$dyn_33162$$($coll$jscomp$41$$, $f$jscomp$96$$, $start$jscomp$20$$);
};
$cljs$core$_reduce$$.$cljs$lang$maxFixedArity$ = 3;
function $cljs$core$IKVReduce$$() {
}
function $cljs$core$_kv_reduce$$($JSCompiler_temp$jscomp$22_coll$jscomp$43$$, $f$jscomp$98$$, $init$jscomp$5$$) {
  if (null != $JSCompiler_temp$jscomp$22_coll$jscomp$43$$ && null != $JSCompiler_temp$jscomp$22_coll$jscomp$43$$.$cljs$core$IKVReduce$_kv_reduce$arity$3$) {
    $JSCompiler_temp$jscomp$22_coll$jscomp$43$$ = $JSCompiler_temp$jscomp$22_coll$jscomp$43$$.$cljs$core$IKVReduce$_kv_reduce$arity$3$($JSCompiler_temp$jscomp$22_coll$jscomp$43$$, $f$jscomp$98$$, $init$jscomp$5$$);
  } else {
    var $m__4508__auto__$jscomp$inline_268_m__4510__auto__$jscomp$inline_267$$ = $cljs$core$_kv_reduce$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$22_coll$jscomp$43$$ ? null : $JSCompiler_temp$jscomp$22_coll$jscomp$43$$)];
    if (null != $m__4508__auto__$jscomp$inline_268_m__4510__auto__$jscomp$inline_267$$) {
      $JSCompiler_temp$jscomp$22_coll$jscomp$43$$ = $m__4508__auto__$jscomp$inline_268_m__4510__auto__$jscomp$inline_267$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__4508__auto__$jscomp$inline_268_m__4510__auto__$jscomp$inline_267$$.$cljs$core$IFn$_invoke$arity$3$($JSCompiler_temp$jscomp$22_coll$jscomp$43$$, $f$jscomp$98$$, $init$jscomp$5$$) : $m__4508__auto__$jscomp$inline_268_m__4510__auto__$jscomp$inline_267$$.call(null, $JSCompiler_temp$jscomp$22_coll$jscomp$43$$, $f$jscomp$98$$, $init$jscomp$5$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_268_m__4510__auto__$jscomp$inline_267$$ = $cljs$core$_kv_reduce$$._, null != $m__4508__auto__$jscomp$inline_268_m__4510__auto__$jscomp$inline_267$$) {
        $JSCompiler_temp$jscomp$22_coll$jscomp$43$$ = $m__4508__auto__$jscomp$inline_268_m__4510__auto__$jscomp$inline_267$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__4508__auto__$jscomp$inline_268_m__4510__auto__$jscomp$inline_267$$.$cljs$core$IFn$_invoke$arity$3$($JSCompiler_temp$jscomp$22_coll$jscomp$43$$, $f$jscomp$98$$, $init$jscomp$5$$) : $m__4508__auto__$jscomp$inline_268_m__4510__auto__$jscomp$inline_267$$.call(null, $JSCompiler_temp$jscomp$22_coll$jscomp$43$$, $f$jscomp$98$$, $init$jscomp$5$$);
      } else {
        throw $cljs$core$missing_protocol$$("IKVReduce.-kv-reduce", $JSCompiler_temp$jscomp$22_coll$jscomp$43$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$22_coll$jscomp$43$$;
}
function $cljs$core$_equiv$$($JSCompiler_temp$jscomp$23_o$jscomp$49$$, $other$jscomp$45$$) {
  if (null != $JSCompiler_temp$jscomp$23_o$jscomp$49$$ && null != $JSCompiler_temp$jscomp$23_o$jscomp$49$$.$cljs$core$IEquiv$_equiv$arity$2$) {
    $JSCompiler_temp$jscomp$23_o$jscomp$49$$ = $JSCompiler_temp$jscomp$23_o$jscomp$49$$.$cljs$core$IEquiv$_equiv$arity$2$($JSCompiler_temp$jscomp$23_o$jscomp$49$$, $other$jscomp$45$$);
  } else {
    var $m__4508__auto__$jscomp$inline_273_m__4510__auto__$jscomp$inline_272$$ = $cljs$core$_equiv$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$23_o$jscomp$49$$ ? null : $JSCompiler_temp$jscomp$23_o$jscomp$49$$)];
    if (null != $m__4508__auto__$jscomp$inline_273_m__4510__auto__$jscomp$inline_272$$) {
      $JSCompiler_temp$jscomp$23_o$jscomp$49$$ = $m__4508__auto__$jscomp$inline_273_m__4510__auto__$jscomp$inline_272$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$inline_273_m__4510__auto__$jscomp$inline_272$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$jscomp$23_o$jscomp$49$$, $other$jscomp$45$$) : $m__4508__auto__$jscomp$inline_273_m__4510__auto__$jscomp$inline_272$$.call(null, $JSCompiler_temp$jscomp$23_o$jscomp$49$$, $other$jscomp$45$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_273_m__4510__auto__$jscomp$inline_272$$ = $cljs$core$_equiv$$._, null != $m__4508__auto__$jscomp$inline_273_m__4510__auto__$jscomp$inline_272$$) {
        $JSCompiler_temp$jscomp$23_o$jscomp$49$$ = $m__4508__auto__$jscomp$inline_273_m__4510__auto__$jscomp$inline_272$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$inline_273_m__4510__auto__$jscomp$inline_272$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$jscomp$23_o$jscomp$49$$, $other$jscomp$45$$) : $m__4508__auto__$jscomp$inline_273_m__4510__auto__$jscomp$inline_272$$.call(null, $JSCompiler_temp$jscomp$23_o$jscomp$49$$, $other$jscomp$45$$);
      } else {
        throw $cljs$core$missing_protocol$$("IEquiv.-equiv", $JSCompiler_temp$jscomp$23_o$jscomp$49$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$23_o$jscomp$49$$;
}
function $cljs$core$_hash$$($JSCompiler_temp$jscomp$24_o$jscomp$51$$) {
  if (null != $JSCompiler_temp$jscomp$24_o$jscomp$51$$ && null != $JSCompiler_temp$jscomp$24_o$jscomp$51$$.$cljs$core$IHash$_hash$arity$1$) {
    $JSCompiler_temp$jscomp$24_o$jscomp$51$$ = $JSCompiler_temp$jscomp$24_o$jscomp$51$$.$cljs$core$IHash$_hash$arity$1$($JSCompiler_temp$jscomp$24_o$jscomp$51$$);
  } else {
    var $m__4508__auto__$jscomp$inline_277_m__4510__auto__$jscomp$inline_276$$ = $cljs$core$_hash$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$24_o$jscomp$51$$ ? null : $JSCompiler_temp$jscomp$24_o$jscomp$51$$)];
    if (null != $m__4508__auto__$jscomp$inline_277_m__4510__auto__$jscomp$inline_276$$) {
      $JSCompiler_temp$jscomp$24_o$jscomp$51$$ = $m__4508__auto__$jscomp$inline_277_m__4510__auto__$jscomp$inline_276$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_277_m__4510__auto__$jscomp$inline_276$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$24_o$jscomp$51$$) : $m__4508__auto__$jscomp$inline_277_m__4510__auto__$jscomp$inline_276$$.call(null, $JSCompiler_temp$jscomp$24_o$jscomp$51$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_277_m__4510__auto__$jscomp$inline_276$$ = $cljs$core$_hash$$._, null != $m__4508__auto__$jscomp$inline_277_m__4510__auto__$jscomp$inline_276$$) {
        $JSCompiler_temp$jscomp$24_o$jscomp$51$$ = $m__4508__auto__$jscomp$inline_277_m__4510__auto__$jscomp$inline_276$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_277_m__4510__auto__$jscomp$inline_276$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$24_o$jscomp$51$$) : $m__4508__auto__$jscomp$inline_277_m__4510__auto__$jscomp$inline_276$$.call(null, $JSCompiler_temp$jscomp$24_o$jscomp$51$$);
      } else {
        throw $cljs$core$missing_protocol$$("IHash.-hash", $JSCompiler_temp$jscomp$24_o$jscomp$51$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$24_o$jscomp$51$$;
}
function $cljs$core$ISeqable$$() {
}
function $cljs$core$_seq$$($JSCompiler_temp$jscomp$25_o$jscomp$53$$) {
  if (null != $JSCompiler_temp$jscomp$25_o$jscomp$53$$ && null != $JSCompiler_temp$jscomp$25_o$jscomp$53$$.$cljs$core$ISeqable$_seq$arity$1$) {
    $JSCompiler_temp$jscomp$25_o$jscomp$53$$ = $JSCompiler_temp$jscomp$25_o$jscomp$53$$.$cljs$core$ISeqable$_seq$arity$1$($JSCompiler_temp$jscomp$25_o$jscomp$53$$);
  } else {
    var $m__4508__auto__$jscomp$inline_281_m__4510__auto__$jscomp$inline_280$$ = $cljs$core$_seq$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$25_o$jscomp$53$$ ? null : $JSCompiler_temp$jscomp$25_o$jscomp$53$$)];
    if (null != $m__4508__auto__$jscomp$inline_281_m__4510__auto__$jscomp$inline_280$$) {
      $JSCompiler_temp$jscomp$25_o$jscomp$53$$ = $m__4508__auto__$jscomp$inline_281_m__4510__auto__$jscomp$inline_280$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_281_m__4510__auto__$jscomp$inline_280$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$25_o$jscomp$53$$) : $m__4508__auto__$jscomp$inline_281_m__4510__auto__$jscomp$inline_280$$.call(null, $JSCompiler_temp$jscomp$25_o$jscomp$53$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_281_m__4510__auto__$jscomp$inline_280$$ = $cljs$core$_seq$$._, null != $m__4508__auto__$jscomp$inline_281_m__4510__auto__$jscomp$inline_280$$) {
        $JSCompiler_temp$jscomp$25_o$jscomp$53$$ = $m__4508__auto__$jscomp$inline_281_m__4510__auto__$jscomp$inline_280$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_281_m__4510__auto__$jscomp$inline_280$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$25_o$jscomp$53$$) : $m__4508__auto__$jscomp$inline_281_m__4510__auto__$jscomp$inline_280$$.call(null, $JSCompiler_temp$jscomp$25_o$jscomp$53$$);
      } else {
        throw $cljs$core$missing_protocol$$("ISeqable.-seq", $JSCompiler_temp$jscomp$25_o$jscomp$53$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$25_o$jscomp$53$$;
}
function $cljs$core$ISequential$$() {
}
function $cljs$core$IList$$() {
}
function $cljs$core$IRecord$$() {
}
function $cljs$core$_write$$($JSCompiler_temp$jscomp$26_writer$jscomp$1$$, $s$jscomp$31$$) {
  if (null != $JSCompiler_temp$jscomp$26_writer$jscomp$1$$ && null != $JSCompiler_temp$jscomp$26_writer$jscomp$1$$.$cljs$core$IWriter$_write$arity$2$) {
    $JSCompiler_temp$jscomp$26_writer$jscomp$1$$ = $JSCompiler_temp$jscomp$26_writer$jscomp$1$$.$cljs$core$IWriter$_write$arity$2$($JSCompiler_temp$jscomp$26_writer$jscomp$1$$, $s$jscomp$31$$);
  } else {
    var $m__4508__auto__$jscomp$inline_286_m__4510__auto__$jscomp$inline_285$$ = $cljs$core$_write$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$26_writer$jscomp$1$$ ? null : $JSCompiler_temp$jscomp$26_writer$jscomp$1$$)];
    if (null != $m__4508__auto__$jscomp$inline_286_m__4510__auto__$jscomp$inline_285$$) {
      $JSCompiler_temp$jscomp$26_writer$jscomp$1$$ = $m__4508__auto__$jscomp$inline_286_m__4510__auto__$jscomp$inline_285$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$inline_286_m__4510__auto__$jscomp$inline_285$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$jscomp$26_writer$jscomp$1$$, $s$jscomp$31$$) : $m__4508__auto__$jscomp$inline_286_m__4510__auto__$jscomp$inline_285$$.call(null, $JSCompiler_temp$jscomp$26_writer$jscomp$1$$, $s$jscomp$31$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_286_m__4510__auto__$jscomp$inline_285$$ = $cljs$core$_write$$._, null != $m__4508__auto__$jscomp$inline_286_m__4510__auto__$jscomp$inline_285$$) {
        $JSCompiler_temp$jscomp$26_writer$jscomp$1$$ = $m__4508__auto__$jscomp$inline_286_m__4510__auto__$jscomp$inline_285$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$inline_286_m__4510__auto__$jscomp$inline_285$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$jscomp$26_writer$jscomp$1$$, $s$jscomp$31$$) : $m__4508__auto__$jscomp$inline_286_m__4510__auto__$jscomp$inline_285$$.call(null, $JSCompiler_temp$jscomp$26_writer$jscomp$1$$, $s$jscomp$31$$);
      } else {
        throw $cljs$core$missing_protocol$$("IWriter.-write", $JSCompiler_temp$jscomp$26_writer$jscomp$1$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$26_writer$jscomp$1$$;
}
function $cljs$core$IPrintWithWriter$$() {
}
function $cljs$core$_pr_writer$$($JSCompiler_temp$jscomp$27_o$jscomp$55$$, $writer$jscomp$5$$, $opts$jscomp$1$$) {
  if (null != $JSCompiler_temp$jscomp$27_o$jscomp$55$$ && null != $JSCompiler_temp$jscomp$27_o$jscomp$55$$.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$) {
    $JSCompiler_temp$jscomp$27_o$jscomp$55$$ = $JSCompiler_temp$jscomp$27_o$jscomp$55$$.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$($JSCompiler_temp$jscomp$27_o$jscomp$55$$, $writer$jscomp$5$$, $opts$jscomp$1$$);
  } else {
    var $m__4508__auto__$jscomp$inline_292_m__4510__auto__$jscomp$inline_291$$ = $cljs$core$_pr_writer$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$27_o$jscomp$55$$ ? null : $JSCompiler_temp$jscomp$27_o$jscomp$55$$)];
    if (null != $m__4508__auto__$jscomp$inline_292_m__4510__auto__$jscomp$inline_291$$) {
      $JSCompiler_temp$jscomp$27_o$jscomp$55$$ = $m__4508__auto__$jscomp$inline_292_m__4510__auto__$jscomp$inline_291$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__4508__auto__$jscomp$inline_292_m__4510__auto__$jscomp$inline_291$$.$cljs$core$IFn$_invoke$arity$3$($JSCompiler_temp$jscomp$27_o$jscomp$55$$, $writer$jscomp$5$$, $opts$jscomp$1$$) : $m__4508__auto__$jscomp$inline_292_m__4510__auto__$jscomp$inline_291$$.call(null, $JSCompiler_temp$jscomp$27_o$jscomp$55$$, $writer$jscomp$5$$, $opts$jscomp$1$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_292_m__4510__auto__$jscomp$inline_291$$ = $cljs$core$_pr_writer$$._, null != $m__4508__auto__$jscomp$inline_292_m__4510__auto__$jscomp$inline_291$$) {
        $JSCompiler_temp$jscomp$27_o$jscomp$55$$ = $m__4508__auto__$jscomp$inline_292_m__4510__auto__$jscomp$inline_291$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__4508__auto__$jscomp$inline_292_m__4510__auto__$jscomp$inline_291$$.$cljs$core$IFn$_invoke$arity$3$($JSCompiler_temp$jscomp$27_o$jscomp$55$$, $writer$jscomp$5$$, $opts$jscomp$1$$) : $m__4508__auto__$jscomp$inline_292_m__4510__auto__$jscomp$inline_291$$.call(null, $JSCompiler_temp$jscomp$27_o$jscomp$55$$, $writer$jscomp$5$$, $opts$jscomp$1$$);
      } else {
        throw $cljs$core$missing_protocol$$("IPrintWithWriter.-pr-writer", $JSCompiler_temp$jscomp$27_o$jscomp$55$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$27_o$jscomp$55$$;
}
function $cljs$core$_add_watch$$($this$$jscomp$48$$, $key$jscomp$112$$) {
  var $f$jscomp$100$$ = $reagent$ratom$handle_reaction_change$$;
  if (null != $this$$jscomp$48$$ && null != $this$$jscomp$48$$.$cljs$core$IWatchable$_add_watch$arity$3$) {
    $this$$jscomp$48$$.$cljs$core$IWatchable$_add_watch$arity$3$($this$$jscomp$48$$, $key$jscomp$112$$, $f$jscomp$100$$);
  } else {
    var $m__4508__auto__$jscomp$inline_298_m__4510__auto__$jscomp$inline_297$$ = $cljs$core$_add_watch$$[$goog$typeOf$$(null == $this$$jscomp$48$$ ? null : $this$$jscomp$48$$)];
    if (null != $m__4508__auto__$jscomp$inline_298_m__4510__auto__$jscomp$inline_297$$) {
      $m__4508__auto__$jscomp$inline_298_m__4510__auto__$jscomp$inline_297$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__4508__auto__$jscomp$inline_298_m__4510__auto__$jscomp$inline_297$$.$cljs$core$IFn$_invoke$arity$3$($this$$jscomp$48$$, $key$jscomp$112$$, $f$jscomp$100$$) : $m__4508__auto__$jscomp$inline_298_m__4510__auto__$jscomp$inline_297$$.call(null, $this$$jscomp$48$$, $key$jscomp$112$$, $f$jscomp$100$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_298_m__4510__auto__$jscomp$inline_297$$ = $cljs$core$_add_watch$$._, null != $m__4508__auto__$jscomp$inline_298_m__4510__auto__$jscomp$inline_297$$) {
        $m__4508__auto__$jscomp$inline_298_m__4510__auto__$jscomp$inline_297$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__4508__auto__$jscomp$inline_298_m__4510__auto__$jscomp$inline_297$$.$cljs$core$IFn$_invoke$arity$3$($this$$jscomp$48$$, $key$jscomp$112$$, $f$jscomp$100$$) : $m__4508__auto__$jscomp$inline_298_m__4510__auto__$jscomp$inline_297$$.call(null, $this$$jscomp$48$$, $key$jscomp$112$$, $f$jscomp$100$$);
      } else {
        throw $cljs$core$missing_protocol$$("IWatchable.-add-watch", $this$$jscomp$48$$);
      }
    }
  }
}
function $cljs$core$_remove_watch$$($this$$jscomp$50$$, $key$jscomp$114$$) {
  if (null != $this$$jscomp$50$$ && null != $this$$jscomp$50$$.$cljs$core$IWatchable$_remove_watch$arity$2$) {
    $this$$jscomp$50$$.$cljs$core$IWatchable$_remove_watch$arity$2$($this$$jscomp$50$$, $key$jscomp$114$$);
  } else {
    var $m__4508__auto__$jscomp$inline_303_m__4510__auto__$jscomp$inline_302$$ = $cljs$core$_remove_watch$$[$goog$typeOf$$(null == $this$$jscomp$50$$ ? null : $this$$jscomp$50$$)];
    if (null != $m__4508__auto__$jscomp$inline_303_m__4510__auto__$jscomp$inline_302$$) {
      $m__4508__auto__$jscomp$inline_303_m__4510__auto__$jscomp$inline_302$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$inline_303_m__4510__auto__$jscomp$inline_302$$.$cljs$core$IFn$_invoke$arity$2$($this$$jscomp$50$$, $key$jscomp$114$$) : $m__4508__auto__$jscomp$inline_303_m__4510__auto__$jscomp$inline_302$$.call(null, $this$$jscomp$50$$, $key$jscomp$114$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_303_m__4510__auto__$jscomp$inline_302$$ = $cljs$core$_remove_watch$$._, null != $m__4508__auto__$jscomp$inline_303_m__4510__auto__$jscomp$inline_302$$) {
        $m__4508__auto__$jscomp$inline_303_m__4510__auto__$jscomp$inline_302$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$inline_303_m__4510__auto__$jscomp$inline_302$$.$cljs$core$IFn$_invoke$arity$2$($this$$jscomp$50$$, $key$jscomp$114$$) : $m__4508__auto__$jscomp$inline_303_m__4510__auto__$jscomp$inline_302$$.call(null, $this$$jscomp$50$$, $key$jscomp$114$$);
      } else {
        throw $cljs$core$missing_protocol$$("IWatchable.-remove-watch", $this$$jscomp$50$$);
      }
    }
  }
}
function $cljs$core$_as_transient$$($JSCompiler_temp$jscomp$30_coll$jscomp$55$$) {
  if (null != $JSCompiler_temp$jscomp$30_coll$jscomp$55$$ && null != $JSCompiler_temp$jscomp$30_coll$jscomp$55$$.$cljs$core$IEditableCollection$_as_transient$arity$1$) {
    $JSCompiler_temp$jscomp$30_coll$jscomp$55$$ = $JSCompiler_temp$jscomp$30_coll$jscomp$55$$.$cljs$core$IEditableCollection$_as_transient$arity$1$($JSCompiler_temp$jscomp$30_coll$jscomp$55$$);
  } else {
    var $m__4508__auto__$jscomp$inline_307_m__4510__auto__$jscomp$inline_306$$ = $cljs$core$_as_transient$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$30_coll$jscomp$55$$ ? null : $JSCompiler_temp$jscomp$30_coll$jscomp$55$$)];
    if (null != $m__4508__auto__$jscomp$inline_307_m__4510__auto__$jscomp$inline_306$$) {
      $JSCompiler_temp$jscomp$30_coll$jscomp$55$$ = $m__4508__auto__$jscomp$inline_307_m__4510__auto__$jscomp$inline_306$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_307_m__4510__auto__$jscomp$inline_306$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$30_coll$jscomp$55$$) : $m__4508__auto__$jscomp$inline_307_m__4510__auto__$jscomp$inline_306$$.call(null, $JSCompiler_temp$jscomp$30_coll$jscomp$55$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_307_m__4510__auto__$jscomp$inline_306$$ = $cljs$core$_as_transient$$._, null != $m__4508__auto__$jscomp$inline_307_m__4510__auto__$jscomp$inline_306$$) {
        $JSCompiler_temp$jscomp$30_coll$jscomp$55$$ = $m__4508__auto__$jscomp$inline_307_m__4510__auto__$jscomp$inline_306$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_307_m__4510__auto__$jscomp$inline_306$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$30_coll$jscomp$55$$) : $m__4508__auto__$jscomp$inline_307_m__4510__auto__$jscomp$inline_306$$.call(null, $JSCompiler_temp$jscomp$30_coll$jscomp$55$$);
      } else {
        throw $cljs$core$missing_protocol$$("IEditableCollection.-as-transient", $JSCompiler_temp$jscomp$30_coll$jscomp$55$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$30_coll$jscomp$55$$;
}
function $cljs$core$_conj_BANG_$$($JSCompiler_temp$jscomp$31_tcoll$jscomp$1$$, $val$jscomp$46$$) {
  if (null != $JSCompiler_temp$jscomp$31_tcoll$jscomp$1$$ && null != $JSCompiler_temp$jscomp$31_tcoll$jscomp$1$$.$cljs$core$ITransientCollection$_conj_BANG_$arity$2$) {
    $JSCompiler_temp$jscomp$31_tcoll$jscomp$1$$ = $JSCompiler_temp$jscomp$31_tcoll$jscomp$1$$.$cljs$core$ITransientCollection$_conj_BANG_$arity$2$($JSCompiler_temp$jscomp$31_tcoll$jscomp$1$$, $val$jscomp$46$$);
  } else {
    var $m__4508__auto__$jscomp$inline_312_m__4510__auto__$jscomp$inline_311$$ = $cljs$core$_conj_BANG_$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$31_tcoll$jscomp$1$$ ? null : $JSCompiler_temp$jscomp$31_tcoll$jscomp$1$$)];
    if (null != $m__4508__auto__$jscomp$inline_312_m__4510__auto__$jscomp$inline_311$$) {
      $JSCompiler_temp$jscomp$31_tcoll$jscomp$1$$ = $m__4508__auto__$jscomp$inline_312_m__4510__auto__$jscomp$inline_311$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$inline_312_m__4510__auto__$jscomp$inline_311$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$jscomp$31_tcoll$jscomp$1$$, $val$jscomp$46$$) : $m__4508__auto__$jscomp$inline_312_m__4510__auto__$jscomp$inline_311$$.call(null, $JSCompiler_temp$jscomp$31_tcoll$jscomp$1$$, $val$jscomp$46$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_312_m__4510__auto__$jscomp$inline_311$$ = $cljs$core$_conj_BANG_$$._, null != $m__4508__auto__$jscomp$inline_312_m__4510__auto__$jscomp$inline_311$$) {
        $JSCompiler_temp$jscomp$31_tcoll$jscomp$1$$ = $m__4508__auto__$jscomp$inline_312_m__4510__auto__$jscomp$inline_311$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$inline_312_m__4510__auto__$jscomp$inline_311$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$jscomp$31_tcoll$jscomp$1$$, $val$jscomp$46$$) : $m__4508__auto__$jscomp$inline_312_m__4510__auto__$jscomp$inline_311$$.call(null, $JSCompiler_temp$jscomp$31_tcoll$jscomp$1$$, $val$jscomp$46$$);
      } else {
        throw $cljs$core$missing_protocol$$("ITransientCollection.-conj!", $JSCompiler_temp$jscomp$31_tcoll$jscomp$1$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$31_tcoll$jscomp$1$$;
}
function $cljs$core$_persistent_BANG_$$($JSCompiler_temp$jscomp$32_tcoll$jscomp$3$$) {
  if (null != $JSCompiler_temp$jscomp$32_tcoll$jscomp$3$$ && null != $JSCompiler_temp$jscomp$32_tcoll$jscomp$3$$.$cljs$core$ITransientCollection$_persistent_BANG_$arity$1$) {
    $JSCompiler_temp$jscomp$32_tcoll$jscomp$3$$ = $JSCompiler_temp$jscomp$32_tcoll$jscomp$3$$.$cljs$core$ITransientCollection$_persistent_BANG_$arity$1$($JSCompiler_temp$jscomp$32_tcoll$jscomp$3$$);
  } else {
    var $m__4508__auto__$jscomp$inline_316_m__4510__auto__$jscomp$inline_315$$ = $cljs$core$_persistent_BANG_$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$32_tcoll$jscomp$3$$ ? null : $JSCompiler_temp$jscomp$32_tcoll$jscomp$3$$)];
    if (null != $m__4508__auto__$jscomp$inline_316_m__4510__auto__$jscomp$inline_315$$) {
      $JSCompiler_temp$jscomp$32_tcoll$jscomp$3$$ = $m__4508__auto__$jscomp$inline_316_m__4510__auto__$jscomp$inline_315$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_316_m__4510__auto__$jscomp$inline_315$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$32_tcoll$jscomp$3$$) : $m__4508__auto__$jscomp$inline_316_m__4510__auto__$jscomp$inline_315$$.call(null, $JSCompiler_temp$jscomp$32_tcoll$jscomp$3$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_316_m__4510__auto__$jscomp$inline_315$$ = $cljs$core$_persistent_BANG_$$._, null != $m__4508__auto__$jscomp$inline_316_m__4510__auto__$jscomp$inline_315$$) {
        $JSCompiler_temp$jscomp$32_tcoll$jscomp$3$$ = $m__4508__auto__$jscomp$inline_316_m__4510__auto__$jscomp$inline_315$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_316_m__4510__auto__$jscomp$inline_315$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$32_tcoll$jscomp$3$$) : $m__4508__auto__$jscomp$inline_316_m__4510__auto__$jscomp$inline_315$$.call(null, $JSCompiler_temp$jscomp$32_tcoll$jscomp$3$$);
      } else {
        throw $cljs$core$missing_protocol$$("ITransientCollection.-persistent!", $JSCompiler_temp$jscomp$32_tcoll$jscomp$3$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$32_tcoll$jscomp$3$$;
}
function $cljs$core$_assoc_BANG_$$($JSCompiler_temp$jscomp$33_tcoll$jscomp$5$$, $key$jscomp$116$$, $val$jscomp$48$$) {
  if (null != $JSCompiler_temp$jscomp$33_tcoll$jscomp$5$$ && null != $JSCompiler_temp$jscomp$33_tcoll$jscomp$5$$.$cljs$core$ITransientAssociative$_assoc_BANG_$arity$3$) {
    $JSCompiler_temp$jscomp$33_tcoll$jscomp$5$$ = $JSCompiler_temp$jscomp$33_tcoll$jscomp$5$$.$cljs$core$ITransientAssociative$_assoc_BANG_$arity$3$($JSCompiler_temp$jscomp$33_tcoll$jscomp$5$$, $key$jscomp$116$$, $val$jscomp$48$$);
  } else {
    var $m__4508__auto__$jscomp$inline_322_m__4510__auto__$jscomp$inline_321$$ = $cljs$core$_assoc_BANG_$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$33_tcoll$jscomp$5$$ ? null : $JSCompiler_temp$jscomp$33_tcoll$jscomp$5$$)];
    if (null != $m__4508__auto__$jscomp$inline_322_m__4510__auto__$jscomp$inline_321$$) {
      $JSCompiler_temp$jscomp$33_tcoll$jscomp$5$$ = $m__4508__auto__$jscomp$inline_322_m__4510__auto__$jscomp$inline_321$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__4508__auto__$jscomp$inline_322_m__4510__auto__$jscomp$inline_321$$.$cljs$core$IFn$_invoke$arity$3$($JSCompiler_temp$jscomp$33_tcoll$jscomp$5$$, $key$jscomp$116$$, $val$jscomp$48$$) : $m__4508__auto__$jscomp$inline_322_m__4510__auto__$jscomp$inline_321$$.call(null, $JSCompiler_temp$jscomp$33_tcoll$jscomp$5$$, $key$jscomp$116$$, $val$jscomp$48$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_322_m__4510__auto__$jscomp$inline_321$$ = $cljs$core$_assoc_BANG_$$._, null != $m__4508__auto__$jscomp$inline_322_m__4510__auto__$jscomp$inline_321$$) {
        $JSCompiler_temp$jscomp$33_tcoll$jscomp$5$$ = $m__4508__auto__$jscomp$inline_322_m__4510__auto__$jscomp$inline_321$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__4508__auto__$jscomp$inline_322_m__4510__auto__$jscomp$inline_321$$.$cljs$core$IFn$_invoke$arity$3$($JSCompiler_temp$jscomp$33_tcoll$jscomp$5$$, $key$jscomp$116$$, $val$jscomp$48$$) : $m__4508__auto__$jscomp$inline_322_m__4510__auto__$jscomp$inline_321$$.call(null, $JSCompiler_temp$jscomp$33_tcoll$jscomp$5$$, $key$jscomp$116$$, $val$jscomp$48$$);
      } else {
        throw $cljs$core$missing_protocol$$("ITransientAssociative.-assoc!", $JSCompiler_temp$jscomp$33_tcoll$jscomp$5$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$33_tcoll$jscomp$5$$;
}
function $cljs$core$_drop_first$$($JSCompiler_temp$jscomp$34_coll$jscomp$57$$) {
  if (null != $JSCompiler_temp$jscomp$34_coll$jscomp$57$$ && null != $JSCompiler_temp$jscomp$34_coll$jscomp$57$$.$cljs$core$IChunk$_drop_first$arity$1$) {
    $JSCompiler_temp$jscomp$34_coll$jscomp$57$$ = $JSCompiler_temp$jscomp$34_coll$jscomp$57$$.$cljs$core$IChunk$_drop_first$arity$1$($JSCompiler_temp$jscomp$34_coll$jscomp$57$$);
  } else {
    var $m__4508__auto__$jscomp$inline_326_m__4510__auto__$jscomp$inline_325$$ = $cljs$core$_drop_first$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$34_coll$jscomp$57$$ ? null : $JSCompiler_temp$jscomp$34_coll$jscomp$57$$)];
    if (null != $m__4508__auto__$jscomp$inline_326_m__4510__auto__$jscomp$inline_325$$) {
      $JSCompiler_temp$jscomp$34_coll$jscomp$57$$ = $m__4508__auto__$jscomp$inline_326_m__4510__auto__$jscomp$inline_325$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_326_m__4510__auto__$jscomp$inline_325$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$34_coll$jscomp$57$$) : $m__4508__auto__$jscomp$inline_326_m__4510__auto__$jscomp$inline_325$$.call(null, $JSCompiler_temp$jscomp$34_coll$jscomp$57$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_326_m__4510__auto__$jscomp$inline_325$$ = $cljs$core$_drop_first$$._, null != $m__4508__auto__$jscomp$inline_326_m__4510__auto__$jscomp$inline_325$$) {
        $JSCompiler_temp$jscomp$34_coll$jscomp$57$$ = $m__4508__auto__$jscomp$inline_326_m__4510__auto__$jscomp$inline_325$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_326_m__4510__auto__$jscomp$inline_325$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$34_coll$jscomp$57$$) : $m__4508__auto__$jscomp$inline_326_m__4510__auto__$jscomp$inline_325$$.call(null, $JSCompiler_temp$jscomp$34_coll$jscomp$57$$);
      } else {
        throw $cljs$core$missing_protocol$$("IChunk.-drop-first", $JSCompiler_temp$jscomp$34_coll$jscomp$57$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$34_coll$jscomp$57$$;
}
function $cljs$core$_chunked_first$$($JSCompiler_temp$jscomp$35_coll$jscomp$59$$) {
  if (null != $JSCompiler_temp$jscomp$35_coll$jscomp$59$$ && null != $JSCompiler_temp$jscomp$35_coll$jscomp$59$$.$cljs$core$IChunkedSeq$_chunked_first$arity$1$) {
    $JSCompiler_temp$jscomp$35_coll$jscomp$59$$ = $JSCompiler_temp$jscomp$35_coll$jscomp$59$$.$cljs$core$IChunkedSeq$_chunked_first$arity$1$($JSCompiler_temp$jscomp$35_coll$jscomp$59$$);
  } else {
    var $m__4508__auto__$jscomp$inline_330_m__4510__auto__$jscomp$inline_329$$ = $cljs$core$_chunked_first$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$35_coll$jscomp$59$$ ? null : $JSCompiler_temp$jscomp$35_coll$jscomp$59$$)];
    if (null != $m__4508__auto__$jscomp$inline_330_m__4510__auto__$jscomp$inline_329$$) {
      $JSCompiler_temp$jscomp$35_coll$jscomp$59$$ = $m__4508__auto__$jscomp$inline_330_m__4510__auto__$jscomp$inline_329$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_330_m__4510__auto__$jscomp$inline_329$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$35_coll$jscomp$59$$) : $m__4508__auto__$jscomp$inline_330_m__4510__auto__$jscomp$inline_329$$.call(null, $JSCompiler_temp$jscomp$35_coll$jscomp$59$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_330_m__4510__auto__$jscomp$inline_329$$ = $cljs$core$_chunked_first$$._, null != $m__4508__auto__$jscomp$inline_330_m__4510__auto__$jscomp$inline_329$$) {
        $JSCompiler_temp$jscomp$35_coll$jscomp$59$$ = $m__4508__auto__$jscomp$inline_330_m__4510__auto__$jscomp$inline_329$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_330_m__4510__auto__$jscomp$inline_329$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$35_coll$jscomp$59$$) : $m__4508__auto__$jscomp$inline_330_m__4510__auto__$jscomp$inline_329$$.call(null, $JSCompiler_temp$jscomp$35_coll$jscomp$59$$);
      } else {
        throw $cljs$core$missing_protocol$$("IChunkedSeq.-chunked-first", $JSCompiler_temp$jscomp$35_coll$jscomp$59$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$35_coll$jscomp$59$$;
}
function $cljs$core$_chunked_rest$$($JSCompiler_temp$jscomp$36_coll$jscomp$61$$) {
  if (null != $JSCompiler_temp$jscomp$36_coll$jscomp$61$$ && null != $JSCompiler_temp$jscomp$36_coll$jscomp$61$$.$cljs$core$IChunkedSeq$_chunked_rest$arity$1$) {
    $JSCompiler_temp$jscomp$36_coll$jscomp$61$$ = $JSCompiler_temp$jscomp$36_coll$jscomp$61$$.$cljs$core$IChunkedSeq$_chunked_rest$arity$1$($JSCompiler_temp$jscomp$36_coll$jscomp$61$$);
  } else {
    var $m__4508__auto__$jscomp$inline_334_m__4510__auto__$jscomp$inline_333$$ = $cljs$core$_chunked_rest$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$36_coll$jscomp$61$$ ? null : $JSCompiler_temp$jscomp$36_coll$jscomp$61$$)];
    if (null != $m__4508__auto__$jscomp$inline_334_m__4510__auto__$jscomp$inline_333$$) {
      $JSCompiler_temp$jscomp$36_coll$jscomp$61$$ = $m__4508__auto__$jscomp$inline_334_m__4510__auto__$jscomp$inline_333$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_334_m__4510__auto__$jscomp$inline_333$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$36_coll$jscomp$61$$) : $m__4508__auto__$jscomp$inline_334_m__4510__auto__$jscomp$inline_333$$.call(null, $JSCompiler_temp$jscomp$36_coll$jscomp$61$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_334_m__4510__auto__$jscomp$inline_333$$ = $cljs$core$_chunked_rest$$._, null != $m__4508__auto__$jscomp$inline_334_m__4510__auto__$jscomp$inline_333$$) {
        $JSCompiler_temp$jscomp$36_coll$jscomp$61$$ = $m__4508__auto__$jscomp$inline_334_m__4510__auto__$jscomp$inline_333$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_334_m__4510__auto__$jscomp$inline_333$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$36_coll$jscomp$61$$) : $m__4508__auto__$jscomp$inline_334_m__4510__auto__$jscomp$inline_333$$.call(null, $JSCompiler_temp$jscomp$36_coll$jscomp$61$$);
      } else {
        throw $cljs$core$missing_protocol$$("IChunkedSeq.-chunked-rest", $JSCompiler_temp$jscomp$36_coll$jscomp$61$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$36_coll$jscomp$61$$;
}
function $cljs$core$_reset_BANG_$$($JSCompiler_temp$jscomp$37_o$jscomp$57$$, $new_value$jscomp$1$$) {
  if (null != $JSCompiler_temp$jscomp$37_o$jscomp$57$$ && null != $JSCompiler_temp$jscomp$37_o$jscomp$57$$.$cljs$core$IReset$_reset_BANG_$arity$2$) {
    $JSCompiler_temp$jscomp$37_o$jscomp$57$$ = $JSCompiler_temp$jscomp$37_o$jscomp$57$$.$cljs$core$IReset$_reset_BANG_$arity$2$($JSCompiler_temp$jscomp$37_o$jscomp$57$$, $new_value$jscomp$1$$);
  } else {
    var $m__4508__auto__$jscomp$inline_339_m__4510__auto__$jscomp$inline_338$$ = $cljs$core$_reset_BANG_$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$37_o$jscomp$57$$ ? null : $JSCompiler_temp$jscomp$37_o$jscomp$57$$)];
    if (null != $m__4508__auto__$jscomp$inline_339_m__4510__auto__$jscomp$inline_338$$) {
      $JSCompiler_temp$jscomp$37_o$jscomp$57$$ = $m__4508__auto__$jscomp$inline_339_m__4510__auto__$jscomp$inline_338$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$inline_339_m__4510__auto__$jscomp$inline_338$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$jscomp$37_o$jscomp$57$$, $new_value$jscomp$1$$) : $m__4508__auto__$jscomp$inline_339_m__4510__auto__$jscomp$inline_338$$.call(null, $JSCompiler_temp$jscomp$37_o$jscomp$57$$, $new_value$jscomp$1$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_339_m__4510__auto__$jscomp$inline_338$$ = $cljs$core$_reset_BANG_$$._, null != $m__4508__auto__$jscomp$inline_339_m__4510__auto__$jscomp$inline_338$$) {
        $JSCompiler_temp$jscomp$37_o$jscomp$57$$ = $m__4508__auto__$jscomp$inline_339_m__4510__auto__$jscomp$inline_338$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$inline_339_m__4510__auto__$jscomp$inline_338$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$jscomp$37_o$jscomp$57$$, $new_value$jscomp$1$$) : $m__4508__auto__$jscomp$inline_339_m__4510__auto__$jscomp$inline_338$$.call(null, $JSCompiler_temp$jscomp$37_o$jscomp$57$$, $new_value$jscomp$1$$);
      } else {
        throw $cljs$core$missing_protocol$$("IReset.-reset!", $JSCompiler_temp$jscomp$37_o$jscomp$57$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$37_o$jscomp$57$$;
}
var $cljs$core$ISwap$_swap_BANG_$dyn_33238$$ = function() {
  function $G__33239__5$$($o$jscomp$61$$, $f$jscomp$104$$, $a$jscomp$64$$, $b$jscomp$57$$, $xs$jscomp$2$$) {
    var $m__4508__auto__$jscomp$84_m__4510__auto__$jscomp$84$$ = $cljs$core$_swap_BANG_$$[$goog$typeOf$$(null == $o$jscomp$61$$ ? null : $o$jscomp$61$$)];
    if (null != $m__4508__auto__$jscomp$84_m__4510__auto__$jscomp$84$$) {
      return $m__4508__auto__$jscomp$84_m__4510__auto__$jscomp$84$$.$cljs$core$IFn$_invoke$arity$5$ ? $m__4508__auto__$jscomp$84_m__4510__auto__$jscomp$84$$.$cljs$core$IFn$_invoke$arity$5$($o$jscomp$61$$, $f$jscomp$104$$, $a$jscomp$64$$, $b$jscomp$57$$, $xs$jscomp$2$$) : $m__4508__auto__$jscomp$84_m__4510__auto__$jscomp$84$$.call(null, $o$jscomp$61$$, $f$jscomp$104$$, $a$jscomp$64$$, $b$jscomp$57$$, $xs$jscomp$2$$);
    }
    $m__4508__auto__$jscomp$84_m__4510__auto__$jscomp$84$$ = $cljs$core$_swap_BANG_$$._;
    if (null != $m__4508__auto__$jscomp$84_m__4510__auto__$jscomp$84$$) {
      return $m__4508__auto__$jscomp$84_m__4510__auto__$jscomp$84$$.$cljs$core$IFn$_invoke$arity$5$ ? $m__4508__auto__$jscomp$84_m__4510__auto__$jscomp$84$$.$cljs$core$IFn$_invoke$arity$5$($o$jscomp$61$$, $f$jscomp$104$$, $a$jscomp$64$$, $b$jscomp$57$$, $xs$jscomp$2$$) : $m__4508__auto__$jscomp$84_m__4510__auto__$jscomp$84$$.call(null, $o$jscomp$61$$, $f$jscomp$104$$, $a$jscomp$64$$, $b$jscomp$57$$, $xs$jscomp$2$$);
    }
    throw $cljs$core$missing_protocol$$("ISwap.-swap!", $o$jscomp$61$$);
  }
  function $G__33239__4$$($o$jscomp$60$$, $f$jscomp$103$$, $a$jscomp$63$$, $b$jscomp$56$$) {
    var $m__4508__auto__$jscomp$83_m__4510__auto__$jscomp$83$$ = $cljs$core$_swap_BANG_$$[$goog$typeOf$$(null == $o$jscomp$60$$ ? null : $o$jscomp$60$$)];
    if (null != $m__4508__auto__$jscomp$83_m__4510__auto__$jscomp$83$$) {
      return $m__4508__auto__$jscomp$83_m__4510__auto__$jscomp$83$$.$cljs$core$IFn$_invoke$arity$4$ ? $m__4508__auto__$jscomp$83_m__4510__auto__$jscomp$83$$.$cljs$core$IFn$_invoke$arity$4$($o$jscomp$60$$, $f$jscomp$103$$, $a$jscomp$63$$, $b$jscomp$56$$) : $m__4508__auto__$jscomp$83_m__4510__auto__$jscomp$83$$.call(null, $o$jscomp$60$$, $f$jscomp$103$$, $a$jscomp$63$$, $b$jscomp$56$$);
    }
    $m__4508__auto__$jscomp$83_m__4510__auto__$jscomp$83$$ = $cljs$core$_swap_BANG_$$._;
    if (null != $m__4508__auto__$jscomp$83_m__4510__auto__$jscomp$83$$) {
      return $m__4508__auto__$jscomp$83_m__4510__auto__$jscomp$83$$.$cljs$core$IFn$_invoke$arity$4$ ? $m__4508__auto__$jscomp$83_m__4510__auto__$jscomp$83$$.$cljs$core$IFn$_invoke$arity$4$($o$jscomp$60$$, $f$jscomp$103$$, $a$jscomp$63$$, $b$jscomp$56$$) : $m__4508__auto__$jscomp$83_m__4510__auto__$jscomp$83$$.call(null, $o$jscomp$60$$, $f$jscomp$103$$, $a$jscomp$63$$, $b$jscomp$56$$);
    }
    throw $cljs$core$missing_protocol$$("ISwap.-swap!", $o$jscomp$60$$);
  }
  function $G__33239__3$$($o$jscomp$59$$, $f$jscomp$102$$, $a$jscomp$62$$) {
    var $m__4508__auto__$jscomp$82_m__4510__auto__$jscomp$82$$ = $cljs$core$_swap_BANG_$$[$goog$typeOf$$(null == $o$jscomp$59$$ ? null : $o$jscomp$59$$)];
    if (null != $m__4508__auto__$jscomp$82_m__4510__auto__$jscomp$82$$) {
      return $m__4508__auto__$jscomp$82_m__4510__auto__$jscomp$82$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__4508__auto__$jscomp$82_m__4510__auto__$jscomp$82$$.$cljs$core$IFn$_invoke$arity$3$($o$jscomp$59$$, $f$jscomp$102$$, $a$jscomp$62$$) : $m__4508__auto__$jscomp$82_m__4510__auto__$jscomp$82$$.call(null, $o$jscomp$59$$, $f$jscomp$102$$, $a$jscomp$62$$);
    }
    $m__4508__auto__$jscomp$82_m__4510__auto__$jscomp$82$$ = $cljs$core$_swap_BANG_$$._;
    if (null != $m__4508__auto__$jscomp$82_m__4510__auto__$jscomp$82$$) {
      return $m__4508__auto__$jscomp$82_m__4510__auto__$jscomp$82$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__4508__auto__$jscomp$82_m__4510__auto__$jscomp$82$$.$cljs$core$IFn$_invoke$arity$3$($o$jscomp$59$$, $f$jscomp$102$$, $a$jscomp$62$$) : $m__4508__auto__$jscomp$82_m__4510__auto__$jscomp$82$$.call(null, $o$jscomp$59$$, $f$jscomp$102$$, $a$jscomp$62$$);
    }
    throw $cljs$core$missing_protocol$$("ISwap.-swap!", $o$jscomp$59$$);
  }
  function $G__33239__2$$($o$jscomp$58$$, $f$jscomp$101$$) {
    var $m__4508__auto__$jscomp$81_m__4510__auto__$jscomp$81$$ = $cljs$core$_swap_BANG_$$[$goog$typeOf$$(null == $o$jscomp$58$$ ? null : $o$jscomp$58$$)];
    if (null != $m__4508__auto__$jscomp$81_m__4510__auto__$jscomp$81$$) {
      return $m__4508__auto__$jscomp$81_m__4510__auto__$jscomp$81$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$81_m__4510__auto__$jscomp$81$$.$cljs$core$IFn$_invoke$arity$2$($o$jscomp$58$$, $f$jscomp$101$$) : $m__4508__auto__$jscomp$81_m__4510__auto__$jscomp$81$$.call(null, $o$jscomp$58$$, $f$jscomp$101$$);
    }
    $m__4508__auto__$jscomp$81_m__4510__auto__$jscomp$81$$ = $cljs$core$_swap_BANG_$$._;
    if (null != $m__4508__auto__$jscomp$81_m__4510__auto__$jscomp$81$$) {
      return $m__4508__auto__$jscomp$81_m__4510__auto__$jscomp$81$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$81_m__4510__auto__$jscomp$81$$.$cljs$core$IFn$_invoke$arity$2$($o$jscomp$58$$, $f$jscomp$101$$) : $m__4508__auto__$jscomp$81_m__4510__auto__$jscomp$81$$.call(null, $o$jscomp$58$$, $f$jscomp$101$$);
    }
    throw $cljs$core$missing_protocol$$("ISwap.-swap!", $o$jscomp$58$$);
  }
  var $G__33239$$ = null;
  $G__33239$$ = function($o$jscomp$62$$, $f$jscomp$105$$, $a$jscomp$65$$, $b$jscomp$58$$, $xs$jscomp$3$$) {
    switch(arguments.length) {
      case 2:
        return $G__33239__2$$.call(this, $o$jscomp$62$$, $f$jscomp$105$$);
      case 3:
        return $G__33239__3$$.call(this, $o$jscomp$62$$, $f$jscomp$105$$, $a$jscomp$65$$);
      case 4:
        return $G__33239__4$$.call(this, $o$jscomp$62$$, $f$jscomp$105$$, $a$jscomp$65$$, $b$jscomp$58$$);
      case 5:
        return $G__33239__5$$.call(this, $o$jscomp$62$$, $f$jscomp$105$$, $a$jscomp$65$$, $b$jscomp$58$$, $xs$jscomp$3$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__33239$$.$cljs$core$IFn$_invoke$arity$2$ = $G__33239__2$$;
  $G__33239$$.$cljs$core$IFn$_invoke$arity$3$ = $G__33239__3$$;
  $G__33239$$.$cljs$core$IFn$_invoke$arity$4$ = $G__33239__4$$;
  $G__33239$$.$cljs$core$IFn$_invoke$arity$5$ = $G__33239__5$$;
  return $G__33239$$;
}(), $cljs$core$_swap_BANG_$$ = function $cljs$core$_swap_BANG_$$($var_args$jscomp$109$$) {
  switch(arguments.length) {
    case 2:
      return $cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$(arguments[0], arguments[1], arguments[2]);
    case 4:
      return $cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return $cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$5$(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length)].join(""));
  }
};
$cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$ = function($o$jscomp$63$$, $f$jscomp$106$$) {
  return null != $o$jscomp$63$$ && null != $o$jscomp$63$$.$cljs$core$ISwap$_swap_BANG_$arity$2$ ? $o$jscomp$63$$.$cljs$core$ISwap$_swap_BANG_$arity$2$($o$jscomp$63$$, $f$jscomp$106$$) : $cljs$core$ISwap$_swap_BANG_$dyn_33238$$($o$jscomp$63$$, $f$jscomp$106$$);
};
$cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$ = function($o$jscomp$64$$, $f$jscomp$107$$, $a$jscomp$66$$) {
  return null != $o$jscomp$64$$ && null != $o$jscomp$64$$.$cljs$core$ISwap$_swap_BANG_$arity$3$ ? $o$jscomp$64$$.$cljs$core$ISwap$_swap_BANG_$arity$3$($o$jscomp$64$$, $f$jscomp$107$$, $a$jscomp$66$$) : $cljs$core$ISwap$_swap_BANG_$dyn_33238$$($o$jscomp$64$$, $f$jscomp$107$$, $a$jscomp$66$$);
};
$cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$ = function($o$jscomp$65$$, $f$jscomp$108$$, $a$jscomp$67$$, $b$jscomp$59$$) {
  return null != $o$jscomp$65$$ && null != $o$jscomp$65$$.$cljs$core$ISwap$_swap_BANG_$arity$4$ ? $o$jscomp$65$$.$cljs$core$ISwap$_swap_BANG_$arity$4$($o$jscomp$65$$, $f$jscomp$108$$, $a$jscomp$67$$, $b$jscomp$59$$) : $cljs$core$ISwap$_swap_BANG_$dyn_33238$$($o$jscomp$65$$, $f$jscomp$108$$, $a$jscomp$67$$, $b$jscomp$59$$);
};
$cljs$core$_swap_BANG_$$.$cljs$core$IFn$_invoke$arity$5$ = function($o$jscomp$66$$, $f$jscomp$109$$, $a$jscomp$68$$, $b$jscomp$60$$, $xs$jscomp$4$$) {
  return null != $o$jscomp$66$$ && null != $o$jscomp$66$$.$cljs$core$ISwap$_swap_BANG_$arity$5$ ? $o$jscomp$66$$.$cljs$core$ISwap$_swap_BANG_$arity$5$($o$jscomp$66$$, $f$jscomp$109$$, $a$jscomp$68$$, $b$jscomp$60$$, $xs$jscomp$4$$) : $cljs$core$ISwap$_swap_BANG_$dyn_33238$$($o$jscomp$66$$, $f$jscomp$109$$, $a$jscomp$68$$, $b$jscomp$60$$, $xs$jscomp$4$$);
};
$cljs$core$_swap_BANG_$$.$cljs$lang$maxFixedArity$ = 5;
function $cljs$core$IIterable$$() {
}
function $cljs$core$_iterator$$($JSCompiler_temp$jscomp$38_coll$jscomp$65$$) {
  if (null != $JSCompiler_temp$jscomp$38_coll$jscomp$65$$ && null != $JSCompiler_temp$jscomp$38_coll$jscomp$65$$.$cljs$core$IIterable$_iterator$arity$1$) {
    $JSCompiler_temp$jscomp$38_coll$jscomp$65$$ = $JSCompiler_temp$jscomp$38_coll$jscomp$65$$.$cljs$core$IIterable$_iterator$arity$1$($JSCompiler_temp$jscomp$38_coll$jscomp$65$$);
  } else {
    var $m__4508__auto__$jscomp$inline_343_m__4510__auto__$jscomp$inline_342$$ = $cljs$core$_iterator$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$38_coll$jscomp$65$$ ? null : $JSCompiler_temp$jscomp$38_coll$jscomp$65$$)];
    if (null != $m__4508__auto__$jscomp$inline_343_m__4510__auto__$jscomp$inline_342$$) {
      $JSCompiler_temp$jscomp$38_coll$jscomp$65$$ = $m__4508__auto__$jscomp$inline_343_m__4510__auto__$jscomp$inline_342$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_343_m__4510__auto__$jscomp$inline_342$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$38_coll$jscomp$65$$) : $m__4508__auto__$jscomp$inline_343_m__4510__auto__$jscomp$inline_342$$.call(null, $JSCompiler_temp$jscomp$38_coll$jscomp$65$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_343_m__4510__auto__$jscomp$inline_342$$ = $cljs$core$_iterator$$._, null != $m__4508__auto__$jscomp$inline_343_m__4510__auto__$jscomp$inline_342$$) {
        $JSCompiler_temp$jscomp$38_coll$jscomp$65$$ = $m__4508__auto__$jscomp$inline_343_m__4510__auto__$jscomp$inline_342$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_343_m__4510__auto__$jscomp$inline_342$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$38_coll$jscomp$65$$) : $m__4508__auto__$jscomp$inline_343_m__4510__auto__$jscomp$inline_342$$.call(null, $JSCompiler_temp$jscomp$38_coll$jscomp$65$$);
      } else {
        throw $cljs$core$missing_protocol$$("IIterable.-iterator", $JSCompiler_temp$jscomp$38_coll$jscomp$65$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$38_coll$jscomp$65$$;
}
function $cljs$core$StringBufferWriter$$($sb$jscomp$3$$) {
  this.$sb$ = $sb$jscomp$3$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 1073741824;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$cljs$core$StringBufferWriter$$.prototype.$cljs$core$IWriter$_write$arity$2$ = function($_$$, $s$jscomp$32$$) {
  return this.$sb$.append($s$jscomp$32$$);
};
function $cljs$core$pr_str_STAR_$$($obj$jscomp$80$$) {
  var $sb$jscomp$5$$ = new $goog$string$StringBuffer$$;
  $obj$jscomp$80$$.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$(null, new $cljs$core$StringBufferWriter$$($sb$jscomp$5$$), $cljs$core$pr_opts$$());
  return $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($sb$jscomp$5$$);
}
var $cljs$core$imul$$ = "undefined" !== typeof Math && "undefined" !== typeof Math.imul && 0 !== Math.imul(4294967295, 5) ? function($a$jscomp$69$$, $b$jscomp$61$$) {
  return Math.imul($a$jscomp$69$$, $b$jscomp$61$$);
} : function($a$jscomp$70$$, $b$jscomp$62$$) {
  var $al$$ = $a$jscomp$70$$ & 65535, $bl$$ = $b$jscomp$62$$ & 65535;
  return $al$$ * $bl$$ + (($a$jscomp$70$$ >>> 16 & 65535) * $bl$$ + $al$$ * ($b$jscomp$62$$ >>> 16 & 65535) << 16 >>> 0) | 0;
};
function $cljs$core$m3_mix_K1$$($k1_x$jscomp$inline_345$$) {
  $k1_x$jscomp$inline_345$$ = $cljs$core$imul$$($k1_x$jscomp$inline_345$$ | 0, -862048943);
  return $cljs$core$imul$$($k1_x$jscomp$inline_345$$ << 15 | $k1_x$jscomp$inline_345$$ >>> -15, 461845907);
}
function $cljs$core$m3_mix_H1$$($h1_x$jscomp$inline_348$$, $k1$jscomp$1$$) {
  $h1_x$jscomp$inline_348$$ = ($h1_x$jscomp$inline_348$$ | 0) ^ ($k1$jscomp$1$$ | 0);
  return $cljs$core$imul$$($h1_x$jscomp$inline_348$$ << 13 | $h1_x$jscomp$inline_348$$ >>> -13, 5) + -430675100 | 0;
}
function $cljs$core$m3_fmix$$($h1$jscomp$1_h1__$2_h1__$4_h1__$6$$, $len$jscomp$10$$) {
  $h1$jscomp$1_h1__$2_h1__$4_h1__$6$$ = ($h1$jscomp$1_h1__$2_h1__$4_h1__$6$$ | 0) ^ $len$jscomp$10$$;
  $h1$jscomp$1_h1__$2_h1__$4_h1__$6$$ = $cljs$core$imul$$($h1$jscomp$1_h1__$2_h1__$4_h1__$6$$ ^ $h1$jscomp$1_h1__$2_h1__$4_h1__$6$$ >>> 16, -2048144789);
  $h1$jscomp$1_h1__$2_h1__$4_h1__$6$$ = $cljs$core$imul$$($h1$jscomp$1_h1__$2_h1__$4_h1__$6$$ ^ $h1$jscomp$1_h1__$2_h1__$4_h1__$6$$ >>> 13, -1028477387);
  return $h1$jscomp$1_h1__$2_h1__$4_h1__$6$$ ^ $h1$jscomp$1_h1__$2_h1__$4_h1__$6$$ >>> 16;
}
function $cljs$core$m3_hash_unencoded_chars$$($in$$jscomp$1$$) {
  a: {
    var $h1$jscomp$3_i$jscomp$inline_351$$ = 1;
    for (var $G__33270$jscomp$inline_353_h1$jscomp$inline_352$$ = 0;;) {
      if ($h1$jscomp$3_i$jscomp$inline_351$$ < $in$$jscomp$1$$.length) {
        $G__33270$jscomp$inline_353_h1$jscomp$inline_352$$ = $cljs$core$m3_mix_H1$$($G__33270$jscomp$inline_353_h1$jscomp$inline_352$$, $cljs$core$m3_mix_K1$$($in$$jscomp$1$$.charCodeAt($h1$jscomp$3_i$jscomp$inline_351$$ - 1) | $in$$jscomp$1$$.charCodeAt($h1$jscomp$3_i$jscomp$inline_351$$) << 16)), $h1$jscomp$3_i$jscomp$inline_351$$ += 2;
      } else {
        $h1$jscomp$3_i$jscomp$inline_351$$ = $G__33270$jscomp$inline_353_h1$jscomp$inline_352$$;
        break a;
      }
    }
  }
  return $cljs$core$m3_fmix$$(1 === ($in$$jscomp$1$$.length & 1) ? $h1$jscomp$3_i$jscomp$inline_351$$ ^ $cljs$core$m3_mix_K1$$($in$$jscomp$1$$.charCodeAt($in$$jscomp$1$$.length - 1)) : $h1$jscomp$3_i$jscomp$inline_351$$, $cljs$core$imul$$(2, $in$$jscomp$1$$.length));
}
var $cljs$core$string_hash_cache$$ = {}, $cljs$core$string_hash_cache_count$$ = 0;
function $cljs$core$hash_string$$($JSCompiler_temp$jscomp$44_k$jscomp$41$$) {
  255 < $cljs$core$string_hash_cache_count$$ && ($cljs$core$string_hash_cache$$ = {}, $cljs$core$string_hash_cache_count$$ = 0);
  if (null == $JSCompiler_temp$jscomp$44_k$jscomp$41$$) {
    return 0;
  }
  var $h$jscomp$36_h$jscomp$inline_360_len$jscomp$inline_1067$$ = $cljs$core$string_hash_cache$$[$JSCompiler_temp$jscomp$44_k$jscomp$41$$];
  if ("number" === typeof $h$jscomp$36_h$jscomp$inline_360_len$jscomp$inline_1067$$) {
    $JSCompiler_temp$jscomp$44_k$jscomp$41$$ = $h$jscomp$36_h$jscomp$inline_360_len$jscomp$inline_1067$$;
  } else {
    a: {
      if (null != $JSCompiler_temp$jscomp$44_k$jscomp$41$$) {
        if ($h$jscomp$36_h$jscomp$inline_360_len$jscomp$inline_1067$$ = $JSCompiler_temp$jscomp$44_k$jscomp$41$$.length, 0 < $h$jscomp$36_h$jscomp$inline_360_len$jscomp$inline_1067$$) {
          for (var $i$jscomp$inline_1068$$ = 0, $G__33272$jscomp$inline_1070_hash$jscomp$inline_1069$$ = 0;;) {
            if ($i$jscomp$inline_1068$$ < $h$jscomp$36_h$jscomp$inline_360_len$jscomp$inline_1067$$) {
              $G__33272$jscomp$inline_1070_hash$jscomp$inline_1069$$ = $cljs$core$imul$$(31, $G__33272$jscomp$inline_1070_hash$jscomp$inline_1069$$) + $JSCompiler_temp$jscomp$44_k$jscomp$41$$.charCodeAt($i$jscomp$inline_1068$$), $i$jscomp$inline_1068$$ += 1;
            } else {
              $h$jscomp$36_h$jscomp$inline_360_len$jscomp$inline_1067$$ = $G__33272$jscomp$inline_1070_hash$jscomp$inline_1069$$;
              break a;
            }
          }
        } else {
          $h$jscomp$36_h$jscomp$inline_360_len$jscomp$inline_1067$$ = 0;
        }
      } else {
        $h$jscomp$36_h$jscomp$inline_360_len$jscomp$inline_1067$$ = 0;
      }
    }
    $cljs$core$string_hash_cache$$[$JSCompiler_temp$jscomp$44_k$jscomp$41$$] = $h$jscomp$36_h$jscomp$inline_360_len$jscomp$inline_1067$$;
    $cljs$core$string_hash_cache_count$$ += 1;
    $JSCompiler_temp$jscomp$44_k$jscomp$41$$ = $h$jscomp$36_h$jscomp$inline_360_len$jscomp$inline_1067$$;
  }
  return $JSCompiler_temp$jscomp$44_k$jscomp$41$$;
}
function $cljs$core$hash$$($JSCompiler_temp$jscomp$41_JSCompiler_temp$jscomp$42_JSCompiler_temp$jscomp$43_in$$jscomp$inline_362_o$jscomp$69$$) {
  if (null != $JSCompiler_temp$jscomp$41_JSCompiler_temp$jscomp$42_JSCompiler_temp$jscomp$43_in$$jscomp$inline_362_o$jscomp$69$$ && ($JSCompiler_temp$jscomp$41_JSCompiler_temp$jscomp$42_JSCompiler_temp$jscomp$43_in$$jscomp$inline_362_o$jscomp$69$$.$cljs$lang$protocol_mask$partition0$$ & 4194304 || $cljs$core$PROTOCOL_SENTINEL$$ === $JSCompiler_temp$jscomp$41_JSCompiler_temp$jscomp$42_JSCompiler_temp$jscomp$43_in$$jscomp$inline_362_o$jscomp$69$$.$cljs$core$IHash$$)) {
    return $JSCompiler_temp$jscomp$41_JSCompiler_temp$jscomp$42_JSCompiler_temp$jscomp$43_in$$jscomp$inline_362_o$jscomp$69$$.$cljs$core$IHash$_hash$arity$1$(null) ^ 0;
  }
  if ("number" === typeof $JSCompiler_temp$jscomp$41_JSCompiler_temp$jscomp$42_JSCompiler_temp$jscomp$43_in$$jscomp$inline_362_o$jscomp$69$$) {
    if ($cljs$core$truth_$$(isFinite($JSCompiler_temp$jscomp$41_JSCompiler_temp$jscomp$42_JSCompiler_temp$jscomp$43_in$$jscomp$inline_362_o$jscomp$69$$))) {
      return Math.floor($JSCompiler_temp$jscomp$41_JSCompiler_temp$jscomp$42_JSCompiler_temp$jscomp$43_in$$jscomp$inline_362_o$jscomp$69$$) % 2147483647;
    }
    switch($JSCompiler_temp$jscomp$41_JSCompiler_temp$jscomp$42_JSCompiler_temp$jscomp$43_in$$jscomp$inline_362_o$jscomp$69$$) {
      case Infinity:
        return 2146435072;
      case -Infinity:
        return -1048576;
      default:
        return 2146959360;
    }
  } else {
    return !0 === $JSCompiler_temp$jscomp$41_JSCompiler_temp$jscomp$42_JSCompiler_temp$jscomp$43_in$$jscomp$inline_362_o$jscomp$69$$ ? $JSCompiler_temp$jscomp$41_JSCompiler_temp$jscomp$42_JSCompiler_temp$jscomp$43_in$$jscomp$inline_362_o$jscomp$69$$ = 1231 : !1 === $JSCompiler_temp$jscomp$41_JSCompiler_temp$jscomp$42_JSCompiler_temp$jscomp$43_in$$jscomp$inline_362_o$jscomp$69$$ ? $JSCompiler_temp$jscomp$41_JSCompiler_temp$jscomp$42_JSCompiler_temp$jscomp$43_in$$jscomp$inline_362_o$jscomp$69$$ = 1237 : 
    "string" === typeof $JSCompiler_temp$jscomp$41_JSCompiler_temp$jscomp$42_JSCompiler_temp$jscomp$43_in$$jscomp$inline_362_o$jscomp$69$$ ? ($JSCompiler_temp$jscomp$41_JSCompiler_temp$jscomp$42_JSCompiler_temp$jscomp$43_in$$jscomp$inline_362_o$jscomp$69$$ = $cljs$core$hash_string$$($JSCompiler_temp$jscomp$41_JSCompiler_temp$jscomp$42_JSCompiler_temp$jscomp$43_in$$jscomp$inline_362_o$jscomp$69$$), $JSCompiler_temp$jscomp$41_JSCompiler_temp$jscomp$42_JSCompiler_temp$jscomp$43_in$$jscomp$inline_362_o$jscomp$69$$ = 
    0 === $JSCompiler_temp$jscomp$41_JSCompiler_temp$jscomp$42_JSCompiler_temp$jscomp$43_in$$jscomp$inline_362_o$jscomp$69$$ ? $JSCompiler_temp$jscomp$41_JSCompiler_temp$jscomp$42_JSCompiler_temp$jscomp$43_in$$jscomp$inline_362_o$jscomp$69$$ : $cljs$core$m3_fmix$$($cljs$core$m3_mix_H1$$(0, $cljs$core$m3_mix_K1$$($JSCompiler_temp$jscomp$41_JSCompiler_temp$jscomp$42_JSCompiler_temp$jscomp$43_in$$jscomp$inline_362_o$jscomp$69$$)), 4)) : $JSCompiler_temp$jscomp$41_JSCompiler_temp$jscomp$42_JSCompiler_temp$jscomp$43_in$$jscomp$inline_362_o$jscomp$69$$ = 
    $JSCompiler_temp$jscomp$41_JSCompiler_temp$jscomp$42_JSCompiler_temp$jscomp$43_in$$jscomp$inline_362_o$jscomp$69$$ instanceof Date ? $JSCompiler_temp$jscomp$41_JSCompiler_temp$jscomp$42_JSCompiler_temp$jscomp$43_in$$jscomp$inline_362_o$jscomp$69$$.valueOf() ^ 0 : null == $JSCompiler_temp$jscomp$41_JSCompiler_temp$jscomp$42_JSCompiler_temp$jscomp$43_in$$jscomp$inline_362_o$jscomp$69$$ ? 0 : $cljs$core$_hash$$($JSCompiler_temp$jscomp$41_JSCompiler_temp$jscomp$42_JSCompiler_temp$jscomp$43_in$$jscomp$inline_362_o$jscomp$69$$) ^ 
    0, $JSCompiler_temp$jscomp$41_JSCompiler_temp$jscomp$42_JSCompiler_temp$jscomp$43_in$$jscomp$inline_362_o$jscomp$69$$;
  }
}
function $cljs$core$hash_combine$$($seed$$, $hash$jscomp$2$$) {
  return $seed$$ ^ $hash$jscomp$2$$ + 2654435769 + ($seed$$ << 6) + ($seed$$ >> 2);
}
function $cljs$core$Symbol$$($ns$jscomp$1$$, $name$jscomp$96$$, $str$jscomp$78$$, $_hash$$, $_meta$$) {
  this.$ns$ = $ns$jscomp$1$$;
  this.name = $name$jscomp$96$$;
  this.$str$ = $str$jscomp$78$$;
  this.$_hash$ = $_hash$$;
  this.$_meta$ = $_meta$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 2154168321;
  this.$cljs$lang$protocol_mask$partition1$$ = 4096;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$Symbol$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return this.$str$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($_$jscomp$3$$, $other$jscomp$47$$) {
  return $other$jscomp$47$$ instanceof $cljs$core$Symbol$$ ? this.$str$ === $other$jscomp$47$$.$str$ : !1;
};
$JSCompiler_prototypeAlias$$.call = function($unused__9507__auto__$$) {
  switch(arguments.length - 1) {
    case 1:
      return this.$cljs$core$IFn$_invoke$arity$1$(arguments[1]);
    case 2:
      return this.$cljs$core$IFn$_invoke$arity$2$(arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length - 1)].join(""));
  }
};
$JSCompiler_prototypeAlias$$.apply = function($self__$jscomp$6$$, $args31397$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args31397$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($coll$jscomp$66$$) {
  return $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($coll$jscomp$66$$, this) : $cljs$core$get$$.call(null, $coll$jscomp$66$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($coll$jscomp$67$$, $not_found$jscomp$6$$) {
  return $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$3$ ? $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$3$($coll$jscomp$67$$, this, $not_found$jscomp$6$$) : $cljs$core$get$$.call(null, $coll$jscomp$67$$, this, $not_found$jscomp$6$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$_meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($_$jscomp$5$$, $new_meta$$) {
  return new $cljs$core$Symbol$$(this.$ns$, this.name, this.$str$, this.$_hash$, $new_meta$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4319__auto___h__4319__auto____$1$$ = this.$_hash$;
  return null != $h__4319__auto___h__4319__auto____$1$$ ? $h__4319__auto___h__4319__auto____$1$$ : this.$_hash$ = $h__4319__auto___h__4319__auto____$1$$ = $cljs$core$hash_combine$$($cljs$core$m3_hash_unencoded_chars$$(this.name), $cljs$core$hash_string$$(this.$ns$));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($o$jscomp$70$$, $writer$jscomp$7$$) {
  return $cljs$core$_write$$($writer$jscomp$7$$, this.$str$);
};
var $cljs$core$symbol$$ = function $cljs$core$symbol$$($var_args$jscomp$110$$) {
  switch(arguments.length) {
    case 1:
      return $cljs$core$symbol$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$symbol$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length)].join(""));
  }
};
$cljs$core$symbol$$.$cljs$core$IFn$_invoke$arity$1$ = function($name$jscomp$98$$) {
  for (;;) {
    if ($name$jscomp$98$$ instanceof $cljs$core$Symbol$$) {
      return $name$jscomp$98$$;
    }
    if ("string" === typeof $name$jscomp$98$$) {
      var $idx$jscomp$12$$ = $name$jscomp$98$$.indexOf("/");
      return 1 > $idx$jscomp$12$$ ? $cljs$core$symbol$$.$cljs$core$IFn$_invoke$arity$2$(null, $name$jscomp$98$$) : $cljs$core$symbol$$.$cljs$core$IFn$_invoke$arity$2$($name$jscomp$98$$.substring(0, $idx$jscomp$12$$), $name$jscomp$98$$.substring($idx$jscomp$12$$ + 1, $name$jscomp$98$$.length));
    }
    if ($name$jscomp$98$$ instanceof $cljs$core$Keyword$$) {
      $name$jscomp$98$$ = $name$jscomp$98$$.$fqn$;
    } else {
      throw Error("no conversion to symbol");
    }
  }
};
$cljs$core$symbol$$.$cljs$core$IFn$_invoke$arity$2$ = function($ns$jscomp$3$$, $name$jscomp$99$$) {
  var $sym_str$$ = null != $ns$jscomp$3$$ ? [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($ns$jscomp$3$$), "/", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($name$jscomp$99$$)].join("") : $name$jscomp$99$$;
  return new $cljs$core$Symbol$$($ns$jscomp$3$$, $name$jscomp$99$$, $sym_str$$, null, null);
};
$cljs$core$symbol$$.$cljs$lang$maxFixedArity$ = 2;
function $cljs$core$iterable_QMARK_$$($x$jscomp$122$$) {
  return null != $x$jscomp$122$$ ? $x$jscomp$122$$.$cljs$lang$protocol_mask$partition1$$ & 131072 || $cljs$core$PROTOCOL_SENTINEL$$ === $x$jscomp$122$$.$cljs$core$IIterable$$ ? !0 : $x$jscomp$122$$.$cljs$lang$protocol_mask$partition1$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IIterable$$, $x$jscomp$122$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IIterable$$, $x$jscomp$122$$);
}
function $cljs$core$seq$$($G__31451_coll$jscomp$68$$) {
  if (null == $G__31451_coll$jscomp$68$$) {
    return null;
  }
  if (null != $G__31451_coll$jscomp$68$$ && ($G__31451_coll$jscomp$68$$.$cljs$lang$protocol_mask$partition0$$ & 8388608 || $cljs$core$PROTOCOL_SENTINEL$$ === $G__31451_coll$jscomp$68$$.$cljs$core$ISeqable$$)) {
    return $G__31451_coll$jscomp$68$$.$cljs$core$ISeqable$_seq$arity$1$(null);
  }
  if (Array.isArray($G__31451_coll$jscomp$68$$) || "string" === typeof $G__31451_coll$jscomp$68$$) {
    return 0 === $G__31451_coll$jscomp$68$$.length ? null : new $cljs$core$IndexedSeq$$($G__31451_coll$jscomp$68$$, 0, null);
  }
  if (null != $G__31451_coll$jscomp$68$$ && null != $G__31451_coll$jscomp$68$$[$cljs$core$ITER_SYMBOL$$]) {
    return $G__31451_coll$jscomp$68$$ = $goog$object$get$$($G__31451_coll$jscomp$68$$, $cljs$core$ITER_SYMBOL$$).call($G__31451_coll$jscomp$68$$), $cljs$core$es6_iterator_seq$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$es6_iterator_seq$$.$cljs$core$IFn$_invoke$arity$1$($G__31451_coll$jscomp$68$$) : $cljs$core$es6_iterator_seq$$.call(null, $G__31451_coll$jscomp$68$$);
  }
  if ($cljs$core$native_satisfies_QMARK_$$($cljs$core$ISeqable$$, $G__31451_coll$jscomp$68$$)) {
    return $cljs$core$_seq$$($G__31451_coll$jscomp$68$$);
  }
  throw Error([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__31451_coll$jscomp$68$$), " is not ISeqable"].join(""));
}
function $cljs$core$first$$($coll$jscomp$69_s$jscomp$37$$) {
  if (null == $coll$jscomp$69_s$jscomp$37$$) {
    return null;
  }
  if (null != $coll$jscomp$69_s$jscomp$37$$ && ($coll$jscomp$69_s$jscomp$37$$.$cljs$lang$protocol_mask$partition0$$ & 64 || $cljs$core$PROTOCOL_SENTINEL$$ === $coll$jscomp$69_s$jscomp$37$$.$cljs$core$ISeq$$)) {
    return $coll$jscomp$69_s$jscomp$37$$.$cljs$core$ISeq$_first$arity$1$(null);
  }
  $coll$jscomp$69_s$jscomp$37$$ = $cljs$core$seq$$($coll$jscomp$69_s$jscomp$37$$);
  return null == $coll$jscomp$69_s$jscomp$37$$ ? null : $cljs$core$_first$$($coll$jscomp$69_s$jscomp$37$$);
}
function $cljs$core$rest$$($coll$jscomp$70_s$jscomp$38$$) {
  return null != $coll$jscomp$70_s$jscomp$38$$ ? null != $coll$jscomp$70_s$jscomp$38$$ && ($coll$jscomp$70_s$jscomp$38$$.$cljs$lang$protocol_mask$partition0$$ & 64 || $cljs$core$PROTOCOL_SENTINEL$$ === $coll$jscomp$70_s$jscomp$38$$.$cljs$core$ISeq$$) ? $coll$jscomp$70_s$jscomp$38$$.$cljs$core$ISeq$_rest$arity$1$(null) : ($coll$jscomp$70_s$jscomp$38$$ = $cljs$core$seq$$($coll$jscomp$70_s$jscomp$38$$)) ? $coll$jscomp$70_s$jscomp$38$$.$cljs$core$ISeq$_rest$arity$1$(null) : $cljs$core$List$EMPTY$$ : 
  $cljs$core$List$EMPTY$$;
}
function $cljs$core$next$$($coll$jscomp$71$$) {
  return null == $coll$jscomp$71$$ ? null : null != $coll$jscomp$71$$ && ($coll$jscomp$71$$.$cljs$lang$protocol_mask$partition0$$ & 128 || $cljs$core$PROTOCOL_SENTINEL$$ === $coll$jscomp$71$$.$cljs$core$INext$$) ? $coll$jscomp$71$$.$cljs$core$INext$_next$arity$1$() : $cljs$core$seq$$($cljs$core$rest$$($coll$jscomp$71$$));
}
var $cljs$core$_EQ_$$ = function $cljs$core$_EQ_$$($var_args$jscomp$111$$) {
  switch(arguments.length) {
    case 1:
      return $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      for (var $args_arr__4839__auto__$jscomp$7$$ = [], $len__4818__auto___33342$$ = arguments.length, $i__4819__auto___33343$$ = 0;;) {
        if ($i__4819__auto___33343$$ < $len__4818__auto___33342$$) {
          $args_arr__4839__auto__$jscomp$7$$.push(arguments[$i__4819__auto___33343$$]), $i__4819__auto___33343$$ += 1;
        } else {
          break;
        }
      }
      return $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], arguments[1], new $cljs$core$IndexedSeq$$($args_arr__4839__auto__$jscomp$7$$.slice(2), 0, null));
  }
};
$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$1$ = function() {
  return !0;
};
$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$125$$, $y$jscomp$76$$) {
  return null == $x$jscomp$125$$ ? null == $y$jscomp$76$$ : $x$jscomp$125$$ === $y$jscomp$76$$ || $cljs$core$_equiv$$($x$jscomp$125$$, $y$jscomp$76$$);
};
$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($G__33346_x$jscomp$126$$, $G__33347_y$jscomp$77$$, $G__33348_more$$) {
  for (;;) {
    if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($G__33346_x$jscomp$126$$, $G__33347_y$jscomp$77$$)) {
      if ($cljs$core$next$$($G__33348_more$$)) {
        $G__33346_x$jscomp$126$$ = $G__33347_y$jscomp$77$$, $G__33347_y$jscomp$77$$ = $cljs$core$first$$($G__33348_more$$), $G__33348_more$$ = $cljs$core$next$$($G__33348_more$$);
      } else {
        return $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($G__33347_y$jscomp$77$$, $cljs$core$first$$($G__33348_more$$));
      }
    } else {
      return !1;
    }
  }
};
$cljs$core$_EQ_$$.$cljs$lang$applyTo$ = function($G__31458_seq31456$$) {
  var $G__31457$$ = $cljs$core$first$$($G__31458_seq31456$$), $seq31456__$1_seq31456__$2$$ = $cljs$core$next$$($G__31458_seq31456$$);
  $G__31458_seq31456$$ = $cljs$core$first$$($seq31456__$1_seq31456__$2$$);
  $seq31456__$1_seq31456__$2$$ = $cljs$core$next$$($seq31456__$1_seq31456__$2$$);
  return this.$cljs$core$IFn$_invoke$arity$variadic$($G__31457$$, $G__31458_seq31456$$, $seq31456__$1_seq31456__$2$$);
};
$cljs$core$_EQ_$$.$cljs$lang$maxFixedArity$ = 2;
function $cljs$core$ES6Iterator$$($s$jscomp$39$$) {
  this.$s$ = $s$jscomp$39$$;
}
$cljs$core$ES6Iterator$$.prototype.next = function() {
  if (null != this.$s$) {
    var $x$jscomp$127$$ = $cljs$core$first$$(this.$s$);
    this.$s$ = $cljs$core$next$$(this.$s$);
    return {value:$x$jscomp$127$$, done:!1};
  }
  return {value:null, done:!0};
};
function $cljs$core$es6_iterator$$($coll$jscomp$72$$) {
  return new $cljs$core$ES6Iterator$$($cljs$core$seq$$($coll$jscomp$72$$));
}
function $cljs$core$ES6IteratorSeq$$($value$jscomp$165$$, $iter$jscomp$15$$) {
  this.value = $value$jscomp$165$$;
  this.$iter$ = $iter$jscomp$15$$;
  this.$_rest$ = null;
  this.$cljs$lang$protocol_mask$partition0$$ = 8388672;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$cljs$core$ES6IteratorSeq$$.prototype.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$cljs$core$ES6IteratorSeq$$.prototype.$cljs$core$ISeq$_first$arity$1$ = function() {
  return this.value;
};
$cljs$core$ES6IteratorSeq$$.prototype.$cljs$core$ISeq$_rest$arity$1$ = function() {
  null == this.$_rest$ && (this.$_rest$ = $cljs$core$es6_iterator_seq$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$es6_iterator_seq$$.$cljs$core$IFn$_invoke$arity$1$(this.$iter$) : $cljs$core$es6_iterator_seq$$.call(null, this.$iter$));
  return this.$_rest$;
};
function $cljs$core$es6_iterator_seq$$($iter$jscomp$17$$) {
  var $v$jscomp$7$$ = $iter$jscomp$17$$.next();
  return $cljs$core$truth_$$($v$jscomp$7$$.done) ? null : new $cljs$core$ES6IteratorSeq$$($v$jscomp$7$$.value, $iter$jscomp$17$$);
}
function $cljs$core$hash_ordered_coll$$($G__33361_coll$jscomp$73_coll__$1$$) {
  var $G__33359_n$jscomp$43$$ = 0, $G__33360_hash_code$$ = 1;
  for ($G__33361_coll$jscomp$73_coll__$1$$ = $cljs$core$seq$$($G__33361_coll$jscomp$73_coll__$1$$);;) {
    if (null != $G__33361_coll$jscomp$73_coll__$1$$) {
      $G__33359_n$jscomp$43$$ += 1, $G__33360_hash_code$$ = $cljs$core$imul$$(31, $G__33360_hash_code$$) + $cljs$core$hash$$($cljs$core$first$$($G__33361_coll$jscomp$73_coll__$1$$)) | 0, $G__33361_coll$jscomp$73_coll__$1$$ = $cljs$core$next$$($G__33361_coll$jscomp$73_coll__$1$$);
    } else {
      return $cljs$core$m3_fmix$$($cljs$core$m3_mix_H1$$(0, $cljs$core$m3_mix_K1$$($G__33360_hash_code$$)), $G__33359_n$jscomp$43$$);
    }
  }
}
var $cljs$core$empty_ordered_hash$$ = $cljs$core$m3_fmix$$($cljs$core$m3_mix_H1$$(0, $cljs$core$m3_mix_K1$$(1)), 0);
function $cljs$core$hash_unordered_coll$$($G__33364_coll$jscomp$74_coll__$1$jscomp$1$$) {
  var $G__33362_n$jscomp$44$$ = 0, $G__33363_hash_code$jscomp$1$$ = 0;
  for ($G__33364_coll$jscomp$74_coll__$1$jscomp$1$$ = $cljs$core$seq$$($G__33364_coll$jscomp$74_coll__$1$jscomp$1$$);;) {
    if (null != $G__33364_coll$jscomp$74_coll__$1$jscomp$1$$) {
      $G__33362_n$jscomp$44$$ += 1, $G__33363_hash_code$jscomp$1$$ = $G__33363_hash_code$jscomp$1$$ + $cljs$core$hash$$($cljs$core$first$$($G__33364_coll$jscomp$74_coll__$1$jscomp$1$$)) | 0, $G__33364_coll$jscomp$74_coll__$1$jscomp$1$$ = $cljs$core$next$$($G__33364_coll$jscomp$74_coll__$1$jscomp$1$$);
    } else {
      return $cljs$core$m3_fmix$$($cljs$core$m3_mix_H1$$(0, $cljs$core$m3_mix_K1$$($G__33363_hash_code$jscomp$1$$)), $G__33362_n$jscomp$44$$);
    }
  }
}
var $cljs$core$empty_unordered_hash$$ = $cljs$core$m3_fmix$$($cljs$core$m3_mix_H1$$(0, $cljs$core$m3_mix_K1$$(0)), 0);
$cljs$core$ICounted$$["null"] = !0;
$cljs$core$_count$$["null"] = function() {
  return 0;
};
Date.prototype.$cljs$core$IEquiv$_equiv$arity$2$ = function($o$jscomp$78$$, $other$jscomp$49$$) {
  return $other$jscomp$49$$ instanceof Date && this.valueOf() === $other$jscomp$49$$.valueOf();
};
$cljs$core$_equiv$$.number = function($x$jscomp$129$$, $o$jscomp$79$$) {
  return $x$jscomp$129$$ === $o$jscomp$79$$;
};
$cljs$core$Fn$$["function"] = !0;
$cljs$core$IMeta$$["function"] = !0;
$cljs$core$_meta$$["function"] = function() {
  return null;
};
$cljs$core$_hash$$._ = function($o$jscomp$80$$) {
  return $goog$getUid$$($o$jscomp$80$$);
};
function $cljs$core$inc$$($x$jscomp$130$$) {
  return $x$jscomp$130$$ + 1;
}
function $cljs$core$Reduced$$() {
  this.$val$ = !1;
  this.$cljs$lang$protocol_mask$partition0$$ = 32768;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$cljs$core$Reduced$$.prototype.$cljs$core$IDeref$_deref$arity$1$ = function() {
  return this.$val$;
};
function $cljs$core$reduced_QMARK_$$($r$jscomp$16$$) {
  return $r$jscomp$16$$ instanceof $cljs$core$Reduced$$;
}
function $cljs$core$deref$$($o$jscomp$82$$) {
  return $cljs$core$_deref$$($o$jscomp$82$$);
}
function $cljs$core$ci_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($cicoll$$, $f$jscomp$126$$) {
  var $cnt$$ = $cicoll$$.$cljs$core$ICounted$_count$arity$1$(null);
  if (0 === $cnt$$) {
    return $f$jscomp$126$$.$cljs$core$IFn$_invoke$arity$0$ ? $f$jscomp$126$$.$cljs$core$IFn$_invoke$arity$0$() : $f$jscomp$126$$.call(null);
  }
  for (var $G__31463$jscomp$inline_396_nval_val$jscomp$55$$ = $cicoll$$.$cljs$core$IIndexed$_nth$arity$2$(null, 0), $G__33374_n$jscomp$45$$ = 1;;) {
    if ($G__33374_n$jscomp$45$$ < $cnt$$) {
      var $G__31464$jscomp$inline_397$$ = $cicoll$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__33374_n$jscomp$45$$);
      $G__31463$jscomp$inline_396_nval_val$jscomp$55$$ = $f$jscomp$126$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$126$$.$cljs$core$IFn$_invoke$arity$2$($G__31463$jscomp$inline_396_nval_val$jscomp$55$$, $G__31464$jscomp$inline_397$$) : $f$jscomp$126$$.call(null, $G__31463$jscomp$inline_396_nval_val$jscomp$55$$, $G__31464$jscomp$inline_397$$);
      if ($cljs$core$reduced_QMARK_$$($G__31463$jscomp$inline_396_nval_val$jscomp$55$$)) {
        return $cljs$core$_deref$$($G__31463$jscomp$inline_396_nval_val$jscomp$55$$);
      }
      $G__33374_n$jscomp$45$$ += 1;
    } else {
      return $G__31463$jscomp$inline_396_nval_val$jscomp$55$$;
    }
  }
}
function $cljs$core$ci_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($cicoll$jscomp$1$$, $f$jscomp$127$$, $G__33380_n$jscomp$46_val$jscomp$56$$) {
  var $cnt$jscomp$1$$ = $cicoll$jscomp$1$$.$cljs$core$ICounted$_count$arity$1$(null), $G__31465$jscomp$inline_399_nval$jscomp$1_val__$1$$ = $G__33380_n$jscomp$46_val$jscomp$56$$;
  for ($G__33380_n$jscomp$46_val$jscomp$56$$ = 0;;) {
    if ($G__33380_n$jscomp$46_val$jscomp$56$$ < $cnt$jscomp$1$$) {
      var $G__31466$jscomp$inline_400$$ = $cicoll$jscomp$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__33380_n$jscomp$46_val$jscomp$56$$);
      $G__31465$jscomp$inline_399_nval$jscomp$1_val__$1$$ = $f$jscomp$127$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$127$$.$cljs$core$IFn$_invoke$arity$2$($G__31465$jscomp$inline_399_nval$jscomp$1_val__$1$$, $G__31466$jscomp$inline_400$$) : $f$jscomp$127$$.call(null, $G__31465$jscomp$inline_399_nval$jscomp$1_val__$1$$, $G__31466$jscomp$inline_400$$);
      if ($cljs$core$reduced_QMARK_$$($G__31465$jscomp$inline_399_nval$jscomp$1_val__$1$$)) {
        return $cljs$core$_deref$$($G__31465$jscomp$inline_399_nval$jscomp$1_val__$1$$);
      }
      $G__33380_n$jscomp$46_val$jscomp$56$$ += 1;
    } else {
      return $G__31465$jscomp$inline_399_nval$jscomp$1_val__$1$$;
    }
  }
}
function $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($arr$jscomp$72$$, $f$jscomp$128$$) {
  var $cnt$jscomp$2$$ = $arr$jscomp$72$$.length;
  if (0 === $arr$jscomp$72$$.length) {
    return $f$jscomp$128$$.$cljs$core$IFn$_invoke$arity$0$ ? $f$jscomp$128$$.$cljs$core$IFn$_invoke$arity$0$() : $f$jscomp$128$$.call(null);
  }
  for (var $G__31469$jscomp$inline_402_nval$jscomp$2_val$jscomp$57$$ = $arr$jscomp$72$$[0], $G__33385_n$jscomp$47$$ = 1;;) {
    if ($G__33385_n$jscomp$47$$ < $cnt$jscomp$2$$) {
      var $G__31470$jscomp$inline_403$$ = $arr$jscomp$72$$[$G__33385_n$jscomp$47$$];
      $G__31469$jscomp$inline_402_nval$jscomp$2_val$jscomp$57$$ = $f$jscomp$128$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$128$$.$cljs$core$IFn$_invoke$arity$2$($G__31469$jscomp$inline_402_nval$jscomp$2_val$jscomp$57$$, $G__31470$jscomp$inline_403$$) : $f$jscomp$128$$.call(null, $G__31469$jscomp$inline_402_nval$jscomp$2_val$jscomp$57$$, $G__31470$jscomp$inline_403$$);
      if ($cljs$core$reduced_QMARK_$$($G__31469$jscomp$inline_402_nval$jscomp$2_val$jscomp$57$$)) {
        return $cljs$core$_deref$$($G__31469$jscomp$inline_402_nval$jscomp$2_val$jscomp$57$$);
      }
      $G__33385_n$jscomp$47$$ += 1;
    } else {
      return $G__31469$jscomp$inline_402_nval$jscomp$2_val$jscomp$57$$;
    }
  }
}
function $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($arr$jscomp$73$$, $f$jscomp$129$$, $G__33390_n$jscomp$48_val$jscomp$58$$) {
  var $cnt$jscomp$3$$ = $arr$jscomp$73$$.length, $G__31471$jscomp$inline_405_nval$jscomp$3_val__$1$jscomp$1$$ = $G__33390_n$jscomp$48_val$jscomp$58$$;
  for ($G__33390_n$jscomp$48_val$jscomp$58$$ = 0;;) {
    if ($G__33390_n$jscomp$48_val$jscomp$58$$ < $cnt$jscomp$3$$) {
      var $G__31472$jscomp$inline_406$$ = $arr$jscomp$73$$[$G__33390_n$jscomp$48_val$jscomp$58$$];
      $G__31471$jscomp$inline_405_nval$jscomp$3_val__$1$jscomp$1$$ = $f$jscomp$129$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$129$$.$cljs$core$IFn$_invoke$arity$2$($G__31471$jscomp$inline_405_nval$jscomp$3_val__$1$jscomp$1$$, $G__31472$jscomp$inline_406$$) : $f$jscomp$129$$.call(null, $G__31471$jscomp$inline_405_nval$jscomp$3_val__$1$jscomp$1$$, $G__31472$jscomp$inline_406$$);
      if ($cljs$core$reduced_QMARK_$$($G__31471$jscomp$inline_405_nval$jscomp$3_val__$1$jscomp$1$$)) {
        return $cljs$core$_deref$$($G__31471$jscomp$inline_405_nval$jscomp$3_val__$1$jscomp$1$$);
      }
      $G__33390_n$jscomp$48_val$jscomp$58$$ += 1;
    } else {
      return $G__31471$jscomp$inline_405_nval$jscomp$3_val__$1$jscomp$1$$;
    }
  }
}
function $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$04$$($arr$jscomp$74$$, $f$jscomp$130$$, $G__31473$jscomp$inline_408_nval$jscomp$4_val$jscomp$59_val__$1$jscomp$2$$, $G__33396_idx$jscomp$13_n$jscomp$49$$) {
  for (var $cnt$jscomp$4$$ = $arr$jscomp$74$$.length;;) {
    if ($G__33396_idx$jscomp$13_n$jscomp$49$$ < $cnt$jscomp$4$$) {
      var $G__31474$jscomp$inline_409$$ = $arr$jscomp$74$$[$G__33396_idx$jscomp$13_n$jscomp$49$$];
      $G__31473$jscomp$inline_408_nval$jscomp$4_val$jscomp$59_val__$1$jscomp$2$$ = $f$jscomp$130$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$130$$.$cljs$core$IFn$_invoke$arity$2$($G__31473$jscomp$inline_408_nval$jscomp$4_val$jscomp$59_val__$1$jscomp$2$$, $G__31474$jscomp$inline_409$$) : $f$jscomp$130$$.call(null, $G__31473$jscomp$inline_408_nval$jscomp$4_val$jscomp$59_val__$1$jscomp$2$$, $G__31474$jscomp$inline_409$$);
      if ($cljs$core$reduced_QMARK_$$($G__31473$jscomp$inline_408_nval$jscomp$4_val$jscomp$59_val__$1$jscomp$2$$)) {
        return $cljs$core$_deref$$($G__31473$jscomp$inline_408_nval$jscomp$4_val$jscomp$59_val__$1$jscomp$2$$);
      }
      $G__33396_idx$jscomp$13_n$jscomp$49$$ += 1;
    } else {
      return $G__31473$jscomp$inline_408_nval$jscomp$4_val$jscomp$59_val__$1$jscomp$2$$;
    }
  }
}
function $cljs$core$counted_QMARK_$$($x$jscomp$134$$) {
  return null != $x$jscomp$134$$ ? $x$jscomp$134$$.$cljs$lang$protocol_mask$partition0$$ & 2 || $cljs$core$PROTOCOL_SENTINEL$$ === $x$jscomp$134$$.$cljs$core$ICounted$$ ? !0 : $x$jscomp$134$$.$cljs$lang$protocol_mask$partition0$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ICounted$$, $x$jscomp$134$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ICounted$$, $x$jscomp$134$$);
}
function $cljs$core$indexed_QMARK_$$($x$jscomp$135$$) {
  return null != $x$jscomp$135$$ ? $x$jscomp$135$$.$cljs$lang$protocol_mask$partition0$$ & 16 || $cljs$core$PROTOCOL_SENTINEL$$ === $x$jscomp$135$$.$cljs$core$IIndexed$$ ? !0 : $x$jscomp$135$$.$cljs$lang$protocol_mask$partition0$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IIndexed$$, $x$jscomp$135$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IIndexed$$, $x$jscomp$135$$);
}
function $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$($coll$jscomp$76$$, $x$jscomp$137$$, $JSCompiler_temp$jscomp$47_JSCompiler_temp$jscomp$48_idx$jscomp$14_start$jscomp$21_y__4296__auto__$jscomp$inline_411$$) {
  var $len$jscomp$12$$ = $cljs$core$count$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$count$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$76$$) : $cljs$core$count$$.call(null, $coll$jscomp$76$$);
  if ($JSCompiler_temp$jscomp$47_JSCompiler_temp$jscomp$48_idx$jscomp$14_start$jscomp$21_y__4296__auto__$jscomp$inline_411$$ >= $len$jscomp$12$$) {
    return -1;
  }
  !(0 < $JSCompiler_temp$jscomp$47_JSCompiler_temp$jscomp$48_idx$jscomp$14_start$jscomp$21_y__4296__auto__$jscomp$inline_411$$) && 0 > $JSCompiler_temp$jscomp$47_JSCompiler_temp$jscomp$48_idx$jscomp$14_start$jscomp$21_y__4296__auto__$jscomp$inline_411$$ && ($JSCompiler_temp$jscomp$47_JSCompiler_temp$jscomp$48_idx$jscomp$14_start$jscomp$21_y__4296__auto__$jscomp$inline_411$$ += $len$jscomp$12$$, $JSCompiler_temp$jscomp$47_JSCompiler_temp$jscomp$48_idx$jscomp$14_start$jscomp$21_y__4296__auto__$jscomp$inline_411$$ = 
  0 > $JSCompiler_temp$jscomp$47_JSCompiler_temp$jscomp$48_idx$jscomp$14_start$jscomp$21_y__4296__auto__$jscomp$inline_411$$ ? 0 : $JSCompiler_temp$jscomp$47_JSCompiler_temp$jscomp$48_idx$jscomp$14_start$jscomp$21_y__4296__auto__$jscomp$inline_411$$);
  for (;;) {
    if ($JSCompiler_temp$jscomp$47_JSCompiler_temp$jscomp$48_idx$jscomp$14_start$jscomp$21_y__4296__auto__$jscomp$inline_411$$ < $len$jscomp$12$$) {
      if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$ ? $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($coll$jscomp$76$$, $JSCompiler_temp$jscomp$47_JSCompiler_temp$jscomp$48_idx$jscomp$14_start$jscomp$21_y__4296__auto__$jscomp$inline_411$$) : $cljs$core$nth$$.call(null, $coll$jscomp$76$$, $JSCompiler_temp$jscomp$47_JSCompiler_temp$jscomp$48_idx$jscomp$14_start$jscomp$21_y__4296__auto__$jscomp$inline_411$$), $x$jscomp$137$$)) {
        return $JSCompiler_temp$jscomp$47_JSCompiler_temp$jscomp$48_idx$jscomp$14_start$jscomp$21_y__4296__auto__$jscomp$inline_411$$;
      }
      $JSCompiler_temp$jscomp$47_JSCompiler_temp$jscomp$48_idx$jscomp$14_start$jscomp$21_y__4296__auto__$jscomp$inline_411$$ += 1;
    } else {
      return -1;
    }
  }
}
function $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$($coll$jscomp$78$$, $x$jscomp$139$$, $JSCompiler_temp$jscomp$49_idx$jscomp$15_start$jscomp$22$$) {
  var $len$jscomp$13_x__4298__auto__$jscomp$inline_413$$ = $cljs$core$count$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$count$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$78$$) : $cljs$core$count$$.call(null, $coll$jscomp$78$$);
  if (0 === $len$jscomp$13_x__4298__auto__$jscomp$inline_413$$) {
    return -1;
  }
  0 < $JSCompiler_temp$jscomp$49_idx$jscomp$15_start$jscomp$22$$ ? (--$len$jscomp$13_x__4298__auto__$jscomp$inline_413$$, $JSCompiler_temp$jscomp$49_idx$jscomp$15_start$jscomp$22$$ = $len$jscomp$13_x__4298__auto__$jscomp$inline_413$$ < $JSCompiler_temp$jscomp$49_idx$jscomp$15_start$jscomp$22$$ ? $len$jscomp$13_x__4298__auto__$jscomp$inline_413$$ : $JSCompiler_temp$jscomp$49_idx$jscomp$15_start$jscomp$22$$) : $JSCompiler_temp$jscomp$49_idx$jscomp$15_start$jscomp$22$$ = 0 > $JSCompiler_temp$jscomp$49_idx$jscomp$15_start$jscomp$22$$ ? 
  $len$jscomp$13_x__4298__auto__$jscomp$inline_413$$ + $JSCompiler_temp$jscomp$49_idx$jscomp$15_start$jscomp$22$$ : $JSCompiler_temp$jscomp$49_idx$jscomp$15_start$jscomp$22$$;
  for (;;) {
    if (0 <= $JSCompiler_temp$jscomp$49_idx$jscomp$15_start$jscomp$22$$) {
      if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$ ? $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($coll$jscomp$78$$, $JSCompiler_temp$jscomp$49_idx$jscomp$15_start$jscomp$22$$) : $cljs$core$nth$$.call(null, $coll$jscomp$78$$, $JSCompiler_temp$jscomp$49_idx$jscomp$15_start$jscomp$22$$), $x$jscomp$139$$)) {
        return $JSCompiler_temp$jscomp$49_idx$jscomp$15_start$jscomp$22$$;
      }
      --$JSCompiler_temp$jscomp$49_idx$jscomp$15_start$jscomp$22$$;
    } else {
      return -1;
    }
  }
}
function $cljs$core$IndexedSeqIterator$$($arr$jscomp$75$$, $i$jscomp$165$$) {
  this.$arr$ = $arr$jscomp$75$$;
  this.$i$ = $i$jscomp$165$$;
}
$cljs$core$IndexedSeqIterator$$.prototype.$hasNext$ = function() {
  return this.$i$ < this.$arr$.length;
};
$cljs$core$IndexedSeqIterator$$.prototype.next = function() {
  var $ret$jscomp$1$$ = this.$arr$[this.$i$];
  this.$i$ += 1;
  return $ret$jscomp$1$$;
};
function $cljs$core$IndexedSeq$$($arr$jscomp$77$$, $i$jscomp$167$$, $meta$jscomp$2$$) {
  this.$arr$ = $arr$jscomp$77$$;
  this.$i$ = $i$jscomp$167$$;
  this.$meta$ = $meta$jscomp$2$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 166592766;
  this.$cljs$lang$protocol_mask$partition1$$ = 139264;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$IndexedSeq$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__33420$$ = null;
  $G__33420$$ = function($x$jscomp$142$$, $start$jscomp$24$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$142$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$142$$, $start$jscomp$24$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__33420$$.$cljs$core$IFn$_invoke$arity$1$ = function($x$jscomp$140$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$140$$, 0);
  };
  $G__33420$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$141$$, $start$jscomp$23$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$141$$, $start$jscomp$23$$);
  };
  return $G__33420$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__33422__1$$($x$jscomp$143$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$143$$, $cljs$core$count$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$count$$.$cljs$core$IFn$_invoke$arity$1$(this) : $cljs$core$count$$.call(null, this));
  }
  var $G__33422$$ = null;
  $G__33422$$ = function($x$jscomp$145$$, $start$jscomp$26$$) {
    switch(arguments.length) {
      case 1:
        return $G__33422__1$$.call(this, $x$jscomp$145$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$145$$, $start$jscomp$26$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__33422$$.$cljs$core$IFn$_invoke$arity$1$ = $G__33422__1$$;
  $G__33422$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$144$$, $start$jscomp$25$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$144$$, $start$jscomp$25$$);
  };
  return $G__33422$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$2$ = function($coll$jscomp$84_i__$1$$, $n$jscomp$50$$) {
  $coll$jscomp$84_i__$1$$ = $n$jscomp$50$$ + this.$i$;
  if (0 <= $coll$jscomp$84_i__$1$$ && $coll$jscomp$84_i__$1$$ < this.$arr$.length) {
    return this.$arr$[$coll$jscomp$84_i__$1$$];
  }
  throw Error("Index out of bounds");
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$3$ = function($coll$jscomp$85_i__$1$jscomp$1$$, $n$jscomp$51$$, $not_found$jscomp$7$$) {
  $coll$jscomp$85_i__$1$jscomp$1$$ = $n$jscomp$51$$ + this.$i$;
  return 0 <= $coll$jscomp$85_i__$1$jscomp$1$$ && $coll$jscomp$85_i__$1$jscomp$1$$ < this.$arr$.length ? this.$arr$[$coll$jscomp$85_i__$1$jscomp$1$$] : $not_found$jscomp$7$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIterable$_iterator$arity$1$ = function() {
  return new $cljs$core$IndexedSeqIterator$$(this.$arr$, this.$i$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  return this.$i$ + 1 < this.$arr$.length ? new $cljs$core$IndexedSeq$$(this.$arr$, this.$i$ + 1, null) : null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  var $y__4296__auto__$jscomp$1$$ = this.$arr$.length - this.$i$;
  return 0 > $y__4296__auto__$jscomp$1$$ ? 0 : $y__4296__auto__$jscomp$1$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  return $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$90$$, $other$jscomp$52$$) {
  return $cljs$core$equiv_sequential$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$core$equiv_sequential$$.$cljs$core$IFn$_invoke$arity$2$(this, $other$jscomp$52$$) : $cljs$core$equiv_sequential$$.call(null, this, $other$jscomp$52$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$92$$, $f$jscomp$131$$) {
  return $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$04$$(this.$arr$, $f$jscomp$131$$, this.$arr$[this.$i$], this.$i$ + 1);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$jscomp$93$$, $f$jscomp$132$$, $start$jscomp$27$$) {
  return $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$04$$(this.$arr$, $f$jscomp$132$$, $start$jscomp$27$$, this.$i$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return this.$arr$[this.$i$];
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  return this.$i$ + 1 < this.$arr$.length ? new $cljs$core$IndexedSeq$$(this.$arr$, this.$i$ + 1, null) : $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this.$i$ < this.$arr$.length ? this : null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$94$$, $new_meta$jscomp$2$$) {
  return $new_meta$jscomp$2$$ === this.$meta$ ? this : new $cljs$core$IndexedSeq$$(this.$arr$, this.$i$, $new_meta$jscomp$2$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$95$$, $o$jscomp$83$$) {
  return $cljs$core$cons$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$core$cons$$.$cljs$core$IFn$_invoke$arity$2$($o$jscomp$83$$, this) : $cljs$core$cons$$.call(null, $o$jscomp$83$$, this);
};
$cljs$core$IndexedSeq$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$($prim$jscomp$1$$) {
  return 0 < $prim$jscomp$1$$.length ? new $cljs$core$IndexedSeq$$($prim$jscomp$1$$, 0, null) : null;
}
$cljs$core$_equiv$$._ = function($x$jscomp$152$$, $o$jscomp$85$$) {
  return $x$jscomp$152$$ === $o$jscomp$85$$;
};
var $cljs$core$conj$$ = function $cljs$core$conj$$($var_args$jscomp$118$$) {
  switch(arguments.length) {
    case 0:
      return $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$0$();
    case 1:
      return $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      for (var $args_arr__4839__auto__$jscomp$8$$ = [], $len__4818__auto___33454$$ = arguments.length, $i__4819__auto___33455$$ = 0;;) {
        if ($i__4819__auto___33455$$ < $len__4818__auto___33454$$) {
          $args_arr__4839__auto__$jscomp$8$$.push(arguments[$i__4819__auto___33455$$]), $i__4819__auto___33455$$ += 1;
        } else {
          break;
        }
      }
      return $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], arguments[1], new $cljs$core$IndexedSeq$$($args_arr__4839__auto__$jscomp$8$$.slice(2), 0, null));
  }
};
$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$0$ = function() {
  return $cljs$core$PersistentVector$EMPTY$$;
};
$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$1$ = function($coll$jscomp$117$$) {
  return $coll$jscomp$117$$;
};
$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$ = function($coll$jscomp$118$$, $x$jscomp$153$$) {
  return null != $coll$jscomp$118$$ ? $cljs$core$_conj$$($coll$jscomp$118$$, $x$jscomp$153$$) : new $cljs$core$List$$(null, $x$jscomp$153$$, null, 1, null);
};
$cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($G__33457_coll$jscomp$119$$, $G__33458_x$jscomp$154$$, $G__33459_xs$jscomp$5$$) {
  for (;;) {
    if ($cljs$core$truth_$$($G__33459_xs$jscomp$5$$)) {
      $G__33457_coll$jscomp$119$$ = $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__33457_coll$jscomp$119$$, $G__33458_x$jscomp$154$$), $G__33458_x$jscomp$154$$ = $cljs$core$first$$($G__33459_xs$jscomp$5$$), $G__33459_xs$jscomp$5$$ = $cljs$core$next$$($G__33459_xs$jscomp$5$$);
    } else {
      return $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($G__33457_coll$jscomp$119$$, $G__33458_x$jscomp$154$$);
    }
  }
};
$cljs$core$conj$$.$cljs$lang$applyTo$ = function($G__31488_seq31486$$) {
  var $G__31487$$ = $cljs$core$first$$($G__31488_seq31486$$), $seq31486__$1_seq31486__$2$$ = $cljs$core$next$$($G__31488_seq31486$$);
  $G__31488_seq31486$$ = $cljs$core$first$$($seq31486__$1_seq31486__$2$$);
  $seq31486__$1_seq31486__$2$$ = $cljs$core$next$$($seq31486__$1_seq31486__$2$$);
  return this.$cljs$core$IFn$_invoke$arity$variadic$($G__31487$$, $G__31488_seq31486$$, $seq31486__$1_seq31486__$2$$);
};
$cljs$core$conj$$.$cljs$lang$maxFixedArity$ = 2;
function $cljs$core$count$$($G__33460$jscomp$inline_434_JSCompiler_temp$jscomp$50_JSCompiler_temp$jscomp$51_JSCompiler_temp$jscomp$52_JSCompiler_temp$jscomp$53_JSCompiler_temp$jscomp$54_coll$jscomp$122_s$jscomp$inline_432$$) {
  if (null != $G__33460$jscomp$inline_434_JSCompiler_temp$jscomp$50_JSCompiler_temp$jscomp$51_JSCompiler_temp$jscomp$52_JSCompiler_temp$jscomp$53_JSCompiler_temp$jscomp$54_coll$jscomp$122_s$jscomp$inline_432$$) {
    if (null != $G__33460$jscomp$inline_434_JSCompiler_temp$jscomp$50_JSCompiler_temp$jscomp$51_JSCompiler_temp$jscomp$52_JSCompiler_temp$jscomp$53_JSCompiler_temp$jscomp$54_coll$jscomp$122_s$jscomp$inline_432$$ && ($G__33460$jscomp$inline_434_JSCompiler_temp$jscomp$50_JSCompiler_temp$jscomp$51_JSCompiler_temp$jscomp$52_JSCompiler_temp$jscomp$53_JSCompiler_temp$jscomp$54_coll$jscomp$122_s$jscomp$inline_432$$.$cljs$lang$protocol_mask$partition0$$ & 2 || $cljs$core$PROTOCOL_SENTINEL$$ === $G__33460$jscomp$inline_434_JSCompiler_temp$jscomp$50_JSCompiler_temp$jscomp$51_JSCompiler_temp$jscomp$52_JSCompiler_temp$jscomp$53_JSCompiler_temp$jscomp$54_coll$jscomp$122_s$jscomp$inline_432$$.$cljs$core$ICounted$$)) {
      $G__33460$jscomp$inline_434_JSCompiler_temp$jscomp$50_JSCompiler_temp$jscomp$51_JSCompiler_temp$jscomp$52_JSCompiler_temp$jscomp$53_JSCompiler_temp$jscomp$54_coll$jscomp$122_s$jscomp$inline_432$$ = $G__33460$jscomp$inline_434_JSCompiler_temp$jscomp$50_JSCompiler_temp$jscomp$51_JSCompiler_temp$jscomp$52_JSCompiler_temp$jscomp$53_JSCompiler_temp$jscomp$54_coll$jscomp$122_s$jscomp$inline_432$$.$cljs$core$ICounted$_count$arity$1$(null);
    } else {
      if (Array.isArray($G__33460$jscomp$inline_434_JSCompiler_temp$jscomp$50_JSCompiler_temp$jscomp$51_JSCompiler_temp$jscomp$52_JSCompiler_temp$jscomp$53_JSCompiler_temp$jscomp$54_coll$jscomp$122_s$jscomp$inline_432$$)) {
        $G__33460$jscomp$inline_434_JSCompiler_temp$jscomp$50_JSCompiler_temp$jscomp$51_JSCompiler_temp$jscomp$52_JSCompiler_temp$jscomp$53_JSCompiler_temp$jscomp$54_coll$jscomp$122_s$jscomp$inline_432$$ = $G__33460$jscomp$inline_434_JSCompiler_temp$jscomp$50_JSCompiler_temp$jscomp$51_JSCompiler_temp$jscomp$52_JSCompiler_temp$jscomp$53_JSCompiler_temp$jscomp$54_coll$jscomp$122_s$jscomp$inline_432$$.length;
      } else {
        if ("string" === typeof $G__33460$jscomp$inline_434_JSCompiler_temp$jscomp$50_JSCompiler_temp$jscomp$51_JSCompiler_temp$jscomp$52_JSCompiler_temp$jscomp$53_JSCompiler_temp$jscomp$54_coll$jscomp$122_s$jscomp$inline_432$$) {
          $G__33460$jscomp$inline_434_JSCompiler_temp$jscomp$50_JSCompiler_temp$jscomp$51_JSCompiler_temp$jscomp$52_JSCompiler_temp$jscomp$53_JSCompiler_temp$jscomp$54_coll$jscomp$122_s$jscomp$inline_432$$ = $G__33460$jscomp$inline_434_JSCompiler_temp$jscomp$50_JSCompiler_temp$jscomp$51_JSCompiler_temp$jscomp$52_JSCompiler_temp$jscomp$53_JSCompiler_temp$jscomp$54_coll$jscomp$122_s$jscomp$inline_432$$.length;
        } else {
          if (null != $G__33460$jscomp$inline_434_JSCompiler_temp$jscomp$50_JSCompiler_temp$jscomp$51_JSCompiler_temp$jscomp$52_JSCompiler_temp$jscomp$53_JSCompiler_temp$jscomp$54_coll$jscomp$122_s$jscomp$inline_432$$ && ($G__33460$jscomp$inline_434_JSCompiler_temp$jscomp$50_JSCompiler_temp$jscomp$51_JSCompiler_temp$jscomp$52_JSCompiler_temp$jscomp$53_JSCompiler_temp$jscomp$54_coll$jscomp$122_s$jscomp$inline_432$$.$cljs$lang$protocol_mask$partition0$$ & 8388608 || $cljs$core$PROTOCOL_SENTINEL$$ === 
          $G__33460$jscomp$inline_434_JSCompiler_temp$jscomp$50_JSCompiler_temp$jscomp$51_JSCompiler_temp$jscomp$52_JSCompiler_temp$jscomp$53_JSCompiler_temp$jscomp$54_coll$jscomp$122_s$jscomp$inline_432$$.$cljs$core$ISeqable$$)) {
            a: {
              $G__33460$jscomp$inline_434_JSCompiler_temp$jscomp$50_JSCompiler_temp$jscomp$51_JSCompiler_temp$jscomp$52_JSCompiler_temp$jscomp$53_JSCompiler_temp$jscomp$54_coll$jscomp$122_s$jscomp$inline_432$$ = $cljs$core$seq$$($G__33460$jscomp$inline_434_JSCompiler_temp$jscomp$50_JSCompiler_temp$jscomp$51_JSCompiler_temp$jscomp$52_JSCompiler_temp$jscomp$53_JSCompiler_temp$jscomp$54_coll$jscomp$122_s$jscomp$inline_432$$);
              for (var $G__33461$jscomp$inline_435_acc$jscomp$inline_433$$ = 0;;) {
                if ($cljs$core$counted_QMARK_$$($G__33460$jscomp$inline_434_JSCompiler_temp$jscomp$50_JSCompiler_temp$jscomp$51_JSCompiler_temp$jscomp$52_JSCompiler_temp$jscomp$53_JSCompiler_temp$jscomp$54_coll$jscomp$122_s$jscomp$inline_432$$)) {
                  $G__33460$jscomp$inline_434_JSCompiler_temp$jscomp$50_JSCompiler_temp$jscomp$51_JSCompiler_temp$jscomp$52_JSCompiler_temp$jscomp$53_JSCompiler_temp$jscomp$54_coll$jscomp$122_s$jscomp$inline_432$$ = $G__33461$jscomp$inline_435_acc$jscomp$inline_433$$ + $cljs$core$_count$$($G__33460$jscomp$inline_434_JSCompiler_temp$jscomp$50_JSCompiler_temp$jscomp$51_JSCompiler_temp$jscomp$52_JSCompiler_temp$jscomp$53_JSCompiler_temp$jscomp$54_coll$jscomp$122_s$jscomp$inline_432$$);
                  break a;
                }
                $G__33460$jscomp$inline_434_JSCompiler_temp$jscomp$50_JSCompiler_temp$jscomp$51_JSCompiler_temp$jscomp$52_JSCompiler_temp$jscomp$53_JSCompiler_temp$jscomp$54_coll$jscomp$122_s$jscomp$inline_432$$ = $cljs$core$next$$($G__33460$jscomp$inline_434_JSCompiler_temp$jscomp$50_JSCompiler_temp$jscomp$51_JSCompiler_temp$jscomp$52_JSCompiler_temp$jscomp$53_JSCompiler_temp$jscomp$54_coll$jscomp$122_s$jscomp$inline_432$$);
                $G__33461$jscomp$inline_435_acc$jscomp$inline_433$$ += 1;
              }
            }
          } else {
            $G__33460$jscomp$inline_434_JSCompiler_temp$jscomp$50_JSCompiler_temp$jscomp$51_JSCompiler_temp$jscomp$52_JSCompiler_temp$jscomp$53_JSCompiler_temp$jscomp$54_coll$jscomp$122_s$jscomp$inline_432$$ = $cljs$core$_count$$($G__33460$jscomp$inline_434_JSCompiler_temp$jscomp$50_JSCompiler_temp$jscomp$51_JSCompiler_temp$jscomp$52_JSCompiler_temp$jscomp$53_JSCompiler_temp$jscomp$54_coll$jscomp$122_s$jscomp$inline_432$$);
          }
        }
      }
    }
  } else {
    $G__33460$jscomp$inline_434_JSCompiler_temp$jscomp$50_JSCompiler_temp$jscomp$51_JSCompiler_temp$jscomp$52_JSCompiler_temp$jscomp$53_JSCompiler_temp$jscomp$54_coll$jscomp$122_s$jscomp$inline_432$$ = 0;
  }
  return $G__33460$jscomp$inline_434_JSCompiler_temp$jscomp$50_JSCompiler_temp$jscomp$51_JSCompiler_temp$jscomp$52_JSCompiler_temp$jscomp$53_JSCompiler_temp$jscomp$54_coll$jscomp$122_s$jscomp$inline_432$$;
}
function $cljs$core$linear_traversal_nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__33465_coll$jscomp$124$$, $G__33466_n$jscomp$53$$, $G__33467_not_found$jscomp$8$$) {
  for (;;) {
    if (null == $G__33465_coll$jscomp$124$$) {
      return $G__33467_not_found$jscomp$8$$;
    }
    if (0 === $G__33466_n$jscomp$53$$) {
      return $cljs$core$seq$$($G__33465_coll$jscomp$124$$) ? $cljs$core$first$$($G__33465_coll$jscomp$124$$) : $G__33467_not_found$jscomp$8$$;
    }
    if ($cljs$core$indexed_QMARK_$$($G__33465_coll$jscomp$124$$)) {
      return $cljs$core$_nth$$($G__33465_coll$jscomp$124$$, $G__33466_n$jscomp$53$$, $G__33467_not_found$jscomp$8$$);
    }
    if ($cljs$core$seq$$($G__33465_coll$jscomp$124$$)) {
      $G__33465_coll$jscomp$124$$ = $cljs$core$next$$($G__33465_coll$jscomp$124$$), --$G__33466_n$jscomp$53$$;
    } else {
      return $G__33467_not_found$jscomp$8$$;
    }
  }
}
function $cljs$core$nth$$($var_args$jscomp$120$$) {
  switch(arguments.length) {
    case 2:
      return $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length)].join(""));
  }
}
function $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$, $G__33464$jscomp$inline_1079_n$jscomp$54_n$jscomp$inline_1077$$) {
  if ("number" !== typeof $G__33464$jscomp$inline_1079_n$jscomp$54_n$jscomp$inline_1077$$) {
    throw Error("Index argument to nth must be a number");
  }
  if (null == $G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$) {
    return $G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$;
  }
  if (null != $G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$ && ($G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$.$cljs$lang$protocol_mask$partition0$$ & 16 || $cljs$core$PROTOCOL_SENTINEL$$ === $G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$.$cljs$core$IIndexed$$)) {
    return $G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__33464$jscomp$inline_1079_n$jscomp$54_n$jscomp$inline_1077$$);
  }
  if (Array.isArray($G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$)) {
    if (-1 < $G__33464$jscomp$inline_1079_n$jscomp$54_n$jscomp$inline_1077$$ && $G__33464$jscomp$inline_1079_n$jscomp$54_n$jscomp$inline_1077$$ < $G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$.length) {
      return $G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$[$G__33464$jscomp$inline_1079_n$jscomp$54_n$jscomp$inline_1077$$ | 0];
    }
    throw Error("Index out of bounds");
  }
  if ("string" === typeof $G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$) {
    if (-1 < $G__33464$jscomp$inline_1079_n$jscomp$54_n$jscomp$inline_1077$$ && $G__33464$jscomp$inline_1079_n$jscomp$54_n$jscomp$inline_1077$$ < $G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$.length) {
      return $G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$.charAt($G__33464$jscomp$inline_1079_n$jscomp$54_n$jscomp$inline_1077$$ | 0);
    }
    throw Error("Index out of bounds");
  }
  if (null != $G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$ && ($G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$.$cljs$lang$protocol_mask$partition0$$ & 64 || $cljs$core$PROTOCOL_SENTINEL$$ === $G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$.$cljs$core$ISeq$$) || null != $G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$ && 
  ($G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$.$cljs$lang$protocol_mask$partition0$$ & 16777216 || $cljs$core$PROTOCOL_SENTINEL$$ === $G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$.$cljs$core$ISequential$$)) {
    if (0 > $G__33464$jscomp$inline_1079_n$jscomp$54_n$jscomp$inline_1077$$) {
      throw Error("Index out of bounds");
    }
    a: {
      for (;;) {
        if (null == $G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$) {
          throw Error("Index out of bounds");
        }
        if (0 === $G__33464$jscomp$inline_1079_n$jscomp$54_n$jscomp$inline_1077$$) {
          if ($cljs$core$seq$$($G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$)) {
            $G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$ = $cljs$core$first$$($G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$);
            break a;
          }
          throw Error("Index out of bounds");
        }
        if ($cljs$core$indexed_QMARK_$$($G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$)) {
          $G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$ = $cljs$core$_nth$$($G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$, $G__33464$jscomp$inline_1079_n$jscomp$54_n$jscomp$inline_1077$$);
          break a;
        }
        if ($cljs$core$seq$$($G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$)) {
          $G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$ = $cljs$core$next$$($G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$), --$G__33464$jscomp$inline_1079_n$jscomp$54_n$jscomp$inline_1077$$;
        } else {
          throw Error("Index out of bounds");
        }
      }
    }
    return $G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$;
  }
  if ($cljs$core$native_satisfies_QMARK_$$($cljs$core$IIndexed$$, $G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$)) {
    return $cljs$core$_nth$$($G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$, $G__33464$jscomp$inline_1079_n$jscomp$54_n$jscomp$inline_1077$$);
  }
  throw Error(["nth not supported on this type ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$type__GT_str$$(null == $G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$ ? null : $G__33463$jscomp$inline_1078_JSCompiler_inline_result$jscomp$1048_coll$jscomp$125_coll$jscomp$inline_1076$$.constructor))].join(""));
}
function $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($coll$jscomp$126$$, $n$jscomp$55$$, $not_found$jscomp$9$$) {
  if ("number" !== typeof $n$jscomp$55$$) {
    throw Error("Index argument to nth must be a number.");
  }
  if (null == $coll$jscomp$126$$) {
    return $not_found$jscomp$9$$;
  }
  if (null != $coll$jscomp$126$$ && ($coll$jscomp$126$$.$cljs$lang$protocol_mask$partition0$$ & 16 || $cljs$core$PROTOCOL_SENTINEL$$ === $coll$jscomp$126$$.$cljs$core$IIndexed$$)) {
    return $coll$jscomp$126$$.$cljs$core$IIndexed$_nth$arity$3$(null, $n$jscomp$55$$, $not_found$jscomp$9$$);
  }
  if (Array.isArray($coll$jscomp$126$$)) {
    return -1 < $n$jscomp$55$$ && $n$jscomp$55$$ < $coll$jscomp$126$$.length ? $coll$jscomp$126$$[$n$jscomp$55$$ | 0] : $not_found$jscomp$9$$;
  }
  if ("string" === typeof $coll$jscomp$126$$) {
    return -1 < $n$jscomp$55$$ && $n$jscomp$55$$ < $coll$jscomp$126$$.length ? $coll$jscomp$126$$.charAt($n$jscomp$55$$ | 0) : $not_found$jscomp$9$$;
  }
  if (null != $coll$jscomp$126$$ && ($coll$jscomp$126$$.$cljs$lang$protocol_mask$partition0$$ & 64 || $cljs$core$PROTOCOL_SENTINEL$$ === $coll$jscomp$126$$.$cljs$core$ISeq$$) || null != $coll$jscomp$126$$ && ($coll$jscomp$126$$.$cljs$lang$protocol_mask$partition0$$ & 16777216 || $cljs$core$PROTOCOL_SENTINEL$$ === $coll$jscomp$126$$.$cljs$core$ISequential$$)) {
    return 0 > $n$jscomp$55$$ ? $not_found$jscomp$9$$ : $cljs$core$linear_traversal_nth$cljs$0core$0IFn$0_invoke$0arity$03$$($coll$jscomp$126$$, $n$jscomp$55$$, $not_found$jscomp$9$$);
  }
  if ($cljs$core$native_satisfies_QMARK_$$($cljs$core$IIndexed$$, $coll$jscomp$126$$)) {
    return $cljs$core$_nth$$($coll$jscomp$126$$, $n$jscomp$55$$, $not_found$jscomp$9$$);
  }
  throw Error(["nth not supported on this type ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$type__GT_str$$(null == $coll$jscomp$126$$ ? null : $coll$jscomp$126$$.constructor))].join(""));
}
var $cljs$core$get$$ = function $cljs$core$get$$($var_args$jscomp$121$$) {
  switch(arguments.length) {
    case 2:
      return $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$3$(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length)].join(""));
  }
};
$cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$ = function($o$jscomp$86$$, $k$jscomp$53$$) {
  return null == $o$jscomp$86$$ ? null : null != $o$jscomp$86$$ && ($o$jscomp$86$$.$cljs$lang$protocol_mask$partition0$$ & 256 || $cljs$core$PROTOCOL_SENTINEL$$ === $o$jscomp$86$$.$cljs$core$ILookup$$) ? $o$jscomp$86$$.$cljs$core$ILookup$_lookup$arity$2$(null, $k$jscomp$53$$) : Array.isArray($o$jscomp$86$$) ? null != $k$jscomp$53$$ && $k$jscomp$53$$ < $o$jscomp$86$$.length ? $o$jscomp$86$$[$k$jscomp$53$$ | 0] : null : "string" === typeof $o$jscomp$86$$ ? null != $k$jscomp$53$$ && -1 < $k$jscomp$53$$ && 
  $k$jscomp$53$$ < $o$jscomp$86$$.length ? $o$jscomp$86$$.charAt($k$jscomp$53$$ | 0) : null : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ILookup$$, $o$jscomp$86$$) ? $cljs$core$_lookup$$($o$jscomp$86$$, $k$jscomp$53$$) : null;
};
$cljs$core$get$$.$cljs$core$IFn$_invoke$arity$3$ = function($o$jscomp$87$$, $k$jscomp$54$$, $not_found$jscomp$10$$) {
  return null != $o$jscomp$87$$ ? null != $o$jscomp$87$$ && ($o$jscomp$87$$.$cljs$lang$protocol_mask$partition0$$ & 256 || $cljs$core$PROTOCOL_SENTINEL$$ === $o$jscomp$87$$.$cljs$core$ILookup$$) ? $o$jscomp$87$$.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$54$$, $not_found$jscomp$10$$) : Array.isArray($o$jscomp$87$$) ? null != $k$jscomp$54$$ && -1 < $k$jscomp$54$$ && $k$jscomp$54$$ < $o$jscomp$87$$.length ? $o$jscomp$87$$[$k$jscomp$54$$ | 0] : $not_found$jscomp$10$$ : "string" === typeof $o$jscomp$87$$ ? 
  null != $k$jscomp$54$$ && -1 < $k$jscomp$54$$ && $k$jscomp$54$$ < $o$jscomp$87$$.length ? $o$jscomp$87$$.charAt($k$jscomp$54$$ | 0) : $not_found$jscomp$10$$ : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ILookup$$, $o$jscomp$87$$) ? $cljs$core$_lookup$$($o$jscomp$87$$, $k$jscomp$54$$, $not_found$jscomp$10$$) : $not_found$jscomp$10$$ : $not_found$jscomp$10$$;
};
$cljs$core$get$$.$cljs$lang$maxFixedArity$ = 3;
var $cljs$core$assoc$$ = function $cljs$core$assoc$$($var_args$jscomp$122$$) {
  switch(arguments.length) {
    case 3:
      return $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$(arguments[0], arguments[1], arguments[2]);
    default:
      for (var $args_arr__4839__auto__$jscomp$9$$ = [], $len__4818__auto___33484$$ = arguments.length, $i__4819__auto___33485$$ = 0;;) {
        if ($i__4819__auto___33485$$ < $len__4818__auto___33484$$) {
          $args_arr__4839__auto__$jscomp$9$$.push(arguments[$i__4819__auto___33485$$]), $i__4819__auto___33485$$ += 1;
        } else {
          break;
        }
      }
      return $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], arguments[1], arguments[2], new $cljs$core$IndexedSeq$$($args_arr__4839__auto__$jscomp$9$$.slice(3), 0, null));
  }
};
$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$ = function($JSCompiler_temp$jscomp$97_JSCompiler_temp$jscomp$98_arr$jscomp$inline_441_coll$jscomp$128$$, $k$jscomp$55_ret$jscomp$inline_442$$, $i_34492$jscomp$inline_443_v$jscomp$8$$) {
  if (null != $JSCompiler_temp$jscomp$97_JSCompiler_temp$jscomp$98_arr$jscomp$inline_441_coll$jscomp$128$$ && ($JSCompiler_temp$jscomp$97_JSCompiler_temp$jscomp$98_arr$jscomp$inline_441_coll$jscomp$128$$.$cljs$lang$protocol_mask$partition0$$ & 512 || $cljs$core$PROTOCOL_SENTINEL$$ === $JSCompiler_temp$jscomp$97_JSCompiler_temp$jscomp$98_arr$jscomp$inline_441_coll$jscomp$128$$.$cljs$core$IAssociative$$)) {
    $JSCompiler_temp$jscomp$97_JSCompiler_temp$jscomp$98_arr$jscomp$inline_441_coll$jscomp$128$$ = $JSCompiler_temp$jscomp$97_JSCompiler_temp$jscomp$98_arr$jscomp$inline_441_coll$jscomp$128$$.$cljs$core$IAssociative$_assoc$arity$3$(null, $k$jscomp$55_ret$jscomp$inline_442$$, $i_34492$jscomp$inline_443_v$jscomp$8$$);
  } else {
    if (null != $JSCompiler_temp$jscomp$97_JSCompiler_temp$jscomp$98_arr$jscomp$inline_441_coll$jscomp$128$$) {
      $JSCompiler_temp$jscomp$97_JSCompiler_temp$jscomp$98_arr$jscomp$inline_441_coll$jscomp$128$$ = $cljs$core$_assoc$$($JSCompiler_temp$jscomp$97_JSCompiler_temp$jscomp$98_arr$jscomp$inline_441_coll$jscomp$128$$, $k$jscomp$55_ret$jscomp$inline_442$$, $i_34492$jscomp$inline_443_v$jscomp$8$$);
    } else {
      $JSCompiler_temp$jscomp$97_JSCompiler_temp$jscomp$98_arr$jscomp$inline_441_coll$jscomp$128$$ = [$k$jscomp$55_ret$jscomp$inline_442$$, $i_34492$jscomp$inline_443_v$jscomp$8$$];
      $k$jscomp$55_ret$jscomp$inline_442$$ = [];
      for ($i_34492$jscomp$inline_443_v$jscomp$8$$ = 0;;) {
        if ($i_34492$jscomp$inline_443_v$jscomp$8$$ < $JSCompiler_temp$jscomp$97_JSCompiler_temp$jscomp$98_arr$jscomp$inline_441_coll$jscomp$128$$.length) {
          var $k_34493$jscomp$inline_444$$ = $JSCompiler_temp$jscomp$97_JSCompiler_temp$jscomp$98_arr$jscomp$inline_441_coll$jscomp$128$$[$i_34492$jscomp$inline_443_v$jscomp$8$$], $v_34494$jscomp$inline_445$$ = $JSCompiler_temp$jscomp$97_JSCompiler_temp$jscomp$98_arr$jscomp$inline_441_coll$jscomp$128$$[$i_34492$jscomp$inline_443_v$jscomp$8$$ + 1], $G__32236_34496$jscomp$inline_447_idx_34495$jscomp$inline_446$$ = $cljs$core$array_index_of$$($k$jscomp$55_ret$jscomp$inline_442$$, $k_34493$jscomp$inline_444$$);
          -1 === $G__32236_34496$jscomp$inline_447_idx_34495$jscomp$inline_446$$ ? ($G__32236_34496$jscomp$inline_447_idx_34495$jscomp$inline_446$$ = $k$jscomp$55_ret$jscomp$inline_442$$, $G__32236_34496$jscomp$inline_447_idx_34495$jscomp$inline_446$$.push($k_34493$jscomp$inline_444$$), $G__32236_34496$jscomp$inline_447_idx_34495$jscomp$inline_446$$.push($v_34494$jscomp$inline_445$$)) : $k$jscomp$55_ret$jscomp$inline_442$$[$G__32236_34496$jscomp$inline_447_idx_34495$jscomp$inline_446$$ + 1] = $v_34494$jscomp$inline_445$$;
          $i_34492$jscomp$inline_443_v$jscomp$8$$ += 2;
        } else {
          break;
        }
      }
      $JSCompiler_temp$jscomp$97_JSCompiler_temp$jscomp$98_arr$jscomp$inline_441_coll$jscomp$128$$ = new $cljs$core$PersistentArrayMap$$(null, $k$jscomp$55_ret$jscomp$inline_442$$.length / 2, $k$jscomp$55_ret$jscomp$inline_442$$, null);
    }
  }
  return $JSCompiler_temp$jscomp$97_JSCompiler_temp$jscomp$98_arr$jscomp$inline_441_coll$jscomp$128$$;
};
$cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($G__33489_coll$jscomp$129_ret$jscomp$2$$, $G__33490_k$jscomp$56$$, $G__33491_v$jscomp$9$$, $G__33492_kvs$$) {
  for (;;) {
    if ($G__33489_coll$jscomp$129_ret$jscomp$2$$ = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($G__33489_coll$jscomp$129_ret$jscomp$2$$, $G__33490_k$jscomp$56$$, $G__33491_v$jscomp$9$$), $cljs$core$truth_$$($G__33492_kvs$$)) {
      $G__33490_k$jscomp$56$$ = $cljs$core$first$$($G__33492_kvs$$), $G__33491_v$jscomp$9$$ = $cljs$core$first$$($cljs$core$next$$($G__33492_kvs$$)), $G__33492_kvs$$ = $cljs$core$next$$($cljs$core$next$$($G__33492_kvs$$));
    } else {
      return $G__33489_coll$jscomp$129_ret$jscomp$2$$;
    }
  }
};
$cljs$core$assoc$$.$cljs$lang$applyTo$ = function($G__31511_seq31509$$) {
  var $G__31510$$ = $cljs$core$first$$($G__31511_seq31509$$), $G__31512_seq31509__$1$$ = $cljs$core$next$$($G__31511_seq31509$$);
  $G__31511_seq31509$$ = $cljs$core$first$$($G__31512_seq31509__$1$$);
  var $seq31509__$2_seq31509__$3$$ = $cljs$core$next$$($G__31512_seq31509__$1$$);
  $G__31512_seq31509__$1$$ = $cljs$core$first$$($seq31509__$2_seq31509__$3$$);
  $seq31509__$2_seq31509__$3$$ = $cljs$core$next$$($seq31509__$2_seq31509__$3$$);
  return this.$cljs$core$IFn$_invoke$arity$variadic$($G__31510$$, $G__31511_seq31509$$, $G__31512_seq31509__$1$$, $seq31509__$2_seq31509__$3$$);
};
$cljs$core$assoc$$.$cljs$lang$maxFixedArity$ = 3;
var $cljs$core$dissoc$$ = function $cljs$core$dissoc$$($var_args$jscomp$123$$) {
  switch(arguments.length) {
    case 1:
      return $cljs$core$dissoc$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$dissoc$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      for (var $args_arr__4839__auto__$jscomp$10$$ = [], $len__4818__auto___33494$$ = arguments.length, $i__4819__auto___33495$$ = 0;;) {
        if ($i__4819__auto___33495$$ < $len__4818__auto___33494$$) {
          $args_arr__4839__auto__$jscomp$10$$.push(arguments[$i__4819__auto___33495$$]), $i__4819__auto___33495$$ += 1;
        } else {
          break;
        }
      }
      return $cljs$core$dissoc$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], arguments[1], new $cljs$core$IndexedSeq$$($args_arr__4839__auto__$jscomp$10$$.slice(2), 0, null));
  }
};
$cljs$core$dissoc$$.$cljs$core$IFn$_invoke$arity$1$ = function($coll$jscomp$130$$) {
  return $coll$jscomp$130$$;
};
$cljs$core$dissoc$$.$cljs$core$IFn$_invoke$arity$2$ = function($coll$jscomp$131$$, $k$jscomp$57$$) {
  return null == $coll$jscomp$131$$ ? null : $cljs$core$_dissoc$$($coll$jscomp$131$$, $k$jscomp$57$$);
};
$cljs$core$dissoc$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($G__33497_coll$jscomp$132_ret$jscomp$3$$, $G__33498_k$jscomp$58$$, $G__33499_ks$$) {
  for (;;) {
    if (null == $G__33497_coll$jscomp$132_ret$jscomp$3$$) {
      return null;
    }
    $G__33497_coll$jscomp$132_ret$jscomp$3$$ = $cljs$core$dissoc$$.$cljs$core$IFn$_invoke$arity$2$($G__33497_coll$jscomp$132_ret$jscomp$3$$, $G__33498_k$jscomp$58$$);
    if ($cljs$core$truth_$$($G__33499_ks$$)) {
      $G__33498_k$jscomp$58$$ = $cljs$core$first$$($G__33499_ks$$), $G__33499_ks$$ = $cljs$core$next$$($G__33499_ks$$);
    } else {
      return $G__33497_coll$jscomp$132_ret$jscomp$3$$;
    }
  }
};
$cljs$core$dissoc$$.$cljs$lang$applyTo$ = function($G__31518_seq31516$$) {
  var $G__31517$$ = $cljs$core$first$$($G__31518_seq31516$$), $seq31516__$1_seq31516__$2$$ = $cljs$core$next$$($G__31518_seq31516$$);
  $G__31518_seq31516$$ = $cljs$core$first$$($seq31516__$1_seq31516__$2$$);
  $seq31516__$1_seq31516__$2$$ = $cljs$core$next$$($seq31516__$1_seq31516__$2$$);
  return this.$cljs$core$IFn$_invoke$arity$variadic$($G__31517$$, $G__31518_seq31516$$, $seq31516__$1_seq31516__$2$$);
};
$cljs$core$dissoc$$.$cljs$lang$maxFixedArity$ = 2;
function $cljs$core$fn_QMARK_$$($f$jscomp$135$$) {
  var $or__4212__auto__$jscomp$2$$ = "function" === typeof $f$jscomp$135$$;
  return $or__4212__auto__$jscomp$2$$ ? $or__4212__auto__$jscomp$2$$ : null != $f$jscomp$135$$ ? $cljs$core$PROTOCOL_SENTINEL$$ === $f$jscomp$135$$.$cljs$core$Fn$$ ? !0 : $f$jscomp$135$$.$cljs$lang$protocol_mask$partition$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$Fn$$, $f$jscomp$135$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$Fn$$, $f$jscomp$135$$);
}
function $cljs$core$MetaFn$$($afn$$, $meta$jscomp$6$$) {
  this.$afn$ = $afn$$;
  this.$meta$ = $meta$jscomp$6$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 393217;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$MetaFn$$.prototype;
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($_$jscomp$51$$, $new_meta$jscomp$4$$) {
  return new $cljs$core$MetaFn$$(this.$afn$, $new_meta$jscomp$4$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$Fn$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$JSCompiler_prototypeAlias$$.call = function($unused__9507__auto__$jscomp$2$$) {
  switch(arguments.length - 1) {
    case 0:
      return this.$cljs$core$IFn$_invoke$arity$0$();
    case 1:
      return this.$cljs$core$IFn$_invoke$arity$1$(arguments[1]);
    case 2:
      return this.$cljs$core$IFn$_invoke$arity$2$(arguments[1], arguments[2]);
    case 3:
      return this.$cljs$core$IFn$_invoke$arity$3$(arguments[1], arguments[2], arguments[3]);
    case 4:
      return this.$cljs$core$IFn$_invoke$arity$4$(arguments[1], arguments[2], arguments[3], arguments[4]);
    case 5:
      return this.$cljs$core$IFn$_invoke$arity$5$(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 6:
      return this.$cljs$core$IFn$_invoke$arity$6$(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    case 7:
      return this.$cljs$core$IFn$_invoke$arity$7$(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]);
    case 8:
      return this.$cljs$core$IFn$_invoke$arity$8$(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8]);
    case 9:
      return this.$cljs$core$IFn$_invoke$arity$9$(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9]);
    case 10:
      return this.$cljs$core$IFn$_invoke$arity$10$(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10]);
    case 11:
      return this.$cljs$core$IFn$_invoke$arity$11$(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11]);
    case 12:
      return this.$cljs$core$IFn$_invoke$arity$12$(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12]);
    case 13:
      return this.$cljs$core$IFn$_invoke$arity$13$(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13]);
    case 14:
      return this.$cljs$core$IFn$_invoke$arity$14$(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14]);
    case 15:
      return this.$cljs$core$IFn$_invoke$arity$15$(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15]);
    case 16:
      return this.$cljs$core$IFn$_invoke$arity$16$(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16]);
    case 17:
      return this.$cljs$core$IFn$_invoke$arity$17$(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17]);
    case 18:
      return this.$cljs$core$IFn$_invoke$arity$18$(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17], arguments[18]);
    case 19:
      return this.$cljs$core$IFn$_invoke$arity$19$(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17], arguments[18], arguments[19]);
    case 20:
      return this.$cljs$core$IFn$_invoke$arity$20$(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15], arguments[16], arguments[17], arguments[18], arguments[19], arguments[20]);
    case 21:
      var $a$jscomp$inline_450$$ = arguments[1], $b$jscomp$inline_451$$ = arguments[2], $c$jscomp$inline_452$$ = arguments[3], $d$jscomp$inline_453$$ = arguments[4], $e$jscomp$inline_454$$ = arguments[5], $f$jscomp$inline_455$$ = arguments[6], $g$jscomp$inline_456$$ = arguments[7], $h$jscomp$inline_457$$ = arguments[8], $i$jscomp$inline_458$$ = arguments[9], $j$jscomp$inline_459$$ = arguments[10], $k$jscomp$inline_460$$ = arguments[11], $l$jscomp$inline_461$$ = arguments[12], $m$jscomp$inline_462$$ = 
      arguments[13], $n$jscomp$inline_463$$ = arguments[14], $o$jscomp$inline_464$$ = arguments[15], $p$jscomp$inline_465$$ = arguments[16], $q$jscomp$inline_466$$ = arguments[17], $r$jscomp$inline_467$$ = arguments[18], $s$jscomp$inline_468$$ = arguments[19], $t$jscomp$inline_469$$ = arguments[20], $rest$jscomp$inline_470$$ = arguments[21];
      return $cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$22$ ? $cljs$core$apply$$.$cljs$core$IFn$_invoke$arity$22$(this.$afn$, $a$jscomp$inline_450$$, $b$jscomp$inline_451$$, $c$jscomp$inline_452$$, $d$jscomp$inline_453$$, $e$jscomp$inline_454$$, $f$jscomp$inline_455$$, $g$jscomp$inline_456$$, $h$jscomp$inline_457$$, $i$jscomp$inline_458$$, $j$jscomp$inline_459$$, $k$jscomp$inline_460$$, $l$jscomp$inline_461$$, $m$jscomp$inline_462$$, $n$jscomp$inline_463$$, $o$jscomp$inline_464$$, $p$jscomp$inline_465$$, 
      $q$jscomp$inline_466$$, $r$jscomp$inline_467$$, $s$jscomp$inline_468$$, $t$jscomp$inline_469$$, $rest$jscomp$inline_470$$) : $cljs$core$apply$$.call(null, this.$afn$, $a$jscomp$inline_450$$, $b$jscomp$inline_451$$, $c$jscomp$inline_452$$, $d$jscomp$inline_453$$, $e$jscomp$inline_454$$, $f$jscomp$inline_455$$, $g$jscomp$inline_456$$, $h$jscomp$inline_457$$, $i$jscomp$inline_458$$, $j$jscomp$inline_459$$, $k$jscomp$inline_460$$, $l$jscomp$inline_461$$, $m$jscomp$inline_462$$, $n$jscomp$inline_463$$, 
      $o$jscomp$inline_464$$, $p$jscomp$inline_465$$, $q$jscomp$inline_466$$, $r$jscomp$inline_467$$, $s$jscomp$inline_468$$, $t$jscomp$inline_469$$, $rest$jscomp$inline_470$$);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length - 1)].join(""));
  }
};
$JSCompiler_prototypeAlias$$.apply = function($self__$jscomp$100$$, $args31521$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args31521$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$0$ = function() {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$0$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$0$() : this.$afn$.call(null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($a$jscomp$93$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$1$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$1$($a$jscomp$93$$) : this.$afn$.call(null, $a$jscomp$93$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($a$jscomp$94$$, $b$jscomp$84$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$2$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$2$($a$jscomp$94$$, $b$jscomp$84$$) : this.$afn$.call(null, $a$jscomp$94$$, $b$jscomp$84$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$3$ = function($a$jscomp$95$$, $b$jscomp$85$$, $c$jscomp$64$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$3$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$3$($a$jscomp$95$$, $b$jscomp$85$$, $c$jscomp$64$$) : this.$afn$.call(null, $a$jscomp$95$$, $b$jscomp$85$$, $c$jscomp$64$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$4$ = function($a$jscomp$96$$, $b$jscomp$86$$, $c$jscomp$65$$, $d$jscomp$56$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$4$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$4$($a$jscomp$96$$, $b$jscomp$86$$, $c$jscomp$65$$, $d$jscomp$56$$) : this.$afn$.call(null, $a$jscomp$96$$, $b$jscomp$86$$, $c$jscomp$65$$, $d$jscomp$56$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$5$ = function($a$jscomp$97$$, $b$jscomp$87$$, $c$jscomp$66$$, $d$jscomp$57$$, $e$jscomp$67$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$5$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$5$($a$jscomp$97$$, $b$jscomp$87$$, $c$jscomp$66$$, $d$jscomp$57$$, $e$jscomp$67$$) : this.$afn$.call(null, $a$jscomp$97$$, $b$jscomp$87$$, $c$jscomp$66$$, $d$jscomp$57$$, $e$jscomp$67$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$6$ = function($a$jscomp$98$$, $b$jscomp$88$$, $c$jscomp$67$$, $d$jscomp$58$$, $e$jscomp$68$$, $f$jscomp$136$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$6$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$6$($a$jscomp$98$$, $b$jscomp$88$$, $c$jscomp$67$$, $d$jscomp$58$$, $e$jscomp$68$$, $f$jscomp$136$$) : this.$afn$.call(null, $a$jscomp$98$$, $b$jscomp$88$$, $c$jscomp$67$$, $d$jscomp$58$$, $e$jscomp$68$$, $f$jscomp$136$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$7$ = function($a$jscomp$99$$, $b$jscomp$89$$, $c$jscomp$68$$, $d$jscomp$59$$, $e$jscomp$69$$, $f$jscomp$137$$, $g$jscomp$46$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$7$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$7$($a$jscomp$99$$, $b$jscomp$89$$, $c$jscomp$68$$, $d$jscomp$59$$, $e$jscomp$69$$, $f$jscomp$137$$, $g$jscomp$46$$) : this.$afn$.call(null, $a$jscomp$99$$, $b$jscomp$89$$, $c$jscomp$68$$, $d$jscomp$59$$, $e$jscomp$69$$, $f$jscomp$137$$, $g$jscomp$46$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$8$ = function($a$jscomp$100$$, $b$jscomp$90$$, $c$jscomp$69$$, $d$jscomp$60$$, $e$jscomp$70$$, $f$jscomp$138$$, $g$jscomp$47$$, $h$jscomp$51$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$8$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$8$($a$jscomp$100$$, $b$jscomp$90$$, $c$jscomp$69$$, $d$jscomp$60$$, $e$jscomp$70$$, $f$jscomp$138$$, $g$jscomp$47$$, $h$jscomp$51$$) : this.$afn$.call(null, $a$jscomp$100$$, $b$jscomp$90$$, $c$jscomp$69$$, $d$jscomp$60$$, $e$jscomp$70$$, $f$jscomp$138$$, $g$jscomp$47$$, $h$jscomp$51$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$9$ = function($a$jscomp$101$$, $b$jscomp$91$$, $c$jscomp$70$$, $d$jscomp$61$$, $e$jscomp$71$$, $f$jscomp$139$$, $g$jscomp$48$$, $h$jscomp$52$$, $i$jscomp$173$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$9$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$9$($a$jscomp$101$$, $b$jscomp$91$$, $c$jscomp$70$$, $d$jscomp$61$$, $e$jscomp$71$$, $f$jscomp$139$$, $g$jscomp$48$$, $h$jscomp$52$$, $i$jscomp$173$$) : this.$afn$.call(null, $a$jscomp$101$$, $b$jscomp$91$$, $c$jscomp$70$$, $d$jscomp$61$$, $e$jscomp$71$$, $f$jscomp$139$$, $g$jscomp$48$$, $h$jscomp$52$$, $i$jscomp$173$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$10$ = function($a$jscomp$102$$, $b$jscomp$92$$, $c$jscomp$71$$, $d$jscomp$62$$, $e$jscomp$72$$, $f$jscomp$140$$, $g$jscomp$49$$, $h$jscomp$53$$, $i$jscomp$174$$, $j$jscomp$47$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$10$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$10$($a$jscomp$102$$, $b$jscomp$92$$, $c$jscomp$71$$, $d$jscomp$62$$, $e$jscomp$72$$, $f$jscomp$140$$, $g$jscomp$49$$, $h$jscomp$53$$, $i$jscomp$174$$, $j$jscomp$47$$) : this.$afn$.call(null, $a$jscomp$102$$, $b$jscomp$92$$, $c$jscomp$71$$, $d$jscomp$62$$, $e$jscomp$72$$, $f$jscomp$140$$, $g$jscomp$49$$, $h$jscomp$53$$, $i$jscomp$174$$, $j$jscomp$47$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$11$ = function($a$jscomp$103$$, $b$jscomp$93$$, $c$jscomp$72$$, $d$jscomp$63$$, $e$jscomp$73$$, $f$jscomp$141$$, $g$jscomp$50$$, $h$jscomp$54$$, $i$jscomp$175$$, $j$jscomp$48$$, $k$jscomp$59$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$11$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$11$($a$jscomp$103$$, $b$jscomp$93$$, $c$jscomp$72$$, $d$jscomp$63$$, $e$jscomp$73$$, $f$jscomp$141$$, $g$jscomp$50$$, $h$jscomp$54$$, $i$jscomp$175$$, $j$jscomp$48$$, $k$jscomp$59$$) : this.$afn$.call(null, $a$jscomp$103$$, $b$jscomp$93$$, $c$jscomp$72$$, $d$jscomp$63$$, $e$jscomp$73$$, $f$jscomp$141$$, $g$jscomp$50$$, $h$jscomp$54$$, $i$jscomp$175$$, $j$jscomp$48$$, $k$jscomp$59$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$12$ = function($a$jscomp$104$$, $b$jscomp$94$$, $c$jscomp$73$$, $d$jscomp$64$$, $e$jscomp$74$$, $f$jscomp$142$$, $g$jscomp$51$$, $h$jscomp$55$$, $i$jscomp$176$$, $j$jscomp$49$$, $k$jscomp$60$$, $l$jscomp$50$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$12$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$12$($a$jscomp$104$$, $b$jscomp$94$$, $c$jscomp$73$$, $d$jscomp$64$$, $e$jscomp$74$$, $f$jscomp$142$$, $g$jscomp$51$$, $h$jscomp$55$$, $i$jscomp$176$$, $j$jscomp$49$$, $k$jscomp$60$$, $l$jscomp$50$$) : this.$afn$.call(null, $a$jscomp$104$$, $b$jscomp$94$$, $c$jscomp$73$$, $d$jscomp$64$$, $e$jscomp$74$$, $f$jscomp$142$$, $g$jscomp$51$$, $h$jscomp$55$$, $i$jscomp$176$$, $j$jscomp$49$$, $k$jscomp$60$$, $l$jscomp$50$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$13$ = function($a$jscomp$105$$, $b$jscomp$95$$, $c$jscomp$74$$, $d$jscomp$65$$, $e$jscomp$75$$, $f$jscomp$143$$, $g$jscomp$52$$, $h$jscomp$56$$, $i$jscomp$177$$, $j$jscomp$50$$, $k$jscomp$61$$, $l$jscomp$51$$, $m$jscomp$29$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$13$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$13$($a$jscomp$105$$, $b$jscomp$95$$, $c$jscomp$74$$, $d$jscomp$65$$, $e$jscomp$75$$, $f$jscomp$143$$, $g$jscomp$52$$, $h$jscomp$56$$, $i$jscomp$177$$, $j$jscomp$50$$, $k$jscomp$61$$, $l$jscomp$51$$, $m$jscomp$29$$) : this.$afn$.call(null, $a$jscomp$105$$, $b$jscomp$95$$, $c$jscomp$74$$, $d$jscomp$65$$, $e$jscomp$75$$, $f$jscomp$143$$, $g$jscomp$52$$, $h$jscomp$56$$, $i$jscomp$177$$, $j$jscomp$50$$, $k$jscomp$61$$, 
  $l$jscomp$51$$, $m$jscomp$29$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$14$ = function($a$jscomp$106$$, $b$jscomp$96$$, $c$jscomp$75$$, $d$jscomp$66$$, $e$jscomp$76$$, $f$jscomp$144$$, $g$jscomp$53$$, $h$jscomp$57$$, $i$jscomp$178$$, $j$jscomp$51$$, $k$jscomp$62$$, $l$jscomp$52$$, $m$jscomp$30$$, $n$jscomp$57$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$14$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$14$($a$jscomp$106$$, $b$jscomp$96$$, $c$jscomp$75$$, $d$jscomp$66$$, $e$jscomp$76$$, $f$jscomp$144$$, $g$jscomp$53$$, $h$jscomp$57$$, $i$jscomp$178$$, $j$jscomp$51$$, $k$jscomp$62$$, $l$jscomp$52$$, $m$jscomp$30$$, $n$jscomp$57$$) : this.$afn$.call(null, $a$jscomp$106$$, $b$jscomp$96$$, $c$jscomp$75$$, $d$jscomp$66$$, $e$jscomp$76$$, $f$jscomp$144$$, $g$jscomp$53$$, $h$jscomp$57$$, $i$jscomp$178$$, $j$jscomp$51$$, 
  $k$jscomp$62$$, $l$jscomp$52$$, $m$jscomp$30$$, $n$jscomp$57$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$15$ = function($a$jscomp$107$$, $b$jscomp$97$$, $c$jscomp$76$$, $d$jscomp$67$$, $e$jscomp$77$$, $f$jscomp$145$$, $g$jscomp$54$$, $h$jscomp$58$$, $i$jscomp$179$$, $j$jscomp$52$$, $k$jscomp$63$$, $l$jscomp$53$$, $m$jscomp$31$$, $n$jscomp$58$$, $o$jscomp$88$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$15$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$15$($a$jscomp$107$$, $b$jscomp$97$$, $c$jscomp$76$$, $d$jscomp$67$$, $e$jscomp$77$$, $f$jscomp$145$$, $g$jscomp$54$$, $h$jscomp$58$$, $i$jscomp$179$$, $j$jscomp$52$$, $k$jscomp$63$$, $l$jscomp$53$$, $m$jscomp$31$$, $n$jscomp$58$$, $o$jscomp$88$$) : this.$afn$.call(null, $a$jscomp$107$$, $b$jscomp$97$$, $c$jscomp$76$$, $d$jscomp$67$$, $e$jscomp$77$$, $f$jscomp$145$$, $g$jscomp$54$$, $h$jscomp$58$$, $i$jscomp$179$$, 
  $j$jscomp$52$$, $k$jscomp$63$$, $l$jscomp$53$$, $m$jscomp$31$$, $n$jscomp$58$$, $o$jscomp$88$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$16$ = function($a$jscomp$108$$, $b$jscomp$98$$, $c$jscomp$77$$, $d$jscomp$68$$, $e$jscomp$78$$, $f$jscomp$146$$, $g$jscomp$55$$, $h$jscomp$59$$, $i$jscomp$180$$, $j$jscomp$53$$, $k$jscomp$64$$, $l$jscomp$54$$, $m$jscomp$32$$, $n$jscomp$59$$, $o$jscomp$89$$, $p$jscomp$20$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$16$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$16$($a$jscomp$108$$, $b$jscomp$98$$, $c$jscomp$77$$, $d$jscomp$68$$, $e$jscomp$78$$, $f$jscomp$146$$, $g$jscomp$55$$, $h$jscomp$59$$, $i$jscomp$180$$, $j$jscomp$53$$, $k$jscomp$64$$, $l$jscomp$54$$, $m$jscomp$32$$, $n$jscomp$59$$, $o$jscomp$89$$, $p$jscomp$20$$) : this.$afn$.call(null, $a$jscomp$108$$, $b$jscomp$98$$, $c$jscomp$77$$, $d$jscomp$68$$, $e$jscomp$78$$, $f$jscomp$146$$, $g$jscomp$55$$, $h$jscomp$59$$, 
  $i$jscomp$180$$, $j$jscomp$53$$, $k$jscomp$64$$, $l$jscomp$54$$, $m$jscomp$32$$, $n$jscomp$59$$, $o$jscomp$89$$, $p$jscomp$20$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$17$ = function($a$jscomp$109$$, $b$jscomp$99$$, $c$jscomp$78$$, $d$jscomp$69$$, $e$jscomp$79$$, $f$jscomp$147$$, $g$jscomp$56$$, $h$jscomp$60$$, $i$jscomp$181$$, $j$jscomp$54$$, $k$jscomp$65$$, $l$jscomp$55$$, $m$jscomp$33$$, $n$jscomp$60$$, $o$jscomp$90$$, $p$jscomp$21$$, $q$jscomp$16$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$17$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$17$($a$jscomp$109$$, $b$jscomp$99$$, $c$jscomp$78$$, $d$jscomp$69$$, $e$jscomp$79$$, $f$jscomp$147$$, $g$jscomp$56$$, $h$jscomp$60$$, $i$jscomp$181$$, $j$jscomp$54$$, $k$jscomp$65$$, $l$jscomp$55$$, $m$jscomp$33$$, $n$jscomp$60$$, $o$jscomp$90$$, $p$jscomp$21$$, $q$jscomp$16$$) : this.$afn$.call(null, $a$jscomp$109$$, $b$jscomp$99$$, $c$jscomp$78$$, $d$jscomp$69$$, $e$jscomp$79$$, $f$jscomp$147$$, $g$jscomp$56$$, 
  $h$jscomp$60$$, $i$jscomp$181$$, $j$jscomp$54$$, $k$jscomp$65$$, $l$jscomp$55$$, $m$jscomp$33$$, $n$jscomp$60$$, $o$jscomp$90$$, $p$jscomp$21$$, $q$jscomp$16$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$18$ = function($a$jscomp$110$$, $b$jscomp$100$$, $c$jscomp$79$$, $d$jscomp$70$$, $e$jscomp$80$$, $f$jscomp$148$$, $g$jscomp$57$$, $h$jscomp$61$$, $i$jscomp$182$$, $j$jscomp$55$$, $k$jscomp$66$$, $l$jscomp$56$$, $m$jscomp$34$$, $n$jscomp$61$$, $o$jscomp$91$$, $p$jscomp$22$$, $q$jscomp$17$$, $r$jscomp$17$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$18$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$18$($a$jscomp$110$$, $b$jscomp$100$$, $c$jscomp$79$$, $d$jscomp$70$$, $e$jscomp$80$$, $f$jscomp$148$$, $g$jscomp$57$$, $h$jscomp$61$$, $i$jscomp$182$$, $j$jscomp$55$$, $k$jscomp$66$$, $l$jscomp$56$$, $m$jscomp$34$$, $n$jscomp$61$$, $o$jscomp$91$$, $p$jscomp$22$$, $q$jscomp$17$$, $r$jscomp$17$$) : this.$afn$.call(null, $a$jscomp$110$$, $b$jscomp$100$$, $c$jscomp$79$$, $d$jscomp$70$$, $e$jscomp$80$$, $f$jscomp$148$$, 
  $g$jscomp$57$$, $h$jscomp$61$$, $i$jscomp$182$$, $j$jscomp$55$$, $k$jscomp$66$$, $l$jscomp$56$$, $m$jscomp$34$$, $n$jscomp$61$$, $o$jscomp$91$$, $p$jscomp$22$$, $q$jscomp$17$$, $r$jscomp$17$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$19$ = function($a$jscomp$111$$, $b$jscomp$101$$, $c$jscomp$80$$, $d$jscomp$71$$, $e$jscomp$81$$, $f$jscomp$149$$, $g$jscomp$58$$, $h$jscomp$62$$, $i$jscomp$183$$, $j$jscomp$56$$, $k$jscomp$67$$, $l$jscomp$57$$, $m$jscomp$35$$, $n$jscomp$62$$, $o$jscomp$92$$, $p$jscomp$23$$, $q$jscomp$18$$, $r$jscomp$18$$, $s$jscomp$43$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$19$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$19$($a$jscomp$111$$, $b$jscomp$101$$, $c$jscomp$80$$, $d$jscomp$71$$, $e$jscomp$81$$, $f$jscomp$149$$, $g$jscomp$58$$, $h$jscomp$62$$, $i$jscomp$183$$, $j$jscomp$56$$, $k$jscomp$67$$, $l$jscomp$57$$, $m$jscomp$35$$, $n$jscomp$62$$, $o$jscomp$92$$, $p$jscomp$23$$, $q$jscomp$18$$, $r$jscomp$18$$, $s$jscomp$43$$) : this.$afn$.call(null, $a$jscomp$111$$, $b$jscomp$101$$, $c$jscomp$80$$, $d$jscomp$71$$, $e$jscomp$81$$, 
  $f$jscomp$149$$, $g$jscomp$58$$, $h$jscomp$62$$, $i$jscomp$183$$, $j$jscomp$56$$, $k$jscomp$67$$, $l$jscomp$57$$, $m$jscomp$35$$, $n$jscomp$62$$, $o$jscomp$92$$, $p$jscomp$23$$, $q$jscomp$18$$, $r$jscomp$18$$, $s$jscomp$43$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$20$ = function($a$jscomp$112$$, $b$jscomp$102$$, $c$jscomp$81$$, $d$jscomp$72$$, $e$jscomp$82$$, $f$jscomp$150$$, $g$jscomp$59$$, $h$jscomp$63$$, $i$jscomp$184$$, $j$jscomp$57$$, $k$jscomp$68$$, $l$jscomp$58$$, $m$jscomp$36$$, $n$jscomp$63$$, $o$jscomp$93$$, $p$jscomp$24$$, $q$jscomp$19$$, $r$jscomp$19$$, $s$jscomp$44$$, $t$jscomp$8$$) {
  return this.$afn$.$cljs$core$IFn$_invoke$arity$20$ ? this.$afn$.$cljs$core$IFn$_invoke$arity$20$($a$jscomp$112$$, $b$jscomp$102$$, $c$jscomp$81$$, $d$jscomp$72$$, $e$jscomp$82$$, $f$jscomp$150$$, $g$jscomp$59$$, $h$jscomp$63$$, $i$jscomp$184$$, $j$jscomp$57$$, $k$jscomp$68$$, $l$jscomp$58$$, $m$jscomp$36$$, $n$jscomp$63$$, $o$jscomp$93$$, $p$jscomp$24$$, $q$jscomp$19$$, $r$jscomp$19$$, $s$jscomp$44$$, $t$jscomp$8$$) : this.$afn$.call(null, $a$jscomp$112$$, $b$jscomp$102$$, $c$jscomp$81$$, $d$jscomp$72$$, 
  $e$jscomp$82$$, $f$jscomp$150$$, $g$jscomp$59$$, $h$jscomp$63$$, $i$jscomp$184$$, $j$jscomp$57$$, $k$jscomp$68$$, $l$jscomp$58$$, $m$jscomp$36$$, $n$jscomp$63$$, $o$jscomp$93$$, $p$jscomp$24$$, $q$jscomp$19$$, $r$jscomp$19$$, $s$jscomp$44$$, $t$jscomp$8$$);
};
function $cljs$core$with_meta$$($o$jscomp$95$$, $meta$jscomp$8$$) {
  return "function" === typeof $o$jscomp$95$$ ? new $cljs$core$MetaFn$$($o$jscomp$95$$, $meta$jscomp$8$$) : null == $o$jscomp$95$$ ? null : $cljs$core$_with_meta$$($o$jscomp$95$$, $meta$jscomp$8$$);
}
function $cljs$core$meta$$($o$jscomp$96$$) {
  var $and__4210__auto__$jscomp$inline_472$$ = null != $o$jscomp$96$$;
  return ($and__4210__auto__$jscomp$inline_472$$ ? null != $o$jscomp$96$$ ? $o$jscomp$96$$.$cljs$lang$protocol_mask$partition0$$ & 131072 || $cljs$core$PROTOCOL_SENTINEL$$ === $o$jscomp$96$$.$cljs$core$IMeta$$ || ($o$jscomp$96$$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IMeta$$, $o$jscomp$96$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IMeta$$, $o$jscomp$96$$) : $and__4210__auto__$jscomp$inline_472$$) ? $cljs$core$_meta$$($o$jscomp$96$$) : 
  null;
}
var $cljs$core$disj$$ = function $cljs$core$disj$$($var_args$jscomp$124$$) {
  switch(arguments.length) {
    case 1:
      return $cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      for (var $args_arr__4839__auto__$jscomp$11$$ = [], $len__4818__auto___33545$$ = arguments.length, $i__4819__auto___33546$$ = 0;;) {
        if ($i__4819__auto___33546$$ < $len__4818__auto___33545$$) {
          $args_arr__4839__auto__$jscomp$11$$.push(arguments[$i__4819__auto___33546$$]), $i__4819__auto___33546$$ += 1;
        } else {
          break;
        }
      }
      return $cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], arguments[1], new $cljs$core$IndexedSeq$$($args_arr__4839__auto__$jscomp$11$$.slice(2), 0, null));
  }
};
$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$1$ = function($coll$jscomp$135$$) {
  return $coll$jscomp$135$$;
};
$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$ = function($coll$jscomp$136$$, $k$jscomp$70$$) {
  return null == $coll$jscomp$136$$ ? null : $cljs$core$_disjoin$$($coll$jscomp$136$$, $k$jscomp$70$$);
};
$cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($G__33549_coll$jscomp$137_ret$jscomp$4$$, $G__33550_k$jscomp$71$$, $G__33551_ks$jscomp$1$$) {
  for (;;) {
    if (null == $G__33549_coll$jscomp$137_ret$jscomp$4$$) {
      return null;
    }
    $G__33549_coll$jscomp$137_ret$jscomp$4$$ = $cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($G__33549_coll$jscomp$137_ret$jscomp$4$$, $G__33550_k$jscomp$71$$);
    if ($cljs$core$truth_$$($G__33551_ks$jscomp$1$$)) {
      $G__33550_k$jscomp$71$$ = $cljs$core$first$$($G__33551_ks$jscomp$1$$), $G__33551_ks$jscomp$1$$ = $cljs$core$next$$($G__33551_ks$jscomp$1$$);
    } else {
      return $G__33549_coll$jscomp$137_ret$jscomp$4$$;
    }
  }
};
$cljs$core$disj$$.$cljs$lang$applyTo$ = function($G__31527_seq31525$$) {
  var $G__31526$$ = $cljs$core$first$$($G__31527_seq31525$$), $seq31525__$1_seq31525__$2$$ = $cljs$core$next$$($G__31527_seq31525$$);
  $G__31527_seq31525$$ = $cljs$core$first$$($seq31525__$1_seq31525__$2$$);
  $seq31525__$1_seq31525__$2$$ = $cljs$core$next$$($seq31525__$1_seq31525__$2$$);
  return this.$cljs$core$IFn$_invoke$arity$variadic$($G__31526$$, $G__31527_seq31525$$, $seq31525__$1_seq31525__$2$$);
};
$cljs$core$disj$$.$cljs$lang$maxFixedArity$ = 2;
function $cljs$core$empty_QMARK_$$($coll$jscomp$138_x$jscomp$inline_1081$$) {
  var $JSCompiler_temp$jscomp$1045$$;
  ($JSCompiler_temp$jscomp$1045$$ = null == $coll$jscomp$138_x$jscomp$inline_1081$$) || ($coll$jscomp$138_x$jscomp$inline_1081$$ = $cljs$core$seq$$($coll$jscomp$138_x$jscomp$inline_1081$$), $JSCompiler_temp$jscomp$1045$$ = null == $coll$jscomp$138_x$jscomp$inline_1081$$ ? !0 : !1 === $coll$jscomp$138_x$jscomp$inline_1081$$ ? !0 : !1);
  return $JSCompiler_temp$jscomp$1045$$;
}
function $cljs$core$coll_QMARK_$$($x$jscomp$155$$) {
  return null == $x$jscomp$155$$ ? !1 : null != $x$jscomp$155$$ ? $x$jscomp$155$$.$cljs$lang$protocol_mask$partition0$$ & 8 || $cljs$core$PROTOCOL_SENTINEL$$ === $x$jscomp$155$$.$cljs$core$ICollection$$ ? !0 : $x$jscomp$155$$.$cljs$lang$protocol_mask$partition0$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ICollection$$, $x$jscomp$155$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ICollection$$, $x$jscomp$155$$);
}
function $cljs$core$set_QMARK_$$($x$jscomp$156$$) {
  return null == $x$jscomp$156$$ ? !1 : null != $x$jscomp$156$$ ? $x$jscomp$156$$.$cljs$lang$protocol_mask$partition0$$ & 4096 || $cljs$core$PROTOCOL_SENTINEL$$ === $x$jscomp$156$$.$cljs$core$ISet$$ ? !0 : $x$jscomp$156$$.$cljs$lang$protocol_mask$partition0$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ISet$$, $x$jscomp$156$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ISet$$, $x$jscomp$156$$);
}
function $cljs$core$sequential_QMARK_$$($x$jscomp$159$$) {
  return null != $x$jscomp$159$$ ? $x$jscomp$159$$.$cljs$lang$protocol_mask$partition0$$ & 16777216 || $cljs$core$PROTOCOL_SENTINEL$$ === $x$jscomp$159$$.$cljs$core$ISequential$$ ? !0 : $x$jscomp$159$$.$cljs$lang$protocol_mask$partition0$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ISequential$$, $x$jscomp$159$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ISequential$$, $x$jscomp$159$$);
}
function $cljs$core$map_QMARK_$$($x$jscomp$162$$) {
  return null == $x$jscomp$162$$ ? !1 : null != $x$jscomp$162$$ ? $x$jscomp$162$$.$cljs$lang$protocol_mask$partition0$$ & 1024 || $cljs$core$PROTOCOL_SENTINEL$$ === $x$jscomp$162$$.$cljs$core$IMap$$ ? !0 : $x$jscomp$162$$.$cljs$lang$protocol_mask$partition0$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IMap$$, $x$jscomp$162$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IMap$$, $x$jscomp$162$$);
}
function $cljs$core$record_QMARK_$$($x$jscomp$163$$) {
  return null != $x$jscomp$163$$ ? $x$jscomp$163$$.$cljs$lang$protocol_mask$partition0$$ & 67108864 || $cljs$core$PROTOCOL_SENTINEL$$ === $x$jscomp$163$$.$cljs$core$IRecord$$ ? !0 : $x$jscomp$163$$.$cljs$lang$protocol_mask$partition0$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IRecord$$, $x$jscomp$163$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IRecord$$, $x$jscomp$163$$);
}
function $cljs$core$vector_QMARK_$$($x$jscomp$164$$) {
  return null != $x$jscomp$164$$ ? $x$jscomp$164$$.$cljs$lang$protocol_mask$partition0$$ & 16384 || $cljs$core$PROTOCOL_SENTINEL$$ === $x$jscomp$164$$.$cljs$core$IVector$$ ? !0 : $x$jscomp$164$$.$cljs$lang$protocol_mask$partition0$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IVector$$, $x$jscomp$164$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IVector$$, $x$jscomp$164$$);
}
function $cljs$core$chunked_seq_QMARK_$$($x$jscomp$165$$) {
  return null != $x$jscomp$165$$ ? $x$jscomp$165$$.$cljs$lang$protocol_mask$partition1$$ & 512 || $cljs$core$PROTOCOL_SENTINEL$$ === $x$jscomp$165$$.$cljs$core$IChunkedSeq$$ ? !0 : !1 : !1;
}
function $cljs$core$array_copy$$($from$$, $i$jscomp$186_i__$1$jscomp$2$$, $to$$, $G__33575_j$jscomp$59_j__$1$$, $G__33576_len$jscomp$14_len__$1$$) {
  for (; 0 !== $G__33576_len$jscomp$14_len__$1$$;) {
    $to$$[$G__33575_j$jscomp$59_j__$1$$] = $from$$[$i$jscomp$186_i__$1$jscomp$2$$], $G__33575_j$jscomp$59_j__$1$$ += 1, --$G__33576_len$jscomp$14_len__$1$$, $i$jscomp$186_i__$1$jscomp$2$$ += 1;
  }
}
var $cljs$core$lookup_sentinel$$ = {};
function $cljs$core$boolean$0$$($x$jscomp$170$$) {
  return null == $x$jscomp$170$$ ? !1 : !1 === $x$jscomp$170$$ ? !1 : !0;
}
function $cljs$core$ifn_QMARK_$$($f$jscomp$152$$) {
  var $or__4212__auto__$jscomp$4$$ = $cljs$core$fn_QMARK_$$($f$jscomp$152$$);
  return $or__4212__auto__$jscomp$4$$ ? $or__4212__auto__$jscomp$4$$ : null != $f$jscomp$152$$ ? $f$jscomp$152$$.$cljs$lang$protocol_mask$partition0$$ & 1 || $cljs$core$PROTOCOL_SENTINEL$$ === $f$jscomp$152$$.$cljs$core$IFn$$ ? !0 : $f$jscomp$152$$.$cljs$lang$protocol_mask$partition0$$ ? !1 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IFn$$, $f$jscomp$152$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IFn$$, $f$jscomp$152$$);
}
function $cljs$core$integer_QMARK_$$($n$jscomp$65$$) {
  return "number" === typeof $n$jscomp$65$$ && !isNaN($n$jscomp$65$$) && Infinity !== $n$jscomp$65$$ && parseFloat($n$jscomp$65$$) === parseInt($n$jscomp$65$$, 10);
}
function $cljs$core$contains_QMARK_$$($coll$jscomp$139$$, $v$jscomp$10$$) {
  return null != $coll$jscomp$139$$ && ($coll$jscomp$139$$.$cljs$lang$protocol_mask$partition0$$ & 512 || $cljs$core$PROTOCOL_SENTINEL$$ === $coll$jscomp$139$$.$cljs$core$IAssociative$$) ? $coll$jscomp$139$$.$cljs$core$IAssociative$_contains_key_QMARK_$arity$2$(null, $v$jscomp$10$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IAssociative$$, $coll$jscomp$139$$) ? $cljs$core$_contains_key_QMARK_$$($coll$jscomp$139$$, $v$jscomp$10$$) : $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$3$($coll$jscomp$139$$, 
  $v$jscomp$10$$, $cljs$core$lookup_sentinel$$) === $cljs$core$lookup_sentinel$$ ? !1 : !0;
}
function $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$154$$, $G__31569_coll$jscomp$145$$) {
  var $G__31570_temp__5751__auto__$jscomp$2$$ = $cljs$core$seq$$($G__31569_coll$jscomp$145$$);
  return $G__31570_temp__5751__auto__$jscomp$2$$ ? ($G__31569_coll$jscomp$145$$ = $cljs$core$first$$($G__31570_temp__5751__auto__$jscomp$2$$), $G__31570_temp__5751__auto__$jscomp$2$$ = $cljs$core$next$$($G__31570_temp__5751__auto__$jscomp$2$$), $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$ ? $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$154$$, $G__31569_coll$jscomp$145$$, $G__31570_temp__5751__auto__$jscomp$2$$) : $cljs$core$reduce$$.call(null, $f$jscomp$154$$, $G__31569_coll$jscomp$145$$, 
  $G__31570_temp__5751__auto__$jscomp$2$$)) : $f$jscomp$154$$.$cljs$core$IFn$_invoke$arity$0$ ? $f$jscomp$154$$.$cljs$core$IFn$_invoke$arity$0$() : $f$jscomp$154$$.call(null);
}
function $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$155$$, $G__31571$jscomp$inline_474_G__33616_nval$jscomp$5_val$jscomp$60_val__$1$jscomp$3$$, $G__33617_coll$jscomp$146_coll__$1$jscomp$25$$) {
  for ($G__33617_coll$jscomp$146_coll__$1$jscomp$25$$ = $cljs$core$seq$$($G__33617_coll$jscomp$146_coll__$1$jscomp$25$$);;) {
    if ($G__33617_coll$jscomp$146_coll__$1$jscomp$25$$) {
      var $G__31572$jscomp$inline_475$$ = $cljs$core$first$$($G__33617_coll$jscomp$146_coll__$1$jscomp$25$$);
      $G__31571$jscomp$inline_474_G__33616_nval$jscomp$5_val$jscomp$60_val__$1$jscomp$3$$ = $f$jscomp$155$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$155$$.$cljs$core$IFn$_invoke$arity$2$($G__31571$jscomp$inline_474_G__33616_nval$jscomp$5_val$jscomp$60_val__$1$jscomp$3$$, $G__31572$jscomp$inline_475$$) : $f$jscomp$155$$.call(null, $G__31571$jscomp$inline_474_G__33616_nval$jscomp$5_val$jscomp$60_val__$1$jscomp$3$$, $G__31572$jscomp$inline_475$$);
      if ($cljs$core$reduced_QMARK_$$($G__31571$jscomp$inline_474_G__33616_nval$jscomp$5_val$jscomp$60_val__$1$jscomp$3$$)) {
        return $cljs$core$_deref$$($G__31571$jscomp$inline_474_G__33616_nval$jscomp$5_val$jscomp$60_val__$1$jscomp$3$$);
      }
      $G__33617_coll$jscomp$146_coll__$1$jscomp$25$$ = $cljs$core$next$$($G__33617_coll$jscomp$146_coll__$1$jscomp$25$$);
    } else {
      return $G__31571$jscomp$inline_474_G__33616_nval$jscomp$5_val$jscomp$60_val__$1$jscomp$3$$;
    }
  }
}
function $cljs$core$iter_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($coll$jscomp$148_iter$jscomp$18$$, $f$jscomp$156$$) {
  $coll$jscomp$148_iter$jscomp$18$$ = $cljs$core$_iterator$$($coll$jscomp$148_iter$jscomp$18$$);
  if ($cljs$core$truth_$$($coll$jscomp$148_iter$jscomp$18$$.$hasNext$())) {
    for (var $G__31575$jscomp$inline_477_acc$jscomp$1_nacc$$ = $coll$jscomp$148_iter$jscomp$18$$.next();;) {
      if ($coll$jscomp$148_iter$jscomp$18$$.$hasNext$()) {
        var $G__31576$jscomp$inline_478$$ = $coll$jscomp$148_iter$jscomp$18$$.next();
        $G__31575$jscomp$inline_477_acc$jscomp$1_nacc$$ = $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$2$($G__31575$jscomp$inline_477_acc$jscomp$1_nacc$$, $G__31576$jscomp$inline_478$$) : $f$jscomp$156$$.call(null, $G__31575$jscomp$inline_477_acc$jscomp$1_nacc$$, $G__31576$jscomp$inline_478$$);
        if ($cljs$core$reduced_QMARK_$$($G__31575$jscomp$inline_477_acc$jscomp$1_nacc$$)) {
          return $cljs$core$_deref$$($G__31575$jscomp$inline_477_acc$jscomp$1_nacc$$);
        }
      } else {
        return $G__31575$jscomp$inline_477_acc$jscomp$1_nacc$$;
      }
    }
  } else {
    return $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$0$ ? $f$jscomp$156$$.$cljs$core$IFn$_invoke$arity$0$() : $f$jscomp$156$$.call(null);
  }
}
function $cljs$core$iter_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($coll$jscomp$149_iter$jscomp$19$$, $f$jscomp$157$$, $G__31577$jscomp$inline_480_acc$jscomp$2_init$jscomp$7_nacc$jscomp$1$$) {
  for ($coll$jscomp$149_iter$jscomp$19$$ = $cljs$core$_iterator$$($coll$jscomp$149_iter$jscomp$19$$);;) {
    if ($coll$jscomp$149_iter$jscomp$19$$.$hasNext$()) {
      var $G__31578$jscomp$inline_481$$ = $coll$jscomp$149_iter$jscomp$19$$.next();
      $G__31577$jscomp$inline_480_acc$jscomp$2_init$jscomp$7_nacc$jscomp$1$$ = $f$jscomp$157$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$157$$.$cljs$core$IFn$_invoke$arity$2$($G__31577$jscomp$inline_480_acc$jscomp$2_init$jscomp$7_nacc$jscomp$1$$, $G__31578$jscomp$inline_481$$) : $f$jscomp$157$$.call(null, $G__31577$jscomp$inline_480_acc$jscomp$2_init$jscomp$7_nacc$jscomp$1$$, $G__31578$jscomp$inline_481$$);
      if ($cljs$core$reduced_QMARK_$$($G__31577$jscomp$inline_480_acc$jscomp$2_init$jscomp$7_nacc$jscomp$1$$)) {
        return $cljs$core$_deref$$($G__31577$jscomp$inline_480_acc$jscomp$2_init$jscomp$7_nacc$jscomp$1$$);
      }
    } else {
      return $G__31577$jscomp$inline_480_acc$jscomp$2_init$jscomp$7_nacc$jscomp$1$$;
    }
  }
}
function $cljs$core$reduce$$($var_args$jscomp$132$$) {
  switch(arguments.length) {
    case 2:
      return $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length)].join(""));
  }
}
function $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$158$$, $coll$jscomp$150$$) {
  return null != $coll$jscomp$150$$ && ($coll$jscomp$150$$.$cljs$lang$protocol_mask$partition0$$ & 524288 || $cljs$core$PROTOCOL_SENTINEL$$ === $coll$jscomp$150$$.$cljs$core$IReduce$$) ? $coll$jscomp$150$$.$cljs$core$IReduce$_reduce$arity$2$(null, $f$jscomp$158$$) : Array.isArray($coll$jscomp$150$$) ? $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($coll$jscomp$150$$, $f$jscomp$158$$) : "string" === typeof $coll$jscomp$150$$ ? $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($coll$jscomp$150$$, 
  $f$jscomp$158$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IReduce$$, $coll$jscomp$150$$) ? $cljs$core$_reduce$$($coll$jscomp$150$$, $f$jscomp$158$$) : $cljs$core$iterable_QMARK_$$($coll$jscomp$150$$) ? $cljs$core$iter_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($coll$jscomp$150$$, $f$jscomp$158$$) : $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$158$$, $coll$jscomp$150$$);
}
function $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$159$$, $val$jscomp$61$$, $coll$jscomp$151$$) {
  return null != $coll$jscomp$151$$ && ($coll$jscomp$151$$.$cljs$lang$protocol_mask$partition0$$ & 524288 || $cljs$core$PROTOCOL_SENTINEL$$ === $coll$jscomp$151$$.$cljs$core$IReduce$$) ? $coll$jscomp$151$$.$cljs$core$IReduce$_reduce$arity$3$(null, $f$jscomp$159$$, $val$jscomp$61$$) : Array.isArray($coll$jscomp$151$$) ? $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($coll$jscomp$151$$, $f$jscomp$159$$, $val$jscomp$61$$) : "string" === typeof $coll$jscomp$151$$ ? $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($coll$jscomp$151$$, 
  $f$jscomp$159$$, $val$jscomp$61$$) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IReduce$$, $coll$jscomp$151$$) ? $cljs$core$_reduce$$($coll$jscomp$151$$, $f$jscomp$159$$, $val$jscomp$61$$) : $cljs$core$iterable_QMARK_$$($coll$jscomp$151$$) ? $cljs$core$iter_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($coll$jscomp$151$$, $f$jscomp$159$$, $val$jscomp$61$$) : $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$159$$, $val$jscomp$61$$, $coll$jscomp$151$$);
}
function $cljs$core$reduce_kv$$($f$jscomp$160$$, $init$jscomp$8$$, $coll$jscomp$152$$) {
  return null != $coll$jscomp$152$$ ? $cljs$core$_kv_reduce$$($coll$jscomp$152$$, $f$jscomp$160$$, $init$jscomp$8$$) : $init$jscomp$8$$;
}
function $cljs$core$identity$$($x$jscomp$184$$) {
  return $x$jscomp$184$$;
}
function $cljs$core$transduce$cljs$0core$0IFn$0_invoke$0arity$04$$($f__$1_xform$jscomp$1$$, $f$jscomp$164$$, $init$jscomp$9_ret$jscomp$5$$, $coll$jscomp$154$$) {
  $f__$1_xform$jscomp$1$$ = $f__$1_xform$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $f__$1_xform$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($f$jscomp$164$$) : $f__$1_xform$jscomp$1$$.call(null, $f$jscomp$164$$);
  $init$jscomp$9_ret$jscomp$5$$ = $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f__$1_xform$jscomp$1$$, $init$jscomp$9_ret$jscomp$5$$, $coll$jscomp$154$$);
  return $f__$1_xform$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$ ? $f__$1_xform$jscomp$1$$.$cljs$core$IFn$_invoke$arity$1$($init$jscomp$9_ret$jscomp$5$$) : $f__$1_xform$jscomp$1$$.call(null, $init$jscomp$9_ret$jscomp$5$$);
}
function $cljs$core$quot$$($n$jscomp$70_q$jscomp$inline_483$$) {
  $n$jscomp$70_q$jscomp$inline_483$$ = ($n$jscomp$70_q$jscomp$inline_483$$ - $n$jscomp$70_q$jscomp$inline_483$$ % 2) / 2;
  return 0 <= $n$jscomp$70_q$jscomp$inline_483$$ ? Math.floor($n$jscomp$70_q$jscomp$inline_483$$) : Math.ceil($n$jscomp$70_q$jscomp$inline_483$$);
}
function $cljs$core$bit_count$$($v$jscomp$11_v__$1_v__$2$$) {
  $v$jscomp$11_v__$1_v__$2$$ -= $v$jscomp$11_v__$1_v__$2$$ >> 1 & 1431655765;
  $v$jscomp$11_v__$1_v__$2$$ = ($v$jscomp$11_v__$1_v__$2$$ & 858993459) + ($v$jscomp$11_v__$1_v__$2$$ >> 2 & 858993459);
  return 16843009 * ($v$jscomp$11_v__$1_v__$2$$ + ($v$jscomp$11_v__$1_v__$2$$ >> 4) & 252645135) >> 24;
}
var $cljs$core$str$$ = function $cljs$core$str$$($var_args$jscomp$157$$) {
  switch(arguments.length) {
    case 0:
      return $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$0$();
    case 1:
      return $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    default:
      for (var $args_arr__4839__auto__$jscomp$36$$ = [], $len__4818__auto___33757$$ = arguments.length, $i__4819__auto___33758$$ = 0;;) {
        if ($i__4819__auto___33758$$ < $len__4818__auto___33757$$) {
          $args_arr__4839__auto__$jscomp$36$$.push(arguments[$i__4819__auto___33758$$]), $i__4819__auto___33758$$ += 1;
        } else {
          break;
        }
      }
      return $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], new $cljs$core$IndexedSeq$$($args_arr__4839__auto__$jscomp$36$$.slice(1), 0, null));
  }
};
$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$0$ = function() {
  return "";
};
$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$ = function($x$jscomp$292$$) {
  return null == $x$jscomp$292$$ ? "" : [$x$jscomp$292$$].join("");
};
$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($G__33760_sb$jscomp$6_x$jscomp$293$$, $G__33761_more$jscomp$24_ys$jscomp$2$$) {
  for ($G__33760_sb$jscomp$6_x$jscomp$293$$ = new $goog$string$StringBuffer$$($cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__33760_sb$jscomp$6_x$jscomp$293$$));;) {
    if ($cljs$core$truth_$$($G__33761_more$jscomp$24_ys$jscomp$2$$)) {
      $G__33760_sb$jscomp$6_x$jscomp$293$$ = $G__33760_sb$jscomp$6_x$jscomp$293$$.append($cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$first$$($G__33761_more$jscomp$24_ys$jscomp$2$$))), $G__33761_more$jscomp$24_ys$jscomp$2$$ = $cljs$core$next$$($G__33761_more$jscomp$24_ys$jscomp$2$$);
    } else {
      return $G__33760_sb$jscomp$6_x$jscomp$293$$.toString();
    }
  }
};
$cljs$core$str$$.$cljs$lang$applyTo$ = function($seq31698_seq31698__$1$$) {
  var $G__31699$$ = $cljs$core$first$$($seq31698_seq31698__$1$$);
  $seq31698_seq31698__$1$$ = $cljs$core$next$$($seq31698_seq31698__$1$$);
  return this.$cljs$core$IFn$_invoke$arity$variadic$($G__31699$$, $seq31698_seq31698__$1$$);
};
$cljs$core$str$$.$cljs$lang$maxFixedArity$ = 1;
function $cljs$core$equiv_sequential$$($G__33765$jscomp$inline_494_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_x$jscomp$294_xs$jscomp$inline_492$$, $G__33766$jscomp$inline_495_y$jscomp$129_ys$jscomp$inline_493$$) {
  if ($cljs$core$sequential_QMARK_$$($G__33766$jscomp$inline_495_y$jscomp$129_ys$jscomp$inline_493$$)) {
    if ($cljs$core$counted_QMARK_$$($G__33765$jscomp$inline_494_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_x$jscomp$294_xs$jscomp$inline_492$$) && $cljs$core$counted_QMARK_$$($G__33766$jscomp$inline_495_y$jscomp$129_ys$jscomp$inline_493$$) && $cljs$core$count$$($G__33765$jscomp$inline_494_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_x$jscomp$294_xs$jscomp$inline_492$$) !== $cljs$core$count$$($G__33766$jscomp$inline_495_y$jscomp$129_ys$jscomp$inline_493$$)) {
      $G__33765$jscomp$inline_494_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_x$jscomp$294_xs$jscomp$inline_492$$ = !1;
    } else {
      a: {
        for ($G__33765$jscomp$inline_494_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_x$jscomp$294_xs$jscomp$inline_492$$ = $cljs$core$seq$$($G__33765$jscomp$inline_494_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_x$jscomp$294_xs$jscomp$inline_492$$), $G__33766$jscomp$inline_495_y$jscomp$129_ys$jscomp$inline_493$$ = $cljs$core$seq$$($G__33766$jscomp$inline_495_y$jscomp$129_ys$jscomp$inline_493$$);;) {
          if (null == $G__33765$jscomp$inline_494_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_x$jscomp$294_xs$jscomp$inline_492$$) {
            $G__33765$jscomp$inline_494_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_x$jscomp$294_xs$jscomp$inline_492$$ = null == $G__33766$jscomp$inline_495_y$jscomp$129_ys$jscomp$inline_493$$;
            break a;
          }
          if (null != $G__33766$jscomp$inline_495_y$jscomp$129_ys$jscomp$inline_493$$ && $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$first$$($G__33765$jscomp$inline_494_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_x$jscomp$294_xs$jscomp$inline_492$$), $cljs$core$first$$($G__33766$jscomp$inline_495_y$jscomp$129_ys$jscomp$inline_493$$))) {
            $G__33765$jscomp$inline_494_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_x$jscomp$294_xs$jscomp$inline_492$$ = $cljs$core$next$$($G__33765$jscomp$inline_494_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_x$jscomp$294_xs$jscomp$inline_492$$), $G__33766$jscomp$inline_495_y$jscomp$129_ys$jscomp$inline_493$$ = $cljs$core$next$$($G__33766$jscomp$inline_495_y$jscomp$129_ys$jscomp$inline_493$$);
          } else {
            $G__33765$jscomp$inline_494_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_x$jscomp$294_xs$jscomp$inline_492$$ = !1;
            break a;
          }
        }
      }
    }
  } else {
    $G__33765$jscomp$inline_494_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_x$jscomp$294_xs$jscomp$inline_492$$ = null;
  }
  return $cljs$core$boolean$0$$($G__33765$jscomp$inline_494_JSCompiler_temp$jscomp$63_JSCompiler_temp$jscomp$64_x$jscomp$294_xs$jscomp$inline_492$$);
}
function $cljs$core$List$$($meta$jscomp$9$$, $first$jscomp$4$$, $rest$jscomp$5$$, $count$jscomp$43$$, $__hash$$) {
  this.$meta$ = $meta$jscomp$9$$;
  this.first = $first$jscomp$4$$;
  this.$rest$ = $rest$jscomp$5$$;
  this.count = $count$jscomp$43$$;
  this.$__hash$ = $__hash$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 65937646;
  this.$cljs$lang$protocol_mask$partition1$$ = 8192;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$List$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__33804$$ = null;
  $G__33804$$ = function($x$jscomp$297$$, $start$jscomp$36$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$297$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$297$$, $start$jscomp$36$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__33804$$.$cljs$core$IFn$_invoke$arity$1$ = function($x$jscomp$295$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$295$$, 0);
  };
  $G__33804$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$296$$, $start$jscomp$35$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$296$$, $start$jscomp$35$$);
  };
  return $G__33804$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__33805__1$$($x$jscomp$298$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$298$$, this.count);
  }
  var $G__33805$$ = null;
  $G__33805$$ = function($x$jscomp$300$$, $start$jscomp$38$$) {
    switch(arguments.length) {
      case 1:
        return $G__33805__1$$.call(this, $x$jscomp$300$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$300$$, $start$jscomp$38$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__33805$$.$cljs$core$IFn$_invoke$arity$1$ = $G__33805__1$$;
  $G__33805$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$299$$, $start$jscomp$37$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$299$$, $start$jscomp$37$$);
  };
  return $G__33805$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  return 1 === this.count ? null : this.$rest$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return this.count;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IStack$_peek$arity$1$ = function() {
  return this.first;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IStack$_pop$arity$1$ = function() {
  return this.$cljs$core$ISeq$_rest$arity$1$(null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4319__auto__$jscomp$1_h__4319__auto____$1$jscomp$1$$ = this.$__hash$;
  return null != $h__4319__auto__$jscomp$1_h__4319__auto____$1$jscomp$1$$ ? $h__4319__auto__$jscomp$1_h__4319__auto____$1$jscomp$1$$ : this.$__hash$ = $h__4319__auto__$jscomp$1_h__4319__auto____$1$jscomp$1$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$168$$, $other$jscomp$56$$) {
  return $cljs$core$equiv_sequential$$(this, $other$jscomp$56$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$_with_meta$$($cljs$core$List$EMPTY$$, this.$meta$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$170$$, $f$jscomp$165$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$165$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$jscomp$171$$, $f$jscomp$166$$, $start$jscomp$39$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$166$$, $start$jscomp$39$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return this.first;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  return 1 === this.count ? $cljs$core$List$EMPTY$$ : this.$rest$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$175$$, $new_meta$jscomp$5$$) {
  return $new_meta$jscomp$5$$ === this.$meta$ ? this : new $cljs$core$List$$($new_meta$jscomp$5$$, this.first, this.$rest$, this.count, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$176$$, $o$jscomp$97$$) {
  return new $cljs$core$List$$(this.$meta$, $o$jscomp$97$$, this, this.count + 1, null);
};
$cljs$core$List$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$EmptyList$$($meta$jscomp$11$$) {
  this.$meta$ = $meta$jscomp$11$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 65937614;
  this.$cljs$lang$protocol_mask$partition1$$ = 8192;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$EmptyList$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__33810$$ = null;
  $G__33810$$ = function($x$jscomp$304$$, $start$jscomp$41$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$304$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$304$$, $start$jscomp$41$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__33810$$.$cljs$core$IFn$_invoke$arity$1$ = function($x$jscomp$302$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$302$$, 0);
  };
  $G__33810$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$303$$, $start$jscomp$40$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$303$$, $start$jscomp$40$$);
  };
  return $G__33810$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__33811__1$$($x$jscomp$305$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$305$$, $cljs$core$count$$(this));
  }
  var $G__33811$$ = null;
  $G__33811$$ = function($x$jscomp$307$$, $start$jscomp$43$$) {
    switch(arguments.length) {
      case 1:
        return $G__33811__1$$.call(this, $x$jscomp$307$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$307$$, $start$jscomp$43$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__33811$$.$cljs$core$IFn$_invoke$arity$1$ = $G__33811__1$$;
  $G__33811$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$306$$, $start$jscomp$42$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$306$$, $start$jscomp$42$$);
  };
  return $G__33811$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  return null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return 0;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IStack$_peek$arity$1$ = function() {
  return null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IStack$_pop$arity$1$ = function() {
  throw Error("Can't pop empty list");
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  return $cljs$core$empty_ordered_hash$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$188$$, $other$jscomp$58$$) {
  return (null != $other$jscomp$58$$ ? $other$jscomp$58$$.$cljs$lang$protocol_mask$partition0$$ & 33554432 || $cljs$core$PROTOCOL_SENTINEL$$ === $other$jscomp$58$$.$cljs$core$IList$$ || ($other$jscomp$58$$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IList$$, $other$jscomp$58$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IList$$, $other$jscomp$58$$)) || $cljs$core$sequential_QMARK_$$($other$jscomp$58$$) ? null == $cljs$core$seq$$($other$jscomp$58$$) : 
  !1;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$190$$, $f$jscomp$167$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$167$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$jscomp$191$$, $f$jscomp$168$$, $start$jscomp$44$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$168$$, $start$jscomp$44$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  return $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$195$$, $new_meta$jscomp$6$$) {
  return $new_meta$jscomp$6$$ === this.$meta$ ? this : new $cljs$core$EmptyList$$($new_meta$jscomp$6$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$196$$, $o$jscomp$98$$) {
  return new $cljs$core$List$$(this.$meta$, $o$jscomp$98$$, null, 1, null);
};
var $cljs$core$List$EMPTY$$ = new $cljs$core$EmptyList$$(null);
$cljs$core$EmptyList$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$Cons$$($meta$jscomp$13$$, $first$jscomp$6$$, $rest$jscomp$7$$, $__hash$jscomp$2$$) {
  this.$meta$ = $meta$jscomp$13$$;
  this.first = $first$jscomp$6$$;
  this.$rest$ = $rest$jscomp$7$$;
  this.$__hash$ = $__hash$jscomp$2$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 65929452;
  this.$cljs$lang$protocol_mask$partition1$$ = 8192;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$Cons$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__33821$$ = null;
  $G__33821$$ = function($x$jscomp$310$$, $start$jscomp$46$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$310$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$310$$, $start$jscomp$46$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__33821$$.$cljs$core$IFn$_invoke$arity$1$ = function($x$jscomp$308$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$308$$, 0);
  };
  $G__33821$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$309$$, $start$jscomp$45$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$309$$, $start$jscomp$45$$);
  };
  return $G__33821$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__33822__1$$($x$jscomp$311$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$311$$, $cljs$core$count$$(this));
  }
  var $G__33822$$ = null;
  $G__33822$$ = function($x$jscomp$313$$, $start$jscomp$48$$) {
    switch(arguments.length) {
      case 1:
        return $G__33822__1$$.call(this, $x$jscomp$313$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$313$$, $start$jscomp$48$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__33822$$.$cljs$core$IFn$_invoke$arity$1$ = $G__33822__1$$;
  $G__33822$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$312$$, $start$jscomp$47$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$312$$, $start$jscomp$47$$);
  };
  return $G__33822$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  return null == this.$rest$ ? null : $cljs$core$seq$$(this.$rest$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4319__auto__$jscomp$2_h__4319__auto____$1$jscomp$2$$ = this.$__hash$;
  return null != $h__4319__auto__$jscomp$2_h__4319__auto____$1$jscomp$2$$ ? $h__4319__auto__$jscomp$2_h__4319__auto____$1$jscomp$2$$ : this.$__hash$ = $h__4319__auto__$jscomp$2_h__4319__auto____$1$jscomp$2$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$207$$, $other$jscomp$60$$) {
  return $cljs$core$equiv_sequential$$(this, $other$jscomp$60$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$209$$, $f$jscomp$169$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$169$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$jscomp$210$$, $f$jscomp$170$$, $start$jscomp$49$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$170$$, $start$jscomp$49$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return this.first;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  return null == this.$rest$ ? $cljs$core$List$EMPTY$$ : this.$rest$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$214$$, $new_meta$jscomp$7$$) {
  return $new_meta$jscomp$7$$ === this.$meta$ ? this : new $cljs$core$Cons$$($new_meta$jscomp$7$$, this.first, this.$rest$, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$215$$, $o$jscomp$99$$) {
  return new $cljs$core$Cons$$(null, $o$jscomp$99$$, this, null);
};
$cljs$core$Cons$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$cons$$($x$jscomp$314$$, $coll$jscomp$216$$) {
  return null == $coll$jscomp$216$$ ? new $cljs$core$List$$(null, $x$jscomp$314$$, null, 1, null) : null != $coll$jscomp$216$$ && ($coll$jscomp$216$$.$cljs$lang$protocol_mask$partition0$$ & 64 || $cljs$core$PROTOCOL_SENTINEL$$ === $coll$jscomp$216$$.$cljs$core$ISeq$$) ? new $cljs$core$Cons$$(null, $x$jscomp$314$$, $coll$jscomp$216$$, null) : new $cljs$core$Cons$$(null, $x$jscomp$314$$, $cljs$core$seq$$($coll$jscomp$216$$), null);
}
function $cljs$core$Keyword$$($ns$jscomp$4$$, $name$jscomp$100$$, $fqn$$, $_hash$jscomp$2$$) {
  this.$ns$ = $ns$jscomp$4$$;
  this.name = $name$jscomp$100$$;
  this.$fqn$ = $fqn$$;
  this.$_hash$ = $_hash$jscomp$2$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 2153775105;
  this.$cljs$lang$protocol_mask$partition1$$ = 4096;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$Keyword$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return [":", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(this.$fqn$)].join("");
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($_$jscomp$78$$, $other$jscomp$62$$) {
  return $other$jscomp$62$$ instanceof $cljs$core$Keyword$$ ? this.$fqn$ === $other$jscomp$62$$.$fqn$ : !1;
};
$JSCompiler_prototypeAlias$$.call = function($unused__9507__auto__$jscomp$3$$) {
  switch(arguments.length - 1) {
    case 1:
      return this.$cljs$core$IFn$_invoke$arity$1$(arguments[1]);
    case 2:
      return this.$cljs$core$IFn$_invoke$arity$2$(arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length - 1)].join(""));
  }
};
$JSCompiler_prototypeAlias$$.apply = function($self__$jscomp$190$$, $args31723$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args31723$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($coll$jscomp$217$$) {
  return $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($coll$jscomp$217$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($coll$jscomp$218$$, $not_found$jscomp$11$$) {
  return $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$3$($coll$jscomp$218$$, this, $not_found$jscomp$11$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4319__auto__$jscomp$3_h__4319__auto____$1$jscomp$3$$ = this.$_hash$;
  return null != $h__4319__auto__$jscomp$3_h__4319__auto____$1$jscomp$3$$ ? $h__4319__auto__$jscomp$3_h__4319__auto____$1$jscomp$3$$ : this.$_hash$ = $h__4319__auto__$jscomp$3_h__4319__auto____$1$jscomp$3$$ = $cljs$core$hash_combine$$($cljs$core$m3_hash_unencoded_chars$$(this.name), $cljs$core$hash_string$$(this.$ns$)) + 2654435769 | 0;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($o$jscomp$100$$, $writer$jscomp$8$$) {
  return $cljs$core$_write$$($writer$jscomp$8$$, [":", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(this.$fqn$)].join(""));
};
function $cljs$core$namespace$$($x$jscomp$318$$) {
  if (null != $x$jscomp$318$$ && ($x$jscomp$318$$.$cljs$lang$protocol_mask$partition1$$ & 4096 || $cljs$core$PROTOCOL_SENTINEL$$ === $x$jscomp$318$$.$cljs$core$INamed$$)) {
    return $x$jscomp$318$$.$ns$;
  }
  throw Error(["Doesn't support namespace: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($x$jscomp$318$$)].join(""));
}
var $cljs$core$keyword$$ = function $cljs$core$keyword$$($var_args$jscomp$160$$) {
  switch(arguments.length) {
    case 1:
      return $cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length)].join(""));
  }
};
$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$ = function($name$jscomp$102$$) {
  if ($name$jscomp$102$$ instanceof $cljs$core$Keyword$$) {
    return $name$jscomp$102$$;
  }
  if ($name$jscomp$102$$ instanceof $cljs$core$Symbol$$) {
    return new $cljs$core$Keyword$$($cljs$core$namespace$$($name$jscomp$102$$), $cljs$core$name$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$name$$.$cljs$core$IFn$_invoke$arity$1$($name$jscomp$102$$) : $cljs$core$name$$.call(null, $name$jscomp$102$$), $name$jscomp$102$$.$str$, null);
  }
  if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$("/", $name$jscomp$102$$)) {
    return new $cljs$core$Keyword$$(null, $name$jscomp$102$$, $name$jscomp$102$$, null);
  }
  if ("string" === typeof $name$jscomp$102$$) {
    var $parts$jscomp$12$$ = $name$jscomp$102$$.split("/");
    return 2 === $parts$jscomp$12$$.length ? new $cljs$core$Keyword$$($parts$jscomp$12$$[0], $parts$jscomp$12$$[1], $name$jscomp$102$$, null) : new $cljs$core$Keyword$$(null, $parts$jscomp$12$$[0], $name$jscomp$102$$, null);
  }
  return null;
};
$cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$2$ = function($ns$jscomp$6_ns__$1$$, $name$jscomp$103_name__$1$$) {
  $ns$jscomp$6_ns__$1$$ = $ns$jscomp$6_ns__$1$$ instanceof $cljs$core$Keyword$$ ? $cljs$core$name$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$name$$.$cljs$core$IFn$_invoke$arity$1$($ns$jscomp$6_ns__$1$$) : $cljs$core$name$$.call(null, $ns$jscomp$6_ns__$1$$) : $ns$jscomp$6_ns__$1$$ instanceof $cljs$core$Symbol$$ ? $cljs$core$name$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$name$$.$cljs$core$IFn$_invoke$arity$1$($ns$jscomp$6_ns__$1$$) : $cljs$core$name$$.call(null, $ns$jscomp$6_ns__$1$$) : $ns$jscomp$6_ns__$1$$;
  $name$jscomp$103_name__$1$$ = $name$jscomp$103_name__$1$$ instanceof $cljs$core$Keyword$$ ? $cljs$core$name$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$name$$.$cljs$core$IFn$_invoke$arity$1$($name$jscomp$103_name__$1$$) : $cljs$core$name$$.call(null, $name$jscomp$103_name__$1$$) : $name$jscomp$103_name__$1$$ instanceof $cljs$core$Symbol$$ ? $cljs$core$name$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$name$$.$cljs$core$IFn$_invoke$arity$1$($name$jscomp$103_name__$1$$) : $cljs$core$name$$.call(null, 
  $name$jscomp$103_name__$1$$) : $name$jscomp$103_name__$1$$;
  return new $cljs$core$Keyword$$($ns$jscomp$6_ns__$1$$, $name$jscomp$103_name__$1$$, [$cljs$core$truth_$$($ns$jscomp$6_ns__$1$$) ? [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($ns$jscomp$6_ns__$1$$), "/"].join("") : null, $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($name$jscomp$103_name__$1$$)].join(""), null);
};
$cljs$core$keyword$$.$cljs$lang$maxFixedArity$ = 2;
function $cljs$core$LazySeq$$($meta$jscomp$15$$, $fn$jscomp$8$$, $__hash$jscomp$4$$) {
  this.$meta$ = $meta$jscomp$15$$;
  this.$fn$ = $fn$jscomp$8$$;
  this.$s$ = null;
  this.$__hash$ = $__hash$jscomp$4$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 32374988;
  this.$cljs$lang$protocol_mask$partition1$$ = 1;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$LazySeq$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
function $JSCompiler_StaticMethods_sval$$($JSCompiler_StaticMethods_sval$self$$) {
  null != $JSCompiler_StaticMethods_sval$self$$.$fn$ && ($JSCompiler_StaticMethods_sval$self$$.$s$ = $JSCompiler_StaticMethods_sval$self$$.$fn$.$cljs$core$IFn$_invoke$arity$0$ ? $JSCompiler_StaticMethods_sval$self$$.$fn$.$cljs$core$IFn$_invoke$arity$0$() : $JSCompiler_StaticMethods_sval$self$$.$fn$.call(null), $JSCompiler_StaticMethods_sval$self$$.$fn$ = null);
  return $JSCompiler_StaticMethods_sval$self$$.$s$;
}
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__33837$$ = null;
  $G__33837$$ = function($x$jscomp$328$$, $start$jscomp$51$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$328$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$328$$, $start$jscomp$51$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__33837$$.$cljs$core$IFn$_invoke$arity$1$ = function($x$jscomp$326$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$326$$, 0);
  };
  $G__33837$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$327$$, $start$jscomp$50$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$327$$, $start$jscomp$50$$);
  };
  return $G__33837$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__33838__1$$($x$jscomp$329$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$329$$, $cljs$core$count$$(this));
  }
  var $G__33838$$ = null;
  $G__33838$$ = function($x$jscomp$331$$, $start$jscomp$53$$) {
    switch(arguments.length) {
      case 1:
        return $G__33838__1$$.call(this, $x$jscomp$331$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$331$$, $start$jscomp$53$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__33838$$.$cljs$core$IFn$_invoke$arity$1$ = $G__33838__1$$;
  $G__33838$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$330$$, $start$jscomp$52$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$330$$, $start$jscomp$52$$);
  };
  return $G__33838$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  this.$cljs$core$ISeqable$_seq$arity$1$(null);
  return null == this.$s$ ? null : $cljs$core$next$$(this.$s$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4319__auto__$jscomp$4_h__4319__auto____$1$jscomp$4$$ = this.$__hash$;
  return null != $h__4319__auto__$jscomp$4_h__4319__auto____$1$jscomp$4$$ ? $h__4319__auto__$jscomp$4_h__4319__auto____$1$jscomp$4$$ : this.$__hash$ = $h__4319__auto__$jscomp$4_h__4319__auto____$1$jscomp$4$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$228$$, $other$jscomp$64$$) {
  return $cljs$core$equiv_sequential$$(this, $other$jscomp$64$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$_with_meta$$($cljs$core$List$EMPTY$$, this.$meta$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$231$$, $f$jscomp$171$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$171$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$jscomp$232$$, $f$jscomp$172$$, $start$jscomp$54$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$172$$, $start$jscomp$54$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  this.$cljs$core$ISeqable$_seq$arity$1$(null);
  return null == this.$s$ ? null : $cljs$core$first$$(this.$s$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  this.$cljs$core$ISeqable$_seq$arity$1$(null);
  return null != this.$s$ ? $cljs$core$rest$$(this.$s$) : $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  $JSCompiler_StaticMethods_sval$$(this);
  if (null == this.$s$) {
    return null;
  }
  for (var $ls$$ = this.$s$;;) {
    if ($ls$$ instanceof $cljs$core$LazySeq$$) {
      $ls$$ = $JSCompiler_StaticMethods_sval$$($ls$$);
    } else {
      return this.$s$ = $ls$$, $cljs$core$seq$$(this.$s$);
    }
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$236$$, $new_meta$jscomp$8$$) {
  var $coll__$1$jscomp$79$$ = this;
  return $new_meta$jscomp$8$$ === this.$meta$ ? $coll__$1$jscomp$79$$ : new $cljs$core$LazySeq$$($new_meta$jscomp$8$$, function() {
    return $coll__$1$jscomp$79$$.$cljs$core$ISeqable$_seq$arity$1$(null);
  }, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$237$$, $o$jscomp$101$$) {
  return $cljs$core$cons$$($o$jscomp$101$$, this);
};
$cljs$core$LazySeq$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$ChunkBuffer$$($buf$$) {
  this.$buf$ = $buf$$;
  this.end = 0;
  this.$cljs$lang$protocol_mask$partition0$$ = 2;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$cljs$core$ChunkBuffer$$.prototype.add = function($o$jscomp$102$$) {
  this.$buf$[this.end] = $o$jscomp$102$$;
  return this.end += 1;
};
$cljs$core$ChunkBuffer$$.prototype.$chunk$ = function() {
  var $ret$jscomp$6$$ = new $cljs$core$ArrayChunk$$(this.$buf$, 0, this.end);
  this.$buf$ = null;
  return $ret$jscomp$6$$;
};
$cljs$core$ChunkBuffer$$.prototype.$cljs$core$ICounted$_count$arity$1$ = function() {
  return this.end;
};
function $cljs$core$ArrayChunk$$($arr$jscomp$81$$, $off$$, $end$jscomp$13$$) {
  this.$arr$ = $arr$jscomp$81$$;
  this.$off$ = $off$$;
  this.end = $end$jscomp$13$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 524306;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$ArrayChunk$$.prototype;
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return this.end - this.$off$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$2$ = function($coll$jscomp$238$$, $i$jscomp$189$$) {
  return this.$arr$[this.$off$ + $i$jscomp$189$$];
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$3$ = function($coll$jscomp$239$$, $i$jscomp$190$$, $not_found$jscomp$12$$) {
  return 0 <= $i$jscomp$190$$ && $i$jscomp$190$$ < this.end - this.$off$ ? this.$arr$[this.$off$ + $i$jscomp$190$$] : $not_found$jscomp$12$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IChunk$_drop_first$arity$1$ = function() {
  if (this.$off$ === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new $cljs$core$ArrayChunk$$(this.$arr$, this.$off$ + 1, this.end);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$241$$, $f$jscomp$173$$) {
  return $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$04$$(this.$arr$, $f$jscomp$173$$, this.$arr$[this.$off$], this.$off$ + 1);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$jscomp$242$$, $f$jscomp$174$$, $start$jscomp$55$$) {
  return $cljs$core$array_reduce$cljs$0core$0IFn$0_invoke$0arity$04$$(this.$arr$, $f$jscomp$174$$, $start$jscomp$55$$, this.$off$);
};
function $cljs$core$ChunkedCons$$($chunk$jscomp$7$$, $more$jscomp$25$$, $meta$jscomp$17$$, $__hash$jscomp$6$$) {
  this.$chunk$ = $chunk$jscomp$7$$;
  this.$more$ = $more$jscomp$25$$;
  this.$meta$ = $meta$jscomp$17$$;
  this.$__hash$ = $__hash$jscomp$6$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 31850732;
  this.$cljs$lang$protocol_mask$partition1$$ = 1536;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$ChunkedCons$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__33844$$ = null;
  $G__33844$$ = function($x$jscomp$334$$, $start$jscomp$57$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$334$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$334$$, $start$jscomp$57$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__33844$$.$cljs$core$IFn$_invoke$arity$1$ = function($x$jscomp$332$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$332$$, 0);
  };
  $G__33844$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$333$$, $start$jscomp$56$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$333$$, $start$jscomp$56$$);
  };
  return $G__33844$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__33846__1$$($x$jscomp$335$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$335$$, $cljs$core$count$$(this));
  }
  var $G__33846$$ = null;
  $G__33846$$ = function($x$jscomp$337$$, $start$jscomp$59$$) {
    switch(arguments.length) {
      case 1:
        return $G__33846__1$$.call(this, $x$jscomp$337$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$337$$, $start$jscomp$59$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__33846$$.$cljs$core$IFn$_invoke$arity$1$ = $G__33846__1$$;
  $G__33846$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$336$$, $start$jscomp$58$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$336$$, $start$jscomp$58$$);
  };
  return $G__33846$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  return 1 < $cljs$core$_count$$(this.$chunk$) ? new $cljs$core$ChunkedCons$$($cljs$core$_drop_first$$(this.$chunk$), this.$more$, null, null) : null == this.$more$ ? null : $cljs$core$_seq$$(this.$more$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4319__auto__$jscomp$5_h__4319__auto____$1$jscomp$5$$ = this.$__hash$;
  return null != $h__4319__auto__$jscomp$5_h__4319__auto____$1$jscomp$5$$ ? $h__4319__auto__$jscomp$5_h__4319__auto____$1$jscomp$5$$ : this.$__hash$ = $h__4319__auto__$jscomp$5_h__4319__auto____$1$jscomp$5$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$251$$, $other$jscomp$66$$) {
  return $cljs$core$equiv_sequential$$(this, $other$jscomp$66$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return $cljs$core$_nth$$(this.$chunk$, 0);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  return 1 < $cljs$core$_count$$(this.$chunk$) ? new $cljs$core$ChunkedCons$$($cljs$core$_drop_first$$(this.$chunk$), this.$more$, null, null) : null == this.$more$ ? $cljs$core$List$EMPTY$$ : this.$more$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IChunkedSeq$_chunked_first$arity$1$ = function() {
  return this.$chunk$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IChunkedSeq$_chunked_rest$arity$1$ = function() {
  return null == this.$more$ ? $cljs$core$List$EMPTY$$ : this.$more$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$258$$, $new_meta$jscomp$9$$) {
  return $new_meta$jscomp$9$$ === this.$meta$ ? this : new $cljs$core$ChunkedCons$$(this.$chunk$, this.$more$, $new_meta$jscomp$9$$, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($this$$jscomp$65$$, $o$jscomp$103$$) {
  return $cljs$core$cons$$($o$jscomp$103$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IChunkedNext$_chunked_next$arity$1$ = function() {
  return null == this.$more$ ? null : this.$more$;
};
$cljs$core$ChunkedCons$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$chunk_cons$$($chunk$jscomp$9$$, $rest$jscomp$9$$) {
  return 0 === $cljs$core$_count$$($chunk$jscomp$9$$) ? $rest$jscomp$9$$ : new $cljs$core$ChunkedCons$$($chunk$jscomp$9$$, $rest$jscomp$9$$, null, null);
}
function $cljs$core$chunk_append$$($b$jscomp$105$$, $x$jscomp$338$$) {
  $b$jscomp$105$$.add($x$jscomp$338$$);
}
function $cljs$core$bounded_count$$($n$jscomp$81$$, $G__33879_coll$jscomp$262_s$jscomp$65$$) {
  if ($cljs$core$counted_QMARK_$$($G__33879_coll$jscomp$262_s$jscomp$65$$)) {
    return $cljs$core$count$$($G__33879_coll$jscomp$262_s$jscomp$65$$);
  }
  var $G__33878_i$jscomp$195$$ = 0;
  for ($G__33879_coll$jscomp$262_s$jscomp$65$$ = $cljs$core$seq$$($G__33879_coll$jscomp$262_s$jscomp$65$$);;) {
    if (null != $G__33879_coll$jscomp$262_s$jscomp$65$$ && $G__33878_i$jscomp$195$$ < $n$jscomp$81$$) {
      $G__33878_i$jscomp$195$$ += 1, $G__33879_coll$jscomp$262_s$jscomp$65$$ = $cljs$core$next$$($G__33879_coll$jscomp$262_s$jscomp$65$$);
    } else {
      return $G__33878_i$jscomp$195$$;
    }
  }
}
var $cljs$core$spread$$ = function $cljs$core$spread$$($arglist$$) {
  if (null == $arglist$$) {
    return null;
  }
  var $n$jscomp$82$$ = $cljs$core$next$$($arglist$$);
  return null == $n$jscomp$82$$ ? $cljs$core$seq$$($cljs$core$first$$($arglist$$)) : $cljs$core$cons$$($cljs$core$first$$($arglist$$), $cljs$core$spread$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$spread$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$82$$) : $cljs$core$spread$$.call(null, $n$jscomp$82$$));
}, $cljs$core$conj_BANG_$$ = function $cljs$core$conj_BANG_$$($var_args$jscomp$168$$) {
  switch(arguments.length) {
    case 0:
      return $cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$0$();
    case 1:
      return $cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      for (var $args_arr__4839__auto__$jscomp$39$$ = [], $len__4818__auto___33889$$ = arguments.length, $i__4819__auto___33890$$ = 0;;) {
        if ($i__4819__auto___33890$$ < $len__4818__auto___33889$$) {
          $args_arr__4839__auto__$jscomp$39$$.push(arguments[$i__4819__auto___33890$$]), $i__4819__auto___33890$$ += 1;
        } else {
          break;
        }
      }
      return $cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], arguments[1], new $cljs$core$IndexedSeq$$($args_arr__4839__auto__$jscomp$39$$.slice(2), 0, null));
  }
};
$cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$0$ = function() {
  return $cljs$core$_as_transient$$($cljs$core$PersistentVector$EMPTY$$);
};
$cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$1$ = function($tcoll$jscomp$15$$) {
  return $tcoll$jscomp$15$$;
};
$cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$2$ = function($tcoll$jscomp$16$$, $val$jscomp$62$$) {
  return $cljs$core$_conj_BANG_$$($tcoll$jscomp$16$$, $val$jscomp$62$$);
};
$cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($G__33892_ntcoll_tcoll$jscomp$17$$, $G__33893_val$jscomp$63$$, $G__33894_vals$jscomp$2$$) {
  for (;;) {
    if ($G__33892_ntcoll_tcoll$jscomp$17$$ = $cljs$core$_conj_BANG_$$($G__33892_ntcoll_tcoll$jscomp$17$$, $G__33893_val$jscomp$63$$), $cljs$core$truth_$$($G__33894_vals$jscomp$2$$)) {
      $G__33893_val$jscomp$63$$ = $cljs$core$first$$($G__33894_vals$jscomp$2$$), $G__33894_vals$jscomp$2$$ = $cljs$core$next$$($G__33894_vals$jscomp$2$$);
    } else {
      return $G__33892_ntcoll_tcoll$jscomp$17$$;
    }
  }
};
$cljs$core$conj_BANG_$$.$cljs$lang$applyTo$ = function($G__31754_seq31752$$) {
  var $G__31753$$ = $cljs$core$first$$($G__31754_seq31752$$), $seq31752__$1_seq31752__$2$$ = $cljs$core$next$$($G__31754_seq31752$$);
  $G__31754_seq31752$$ = $cljs$core$first$$($seq31752__$1_seq31752__$2$$);
  $seq31752__$1_seq31752__$2$$ = $cljs$core$next$$($seq31752__$1_seq31752__$2$$);
  return this.$cljs$core$IFn$_invoke$arity$variadic$($G__31753$$, $G__31754_seq31752$$, $seq31752__$1_seq31752__$2$$);
};
$cljs$core$conj_BANG_$$.$cljs$lang$maxFixedArity$ = 2;
function $cljs$core$apply_to$$($f$jscomp$175$$, $argc$$, $a1$jscomp$3_args$jscomp$17$$) {
  var $args__$1_b2$$ = $cljs$core$seq$$($a1$jscomp$3_args$jscomp$17$$);
  if (0 === $argc$$) {
    return $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$0$ ? $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$0$() : $f$jscomp$175$$.call(null);
  }
  $a1$jscomp$3_args$jscomp$17$$ = $cljs$core$_first$$($args__$1_b2$$);
  var $args__$2_c3$$ = $cljs$core$_rest$$($args__$1_b2$$);
  if (1 === $argc$$) {
    return $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$1$($a1$jscomp$3_args$jscomp$17$$) : $f$jscomp$175$$.call(null, $a1$jscomp$3_args$jscomp$17$$);
  }
  $args__$1_b2$$ = $cljs$core$_first$$($args__$2_c3$$);
  var $args__$3_d4$$ = $cljs$core$_rest$$($args__$2_c3$$);
  if (2 === $argc$$) {
    return $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$2$($a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$) : $f$jscomp$175$$.call(null, $a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$);
  }
  $args__$2_c3$$ = $cljs$core$_first$$($args__$3_d4$$);
  var $args__$4_e5$$ = $cljs$core$_rest$$($args__$3_d4$$);
  if (3 === $argc$$) {
    return $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$3$ ? $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$3$($a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$) : $f$jscomp$175$$.call(null, $a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$);
  }
  $args__$3_d4$$ = $cljs$core$_first$$($args__$4_e5$$);
  var $args__$5_f6$$ = $cljs$core$_rest$$($args__$4_e5$$);
  if (4 === $argc$$) {
    return $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$4$ ? $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$4$($a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$) : $f$jscomp$175$$.call(null, $a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$);
  }
  $args__$4_e5$$ = $cljs$core$_first$$($args__$5_f6$$);
  var $args__$6_g7$$ = $cljs$core$_rest$$($args__$5_f6$$);
  if (5 === $argc$$) {
    return $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$5$ ? $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$5$($a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$) : $f$jscomp$175$$.call(null, $a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$);
  }
  $args__$5_f6$$ = $cljs$core$_first$$($args__$6_g7$$);
  var $args__$7_h8$$ = $cljs$core$_rest$$($args__$6_g7$$);
  if (6 === $argc$$) {
    return $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$6$ ? $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$6$($a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$) : $f$jscomp$175$$.call(null, $a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$);
  }
  $args__$6_g7$$ = $cljs$core$_first$$($args__$7_h8$$);
  var $args__$8_i9$$ = $cljs$core$_rest$$($args__$7_h8$$);
  if (7 === $argc$$) {
    return $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$7$ ? $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$7$($a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$, $args__$6_g7$$) : $f$jscomp$175$$.call(null, $a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$, $args__$6_g7$$);
  }
  $args__$7_h8$$ = $cljs$core$_first$$($args__$8_i9$$);
  var $args__$9_j10$$ = $cljs$core$_rest$$($args__$8_i9$$);
  if (8 === $argc$$) {
    return $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$8$ ? $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$8$($a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$, $args__$6_g7$$, $args__$7_h8$$) : $f$jscomp$175$$.call(null, $a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$, $args__$6_g7$$, $args__$7_h8$$);
  }
  $args__$8_i9$$ = $cljs$core$_first$$($args__$9_j10$$);
  var $args__$10_k11$$ = $cljs$core$_rest$$($args__$9_j10$$);
  if (9 === $argc$$) {
    return $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$9$ ? $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$9$($a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$, $args__$6_g7$$, $args__$7_h8$$, $args__$8_i9$$) : $f$jscomp$175$$.call(null, $a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$, $args__$6_g7$$, $args__$7_h8$$, $args__$8_i9$$);
  }
  $args__$9_j10$$ = $cljs$core$_first$$($args__$10_k11$$);
  var $args__$11_l12$$ = $cljs$core$_rest$$($args__$10_k11$$);
  if (10 === $argc$$) {
    return $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$10$ ? $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$10$($a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$, $args__$6_g7$$, $args__$7_h8$$, $args__$8_i9$$, $args__$9_j10$$) : $f$jscomp$175$$.call(null, $a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$, $args__$6_g7$$, $args__$7_h8$$, $args__$8_i9$$, $args__$9_j10$$);
  }
  $args__$10_k11$$ = $cljs$core$_first$$($args__$11_l12$$);
  var $args__$12_m13$$ = $cljs$core$_rest$$($args__$11_l12$$);
  if (11 === $argc$$) {
    return $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$11$ ? $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$11$($a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$, $args__$6_g7$$, $args__$7_h8$$, $args__$8_i9$$, $args__$9_j10$$, $args__$10_k11$$) : $f$jscomp$175$$.call(null, $a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$, $args__$6_g7$$, $args__$7_h8$$, $args__$8_i9$$, $args__$9_j10$$, 
    $args__$10_k11$$);
  }
  $args__$11_l12$$ = $cljs$core$_first$$($args__$12_m13$$);
  var $args__$13_n14$$ = $cljs$core$_rest$$($args__$12_m13$$);
  if (12 === $argc$$) {
    return $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$12$ ? $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$12$($a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$, $args__$6_g7$$, $args__$7_h8$$, $args__$8_i9$$, $args__$9_j10$$, $args__$10_k11$$, $args__$11_l12$$) : $f$jscomp$175$$.call(null, $a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$, $args__$6_g7$$, $args__$7_h8$$, $args__$8_i9$$, 
    $args__$9_j10$$, $args__$10_k11$$, $args__$11_l12$$);
  }
  $args__$12_m13$$ = $cljs$core$_first$$($args__$13_n14$$);
  var $args__$14_o15$$ = $cljs$core$_rest$$($args__$13_n14$$);
  if (13 === $argc$$) {
    return $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$13$ ? $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$13$($a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$, $args__$6_g7$$, $args__$7_h8$$, $args__$8_i9$$, $args__$9_j10$$, $args__$10_k11$$, $args__$11_l12$$, $args__$12_m13$$) : $f$jscomp$175$$.call(null, $a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$, $args__$6_g7$$, $args__$7_h8$$, 
    $args__$8_i9$$, $args__$9_j10$$, $args__$10_k11$$, $args__$11_l12$$, $args__$12_m13$$);
  }
  $args__$13_n14$$ = $cljs$core$_first$$($args__$14_o15$$);
  var $args__$15_p16$$ = $cljs$core$_rest$$($args__$14_o15$$);
  if (14 === $argc$$) {
    return $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$14$ ? $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$14$($a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$, $args__$6_g7$$, $args__$7_h8$$, $args__$8_i9$$, $args__$9_j10$$, $args__$10_k11$$, $args__$11_l12$$, $args__$12_m13$$, $args__$13_n14$$) : $f$jscomp$175$$.call(null, $a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$, $args__$6_g7$$, 
    $args__$7_h8$$, $args__$8_i9$$, $args__$9_j10$$, $args__$10_k11$$, $args__$11_l12$$, $args__$12_m13$$, $args__$13_n14$$);
  }
  $args__$14_o15$$ = $cljs$core$_first$$($args__$15_p16$$);
  var $args__$16_q17$$ = $cljs$core$_rest$$($args__$15_p16$$);
  if (15 === $argc$$) {
    return $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$15$ ? $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$15$($a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$, $args__$6_g7$$, $args__$7_h8$$, $args__$8_i9$$, $args__$9_j10$$, $args__$10_k11$$, $args__$11_l12$$, $args__$12_m13$$, $args__$13_n14$$, $args__$14_o15$$) : $f$jscomp$175$$.call(null, $a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, 
    $args__$5_f6$$, $args__$6_g7$$, $args__$7_h8$$, $args__$8_i9$$, $args__$9_j10$$, $args__$10_k11$$, $args__$11_l12$$, $args__$12_m13$$, $args__$13_n14$$, $args__$14_o15$$);
  }
  $args__$15_p16$$ = $cljs$core$_first$$($args__$16_q17$$);
  var $args__$17_r18$$ = $cljs$core$_rest$$($args__$16_q17$$);
  if (16 === $argc$$) {
    return $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$16$ ? $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$16$($a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$, $args__$6_g7$$, $args__$7_h8$$, $args__$8_i9$$, $args__$9_j10$$, $args__$10_k11$$, $args__$11_l12$$, $args__$12_m13$$, $args__$13_n14$$, $args__$14_o15$$, $args__$15_p16$$) : $f$jscomp$175$$.call(null, $a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, 
    $args__$4_e5$$, $args__$5_f6$$, $args__$6_g7$$, $args__$7_h8$$, $args__$8_i9$$, $args__$9_j10$$, $args__$10_k11$$, $args__$11_l12$$, $args__$12_m13$$, $args__$13_n14$$, $args__$14_o15$$, $args__$15_p16$$);
  }
  $args__$16_q17$$ = $cljs$core$_first$$($args__$17_r18$$);
  var $args__$18_s19$$ = $cljs$core$_rest$$($args__$17_r18$$);
  if (17 === $argc$$) {
    return $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$17$ ? $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$17$($a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$, $args__$6_g7$$, $args__$7_h8$$, $args__$8_i9$$, $args__$9_j10$$, $args__$10_k11$$, $args__$11_l12$$, $args__$12_m13$$, $args__$13_n14$$, $args__$14_o15$$, $args__$15_p16$$, $args__$16_q17$$) : $f$jscomp$175$$.call(null, $a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, 
    $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$, $args__$6_g7$$, $args__$7_h8$$, $args__$8_i9$$, $args__$9_j10$$, $args__$10_k11$$, $args__$11_l12$$, $args__$12_m13$$, $args__$13_n14$$, $args__$14_o15$$, $args__$15_p16$$, $args__$16_q17$$);
  }
  $args__$17_r18$$ = $cljs$core$_first$$($args__$18_s19$$);
  var $args__$19_args__$20$$ = $cljs$core$_rest$$($args__$18_s19$$);
  if (18 === $argc$$) {
    return $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$18$ ? $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$18$($a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$, $args__$6_g7$$, $args__$7_h8$$, $args__$8_i9$$, $args__$9_j10$$, $args__$10_k11$$, $args__$11_l12$$, $args__$12_m13$$, $args__$13_n14$$, $args__$14_o15$$, $args__$15_p16$$, $args__$16_q17$$, $args__$17_r18$$) : $f$jscomp$175$$.call(null, $a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, 
    $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$, $args__$6_g7$$, $args__$7_h8$$, $args__$8_i9$$, $args__$9_j10$$, $args__$10_k11$$, $args__$11_l12$$, $args__$12_m13$$, $args__$13_n14$$, $args__$14_o15$$, $args__$15_p16$$, $args__$16_q17$$, $args__$17_r18$$);
  }
  $args__$18_s19$$ = $cljs$core$_first$$($args__$19_args__$20$$);
  $args__$19_args__$20$$ = $cljs$core$_rest$$($args__$19_args__$20$$);
  if (19 === $argc$$) {
    return $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$19$ ? $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$19$($a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$, $args__$6_g7$$, $args__$7_h8$$, $args__$8_i9$$, $args__$9_j10$$, $args__$10_k11$$, $args__$11_l12$$, $args__$12_m13$$, $args__$13_n14$$, $args__$14_o15$$, $args__$15_p16$$, $args__$16_q17$$, $args__$17_r18$$, $args__$18_s19$$) : $f$jscomp$175$$.call(null, $a1$jscomp$3_args$jscomp$17$$, 
    $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$, $args__$6_g7$$, $args__$7_h8$$, $args__$8_i9$$, $args__$9_j10$$, $args__$10_k11$$, $args__$11_l12$$, $args__$12_m13$$, $args__$13_n14$$, $args__$14_o15$$, $args__$15_p16$$, $args__$16_q17$$, $args__$17_r18$$, $args__$18_s19$$);
  }
  var $t20$$ = $cljs$core$_first$$($args__$19_args__$20$$);
  $cljs$core$_rest$$($args__$19_args__$20$$);
  if (20 === $argc$$) {
    return $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$20$ ? $f$jscomp$175$$.$cljs$core$IFn$_invoke$arity$20$($a1$jscomp$3_args$jscomp$17$$, $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$, $args__$6_g7$$, $args__$7_h8$$, $args__$8_i9$$, $args__$9_j10$$, $args__$10_k11$$, $args__$11_l12$$, $args__$12_m13$$, $args__$13_n14$$, $args__$14_o15$$, $args__$15_p16$$, $args__$16_q17$$, $args__$17_r18$$, $args__$18_s19$$, $t20$$) : $f$jscomp$175$$.call(null, $a1$jscomp$3_args$jscomp$17$$, 
    $args__$1_b2$$, $args__$2_c3$$, $args__$3_d4$$, $args__$4_e5$$, $args__$5_f6$$, $args__$6_g7$$, $args__$7_h8$$, $args__$8_i9$$, $args__$9_j10$$, $args__$10_k11$$, $args__$11_l12$$, $args__$12_m13$$, $args__$13_n14$$, $args__$14_o15$$, $args__$15_p16$$, $args__$16_q17$$, $args__$17_r18$$, $args__$18_s19$$, $t20$$);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
function $cljs$core$next_STAR_$$($coll$jscomp$264$$) {
  return null != $coll$jscomp$264$$ && ($coll$jscomp$264$$.$cljs$lang$protocol_mask$partition0$$ & 128 || $cljs$core$PROTOCOL_SENTINEL$$ === $coll$jscomp$264$$.$cljs$core$INext$$) ? $coll$jscomp$264$$.$cljs$core$INext$_next$arity$1$() : $cljs$core$seq$$($cljs$core$rest$$($coll$jscomp$264$$));
}
function $cljs$core$apply_to_simple$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$177$$, $a0$jscomp$2$$, $args$jscomp$19$$) {
  return null == $args$jscomp$19$$ ? $f$jscomp$177$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$177$$.$cljs$core$IFn$_invoke$arity$1$($a0$jscomp$2$$) : $f$jscomp$177$$.call($f$jscomp$177$$, $a0$jscomp$2$$) : $cljs$core$apply_to_simple$cljs$0core$0IFn$0_invoke$0arity$04$$($f$jscomp$177$$, $a0$jscomp$2$$, $cljs$core$_first$$($args$jscomp$19$$), $cljs$core$next_STAR_$$($args$jscomp$19$$));
}
function $cljs$core$apply_to_simple$cljs$0core$0IFn$0_invoke$0arity$04$$($f$jscomp$178$$, $a0$jscomp$3$$, $a1$jscomp$4$$, $args$jscomp$20$$) {
  return null == $args$jscomp$20$$ ? $f$jscomp$178$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$178$$.$cljs$core$IFn$_invoke$arity$2$($a0$jscomp$3$$, $a1$jscomp$4$$) : $f$jscomp$178$$.call($f$jscomp$178$$, $a0$jscomp$3$$, $a1$jscomp$4$$) : $cljs$core$apply_to_simple$cljs$0core$0IFn$0_invoke$0arity$05$$($f$jscomp$178$$, $a0$jscomp$3$$, $a1$jscomp$4$$, $cljs$core$_first$$($args$jscomp$20$$), $cljs$core$next_STAR_$$($args$jscomp$20$$));
}
function $cljs$core$apply_to_simple$cljs$0core$0IFn$0_invoke$0arity$05$$($f$jscomp$179$$, $a0$jscomp$4$$, $a1$jscomp$5$$, $a2$$, $args$jscomp$21$$) {
  return null == $args$jscomp$21$$ ? $f$jscomp$179$$.$cljs$core$IFn$_invoke$arity$3$ ? $f$jscomp$179$$.$cljs$core$IFn$_invoke$arity$3$($a0$jscomp$4$$, $a1$jscomp$5$$, $a2$$) : $f$jscomp$179$$.call($f$jscomp$179$$, $a0$jscomp$4$$, $a1$jscomp$5$$, $a2$$) : $cljs$core$apply_to_simple$cljs$0core$0IFn$0_invoke$0arity$06$$($f$jscomp$179$$, $a0$jscomp$4$$, $a1$jscomp$5$$, $a2$$, $cljs$core$_first$$($args$jscomp$21$$), $cljs$core$next_STAR_$$($args$jscomp$21$$));
}
function $cljs$core$apply_to_simple$cljs$0core$0IFn$0_invoke$0arity$06$$($f$jscomp$180$$, $a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a5_args$jscomp$22$$) {
  if (null == $a5_args$jscomp$22$$) {
    return $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$4$ ? $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$4$($a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$) : $f$jscomp$180$$.call($f$jscomp$180$$, $a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$);
  }
  var $a4$$ = $cljs$core$_first$$($a5_args$jscomp$22$$), $a6_next_4$$ = $cljs$core$next$$($a5_args$jscomp$22$$);
  if (null == $a6_next_4$$) {
    return $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$5$ ? $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$5$($a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$) : $f$jscomp$180$$.call($f$jscomp$180$$, $a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$);
  }
  $a5_args$jscomp$22$$ = $cljs$core$_first$$($a6_next_4$$);
  var $a7_next_5$$ = $cljs$core$next$$($a6_next_4$$);
  if (null == $a7_next_5$$) {
    return $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$6$ ? $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$6$($a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$) : $f$jscomp$180$$.call($f$jscomp$180$$, $a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$);
  }
  $a6_next_4$$ = $cljs$core$_first$$($a7_next_5$$);
  var $a8_next_6$$ = $cljs$core$next$$($a7_next_5$$);
  if (null == $a8_next_6$$) {
    return $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$7$ ? $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$7$($a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$, $a6_next_4$$) : $f$jscomp$180$$.call($f$jscomp$180$$, $a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$, $a6_next_4$$);
  }
  $a7_next_5$$ = $cljs$core$_first$$($a8_next_6$$);
  var $a9_next_7$$ = $cljs$core$next$$($a8_next_6$$);
  if (null == $a9_next_7$$) {
    return $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$8$ ? $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$8$($a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$, $a6_next_4$$, $a7_next_5$$) : $f$jscomp$180$$.call($f$jscomp$180$$, $a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$, $a6_next_4$$, $a7_next_5$$);
  }
  $a8_next_6$$ = $cljs$core$_first$$($a9_next_7$$);
  var $a10_next_8$$ = $cljs$core$next$$($a9_next_7$$);
  if (null == $a10_next_8$$) {
    return $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$9$ ? $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$9$($a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$, $a6_next_4$$, $a7_next_5$$, $a8_next_6$$) : $f$jscomp$180$$.call($f$jscomp$180$$, $a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$, $a6_next_4$$, $a7_next_5$$, $a8_next_6$$);
  }
  $a9_next_7$$ = $cljs$core$_first$$($a10_next_8$$);
  var $a11_next_9$$ = $cljs$core$next$$($a10_next_8$$);
  if (null == $a11_next_9$$) {
    return $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$10$ ? $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$10$($a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$, $a6_next_4$$, $a7_next_5$$, $a8_next_6$$, $a9_next_7$$) : $f$jscomp$180$$.call($f$jscomp$180$$, $a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$, $a6_next_4$$, $a7_next_5$$, $a8_next_6$$, $a9_next_7$$);
  }
  $a10_next_8$$ = $cljs$core$_first$$($a11_next_9$$);
  var $a12_next_10$$ = $cljs$core$next$$($a11_next_9$$);
  if (null == $a12_next_10$$) {
    return $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$11$ ? $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$11$($a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$, $a6_next_4$$, $a7_next_5$$, $a8_next_6$$, $a9_next_7$$, $a10_next_8$$) : $f$jscomp$180$$.call($f$jscomp$180$$, $a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$, $a6_next_4$$, $a7_next_5$$, $a8_next_6$$, 
    $a9_next_7$$, $a10_next_8$$);
  }
  $a11_next_9$$ = $cljs$core$_first$$($a12_next_10$$);
  var $a13_next_11$$ = $cljs$core$next$$($a12_next_10$$);
  if (null == $a13_next_11$$) {
    return $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$12$ ? $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$12$($a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$, $a6_next_4$$, $a7_next_5$$, $a8_next_6$$, $a9_next_7$$, $a10_next_8$$, $a11_next_9$$) : $f$jscomp$180$$.call($f$jscomp$180$$, $a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$, $a6_next_4$$, $a7_next_5$$, 
    $a8_next_6$$, $a9_next_7$$, $a10_next_8$$, $a11_next_9$$);
  }
  $a12_next_10$$ = $cljs$core$_first$$($a13_next_11$$);
  var $a14_next_12$$ = $cljs$core$next$$($a13_next_11$$);
  if (null == $a14_next_12$$) {
    return $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$13$ ? $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$13$($a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$, $a6_next_4$$, $a7_next_5$$, $a8_next_6$$, $a9_next_7$$, $a10_next_8$$, $a11_next_9$$, $a12_next_10$$) : $f$jscomp$180$$.call($f$jscomp$180$$, $a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$, 
    $a6_next_4$$, $a7_next_5$$, $a8_next_6$$, $a9_next_7$$, $a10_next_8$$, $a11_next_9$$, $a12_next_10$$);
  }
  $a13_next_11$$ = $cljs$core$_first$$($a14_next_12$$);
  var $a15_next_13$$ = $cljs$core$next$$($a14_next_12$$);
  if (null == $a15_next_13$$) {
    return $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$14$ ? $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$14$($a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$, $a6_next_4$$, $a7_next_5$$, $a8_next_6$$, $a9_next_7$$, $a10_next_8$$, $a11_next_9$$, $a12_next_10$$, $a13_next_11$$) : $f$jscomp$180$$.call($f$jscomp$180$$, $a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$, 
    $a6_next_4$$, $a7_next_5$$, $a8_next_6$$, $a9_next_7$$, $a10_next_8$$, $a11_next_9$$, $a12_next_10$$, $a13_next_11$$);
  }
  $a14_next_12$$ = $cljs$core$_first$$($a15_next_13$$);
  var $a16$jscomp$2_next_14$$ = $cljs$core$next$$($a15_next_13$$);
  if (null == $a16$jscomp$2_next_14$$) {
    return $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$15$ ? $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$15$($a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$, $a6_next_4$$, $a7_next_5$$, $a8_next_6$$, $a9_next_7$$, $a10_next_8$$, $a11_next_9$$, $a12_next_10$$, $a13_next_11$$, $a14_next_12$$) : $f$jscomp$180$$.call($f$jscomp$180$$, $a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, 
    $a4$$, $a5_args$jscomp$22$$, $a6_next_4$$, $a7_next_5$$, $a8_next_6$$, $a9_next_7$$, $a10_next_8$$, $a11_next_9$$, $a12_next_10$$, $a13_next_11$$, $a14_next_12$$);
  }
  $a15_next_13$$ = $cljs$core$_first$$($a16$jscomp$2_next_14$$);
  var $a17_next_15$$ = $cljs$core$next$$($a16$jscomp$2_next_14$$);
  if (null == $a17_next_15$$) {
    return $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$16$ ? $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$16$($a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$, $a6_next_4$$, $a7_next_5$$, $a8_next_6$$, $a9_next_7$$, $a10_next_8$$, $a11_next_9$$, $a12_next_10$$, $a13_next_11$$, $a14_next_12$$, $a15_next_13$$) : $f$jscomp$180$$.call($f$jscomp$180$$, $a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, 
    $a3$$, $a4$$, $a5_args$jscomp$22$$, $a6_next_4$$, $a7_next_5$$, $a8_next_6$$, $a9_next_7$$, $a10_next_8$$, $a11_next_9$$, $a12_next_10$$, $a13_next_11$$, $a14_next_12$$, $a15_next_13$$);
  }
  $a16$jscomp$2_next_14$$ = $cljs$core$_first$$($a17_next_15$$);
  var $a18_next_16$$ = $cljs$core$next$$($a17_next_15$$);
  if (null == $a18_next_16$$) {
    return $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$17$ ? $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$17$($a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$, $a6_next_4$$, $a7_next_5$$, $a8_next_6$$, $a9_next_7$$, $a10_next_8$$, $a11_next_9$$, $a12_next_10$$, $a13_next_11$$, $a14_next_12$$, $a15_next_13$$, $a16$jscomp$2_next_14$$) : $f$jscomp$180$$.call($f$jscomp$180$$, $a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, 
    $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$, $a6_next_4$$, $a7_next_5$$, $a8_next_6$$, $a9_next_7$$, $a10_next_8$$, $a11_next_9$$, $a12_next_10$$, $a13_next_11$$, $a14_next_12$$, $a15_next_13$$, $a16$jscomp$2_next_14$$);
  }
  $a17_next_15$$ = $cljs$core$_first$$($a18_next_16$$);
  var $a19_next_17$$ = $cljs$core$next$$($a18_next_16$$);
  if (null == $a19_next_17$$) {
    return $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$18$ ? $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$18$($a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$, $a6_next_4$$, $a7_next_5$$, $a8_next_6$$, $a9_next_7$$, $a10_next_8$$, $a11_next_9$$, $a12_next_10$$, $a13_next_11$$, $a14_next_12$$, $a15_next_13$$, $a16$jscomp$2_next_14$$, $a17_next_15$$) : $f$jscomp$180$$.call($f$jscomp$180$$, $a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, 
    $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$, $a6_next_4$$, $a7_next_5$$, $a8_next_6$$, $a9_next_7$$, $a10_next_8$$, $a11_next_9$$, $a12_next_10$$, $a13_next_11$$, $a14_next_12$$, $a15_next_13$$, $a16$jscomp$2_next_14$$, $a17_next_15$$);
  }
  $a18_next_16$$ = $cljs$core$_first$$($a19_next_17$$);
  var $next_18_next_19$$ = $cljs$core$next$$($a19_next_17$$);
  if (null == $next_18_next_19$$) {
    return $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$19$ ? $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$19$($a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$, $a6_next_4$$, $a7_next_5$$, $a8_next_6$$, $a9_next_7$$, $a10_next_8$$, $a11_next_9$$, $a12_next_10$$, $a13_next_11$$, $a14_next_12$$, $a15_next_13$$, $a16$jscomp$2_next_14$$, $a17_next_15$$, $a18_next_16$$) : $f$jscomp$180$$.call($f$jscomp$180$$, $a0$jscomp$5_arr__4743__auto__$$, 
    $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$, $a6_next_4$$, $a7_next_5$$, $a8_next_6$$, $a9_next_7$$, $a10_next_8$$, $a11_next_9$$, $a12_next_10$$, $a13_next_11$$, $a14_next_12$$, $a15_next_13$$, $a16$jscomp$2_next_14$$, $a17_next_15$$, $a18_next_16$$);
  }
  $a19_next_17$$ = $cljs$core$_first$$($next_18_next_19$$);
  $next_18_next_19$$ = $cljs$core$next$$($next_18_next_19$$);
  if (null == $next_18_next_19$$) {
    return $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$20$ ? $f$jscomp$180$$.$cljs$core$IFn$_invoke$arity$20$($a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$, $a6_next_4$$, $a7_next_5$$, $a8_next_6$$, $a9_next_7$$, $a10_next_8$$, $a11_next_9$$, $a12_next_10$$, $a13_next_11$$, $a14_next_12$$, $a15_next_13$$, $a16$jscomp$2_next_14$$, $a17_next_15$$, $a18_next_16$$, $a19_next_17$$) : $f$jscomp$180$$.call($f$jscomp$180$$, $a0$jscomp$5_arr__4743__auto__$$, 
    $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$, $a6_next_4$$, $a7_next_5$$, $a8_next_6$$, $a9_next_7$$, $a10_next_8$$, $a11_next_9$$, $a12_next_10$$, $a13_next_11$$, $a14_next_12$$, $a15_next_13$$, $a16$jscomp$2_next_14$$, $a17_next_15$$, $a18_next_16$$, $a19_next_17$$);
  }
  $a0$jscomp$5_arr__4743__auto__$$ = [$a0$jscomp$5_arr__4743__auto__$$, $a1$jscomp$6_s__4744__auto___33962$$, $a2$jscomp$1$$, $a3$$, $a4$$, $a5_args$jscomp$22$$, $a6_next_4$$, $a7_next_5$$, $a8_next_6$$, $a9_next_7$$, $a10_next_8$$, $a11_next_9$$, $a12_next_10$$, $a13_next_11$$, $a14_next_12$$, $a15_next_13$$, $a16$jscomp$2_next_14$$, $a17_next_15$$, $a18_next_16$$, $a19_next_17$$];
  for ($a1$jscomp$6_s__4744__auto___33962$$ = $next_18_next_19$$;;) {
    if ($a1$jscomp$6_s__4744__auto___33962$$) {
      $a0$jscomp$5_arr__4743__auto__$$.push($cljs$core$_first$$($a1$jscomp$6_s__4744__auto___33962$$)), $a1$jscomp$6_s__4744__auto___33962$$ = $cljs$core$next$$($a1$jscomp$6_s__4744__auto___33962$$);
    } else {
      break;
    }
  }
  return $f$jscomp$180$$.apply($f$jscomp$180$$, $a0$jscomp$5_arr__4743__auto__$$);
}
function $cljs$core$apply$$($var_args$jscomp$173$$) {
  switch(arguments.length) {
    case 2:
      return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$03$$(arguments[0], arguments[1], arguments[2]);
    case 4:
      var $JSCompiler_inline_result$jscomp$68_args_arr__4839__auto__$jscomp$43_f$jscomp$inline_519$$ = arguments[0];
      var $arglist$jscomp$inline_523_i__4819__auto___33967_x$jscomp$inline_520$$ = arguments[1], $fixed_arity$jscomp$inline_524_y$jscomp$inline_521$$ = arguments[2], $args$jscomp$inline_522_bc$jscomp$inline_525_len__4818__auto___33966$$ = arguments[3];
      $JSCompiler_inline_result$jscomp$68_args_arr__4839__auto__$jscomp$43_f$jscomp$inline_519$$.$cljs$lang$applyTo$ ? ($arglist$jscomp$inline_523_i__4819__auto___33967_x$jscomp$inline_520$$ = $cljs$core$cons$$($arglist$jscomp$inline_523_i__4819__auto___33967_x$jscomp$inline_520$$, $cljs$core$cons$$($fixed_arity$jscomp$inline_524_y$jscomp$inline_521$$, $args$jscomp$inline_522_bc$jscomp$inline_525_len__4818__auto___33966$$)), $fixed_arity$jscomp$inline_524_y$jscomp$inline_521$$ = $JSCompiler_inline_result$jscomp$68_args_arr__4839__auto__$jscomp$43_f$jscomp$inline_519$$.$cljs$lang$maxFixedArity$, 
      $args$jscomp$inline_522_bc$jscomp$inline_525_len__4818__auto___33966$$ = 2 + $cljs$core$bounded_count$$($fixed_arity$jscomp$inline_524_y$jscomp$inline_521$$ - 1, $args$jscomp$inline_522_bc$jscomp$inline_525_len__4818__auto___33966$$), $JSCompiler_inline_result$jscomp$68_args_arr__4839__auto__$jscomp$43_f$jscomp$inline_519$$ = $args$jscomp$inline_522_bc$jscomp$inline_525_len__4818__auto___33966$$ <= $fixed_arity$jscomp$inline_524_y$jscomp$inline_521$$ ? $cljs$core$apply_to$$($JSCompiler_inline_result$jscomp$68_args_arr__4839__auto__$jscomp$43_f$jscomp$inline_519$$, 
      $args$jscomp$inline_522_bc$jscomp$inline_525_len__4818__auto___33966$$, $arglist$jscomp$inline_523_i__4819__auto___33967_x$jscomp$inline_520$$) : $JSCompiler_inline_result$jscomp$68_args_arr__4839__auto__$jscomp$43_f$jscomp$inline_519$$.$cljs$lang$applyTo$($arglist$jscomp$inline_523_i__4819__auto___33967_x$jscomp$inline_520$$)) : $JSCompiler_inline_result$jscomp$68_args_arr__4839__auto__$jscomp$43_f$jscomp$inline_519$$ = $cljs$core$apply_to_simple$cljs$0core$0IFn$0_invoke$0arity$04$$($JSCompiler_inline_result$jscomp$68_args_arr__4839__auto__$jscomp$43_f$jscomp$inline_519$$, 
      $arglist$jscomp$inline_523_i__4819__auto___33967_x$jscomp$inline_520$$, $fixed_arity$jscomp$inline_524_y$jscomp$inline_521$$, $cljs$core$seq$$($args$jscomp$inline_522_bc$jscomp$inline_525_len__4818__auto___33966$$));
      return $JSCompiler_inline_result$jscomp$68_args_arr__4839__auto__$jscomp$43_f$jscomp$inline_519$$;
    case 5:
      return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$05$$(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      $JSCompiler_inline_result$jscomp$68_args_arr__4839__auto__$jscomp$43_f$jscomp$inline_519$$ = [];
      $args$jscomp$inline_522_bc$jscomp$inline_525_len__4818__auto___33966$$ = arguments.length;
      for ($arglist$jscomp$inline_523_i__4819__auto___33967_x$jscomp$inline_520$$ = 0;;) {
        if ($arglist$jscomp$inline_523_i__4819__auto___33967_x$jscomp$inline_520$$ < $args$jscomp$inline_522_bc$jscomp$inline_525_len__4818__auto___33966$$) {
          $JSCompiler_inline_result$jscomp$68_args_arr__4839__auto__$jscomp$43_f$jscomp$inline_519$$.push(arguments[$arglist$jscomp$inline_523_i__4819__auto___33967_x$jscomp$inline_520$$]), $arglist$jscomp$inline_523_i__4819__auto___33967_x$jscomp$inline_520$$ += 1;
        } else {
          break;
        }
      }
      return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$0variadic$$(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], new $cljs$core$IndexedSeq$$($JSCompiler_inline_result$jscomp$68_args_arr__4839__auto__$jscomp$43_f$jscomp$inline_519$$.slice(5), 0, null));
  }
}
function $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$181$$, $args$jscomp$23_args$jscomp$inline_528$$) {
  if ($f$jscomp$181$$.$cljs$lang$applyTo$) {
    var $fixed_arity$$ = $f$jscomp$181$$.$cljs$lang$maxFixedArity$, $bc$$ = $cljs$core$bounded_count$$($fixed_arity$$ + 1, $args$jscomp$23_args$jscomp$inline_528$$);
    return $bc$$ <= $fixed_arity$$ ? $cljs$core$apply_to$$($f$jscomp$181$$, $bc$$, $args$jscomp$23_args$jscomp$inline_528$$) : $f$jscomp$181$$.$cljs$lang$applyTo$($args$jscomp$23_args$jscomp$inline_528$$);
  }
  $args$jscomp$23_args$jscomp$inline_528$$ = $cljs$core$seq$$($args$jscomp$23_args$jscomp$inline_528$$);
  return null == $args$jscomp$23_args$jscomp$inline_528$$ ? $f$jscomp$181$$.$cljs$core$IFn$_invoke$arity$0$ ? $f$jscomp$181$$.$cljs$core$IFn$_invoke$arity$0$() : $f$jscomp$181$$.call($f$jscomp$181$$) : $cljs$core$apply_to_simple$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$181$$, $cljs$core$_first$$($args$jscomp$23_args$jscomp$inline_528$$), $cljs$core$next_STAR_$$($args$jscomp$23_args$jscomp$inline_528$$));
}
function $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$182$$, $arglist$jscomp$1_x$jscomp$342$$, $args$jscomp$24_bc$jscomp$1$$) {
  if ($f$jscomp$182$$.$cljs$lang$applyTo$) {
    $arglist$jscomp$1_x$jscomp$342$$ = $cljs$core$cons$$($arglist$jscomp$1_x$jscomp$342$$, $args$jscomp$24_bc$jscomp$1$$);
    var $fixed_arity$jscomp$1$$ = $f$jscomp$182$$.$cljs$lang$maxFixedArity$;
    $args$jscomp$24_bc$jscomp$1$$ = $cljs$core$bounded_count$$($fixed_arity$jscomp$1$$, $args$jscomp$24_bc$jscomp$1$$) + 1;
    return $args$jscomp$24_bc$jscomp$1$$ <= $fixed_arity$jscomp$1$$ ? $cljs$core$apply_to$$($f$jscomp$182$$, $args$jscomp$24_bc$jscomp$1$$, $arglist$jscomp$1_x$jscomp$342$$) : $f$jscomp$182$$.$cljs$lang$applyTo$($arglist$jscomp$1_x$jscomp$342$$);
  }
  return $cljs$core$apply_to_simple$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$182$$, $arglist$jscomp$1_x$jscomp$342$$, $cljs$core$seq$$($args$jscomp$24_bc$jscomp$1$$));
}
function $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$05$$($f$jscomp$184$$, $arglist$jscomp$3_x$jscomp$344$$, $fixed_arity$jscomp$3_y$jscomp$135$$, $z$jscomp$17$$, $args$jscomp$26_bc$jscomp$3$$) {
  return $f$jscomp$184$$.$cljs$lang$applyTo$ ? ($arglist$jscomp$3_x$jscomp$344$$ = $cljs$core$cons$$($arglist$jscomp$3_x$jscomp$344$$, $cljs$core$cons$$($fixed_arity$jscomp$3_y$jscomp$135$$, $cljs$core$cons$$($z$jscomp$17$$, $args$jscomp$26_bc$jscomp$3$$))), $fixed_arity$jscomp$3_y$jscomp$135$$ = $f$jscomp$184$$.$cljs$lang$maxFixedArity$, $args$jscomp$26_bc$jscomp$3$$ = 3 + $cljs$core$bounded_count$$($fixed_arity$jscomp$3_y$jscomp$135$$ - 2, $args$jscomp$26_bc$jscomp$3$$), $args$jscomp$26_bc$jscomp$3$$ <= 
  $fixed_arity$jscomp$3_y$jscomp$135$$ ? $cljs$core$apply_to$$($f$jscomp$184$$, $args$jscomp$26_bc$jscomp$3$$, $arglist$jscomp$3_x$jscomp$344$$) : $f$jscomp$184$$.$cljs$lang$applyTo$($arglist$jscomp$3_x$jscomp$344$$)) : $cljs$core$apply_to_simple$cljs$0core$0IFn$0_invoke$0arity$05$$($f$jscomp$184$$, $arglist$jscomp$3_x$jscomp$344$$, $fixed_arity$jscomp$3_y$jscomp$135$$, $z$jscomp$17$$, $cljs$core$seq$$($args$jscomp$26_bc$jscomp$3$$));
}
function $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($f$jscomp$185$$, $a$jscomp$125_arglist$jscomp$4$$, $b$jscomp$110_fixed_arity$jscomp$4$$, $c$jscomp$85$$, $d$jscomp$80$$, $args$jscomp$27_bc$jscomp$4_spread_args$$) {
  return $f$jscomp$185$$.$cljs$lang$applyTo$ ? ($args$jscomp$27_bc$jscomp$4_spread_args$$ = $cljs$core$spread$$($args$jscomp$27_bc$jscomp$4_spread_args$$), $a$jscomp$125_arglist$jscomp$4$$ = $cljs$core$cons$$($a$jscomp$125_arglist$jscomp$4$$, $cljs$core$cons$$($b$jscomp$110_fixed_arity$jscomp$4$$, $cljs$core$cons$$($c$jscomp$85$$, $cljs$core$cons$$($d$jscomp$80$$, $args$jscomp$27_bc$jscomp$4_spread_args$$)))), $b$jscomp$110_fixed_arity$jscomp$4$$ = $f$jscomp$185$$.$cljs$lang$maxFixedArity$, $args$jscomp$27_bc$jscomp$4_spread_args$$ = 
  4 + $cljs$core$bounded_count$$($b$jscomp$110_fixed_arity$jscomp$4$$ - 3, $args$jscomp$27_bc$jscomp$4_spread_args$$), $args$jscomp$27_bc$jscomp$4_spread_args$$ <= $b$jscomp$110_fixed_arity$jscomp$4$$ ? $cljs$core$apply_to$$($f$jscomp$185$$, $args$jscomp$27_bc$jscomp$4_spread_args$$, $a$jscomp$125_arglist$jscomp$4$$) : $f$jscomp$185$$.$cljs$lang$applyTo$($a$jscomp$125_arglist$jscomp$4$$)) : $cljs$core$apply_to_simple$cljs$0core$0IFn$0_invoke$0arity$06$$($f$jscomp$185$$, $a$jscomp$125_arglist$jscomp$4$$, 
  $b$jscomp$110_fixed_arity$jscomp$4$$, $c$jscomp$85$$, $d$jscomp$80$$, $cljs$core$spread$$($args$jscomp$27_bc$jscomp$4_spread_args$$));
}
function $cljs$core$__destructure_map$$($x$jscomp$345$$) {
  return null != $x$jscomp$345$$ && ($x$jscomp$345$$.$cljs$lang$protocol_mask$partition0$$ & 64 || $cljs$core$PROTOCOL_SENTINEL$$ === $x$jscomp$345$$.$cljs$core$ISeq$$) ? $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$hash_map$$, $x$jscomp$345$$) : $x$jscomp$345$$;
}
function $cljs$core$nil_iter$$() {
  if ("undefined" === typeof $cljs$$ || "undefined" === typeof $cljs$core$$ || "undefined" === typeof $cljs$core$t_cljs$0core31813$$) {
    $cljs$core$t_cljs$0core31813$$ = function($meta31814$$) {
      this.$meta31814$ = $meta31814$$;
      this.$cljs$lang$protocol_mask$partition0$$ = 393216;
      this.$cljs$lang$protocol_mask$partition1$$ = 0;
    }, $cljs$core$t_cljs$0core31813$$.prototype.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($_31815$$, $meta31814__$1$$) {
      return new $cljs$core$t_cljs$0core31813$$($meta31814__$1$$);
    }, $cljs$core$t_cljs$0core31813$$.prototype.$cljs$core$IMeta$_meta$arity$1$ = function() {
      return this.$meta31814$;
    }, $cljs$core$t_cljs$0core31813$$.prototype.$hasNext$ = function() {
      return !1;
    }, $cljs$core$t_cljs$0core31813$$.prototype.next = function() {
      return Error("No such element");
    }, $cljs$core$t_cljs$0core31813$$.prototype.remove = function() {
      return Error("Unsupported operation");
    }, $cljs$core$t_cljs$0core31813$$.$cljs$lang$type$ = !0, $cljs$core$t_cljs$0core31813$$.$cljs$lang$ctorStr$ = "cljs.core/t_cljs$core31813", $cljs$core$t_cljs$0core31813$$.$cljs$lang$ctorPrWriter$ = function($writer__4451__auto__$jscomp$18$$) {
      return $cljs$core$_write$$($writer__4451__auto__$jscomp$18$$, "cljs.core/t_cljs$core31813");
    };
  }
  return new $cljs$core$t_cljs$0core31813$$($cljs$core$PersistentArrayMap$EMPTY$$);
}
var $cljs$core$INIT$$ = {}, $cljs$core$START$$ = {};
function $cljs$core$SeqIter$$($_next$$) {
  this.$_seq$ = $cljs$core$INIT$$;
  this.$_next$ = $_next$$;
}
$cljs$core$SeqIter$$.prototype.$hasNext$ = function() {
  this.$_seq$ === $cljs$core$INIT$$ ? (this.$_seq$ = $cljs$core$START$$, this.$_next$ = $cljs$core$seq$$(this.$_next$)) : this.$_seq$ === this.$_next$ && (this.$_next$ = $cljs$core$next$$(this.$_seq$));
  return null != this.$_next$;
};
$cljs$core$SeqIter$$.prototype.next = function() {
  if (this.$hasNext$()) {
    return this.$_seq$ = this.$_next$, $cljs$core$first$$(this.$_next$);
  }
  throw Error("No such element");
};
$cljs$core$SeqIter$$.prototype.remove = function() {
  return Error("Unsupported operation");
};
function $cljs$core$every_QMARK_$$($G__34053_pred$$, $G__34054_coll$jscomp$271$$) {
  for (;;) {
    if (null == $cljs$core$seq$$($G__34054_coll$jscomp$271$$)) {
      return !0;
    }
    var $G__31826$jscomp$inline_542_JSCompiler_inline_result$jscomp$72$$ = $cljs$core$first$$($G__34054_coll$jscomp$271$$);
    $G__31826$jscomp$inline_542_JSCompiler_inline_result$jscomp$72$$ = $G__34053_pred$$.$cljs$core$IFn$_invoke$arity$1$ ? $G__34053_pred$$.$cljs$core$IFn$_invoke$arity$1$($G__31826$jscomp$inline_542_JSCompiler_inline_result$jscomp$72$$) : $G__34053_pred$$.call(null, $G__31826$jscomp$inline_542_JSCompiler_inline_result$jscomp$72$$);
    if ($cljs$core$truth_$$($G__31826$jscomp$inline_542_JSCompiler_inline_result$jscomp$72$$)) {
      $G__34054_coll$jscomp$271$$ = $cljs$core$next$$($G__34054_coll$jscomp$271$$);
    } else {
      return !1;
    }
  }
}
function $cljs$core$some$$($G__34056_coll$jscomp$273_s$jscomp$69_temp__5753__auto__$$) {
  for (var $G__34055_pred$jscomp$2$$ = $cljs$core$identity$$;;) {
    if ($G__34056_coll$jscomp$273_s$jscomp$69_temp__5753__auto__$$ = $cljs$core$seq$$($G__34056_coll$jscomp$273_s$jscomp$69_temp__5753__auto__$$)) {
      var $G__31827$jscomp$inline_544_or__4212__auto__$jscomp$9$$ = $cljs$core$first$$($G__34056_coll$jscomp$273_s$jscomp$69_temp__5753__auto__$$);
      $G__31827$jscomp$inline_544_or__4212__auto__$jscomp$9$$ = $G__34055_pred$jscomp$2$$.$cljs$core$IFn$_invoke$arity$1$ ? $G__34055_pred$jscomp$2$$.$cljs$core$IFn$_invoke$arity$1$($G__31827$jscomp$inline_544_or__4212__auto__$jscomp$9$$) : $G__34055_pred$jscomp$2$$.call(null, $G__31827$jscomp$inline_544_or__4212__auto__$jscomp$9$$);
      if ($cljs$core$truth_$$($G__31827$jscomp$inline_544_or__4212__auto__$jscomp$9$$)) {
        return $G__31827$jscomp$inline_544_or__4212__auto__$jscomp$9$$;
      }
      $G__34056_coll$jscomp$273_s$jscomp$69_temp__5753__auto__$$ = $cljs$core$next$$($G__34056_coll$jscomp$273_s$jscomp$69_temp__5753__auto__$$);
    } else {
      return null;
    }
  }
}
function $cljs$core$keep$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$207$$, $coll$jscomp$276$$) {
  return new $cljs$core$LazySeq$$(null, function() {
    var $temp__5753__auto__$jscomp$2$$ = $cljs$core$seq$$($coll$jscomp$276$$);
    if ($temp__5753__auto__$jscomp$2$$) {
      if ($cljs$core$chunked_seq_QMARK_$$($temp__5753__auto__$jscomp$2$$)) {
        for (var $c$jscomp$105$$ = $cljs$core$_chunked_first$$($temp__5753__auto__$jscomp$2$$), $size$jscomp$31_x$jscomp$396$$ = $cljs$core$count$$($c$jscomp$105$$), $b$jscomp$134$$ = new $cljs$core$ChunkBuffer$$(Array($size$jscomp$31_x$jscomp$396$$)), $i_34158$$ = 0;;) {
          if ($i_34158$$ < $size$jscomp$31_x$jscomp$396$$) {
            var $x_34159$$ = function() {
              var $G__31891$$ = $cljs$core$_nth$$($c$jscomp$105$$, $i_34158$$);
              return $f$jscomp$207$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$207$$.$cljs$core$IFn$_invoke$arity$1$($G__31891$$) : $f$jscomp$207$$.call(null, $G__31891$$);
            }();
            null != $x_34159$$ && $b$jscomp$134$$.add($x_34159$$);
            $i_34158$$ += 1;
          } else {
            break;
          }
        }
        return $cljs$core$chunk_cons$$($b$jscomp$134$$.$chunk$(), $cljs$core$keep$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$207$$, $cljs$core$_chunked_rest$$($temp__5753__auto__$jscomp$2$$)));
      }
      $size$jscomp$31_x$jscomp$396$$ = function() {
        var $G__31892$$ = $cljs$core$first$$($temp__5753__auto__$jscomp$2$$);
        return $f$jscomp$207$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$207$$.$cljs$core$IFn$_invoke$arity$1$($G__31892$$) : $f$jscomp$207$$.call(null, $G__31892$$);
      }();
      return null == $size$jscomp$31_x$jscomp$396$$ ? $cljs$core$keep$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$207$$, $cljs$core$rest$$($temp__5753__auto__$jscomp$2$$)) : $cljs$core$cons$$($size$jscomp$31_x$jscomp$396$$, $cljs$core$keep$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$207$$, $cljs$core$rest$$($temp__5753__auto__$jscomp$2$$)));
    }
    return null;
  }, null);
}
function $cljs$core$Atom$$($state$$) {
  this.state = $state$$;
  this.$watches$ = this.$validator$ = this.$meta$ = null;
  this.$cljs$lang$protocol_mask$partition1$$ = 16386;
  this.$cljs$lang$protocol_mask$partition0$$ = 6455296;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$Atom$$.prototype;
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($o$jscomp$109$$, $other$jscomp$68$$) {
  return this === $other$jscomp$68$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IDeref$_deref$arity$1$ = function() {
  return this.state;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWatchable$_notify_watches$arity$3$ = function($oldval$jscomp$2$$, $newval$jscomp$2$$) {
  for (var $G__34166_seq__31893_seq__31893__$1_temp__5753__auto__$jscomp$3$$ = $cljs$core$seq$$(this.$watches$), $c__4638__auto___chunk__31894_vec__31906$$ = null, $G__34168_count__31895$$ = 0, $i__31896$$ = 0;;) {
    if ($i__31896$$ < $G__34168_count__31895$$) {
      var $f$jscomp$208_vec__31903$$ = $c__4638__auto___chunk__31894_vec__31906$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__31896$$), $G__34167_key$jscomp$124$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$208_vec__31903$$, 0, null);
      $f$jscomp$208_vec__31903$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$208_vec__31903$$, 1, null);
      $f$jscomp$208_vec__31903$$.$cljs$core$IFn$_invoke$arity$4$ ? $f$jscomp$208_vec__31903$$.$cljs$core$IFn$_invoke$arity$4$($G__34167_key$jscomp$124$$, this, $oldval$jscomp$2$$, $newval$jscomp$2$$) : $f$jscomp$208_vec__31903$$.call(null, $G__34167_key$jscomp$124$$, this, $oldval$jscomp$2$$, $newval$jscomp$2$$);
      $i__31896$$ += 1;
    } else {
      if ($G__34166_seq__31893_seq__31893__$1_temp__5753__auto__$jscomp$3$$ = $cljs$core$seq$$($G__34166_seq__31893_seq__31893__$1_temp__5753__auto__$jscomp$3$$)) {
        $cljs$core$chunked_seq_QMARK_$$($G__34166_seq__31893_seq__31893__$1_temp__5753__auto__$jscomp$3$$) ? ($c__4638__auto___chunk__31894_vec__31906$$ = $cljs$core$_chunked_first$$($G__34166_seq__31893_seq__31893__$1_temp__5753__auto__$jscomp$3$$), $G__34166_seq__31893_seq__31893__$1_temp__5753__auto__$jscomp$3$$ = $cljs$core$_chunked_rest$$($G__34166_seq__31893_seq__31893__$1_temp__5753__auto__$jscomp$3$$), $G__34167_key$jscomp$124$$ = $c__4638__auto___chunk__31894_vec__31906$$, $G__34168_count__31895$$ = 
        $cljs$core$count$$($c__4638__auto___chunk__31894_vec__31906$$), $c__4638__auto___chunk__31894_vec__31906$$ = $G__34167_key$jscomp$124$$) : ($c__4638__auto___chunk__31894_vec__31906$$ = $cljs$core$first$$($G__34166_seq__31893_seq__31893__$1_temp__5753__auto__$jscomp$3$$), $G__34167_key$jscomp$124$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__4638__auto___chunk__31894_vec__31906$$, 0, null), $f$jscomp$208_vec__31903$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__4638__auto___chunk__31894_vec__31906$$, 
        1, null), $f$jscomp$208_vec__31903$$.$cljs$core$IFn$_invoke$arity$4$ ? $f$jscomp$208_vec__31903$$.$cljs$core$IFn$_invoke$arity$4$($G__34167_key$jscomp$124$$, this, $oldval$jscomp$2$$, $newval$jscomp$2$$) : $f$jscomp$208_vec__31903$$.call(null, $G__34167_key$jscomp$124$$, this, $oldval$jscomp$2$$, $newval$jscomp$2$$), $G__34166_seq__31893_seq__31893__$1_temp__5753__auto__$jscomp$3$$ = $cljs$core$next$$($G__34166_seq__31893_seq__31893__$1_temp__5753__auto__$jscomp$3$$), $c__4638__auto___chunk__31894_vec__31906$$ = 
        null, $G__34168_count__31895$$ = 0), $i__31896$$ = 0;
      } else {
        break;
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWatchable$_add_watch$arity$3$ = function($this$$jscomp$84$$, $key$jscomp$125$$, $f$jscomp$209$$) {
  this.$watches$ = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$(this.$watches$, $key$jscomp$125$$, $f$jscomp$209$$);
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWatchable$_remove_watch$arity$2$ = function($this$$jscomp$85$$, $key$jscomp$126$$) {
  return this.$watches$ = $cljs$core$dissoc$$.$cljs$core$IFn$_invoke$arity$2$(this.$watches$, $key$jscomp$126$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  return $goog$getUid$$(this);
};
function $cljs$core$reset_BANG_$$($a$jscomp$150$$, $new_value$jscomp$4$$) {
  if ($a$jscomp$150$$ instanceof $cljs$core$Atom$$) {
    var $old_value_validate$$ = $a$jscomp$150$$.$validator$;
    if (null != $old_value_validate$$ && !$cljs$core$truth_$$($old_value_validate$$.$cljs$core$IFn$_invoke$arity$1$ ? $old_value_validate$$.$cljs$core$IFn$_invoke$arity$1$($new_value$jscomp$4$$) : $old_value_validate$$.call(null, $new_value$jscomp$4$$))) {
      throw Error("Validator rejected reference state");
    }
    $old_value_validate$$ = $a$jscomp$150$$.state;
    $a$jscomp$150$$.state = $new_value$jscomp$4$$;
    null != $a$jscomp$150$$.$watches$ && $a$jscomp$150$$.$cljs$core$IWatchable$_notify_watches$arity$3$($old_value_validate$$, $new_value$jscomp$4$$);
    return $new_value$jscomp$4$$;
  }
  return $cljs$core$_reset_BANG_$$($a$jscomp$150$$, $new_value$jscomp$4$$);
}
var $cljs$core$swap_BANG_$$ = function $cljs$core$swap_BANG_$$($var_args$jscomp$204$$) {
  switch(arguments.length) {
    case 2:
      return $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$(arguments[0], arguments[1], arguments[2]);
    case 4:
      return $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      for (var $args_arr__4839__auto__$jscomp$50$$ = [], $len__4818__auto___34184$$ = arguments.length, $i__4819__auto___34185$$ = 0;;) {
        if ($i__4819__auto___34185$$ < $len__4818__auto___34184$$) {
          $args_arr__4839__auto__$jscomp$50$$.push(arguments[$i__4819__auto___34185$$]), $i__4819__auto___34185$$ += 1;
        } else {
          break;
        }
      }
      return $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], arguments[1], arguments[2], arguments[3], new $cljs$core$IndexedSeq$$($args_arr__4839__auto__$jscomp$50$$.slice(4), 0, null));
  }
};
$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$ = function($JSCompiler_temp$jscomp$73_a$jscomp$152$$, $JSCompiler_inline_result$jscomp$74_f$jscomp$210$$) {
  if ($JSCompiler_temp$jscomp$73_a$jscomp$152$$ instanceof $cljs$core$Atom$$) {
    var $G__31922$jscomp$inline_546$$ = $JSCompiler_temp$jscomp$73_a$jscomp$152$$.state;
    $JSCompiler_inline_result$jscomp$74_f$jscomp$210$$ = $JSCompiler_inline_result$jscomp$74_f$jscomp$210$$.$cljs$core$IFn$_invoke$arity$1$ ? $JSCompiler_inline_result$jscomp$74_f$jscomp$210$$.$cljs$core$IFn$_invoke$arity$1$($G__31922$jscomp$inline_546$$) : $JSCompiler_inline_result$jscomp$74_f$jscomp$210$$.call(null, $G__31922$jscomp$inline_546$$);
    $JSCompiler_temp$jscomp$73_a$jscomp$152$$ = $cljs$core$reset_BANG_$$($JSCompiler_temp$jscomp$73_a$jscomp$152$$, $JSCompiler_inline_result$jscomp$74_f$jscomp$210$$);
  } else {
    $JSCompiler_temp$jscomp$73_a$jscomp$152$$ = $cljs$core$_swap_BANG_$$($JSCompiler_temp$jscomp$73_a$jscomp$152$$, $JSCompiler_inline_result$jscomp$74_f$jscomp$210$$);
  }
  return $JSCompiler_temp$jscomp$73_a$jscomp$152$$;
};
$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$3$ = function($JSCompiler_temp$jscomp$75_a$jscomp$153$$, $JSCompiler_inline_result$jscomp$76_f$jscomp$211$$, $x$jscomp$399$$) {
  if ($JSCompiler_temp$jscomp$75_a$jscomp$153$$ instanceof $cljs$core$Atom$$) {
    var $G__31923$jscomp$inline_548$$ = $JSCompiler_temp$jscomp$75_a$jscomp$153$$.state;
    $JSCompiler_inline_result$jscomp$76_f$jscomp$211$$ = $JSCompiler_inline_result$jscomp$76_f$jscomp$211$$.$cljs$core$IFn$_invoke$arity$2$ ? $JSCompiler_inline_result$jscomp$76_f$jscomp$211$$.$cljs$core$IFn$_invoke$arity$2$($G__31923$jscomp$inline_548$$, $x$jscomp$399$$) : $JSCompiler_inline_result$jscomp$76_f$jscomp$211$$.call(null, $G__31923$jscomp$inline_548$$, $x$jscomp$399$$);
    $JSCompiler_temp$jscomp$75_a$jscomp$153$$ = $cljs$core$reset_BANG_$$($JSCompiler_temp$jscomp$75_a$jscomp$153$$, $JSCompiler_inline_result$jscomp$76_f$jscomp$211$$);
  } else {
    $JSCompiler_temp$jscomp$75_a$jscomp$153$$ = $cljs$core$_swap_BANG_$$($JSCompiler_temp$jscomp$75_a$jscomp$153$$, $JSCompiler_inline_result$jscomp$76_f$jscomp$211$$, $x$jscomp$399$$);
  }
  return $JSCompiler_temp$jscomp$75_a$jscomp$153$$;
};
$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$ = function($JSCompiler_temp$jscomp$77_a$jscomp$154$$, $JSCompiler_inline_result$jscomp$78_f$jscomp$212$$, $x$jscomp$400$$, $y$jscomp$175$$) {
  if ($JSCompiler_temp$jscomp$77_a$jscomp$154$$ instanceof $cljs$core$Atom$$) {
    var $G__31925$jscomp$inline_550$$ = $JSCompiler_temp$jscomp$77_a$jscomp$154$$.state;
    $JSCompiler_inline_result$jscomp$78_f$jscomp$212$$ = $JSCompiler_inline_result$jscomp$78_f$jscomp$212$$.$cljs$core$IFn$_invoke$arity$3$ ? $JSCompiler_inline_result$jscomp$78_f$jscomp$212$$.$cljs$core$IFn$_invoke$arity$3$($G__31925$jscomp$inline_550$$, $x$jscomp$400$$, $y$jscomp$175$$) : $JSCompiler_inline_result$jscomp$78_f$jscomp$212$$.call(null, $G__31925$jscomp$inline_550$$, $x$jscomp$400$$, $y$jscomp$175$$);
    $JSCompiler_temp$jscomp$77_a$jscomp$154$$ = $cljs$core$reset_BANG_$$($JSCompiler_temp$jscomp$77_a$jscomp$154$$, $JSCompiler_inline_result$jscomp$78_f$jscomp$212$$);
  } else {
    $JSCompiler_temp$jscomp$77_a$jscomp$154$$ = $cljs$core$_swap_BANG_$$($JSCompiler_temp$jscomp$77_a$jscomp$154$$, $JSCompiler_inline_result$jscomp$78_f$jscomp$212$$, $x$jscomp$400$$, $y$jscomp$175$$);
  }
  return $JSCompiler_temp$jscomp$77_a$jscomp$154$$;
};
$cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($a$jscomp$155$$, $f$jscomp$213$$, $x$jscomp$401$$, $y$jscomp$176$$, $more$jscomp$30$$) {
  return $a$jscomp$155$$ instanceof $cljs$core$Atom$$ ? $cljs$core$reset_BANG_$$($a$jscomp$155$$, $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$05$$($f$jscomp$213$$, $a$jscomp$155$$.state, $x$jscomp$401$$, $y$jscomp$176$$, $more$jscomp$30$$)) : $cljs$core$_swap_BANG_$$($a$jscomp$155$$, $f$jscomp$213$$, $x$jscomp$401$$, $y$jscomp$176$$, $more$jscomp$30$$);
};
$cljs$core$swap_BANG_$$.$cljs$lang$applyTo$ = function($G__31918_seq31916$$) {
  var $G__31917$$ = $cljs$core$first$$($G__31918_seq31916$$), $G__31919_seq31916__$1$$ = $cljs$core$next$$($G__31918_seq31916$$);
  $G__31918_seq31916$$ = $cljs$core$first$$($G__31919_seq31916__$1$$);
  var $G__31920_seq31916__$2$$ = $cljs$core$next$$($G__31919_seq31916__$1$$);
  $G__31919_seq31916__$1$$ = $cljs$core$first$$($G__31920_seq31916__$2$$);
  var $seq31916__$3_seq31916__$4$$ = $cljs$core$next$$($G__31920_seq31916__$2$$);
  $G__31920_seq31916__$2$$ = $cljs$core$first$$($seq31916__$3_seq31916__$4$$);
  $seq31916__$3_seq31916__$4$$ = $cljs$core$next$$($seq31916__$3_seq31916__$4$$);
  return this.$cljs$core$IFn$_invoke$arity$variadic$($G__31917$$, $G__31918_seq31916$$, $G__31919_seq31916__$1$$, $G__31920_seq31916__$2$$, $seq31916__$3_seq31916__$4$$);
};
$cljs$core$swap_BANG_$$.$cljs$lang$maxFixedArity$ = 4;
var $cljs$core$map$$ = function $cljs$core$map$$($var_args$jscomp$225$$) {
  switch(arguments.length) {
    case 1:
      return $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$3$(arguments[0], arguments[1], arguments[2]);
    case 4:
      return $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$4$(arguments[0], arguments[1], arguments[2], arguments[3]);
    default:
      for (var $args_arr__4839__auto__$jscomp$54$$ = [], $len__4818__auto___34254$$ = arguments.length, $i__4819__auto___34255$$ = 0;;) {
        if ($i__4819__auto___34255$$ < $len__4818__auto___34254$$) {
          $args_arr__4839__auto__$jscomp$54$$.push(arguments[$i__4819__auto___34255$$]), $i__4819__auto___34255$$ += 1;
        } else {
          break;
        }
      }
      return $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], arguments[1], arguments[2], arguments[3], new $cljs$core$IndexedSeq$$($args_arr__4839__auto__$jscomp$54$$.slice(4), 0, null));
  }
};
$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$1$ = function($f$jscomp$220$$) {
  return function($rf$jscomp$3$$) {
    return function() {
      function $G__34257__2$$($result$jscomp$33$$, $G__31985_input$jscomp$16$$) {
        $G__31985_input$jscomp$16$$ = $f$jscomp$220$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$220$$.$cljs$core$IFn$_invoke$arity$1$($G__31985_input$jscomp$16$$) : $f$jscomp$220$$.call(null, $G__31985_input$jscomp$16$$);
        return $rf$jscomp$3$$.$cljs$core$IFn$_invoke$arity$2$ ? $rf$jscomp$3$$.$cljs$core$IFn$_invoke$arity$2$($result$jscomp$33$$, $G__31985_input$jscomp$16$$) : $rf$jscomp$3$$.call(null, $result$jscomp$33$$, $G__31985_input$jscomp$16$$);
      }
      function $G__34257__1$$($result$jscomp$32$$) {
        return $rf$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$ ? $rf$jscomp$3$$.$cljs$core$IFn$_invoke$arity$1$($result$jscomp$32$$) : $rf$jscomp$3$$.call(null, $result$jscomp$32$$);
      }
      function $G__34257__0$$() {
        return $rf$jscomp$3$$.$cljs$core$IFn$_invoke$arity$0$ ? $rf$jscomp$3$$.$cljs$core$IFn$_invoke$arity$0$() : $rf$jscomp$3$$.call(null);
      }
      var $G__34257$$ = null, $G__34257__3$$ = function() {
        function $G__34258$$($result$jscomp$35$$, $input$jscomp$18$$, $var_args$jscomp$226$$) {
          var $G__34259__i_inputs$jscomp$2$$ = null;
          if (2 < arguments.length) {
            $G__34259__i_inputs$jscomp$2$$ = 0;
            for (var $G__34259__a$$ = Array(arguments.length - 2); $G__34259__i_inputs$jscomp$2$$ < $G__34259__a$$.length;) {
              $G__34259__a$$[$G__34259__i_inputs$jscomp$2$$] = arguments[$G__34259__i_inputs$jscomp$2$$ + 2], ++$G__34259__i_inputs$jscomp$2$$;
            }
            $G__34259__i_inputs$jscomp$2$$ = new $cljs$core$IndexedSeq$$($G__34259__a$$, 0, null);
          }
          return $G__34258__delegate$$.call(this, $result$jscomp$35$$, $input$jscomp$18$$, $G__34259__i_inputs$jscomp$2$$);
        }
        function $G__34258__delegate$$($result$jscomp$34$$, $G__31987_input$jscomp$17$$, $inputs$jscomp$1$$) {
          $G__31987_input$jscomp$17$$ = $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$220$$, $G__31987_input$jscomp$17$$, $inputs$jscomp$1$$);
          return $rf$jscomp$3$$.$cljs$core$IFn$_invoke$arity$2$ ? $rf$jscomp$3$$.$cljs$core$IFn$_invoke$arity$2$($result$jscomp$34$$, $G__31987_input$jscomp$17$$) : $rf$jscomp$3$$.call(null, $result$jscomp$34$$, $G__31987_input$jscomp$17$$);
        }
        $G__34258$$.$cljs$lang$maxFixedArity$ = 2;
        $G__34258$$.$cljs$lang$applyTo$ = function($arglist__34260_inputs$jscomp$3$$) {
          var $result$jscomp$36$$ = $cljs$core$first$$($arglist__34260_inputs$jscomp$3$$);
          $arglist__34260_inputs$jscomp$3$$ = $cljs$core$next$$($arglist__34260_inputs$jscomp$3$$);
          var $input$jscomp$19$$ = $cljs$core$first$$($arglist__34260_inputs$jscomp$3$$);
          $arglist__34260_inputs$jscomp$3$$ = $cljs$core$rest$$($arglist__34260_inputs$jscomp$3$$);
          return $G__34258__delegate$$($result$jscomp$36$$, $input$jscomp$19$$, $arglist__34260_inputs$jscomp$3$$);
        };
        $G__34258$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__34258__delegate$$;
        return $G__34258$$;
      }();
      $G__34257$$ = function($result$jscomp$37$$, $input$jscomp$20$$, $var_args$jscomp$227$$) {
        switch(arguments.length) {
          case 0:
            return $G__34257__0$$.call(this);
          case 1:
            return $G__34257__1$$.call(this, $result$jscomp$37$$);
          case 2:
            return $G__34257__2$$.call(this, $result$jscomp$37$$, $input$jscomp$20$$);
          default:
            var $G__34261_G__34262__i$$ = null;
            if (2 < arguments.length) {
              $G__34261_G__34262__i$$ = 0;
              for (var $G__34262__a$$ = Array(arguments.length - 2); $G__34261_G__34262__i$$ < $G__34262__a$$.length;) {
                $G__34262__a$$[$G__34261_G__34262__i$$] = arguments[$G__34261_G__34262__i$$ + 2], ++$G__34261_G__34262__i$$;
              }
              $G__34261_G__34262__i$$ = new $cljs$core$IndexedSeq$$($G__34262__a$$, 0, null);
            }
            return $G__34257__3$$.$cljs$core$IFn$_invoke$arity$variadic$($result$jscomp$37$$, $input$jscomp$20$$, $G__34261_G__34262__i$$);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      $G__34257$$.$cljs$lang$maxFixedArity$ = 2;
      $G__34257$$.$cljs$lang$applyTo$ = $G__34257__3$$.$cljs$lang$applyTo$;
      $G__34257$$.$cljs$core$IFn$_invoke$arity$0$ = $G__34257__0$$;
      $G__34257$$.$cljs$core$IFn$_invoke$arity$1$ = $G__34257__1$$;
      $G__34257$$.$cljs$core$IFn$_invoke$arity$2$ = $G__34257__2$$;
      $G__34257$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__34257__3$$.$cljs$core$IFn$_invoke$arity$variadic$;
      return $G__34257$$;
    }();
  };
};
$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$ = function($f$jscomp$221$$, $coll$jscomp$278$$) {
  return new $cljs$core$LazySeq$$(null, function() {
    var $temp__5753__auto__$jscomp$5$$ = $cljs$core$seq$$($coll$jscomp$278$$);
    if ($temp__5753__auto__$jscomp$5$$) {
      if ($cljs$core$chunked_seq_QMARK_$$($temp__5753__auto__$jscomp$5$$)) {
        for (var $c$jscomp$107$$ = $cljs$core$_chunked_first$$($temp__5753__auto__$jscomp$5$$), $size$jscomp$33$$ = $cljs$core$count$$($c$jscomp$107$$), $b$jscomp$136$$ = new $cljs$core$ChunkBuffer$$(Array($size$jscomp$33$$)), $i_34264$$ = 0;;) {
          if ($i_34264$$ < $size$jscomp$33$$) {
            $cljs$core$chunk_append$$($b$jscomp$136$$, function() {
              var $G__31988$$ = $cljs$core$_nth$$($c$jscomp$107$$, $i_34264$$);
              return $f$jscomp$221$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$221$$.$cljs$core$IFn$_invoke$arity$1$($G__31988$$) : $f$jscomp$221$$.call(null, $G__31988$$);
            }()), $i_34264$$ += 1;
          } else {
            break;
          }
        }
        return $cljs$core$chunk_cons$$($b$jscomp$136$$.$chunk$(), $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($f$jscomp$221$$, $cljs$core$_chunked_rest$$($temp__5753__auto__$jscomp$5$$)));
      }
      return $cljs$core$cons$$(function() {
        var $G__31989$$ = $cljs$core$first$$($temp__5753__auto__$jscomp$5$$);
        return $f$jscomp$221$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$221$$.$cljs$core$IFn$_invoke$arity$1$($G__31989$$) : $f$jscomp$221$$.call(null, $G__31989$$);
      }(), $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($f$jscomp$221$$, $cljs$core$rest$$($temp__5753__auto__$jscomp$5$$)));
    }
    return null;
  }, null);
};
$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$3$ = function($f$jscomp$222$$, $c1$jscomp$1$$, $c2$$) {
  return new $cljs$core$LazySeq$$(null, function() {
    var $JSCompiler_temp$jscomp$79_s1$$ = $cljs$core$seq$$($c1$jscomp$1$$), $s2$$ = $cljs$core$seq$$($c2$$);
    if ($JSCompiler_temp$jscomp$79_s1$$ && $s2$$) {
      var $G__31990$jscomp$inline_552_JSCompiler_inline_result$jscomp$80$$ = $cljs$core$first$$($JSCompiler_temp$jscomp$79_s1$$);
      var $G__31991$jscomp$inline_553$$ = $cljs$core$first$$($s2$$);
      $G__31990$jscomp$inline_552_JSCompiler_inline_result$jscomp$80$$ = $f$jscomp$222$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$222$$.$cljs$core$IFn$_invoke$arity$2$($G__31990$jscomp$inline_552_JSCompiler_inline_result$jscomp$80$$, $G__31991$jscomp$inline_553$$) : $f$jscomp$222$$.call(null, $G__31990$jscomp$inline_552_JSCompiler_inline_result$jscomp$80$$, $G__31991$jscomp$inline_553$$);
      $JSCompiler_temp$jscomp$79_s1$$ = $cljs$core$cons$$($G__31990$jscomp$inline_552_JSCompiler_inline_result$jscomp$80$$, $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$3$($f$jscomp$222$$, $cljs$core$rest$$($JSCompiler_temp$jscomp$79_s1$$), $cljs$core$rest$$($s2$$)));
    } else {
      $JSCompiler_temp$jscomp$79_s1$$ = null;
    }
    return $JSCompiler_temp$jscomp$79_s1$$;
  }, null);
};
$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$4$ = function($f$jscomp$223$$, $c1$jscomp$2$$, $c2$jscomp$1$$, $c3$jscomp$1$$) {
  return new $cljs$core$LazySeq$$(null, function() {
    var $JSCompiler_temp$jscomp$81_s1$jscomp$1$$ = $cljs$core$seq$$($c1$jscomp$2$$), $s2$jscomp$1$$ = $cljs$core$seq$$($c2$jscomp$1$$), $s3$$ = $cljs$core$seq$$($c3$jscomp$1$$);
    if ($JSCompiler_temp$jscomp$81_s1$jscomp$1$$ && $s2$jscomp$1$$ && $s3$$) {
      var $G__31992$jscomp$inline_555_JSCompiler_inline_result$jscomp$82$$ = $cljs$core$first$$($JSCompiler_temp$jscomp$81_s1$jscomp$1$$);
      var $G__31993$jscomp$inline_556$$ = $cljs$core$first$$($s2$jscomp$1$$), $G__31994$jscomp$inline_557$$ = $cljs$core$first$$($s3$$);
      $G__31992$jscomp$inline_555_JSCompiler_inline_result$jscomp$82$$ = $f$jscomp$223$$.$cljs$core$IFn$_invoke$arity$3$ ? $f$jscomp$223$$.$cljs$core$IFn$_invoke$arity$3$($G__31992$jscomp$inline_555_JSCompiler_inline_result$jscomp$82$$, $G__31993$jscomp$inline_556$$, $G__31994$jscomp$inline_557$$) : $f$jscomp$223$$.call(null, $G__31992$jscomp$inline_555_JSCompiler_inline_result$jscomp$82$$, $G__31993$jscomp$inline_556$$, $G__31994$jscomp$inline_557$$);
      $JSCompiler_temp$jscomp$81_s1$jscomp$1$$ = $cljs$core$cons$$($G__31992$jscomp$inline_555_JSCompiler_inline_result$jscomp$82$$, $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$4$($f$jscomp$223$$, $cljs$core$rest$$($JSCompiler_temp$jscomp$81_s1$jscomp$1$$), $cljs$core$rest$$($s2$jscomp$1$$), $cljs$core$rest$$($s3$$)));
    } else {
      $JSCompiler_temp$jscomp$81_s1$jscomp$1$$ = null;
    }
    return $JSCompiler_temp$jscomp$81_s1$jscomp$1$$;
  }, null);
};
$cljs$core$map$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($f$jscomp$224$$, $c1$jscomp$3$$, $c2$jscomp$2$$, $c3$jscomp$2$$, $colls$jscomp$1$$) {
  return $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__31976_SHARP_$$) {
    return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$224$$, $p1__31976_SHARP_$$);
  }, function $cljs$core$step$$($cs$$) {
    return new $cljs$core$LazySeq$$(null, function() {
      var $ss$jscomp$3$$ = $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$seq$$, $cs$$);
      return $cljs$core$every_QMARK_$$($cljs$core$identity$$, $ss$jscomp$3$$) ? $cljs$core$cons$$($cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$first$$, $ss$jscomp$3$$), $cljs$core$step$$($cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$rest$$, $ss$jscomp$3$$))) : null;
    }, null);
  }($cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$variadic$($colls$jscomp$1$$, $c3$jscomp$2$$, $cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$c2$jscomp$2$$, $c1$jscomp$3$$]))));
};
$cljs$core$map$$.$cljs$lang$applyTo$ = function($G__31980_seq31978$$) {
  var $G__31979$$ = $cljs$core$first$$($G__31980_seq31978$$), $G__31981_seq31978__$1$$ = $cljs$core$next$$($G__31980_seq31978$$);
  $G__31980_seq31978$$ = $cljs$core$first$$($G__31981_seq31978__$1$$);
  var $G__31982_seq31978__$2$$ = $cljs$core$next$$($G__31981_seq31978__$1$$);
  $G__31981_seq31978__$1$$ = $cljs$core$first$$($G__31982_seq31978__$2$$);
  var $seq31978__$3_seq31978__$4$$ = $cljs$core$next$$($G__31982_seq31978__$2$$);
  $G__31982_seq31978__$2$$ = $cljs$core$first$$($seq31978__$3_seq31978__$4$$);
  $seq31978__$3_seq31978__$4$$ = $cljs$core$next$$($seq31978__$3_seq31978__$4$$);
  return this.$cljs$core$IFn$_invoke$arity$variadic$($G__31979$$, $G__31980_seq31978$$, $G__31981_seq31978__$1$$, $G__31982_seq31978__$2$$, $seq31978__$3_seq31978__$4$$);
};
$cljs$core$map$$.$cljs$lang$maxFixedArity$ = 4;
function $cljs$core$drop$cljs$0core$0IFn$0_invoke$0arity$02$$($coll$jscomp$280$$) {
  return new $cljs$core$LazySeq$$(null, function() {
    a: {
      for (var $G__34275$jscomp$inline_562_n__$1$jscomp$inline_559$$ = 2, $G__34276$jscomp$inline_563_coll__$1$jscomp$inline_560_s$jscomp$inline_561$$ = $coll$jscomp$280$$;;) {
        if ($G__34276$jscomp$inline_563_coll__$1$jscomp$inline_560_s$jscomp$inline_561$$ = $cljs$core$seq$$($G__34276$jscomp$inline_563_coll__$1$jscomp$inline_560_s$jscomp$inline_561$$), 0 < $G__34275$jscomp$inline_562_n__$1$jscomp$inline_559$$ && $G__34276$jscomp$inline_563_coll__$1$jscomp$inline_560_s$jscomp$inline_561$$) {
          --$G__34275$jscomp$inline_562_n__$1$jscomp$inline_559$$, $G__34276$jscomp$inline_563_coll__$1$jscomp$inline_560_s$jscomp$inline_561$$ = $cljs$core$rest$$($G__34276$jscomp$inline_563_coll__$1$jscomp$inline_560_s$jscomp$inline_561$$);
        } else {
          break a;
        }
      }
    }
    return $G__34276$jscomp$inline_563_coll__$1$jscomp$inline_560_s$jscomp$inline_561$$;
  }, null);
}
function $cljs$core$drop_last$cljs$0core$0IFn$0_invoke$0arity$02$$($s$jscomp$77$$) {
  return $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$3$(function($x$jscomp$463$$) {
    return $x$jscomp$463$$;
  }, $s$jscomp$77$$, $cljs$core$drop$cljs$0core$0IFn$0_invoke$0arity$02$$($s$jscomp$77$$));
}
var $cljs$core$into$$ = function $cljs$core$into$$($var_args$jscomp$239$$) {
  switch(arguments.length) {
    case 0:
      return $cljs$core$into$$.$cljs$core$IFn$_invoke$arity$0$();
    case 1:
      return $cljs$core$into$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $cljs$core$into$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    case 3:
      return $cljs$core$into$$.$cljs$core$IFn$_invoke$arity$3$(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length)].join(""));
  }
};
$cljs$core$into$$.$cljs$core$IFn$_invoke$arity$0$ = function() {
  return $cljs$core$PersistentVector$EMPTY$$;
};
$cljs$core$into$$.$cljs$core$IFn$_invoke$arity$1$ = function($to$jscomp$2$$) {
  return $to$jscomp$2$$;
};
$cljs$core$into$$.$cljs$core$IFn$_invoke$arity$2$ = function($to$jscomp$3$$, $from$jscomp$2$$) {
  return null != $to$jscomp$3$$ ? null != $to$jscomp$3$$ && ($to$jscomp$3$$.$cljs$lang$protocol_mask$partition1$$ & 4 || $cljs$core$PROTOCOL_SENTINEL$$ === $to$jscomp$3$$.$cljs$core$IEditableCollection$$) ? $cljs$core$_with_meta$$($cljs$core$_persistent_BANG_$$($cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($cljs$core$_conj_BANG_$$, $cljs$core$_as_transient$$($to$jscomp$3$$), $from$jscomp$2$$)), $cljs$core$meta$$($to$jscomp$3$$)) : $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($cljs$core$_conj$$, 
  $to$jscomp$3$$, $from$jscomp$2$$) : $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($cljs$core$conj$$, $to$jscomp$3$$, $from$jscomp$2$$);
};
$cljs$core$into$$.$cljs$core$IFn$_invoke$arity$3$ = function($to$jscomp$4$$, $xform$jscomp$7$$, $from$jscomp$3$$) {
  return null != $to$jscomp$4$$ && ($to$jscomp$4$$.$cljs$lang$protocol_mask$partition1$$ & 4 || $cljs$core$PROTOCOL_SENTINEL$$ === $to$jscomp$4$$.$cljs$core$IEditableCollection$$) ? $cljs$core$_with_meta$$($cljs$core$_persistent_BANG_$$($cljs$core$transduce$cljs$0core$0IFn$0_invoke$0arity$04$$($xform$jscomp$7$$, $cljs$core$conj_BANG_$$, $cljs$core$_as_transient$$($to$jscomp$4$$), $from$jscomp$3$$)), $cljs$core$meta$$($to$jscomp$4$$)) : $cljs$core$transduce$cljs$0core$0IFn$0_invoke$0arity$04$$($xform$jscomp$7$$, 
  $cljs$core$conj$$, $to$jscomp$4$$, $from$jscomp$3$$);
};
$cljs$core$into$$.$cljs$lang$maxFixedArity$ = 3;
function $cljs$core$VectorNode$$($edit$$, $arr$jscomp$89$$) {
  this.$edit$ = $edit$$;
  this.$arr$ = $arr$jscomp$89$$;
}
function $cljs$core$pv_fresh_node$$($edit$jscomp$2$$) {
  return new $cljs$core$VectorNode$$($edit$jscomp$2$$, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function $cljs$core$pv_clone_node$$($node$jscomp$9$$) {
  return new $cljs$core$VectorNode$$($node$jscomp$9$$.$edit$, $cljs$core$aclone$$($node$jscomp$9$$.$arr$));
}
function $cljs$core$tail_off$$($cnt$jscomp$5_pv$$) {
  $cnt$jscomp$5_pv$$ = $cnt$jscomp$5_pv$$.$cnt$;
  return 32 > $cnt$jscomp$5_pv$$ ? 0 : $cnt$jscomp$5_pv$$ - 1 >>> 5 << 5;
}
function $cljs$core$new_path$$($edit$jscomp$3$$, $level$jscomp$19_ll$$, $G__34387_node$jscomp$10_ret$jscomp$19$$) {
  for (;;) {
    if (0 === $level$jscomp$19_ll$$) {
      return $G__34387_node$jscomp$10_ret$jscomp$19$$;
    }
    var $r$jscomp$24$$ = $cljs$core$pv_fresh_node$$($edit$jscomp$3$$);
    $r$jscomp$24$$.$arr$[0] = $G__34387_node$jscomp$10_ret$jscomp$19$$;
    $G__34387_node$jscomp$10_ret$jscomp$19$$ = $r$jscomp$24$$;
    $level$jscomp$19_ll$$ -= 5;
  }
}
var $cljs$core$push_tail$$ = function $cljs$core$push_tail$$($JSCompiler_temp$jscomp$84_pv$jscomp$1$$, $G__32112$jscomp$inline_565_level$jscomp$20$$, $child_parent$jscomp$4$$, $tailnode$$) {
  var $ret$jscomp$20$$ = $cljs$core$pv_clone_node$$($child_parent$jscomp$4$$), $subidx$$ = $JSCompiler_temp$jscomp$84_pv$jscomp$1$$.$cnt$ - 1 >>> $G__32112$jscomp$inline_565_level$jscomp$20$$ & 31;
  5 === $G__32112$jscomp$inline_565_level$jscomp$20$$ ? $ret$jscomp$20$$.$arr$[$subidx$$] = $tailnode$$ : ($child_parent$jscomp$4$$ = $child_parent$jscomp$4$$.$arr$[$subidx$$], null != $child_parent$jscomp$4$$ ? ($G__32112$jscomp$inline_565_level$jscomp$20$$ -= 5, $JSCompiler_temp$jscomp$84_pv$jscomp$1$$ = $cljs$core$push_tail$$.$cljs$core$IFn$_invoke$arity$4$ ? $cljs$core$push_tail$$.$cljs$core$IFn$_invoke$arity$4$($JSCompiler_temp$jscomp$84_pv$jscomp$1$$, $G__32112$jscomp$inline_565_level$jscomp$20$$, 
  $child_parent$jscomp$4$$, $tailnode$$) : $cljs$core$push_tail$$.call(null, $JSCompiler_temp$jscomp$84_pv$jscomp$1$$, $G__32112$jscomp$inline_565_level$jscomp$20$$, $child_parent$jscomp$4$$, $tailnode$$)) : $JSCompiler_temp$jscomp$84_pv$jscomp$1$$ = $cljs$core$new_path$$(null, $G__32112$jscomp$inline_565_level$jscomp$20$$ - 5, $tailnode$$), $ret$jscomp$20$$.$arr$[$subidx$$] = $JSCompiler_temp$jscomp$84_pv$jscomp$1$$);
  return $ret$jscomp$20$$;
};
function $cljs$core$vector_index_out_of_bounds$$($i$jscomp$204$$, $cnt$jscomp$6$$) {
  throw Error(["No item ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($i$jscomp$204$$), " in vector of length ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cnt$jscomp$6$$)].join(""));
}
function $cljs$core$unchecked_array_for$$($level$jscomp$22_pv$jscomp$3$$, $i$jscomp$205$$) {
  if ($i$jscomp$205$$ >= $cljs$core$tail_off$$($level$jscomp$22_pv$jscomp$3$$)) {
    return $level$jscomp$22_pv$jscomp$3$$.$tail$;
  }
  var $node$jscomp$12$$ = $level$jscomp$22_pv$jscomp$3$$.root;
  for ($level$jscomp$22_pv$jscomp$3$$ = $level$jscomp$22_pv$jscomp$3$$.shift;;) {
    if (0 < $level$jscomp$22_pv$jscomp$3$$) {
      var $G__34391$$ = $level$jscomp$22_pv$jscomp$3$$ - 5;
      $node$jscomp$12$$ = $node$jscomp$12$$.$arr$[$i$jscomp$205$$ >>> $level$jscomp$22_pv$jscomp$3$$ & 31];
      $level$jscomp$22_pv$jscomp$3$$ = $G__34391$$;
    } else {
      return $node$jscomp$12$$.$arr$;
    }
  }
}
function $cljs$core$array_for$$($pv$jscomp$4$$, $i$jscomp$206$$) {
  return 0 <= $i$jscomp$206$$ && $i$jscomp$206$$ < $pv$jscomp$4$$.$cnt$ ? $cljs$core$unchecked_array_for$$($pv$jscomp$4$$, $i$jscomp$206$$) : $cljs$core$vector_index_out_of_bounds$$($i$jscomp$206$$, $pv$jscomp$4$$.$cnt$);
}
var $cljs$core$do_assoc$$ = function $cljs$core$do_assoc$$($JSCompiler_inline_result$jscomp$85_pv$jscomp$5$$, $G__32116$jscomp$inline_567_level$jscomp$23$$, $G__32117$jscomp$inline_568_node$jscomp$13$$, $i$jscomp$207$$, $val$jscomp$75$$) {
  var $ret$jscomp$21$$ = $cljs$core$pv_clone_node$$($G__32117$jscomp$inline_568_node$jscomp$13$$);
  if (0 === $G__32116$jscomp$inline_567_level$jscomp$23$$) {
    $ret$jscomp$21$$.$arr$[$i$jscomp$207$$ & 31] = $val$jscomp$75$$;
  } else {
    var $subidx$jscomp$1$$ = $i$jscomp$207$$ >>> $G__32116$jscomp$inline_567_level$jscomp$23$$ & 31;
    $G__32116$jscomp$inline_567_level$jscomp$23$$ -= 5;
    $G__32117$jscomp$inline_568_node$jscomp$13$$ = $G__32117$jscomp$inline_568_node$jscomp$13$$.$arr$[$subidx$jscomp$1$$];
    $JSCompiler_inline_result$jscomp$85_pv$jscomp$5$$ = $cljs$core$do_assoc$$.$cljs$core$IFn$_invoke$arity$5$ ? $cljs$core$do_assoc$$.$cljs$core$IFn$_invoke$arity$5$($JSCompiler_inline_result$jscomp$85_pv$jscomp$5$$, $G__32116$jscomp$inline_567_level$jscomp$23$$, $G__32117$jscomp$inline_568_node$jscomp$13$$, $i$jscomp$207$$, $val$jscomp$75$$) : $cljs$core$do_assoc$$.call(null, $JSCompiler_inline_result$jscomp$85_pv$jscomp$5$$, $G__32116$jscomp$inline_567_level$jscomp$23$$, $G__32117$jscomp$inline_568_node$jscomp$13$$, 
    $i$jscomp$207$$, $val$jscomp$75$$);
    $ret$jscomp$21$$.$arr$[$subidx$jscomp$1$$] = $JSCompiler_inline_result$jscomp$85_pv$jscomp$5$$;
  }
  return $ret$jscomp$21$$;
}, $cljs$core$pop_tail$$ = function $cljs$core$pop_tail$$($new_child_pv$jscomp$6$$, $G__32121$jscomp$inline_570_level$jscomp$24$$, $node$jscomp$14_ret$jscomp$22$$) {
  var $subidx$jscomp$2$$ = $new_child_pv$jscomp$6$$.$cnt$ - 2 >>> $G__32121$jscomp$inline_570_level$jscomp$24$$ & 31;
  if (5 < $G__32121$jscomp$inline_570_level$jscomp$24$$) {
    $G__32121$jscomp$inline_570_level$jscomp$24$$ -= 5;
    var $G__32122$jscomp$inline_571$$ = $node$jscomp$14_ret$jscomp$22$$.$arr$[$subidx$jscomp$2$$];
    $new_child_pv$jscomp$6$$ = $cljs$core$pop_tail$$.$cljs$core$IFn$_invoke$arity$3$ ? $cljs$core$pop_tail$$.$cljs$core$IFn$_invoke$arity$3$($new_child_pv$jscomp$6$$, $G__32121$jscomp$inline_570_level$jscomp$24$$, $G__32122$jscomp$inline_571$$) : $cljs$core$pop_tail$$.call(null, $new_child_pv$jscomp$6$$, $G__32121$jscomp$inline_570_level$jscomp$24$$, $G__32122$jscomp$inline_571$$);
    if (null == $new_child_pv$jscomp$6$$ && 0 === $subidx$jscomp$2$$) {
      return null;
    }
    $node$jscomp$14_ret$jscomp$22$$ = $cljs$core$pv_clone_node$$($node$jscomp$14_ret$jscomp$22$$);
    $node$jscomp$14_ret$jscomp$22$$.$arr$[$subidx$jscomp$2$$] = $new_child_pv$jscomp$6$$;
    return $node$jscomp$14_ret$jscomp$22$$;
  }
  if (0 === $subidx$jscomp$2$$) {
    return null;
  }
  $node$jscomp$14_ret$jscomp$22$$ = $cljs$core$pv_clone_node$$($node$jscomp$14_ret$jscomp$22$$);
  $node$jscomp$14_ret$jscomp$22$$.$arr$[$subidx$jscomp$2$$] = null;
  return $node$jscomp$14_ret$jscomp$22$$;
};
function $cljs$core$RangedIterator$$($i$jscomp$208$$, $base$jscomp$4$$, $arr$jscomp$91$$, $v$jscomp$19$$, $start$jscomp$67$$, $end$jscomp$16$$) {
  this.$i$ = $i$jscomp$208$$;
  this.$base$ = $base$jscomp$4$$;
  this.$arr$ = $arr$jscomp$91$$;
  this.$v$ = $v$jscomp$19$$;
  this.start = $start$jscomp$67$$;
  this.end = $end$jscomp$16$$;
}
$cljs$core$RangedIterator$$.prototype.$hasNext$ = function() {
  return this.$i$ < this.end;
};
$cljs$core$RangedIterator$$.prototype.next = function() {
  32 === this.$i$ - this.$base$ && (this.$arr$ = $cljs$core$unchecked_array_for$$(this.$v$, this.$i$), this.$base$ += 32);
  var $ret$jscomp$23$$ = this.$arr$[this.$i$ & 31];
  this.$i$ += 1;
  return $ret$jscomp$23$$;
};
function $cljs$core$ranged_iterator$$($v$jscomp$21$$, $start$jscomp$69$$, $end$jscomp$18$$) {
  return new $cljs$core$RangedIterator$$($start$jscomp$69$$, $start$jscomp$69$$ - $start$jscomp$69$$ % 32, $start$jscomp$69$$ < $cljs$core$count$$($v$jscomp$21$$) ? $cljs$core$unchecked_array_for$$($v$jscomp$21$$, $start$jscomp$69$$) : null, $v$jscomp$21$$, $start$jscomp$69$$, $end$jscomp$18$$);
}
function $cljs$core$pv_reduce$cljs$0core$0IFn$0_invoke$0arity$04$$($pv$jscomp$7$$, $f$jscomp$251$$, $start$jscomp$70$$, $end$jscomp$19$$) {
  return $start$jscomp$70$$ < $end$jscomp$19$$ ? $cljs$core$pv_reduce$cljs$0core$0IFn$0_invoke$0arity$05$$($pv$jscomp$7$$, $f$jscomp$251$$, $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($pv$jscomp$7$$, $start$jscomp$70$$), $start$jscomp$70$$ + 1, $end$jscomp$19$$) : $f$jscomp$251$$.$cljs$core$IFn$_invoke$arity$0$ ? $f$jscomp$251$$.$cljs$core$IFn$_invoke$arity$0$() : $f$jscomp$251$$.call(null);
}
function $cljs$core$pv_reduce$cljs$0core$0IFn$0_invoke$0arity$05$$($pv$jscomp$8$$, $f$jscomp$252$$, $G__34394_i$jscomp$211_init$jscomp$10$$, $G__34395_arr$jscomp$93_arr__$1_start$jscomp$71$$, $end$jscomp$20$$) {
  var $G__32125$jscomp$inline_573_acc$jscomp$6_nacc$jscomp$2$$ = $G__34394_i$jscomp$211_init$jscomp$10$$;
  $G__34394_i$jscomp$211_init$jscomp$10$$ = $G__34395_arr$jscomp$93_arr__$1_start$jscomp$71$$;
  for ($G__34395_arr$jscomp$93_arr__$1_start$jscomp$71$$ = $cljs$core$unchecked_array_for$$($pv$jscomp$8$$, $G__34395_arr$jscomp$93_arr__$1_start$jscomp$71$$);;) {
    if ($G__34394_i$jscomp$211_init$jscomp$10$$ < $end$jscomp$20$$) {
      var $G__32126$jscomp$inline_574_j$jscomp$61$$ = $G__34394_i$jscomp$211_init$jscomp$10$$ & 31;
      $G__34395_arr$jscomp$93_arr__$1_start$jscomp$71$$ = 0 === $G__32126$jscomp$inline_574_j$jscomp$61$$ ? $cljs$core$unchecked_array_for$$($pv$jscomp$8$$, $G__34394_i$jscomp$211_init$jscomp$10$$) : $G__34395_arr$jscomp$93_arr__$1_start$jscomp$71$$;
      $G__32126$jscomp$inline_574_j$jscomp$61$$ = $G__34395_arr$jscomp$93_arr__$1_start$jscomp$71$$[$G__32126$jscomp$inline_574_j$jscomp$61$$];
      $G__32125$jscomp$inline_573_acc$jscomp$6_nacc$jscomp$2$$ = $f$jscomp$252$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$252$$.$cljs$core$IFn$_invoke$arity$2$($G__32125$jscomp$inline_573_acc$jscomp$6_nacc$jscomp$2$$, $G__32126$jscomp$inline_574_j$jscomp$61$$) : $f$jscomp$252$$.call(null, $G__32125$jscomp$inline_573_acc$jscomp$6_nacc$jscomp$2$$, $G__32126$jscomp$inline_574_j$jscomp$61$$);
      if ($cljs$core$reduced_QMARK_$$($G__32125$jscomp$inline_573_acc$jscomp$6_nacc$jscomp$2$$)) {
        return $cljs$core$_deref$$($G__32125$jscomp$inline_573_acc$jscomp$6_nacc$jscomp$2$$);
      }
      $G__34394_i$jscomp$211_init$jscomp$10$$ += 1;
    } else {
      return $G__32125$jscomp$inline_573_acc$jscomp$6_nacc$jscomp$2$$;
    }
  }
}
function $cljs$core$PersistentVector$$($meta$jscomp$28$$, $cnt$jscomp$7$$, $shift$$, $root$jscomp$4$$, $tail$$, $__hash$jscomp$10$$) {
  this.$meta$ = $meta$jscomp$28$$;
  this.$cnt$ = $cnt$jscomp$7$$;
  this.shift = $shift$$;
  this.root = $root$jscomp$4$$;
  this.$tail$ = $tail$$;
  this.$__hash$ = $__hash$jscomp$10$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 167666463;
  this.$cljs$lang$protocol_mask$partition1$$ = 139268;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$PersistentVector$$.prototype;
$JSCompiler_prototypeAlias$$.$cljs$core$IFind$_find$arity$2$ = function($coll$jscomp$337$$, $n$jscomp$99$$) {
  return 0 <= $n$jscomp$99$$ && $n$jscomp$99$$ < this.$cnt$ ? new $cljs$core$MapEntry$$($n$jscomp$99$$, $cljs$core$unchecked_array_for$$(this, $n$jscomp$99$$)[$n$jscomp$99$$ & 31]) : null;
};
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__34396$$ = null;
  $G__34396$$ = function($x$jscomp$481$$, $start$jscomp$73$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$481$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$481$$, $start$jscomp$73$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__34396$$.$cljs$core$IFn$_invoke$arity$1$ = function($x$jscomp$479$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$479$$, 0);
  };
  $G__34396$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$480$$, $start$jscomp$72$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$480$$, $start$jscomp$72$$);
  };
  return $G__34396$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__34397__1$$($x$jscomp$482$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$482$$, $cljs$core$count$$(this));
  }
  var $G__34397$$ = null;
  $G__34397$$ = function($x$jscomp$484$$, $start$jscomp$75$$) {
    switch(arguments.length) {
      case 1:
        return $G__34397__1$$.call(this, $x$jscomp$484$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$484$$, $start$jscomp$75$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__34397$$.$cljs$core$IFn$_invoke$arity$1$ = $G__34397__1$$;
  $G__34397$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$483$$, $start$jscomp$74$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$483$$, $start$jscomp$74$$);
  };
  return $G__34397$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($coll$jscomp$343$$, $k$jscomp$85$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$85$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($coll$jscomp$344$$, $k$jscomp$86$$, $not_found$jscomp$14$$) {
  return "number" === typeof $k$jscomp$86$$ ? this.$cljs$core$IIndexed$_nth$arity$3$(null, $k$jscomp$86$$, $not_found$jscomp$14$$) : $not_found$jscomp$14$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IKVReduce$_kv_reduce$arity$3$ = function($i$jscomp$212_v$jscomp$22$$, $f$jscomp$253$$, $init$jscomp$11_len$jscomp$17$$) {
  $i$jscomp$212_v$jscomp$22$$ = 0;
  for (var $G__32128$jscomp$inline_1117_G__34399$jscomp$inline_1120_init__$1_init__$2$jscomp$inline_1115_init__$3$jscomp$inline_1116$$ = $init$jscomp$11_len$jscomp$17$$;;) {
    if ($i$jscomp$212_v$jscomp$22$$ < this.$cnt$) {
      var $G__34401_arr$jscomp$94_init__$2$$ = $cljs$core$unchecked_array_for$$(this, $i$jscomp$212_v$jscomp$22$$);
      $init$jscomp$11_len$jscomp$17$$ = $G__34401_arr$jscomp$94_init__$2$$.length;
      a: {
        for (var $j$jscomp$inline_1114$$ = 0;;) {
          if ($j$jscomp$inline_1114$$ < $init$jscomp$11_len$jscomp$17$$) {
            var $G__32129$jscomp$inline_1118$$ = $j$jscomp$inline_1114$$ + $i$jscomp$212_v$jscomp$22$$, $G__32130$jscomp$inline_1119$$ = $G__34401_arr$jscomp$94_init__$2$$[$j$jscomp$inline_1114$$];
            $G__32128$jscomp$inline_1117_G__34399$jscomp$inline_1120_init__$1_init__$2$jscomp$inline_1115_init__$3$jscomp$inline_1116$$ = $f$jscomp$253$$.$cljs$core$IFn$_invoke$arity$3$ ? $f$jscomp$253$$.$cljs$core$IFn$_invoke$arity$3$($G__32128$jscomp$inline_1117_G__34399$jscomp$inline_1120_init__$1_init__$2$jscomp$inline_1115_init__$3$jscomp$inline_1116$$, $G__32129$jscomp$inline_1118$$, $G__32130$jscomp$inline_1119$$) : $f$jscomp$253$$.call(null, $G__32128$jscomp$inline_1117_G__34399$jscomp$inline_1120_init__$1_init__$2$jscomp$inline_1115_init__$3$jscomp$inline_1116$$, 
            $G__32129$jscomp$inline_1118$$, $G__32130$jscomp$inline_1119$$);
            if ($cljs$core$reduced_QMARK_$$($G__32128$jscomp$inline_1117_G__34399$jscomp$inline_1120_init__$1_init__$2$jscomp$inline_1115_init__$3$jscomp$inline_1116$$)) {
              $G__34401_arr$jscomp$94_init__$2$$ = $G__32128$jscomp$inline_1117_G__34399$jscomp$inline_1120_init__$1_init__$2$jscomp$inline_1115_init__$3$jscomp$inline_1116$$;
              break a;
            }
            $j$jscomp$inline_1114$$ += 1;
          } else {
            $G__34401_arr$jscomp$94_init__$2$$ = $G__32128$jscomp$inline_1117_G__34399$jscomp$inline_1120_init__$1_init__$2$jscomp$inline_1115_init__$3$jscomp$inline_1116$$;
            break a;
          }
        }
      }
      if ($cljs$core$reduced_QMARK_$$($G__34401_arr$jscomp$94_init__$2$$)) {
        return $cljs$core$_deref$$($G__34401_arr$jscomp$94_init__$2$$);
      }
      $i$jscomp$212_v$jscomp$22$$ += $init$jscomp$11_len$jscomp$17$$;
      $G__32128$jscomp$inline_1117_G__34399$jscomp$inline_1120_init__$1_init__$2$jscomp$inline_1115_init__$3$jscomp$inline_1116$$ = $G__34401_arr$jscomp$94_init__$2$$;
    } else {
      return $G__32128$jscomp$inline_1117_G__34399$jscomp$inline_1120_init__$1_init__$2$jscomp$inline_1115_init__$3$jscomp$inline_1116$$;
    }
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$APersistentVector$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$2$ = function($coll$jscomp$345$$, $n$jscomp$100$$) {
  return $cljs$core$array_for$$(this, $n$jscomp$100$$)[$n$jscomp$100$$ & 31];
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$3$ = function($coll$jscomp$346$$, $n$jscomp$101$$, $not_found$jscomp$15$$) {
  return 0 <= $n$jscomp$101$$ && $n$jscomp$101$$ < this.$cnt$ ? $cljs$core$unchecked_array_for$$(this, $n$jscomp$101$$)[$n$jscomp$101$$ & 31] : $not_found$jscomp$15$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IVector$_assoc_n$arity$3$ = function($coll$jscomp$347_new_tail$$, $n$jscomp$102$$, $val$jscomp$76$$) {
  if (0 <= $n$jscomp$102$$ && $n$jscomp$102$$ < this.$cnt$) {
    return $cljs$core$tail_off$$(this) <= $n$jscomp$102$$ ? ($coll$jscomp$347_new_tail$$ = $cljs$core$aclone$$(this.$tail$), $coll$jscomp$347_new_tail$$[$n$jscomp$102$$ & 31] = $val$jscomp$76$$, new $cljs$core$PersistentVector$$(this.$meta$, this.$cnt$, this.shift, this.root, $coll$jscomp$347_new_tail$$, null)) : new $cljs$core$PersistentVector$$(this.$meta$, this.$cnt$, this.shift, $cljs$core$do_assoc$$(this, this.shift, this.root, $n$jscomp$102$$, $val$jscomp$76$$), this.$tail$, null);
  }
  if ($n$jscomp$102$$ === this.$cnt$) {
    return this.$cljs$core$ICollection$_conj$arity$2$(null, $val$jscomp$76$$);
  }
  throw Error(["Index ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$102$$), " out of bounds  [0,", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(this.$cnt$), "]"].join(""));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIterable$_iterator$arity$1$ = function() {
  return $cljs$core$ranged_iterator$$(this, 0, this.$cnt$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return this.$cnt$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IStack$_peek$arity$1$ = function() {
  return 0 < this.$cnt$ ? this.$cljs$core$IIndexed$_nth$arity$2$(null, this.$cnt$ - 1) : null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IStack$_pop$arity$1$ = function() {
  if (0 === this.$cnt$) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.$cnt$) {
    return $cljs$core$_with_meta$$($cljs$core$PersistentVector$EMPTY$$, this.$meta$);
  }
  if (1 < this.$cnt$ - $cljs$core$tail_off$$(this)) {
    return new $cljs$core$PersistentVector$$(this.$meta$, this.$cnt$ - 1, this.shift, this.root, this.$tail$.slice(0, -1), null);
  }
  var $new_tail$jscomp$1$$ = $cljs$core$unchecked_array_for$$(this, this.$cnt$ - 2), $new_root_nr$$ = $cljs$core$pop_tail$$(this, this.shift, this.root);
  $new_root_nr$$ = null == $new_root_nr$$ ? $cljs$core$PersistentVector$EMPTY_NODE$$ : $new_root_nr$$;
  var $cnt_1$$ = this.$cnt$ - 1;
  return 5 < this.shift && null == $new_root_nr$$.$arr$[1] ? new $cljs$core$PersistentVector$$(this.$meta$, $cnt_1$$, this.shift - 5, $new_root_nr$$.$arr$[0], $new_tail$jscomp$1$$, null) : new $cljs$core$PersistentVector$$(this.$meta$, $cnt_1$$, this.shift, $new_root_nr$$, $new_tail$jscomp$1$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4319__auto__$jscomp$7_h__4319__auto____$1$jscomp$7$$ = this.$__hash$;
  return null != $h__4319__auto__$jscomp$7_h__4319__auto____$1$jscomp$7$$ ? $h__4319__auto__$jscomp$7_h__4319__auto____$1$jscomp$7$$ : this.$__hash$ = $h__4319__auto__$jscomp$7_h__4319__auto____$1$jscomp$7$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$354_me_iter$$, $other$jscomp$72_you_iter$$) {
  if ($other$jscomp$72_you_iter$$ instanceof $cljs$core$PersistentVector$$) {
    if (this.$cnt$ === $cljs$core$count$$($other$jscomp$72_you_iter$$)) {
      for ($coll$jscomp$354_me_iter$$ = this.$cljs$core$IIterable$_iterator$arity$1$(null), $other$jscomp$72_you_iter$$ = $other$jscomp$72_you_iter$$.$cljs$core$IIterable$_iterator$arity$1$(null);;) {
        if ($coll$jscomp$354_me_iter$$.$hasNext$()) {
          var $x$jscomp$485$$ = $coll$jscomp$354_me_iter$$.next(), $y$jscomp$230$$ = $other$jscomp$72_you_iter$$.next();
          if (!$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($x$jscomp$485$$, $y$jscomp$230$$)) {
            return !1;
          }
        } else {
          return !0;
        }
      }
    } else {
      return !1;
    }
  } else {
    return $cljs$core$equiv_sequential$$(this, $other$jscomp$72_you_iter$$);
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEditableCollection$_as_transient$arity$1$ = function() {
  return new $cljs$core$TransientVector$$(this.$cnt$, this.shift, $cljs$core$tv_editable_root$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$tv_editable_root$$.$cljs$core$IFn$_invoke$arity$1$(this.root) : $cljs$core$tv_editable_root$$.call(null, this.root), $cljs$core$tv_editable_tail$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$tv_editable_tail$$.$cljs$core$IFn$_invoke$arity$1$(this.$tail$) : $cljs$core$tv_editable_tail$$.call(null, this.$tail$));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$_with_meta$$($cljs$core$PersistentVector$EMPTY$$, this.$meta$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($v$jscomp$23$$, $f$jscomp$254$$) {
  return $cljs$core$pv_reduce$cljs$0core$0IFn$0_invoke$0arity$04$$(this, $f$jscomp$254$$, 0, this.$cnt$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($i$jscomp$213_v$jscomp$24$$, $f$jscomp$255$$, $init$jscomp$12_len$jscomp$18$$) {
  $i$jscomp$213_v$jscomp$24$$ = 0;
  for (var $G__32131$jscomp$inline_1125_G__34403$jscomp$inline_1127_init__$1$jscomp$1_init__$2$jscomp$inline_1123_init__$3$jscomp$inline_1124$$ = $init$jscomp$12_len$jscomp$18$$;;) {
    if ($i$jscomp$213_v$jscomp$24$$ < this.$cnt$) {
      var $G__34405_arr$jscomp$95_init__$2$jscomp$2$$ = $cljs$core$unchecked_array_for$$(this, $i$jscomp$213_v$jscomp$24$$);
      $init$jscomp$12_len$jscomp$18$$ = $G__34405_arr$jscomp$95_init__$2$jscomp$2$$.length;
      a: {
        for (var $j$jscomp$inline_1122$$ = 0;;) {
          if ($j$jscomp$inline_1122$$ < $init$jscomp$12_len$jscomp$18$$) {
            var $G__32132$jscomp$inline_1126$$ = $G__34405_arr$jscomp$95_init__$2$jscomp$2$$[$j$jscomp$inline_1122$$];
            $G__32131$jscomp$inline_1125_G__34403$jscomp$inline_1127_init__$1$jscomp$1_init__$2$jscomp$inline_1123_init__$3$jscomp$inline_1124$$ = $f$jscomp$255$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$255$$.$cljs$core$IFn$_invoke$arity$2$($G__32131$jscomp$inline_1125_G__34403$jscomp$inline_1127_init__$1$jscomp$1_init__$2$jscomp$inline_1123_init__$3$jscomp$inline_1124$$, $G__32132$jscomp$inline_1126$$) : $f$jscomp$255$$.call(null, $G__32131$jscomp$inline_1125_G__34403$jscomp$inline_1127_init__$1$jscomp$1_init__$2$jscomp$inline_1123_init__$3$jscomp$inline_1124$$, 
            $G__32132$jscomp$inline_1126$$);
            if ($cljs$core$reduced_QMARK_$$($G__32131$jscomp$inline_1125_G__34403$jscomp$inline_1127_init__$1$jscomp$1_init__$2$jscomp$inline_1123_init__$3$jscomp$inline_1124$$)) {
              $G__34405_arr$jscomp$95_init__$2$jscomp$2$$ = $G__32131$jscomp$inline_1125_G__34403$jscomp$inline_1127_init__$1$jscomp$1_init__$2$jscomp$inline_1123_init__$3$jscomp$inline_1124$$;
              break a;
            }
            $j$jscomp$inline_1122$$ += 1;
          } else {
            $G__34405_arr$jscomp$95_init__$2$jscomp$2$$ = $G__32131$jscomp$inline_1125_G__34403$jscomp$inline_1127_init__$1$jscomp$1_init__$2$jscomp$inline_1123_init__$3$jscomp$inline_1124$$;
            break a;
          }
        }
      }
      if ($cljs$core$reduced_QMARK_$$($G__34405_arr$jscomp$95_init__$2$jscomp$2$$)) {
        return $cljs$core$_deref$$($G__34405_arr$jscomp$95_init__$2$jscomp$2$$);
      }
      $i$jscomp$213_v$jscomp$24$$ += $init$jscomp$12_len$jscomp$18$$;
      $G__32131$jscomp$inline_1125_G__34403$jscomp$inline_1127_init__$1$jscomp$1_init__$2$jscomp$inline_1123_init__$3$jscomp$inline_1124$$ = $G__34405_arr$jscomp$95_init__$2$jscomp$2$$;
    } else {
      return $G__32131$jscomp$inline_1125_G__34403$jscomp$inline_1127_init__$1$jscomp$1_init__$2$jscomp$inline_1123_init__$3$jscomp$inline_1124$$;
    }
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$IAssociative$_assoc$arity$3$ = function($coll$jscomp$357$$, $k$jscomp$87$$, $v$jscomp$25$$) {
  if ("number" === typeof $k$jscomp$87$$) {
    return this.$cljs$core$IVector$_assoc_n$arity$3$(null, $k$jscomp$87$$, $v$jscomp$25$$);
  }
  throw Error("Vector's key for assoc must be a number.");
};
$JSCompiler_prototypeAlias$$.$cljs$core$IAssociative$_contains_key_QMARK_$arity$2$ = function($coll$jscomp$358$$, $k$jscomp$88$$) {
  return $cljs$core$integer_QMARK_$$($k$jscomp$88$$) ? 0 <= $k$jscomp$88$$ && $k$jscomp$88$$ < this.$cnt$ : !1;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  if (0 === this.$cnt$) {
    return null;
  }
  if (32 >= this.$cnt$) {
    return new $cljs$core$IndexedSeq$$(this.$tail$, 0, null);
  }
  a: {
    var $G__32134_node$jscomp$inline_584$$ = this.root;
    for (var $G__34389$jscomp$inline_586_level$jscomp$inline_585$$ = this.shift;;) {
      if (0 < $G__34389$jscomp$inline_586_level$jscomp$inline_585$$) {
        $G__34389$jscomp$inline_586_level$jscomp$inline_585$$ -= 5, $G__32134_node$jscomp$inline_584$$ = $G__32134_node$jscomp$inline_584$$.$arr$[0];
      } else {
        $G__32134_node$jscomp$inline_584$$ = $G__32134_node$jscomp$inline_584$$.$arr$;
        break a;
      }
    }
  }
  return $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$ ? $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$(this, $G__32134_node$jscomp$inline_584$$, 0, 0) : $cljs$core$chunked_seq$$.call(null, this, $G__32134_node$jscomp$inline_584$$, 0, 0);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$360$$, $new_meta$jscomp$13$$) {
  return $new_meta$jscomp$13$$ === this.$meta$ ? this : new $cljs$core$PersistentVector$$($new_meta$jscomp$13$$, this.$cnt$, this.shift, this.root, this.$tail$, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$361_len$jscomp$19_new_shift$$, $o$jscomp$115$$) {
  if (32 > this.$cnt$ - $cljs$core$tail_off$$(this)) {
    $coll$jscomp$361_len$jscomp$19_new_shift$$ = this.$tail$.length;
    for (var $JSCompiler_temp$jscomp$86_n_r$jscomp$inline_588_new_tail$jscomp$2_root_overflow_QMARK_$$ = Array($coll$jscomp$361_len$jscomp$19_new_shift$$ + 1), $i_34407_val$jscomp$inline_1135$$ = 0;;) {
      if ($i_34407_val$jscomp$inline_1135$$ < $coll$jscomp$361_len$jscomp$19_new_shift$$) {
        $JSCompiler_temp$jscomp$86_n_r$jscomp$inline_588_new_tail$jscomp$2_root_overflow_QMARK_$$[$i_34407_val$jscomp$inline_1135$$] = this.$tail$[$i_34407_val$jscomp$inline_1135$$], $i_34407_val$jscomp$inline_1135$$ += 1;
      } else {
        break;
      }
    }
    $JSCompiler_temp$jscomp$86_n_r$jscomp$inline_588_new_tail$jscomp$2_root_overflow_QMARK_$$[$coll$jscomp$361_len$jscomp$19_new_shift$$] = $o$jscomp$115$$;
    return new $cljs$core$PersistentVector$$(this.$meta$, this.$cnt$ + 1, this.shift, this.root, $JSCompiler_temp$jscomp$86_n_r$jscomp$inline_588_new_tail$jscomp$2_root_overflow_QMARK_$$, null);
  }
  $coll$jscomp$361_len$jscomp$19_new_shift$$ = ($JSCompiler_temp$jscomp$86_n_r$jscomp$inline_588_new_tail$jscomp$2_root_overflow_QMARK_$$ = this.$cnt$ >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  $JSCompiler_temp$jscomp$86_n_r$jscomp$inline_588_new_tail$jscomp$2_root_overflow_QMARK_$$ ? ($JSCompiler_temp$jscomp$86_n_r$jscomp$inline_588_new_tail$jscomp$2_root_overflow_QMARK_$$ = $cljs$core$pv_fresh_node$$(null), $JSCompiler_temp$jscomp$86_n_r$jscomp$inline_588_new_tail$jscomp$2_root_overflow_QMARK_$$.$arr$[0] = this.root, $i_34407_val$jscomp$inline_1135$$ = $cljs$core$new_path$$(null, this.shift, new $cljs$core$VectorNode$$(null, this.$tail$)), $JSCompiler_temp$jscomp$86_n_r$jscomp$inline_588_new_tail$jscomp$2_root_overflow_QMARK_$$.$arr$[1] = 
  $i_34407_val$jscomp$inline_1135$$) : $JSCompiler_temp$jscomp$86_n_r$jscomp$inline_588_new_tail$jscomp$2_root_overflow_QMARK_$$ = $cljs$core$push_tail$$(this, this.shift, this.root, new $cljs$core$VectorNode$$(null, this.$tail$));
  return new $cljs$core$PersistentVector$$(this.$meta$, this.$cnt$ + 1, $coll$jscomp$361_len$jscomp$19_new_shift$$, $JSCompiler_temp$jscomp$86_n_r$jscomp$inline_588_new_tail$jscomp$2_root_overflow_QMARK_$$, [$o$jscomp$115$$], null);
};
$JSCompiler_prototypeAlias$$.call = function($unused__9507__auto__$jscomp$4$$) {
  switch(arguments.length - 1) {
    case 1:
      return this.$cljs$core$IFn$_invoke$arity$1$(arguments[1]);
    case 2:
      return this.$cljs$core$IFn$_invoke$arity$2$(arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length - 1)].join(""));
  }
};
$JSCompiler_prototypeAlias$$.apply = function($self__$jscomp$365$$, $args32127$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args32127$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($k$jscomp$89$$) {
  return this.$cljs$core$IIndexed$_nth$arity$2$(null, $k$jscomp$89$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($k$jscomp$90$$, $not_found$jscomp$16$$) {
  return this.$cljs$core$IIndexed$_nth$arity$3$(null, $k$jscomp$90$$, $not_found$jscomp$16$$);
};
var $cljs$core$PersistentVector$EMPTY_NODE$$ = new $cljs$core$VectorNode$$(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), $cljs$core$PersistentVector$EMPTY$$ = new $cljs$core$PersistentVector$$(null, 0, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [], $cljs$core$empty_ordered_hash$$);
function $cljs$core$PersistentVector$fromArray$$($xs$jscomp$13_xs__$1$jscomp$2$$, $i$jscomp$214_no_clone$$) {
  var $l$jscomp$60$$ = $xs$jscomp$13_xs__$1$jscomp$2$$.length;
  $xs$jscomp$13_xs__$1$jscomp$2$$ = $i$jscomp$214_no_clone$$ ? $xs$jscomp$13_xs__$1$jscomp$2$$ : $cljs$core$aclone$$($xs$jscomp$13_xs__$1$jscomp$2$$);
  if (32 > $l$jscomp$60$$) {
    return new $cljs$core$PersistentVector$$(null, $l$jscomp$60$$, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, $xs$jscomp$13_xs__$1$jscomp$2$$, null);
  }
  $i$jscomp$214_no_clone$$ = 32;
  for (var $G__34411_out$jscomp$3$$ = (new $cljs$core$PersistentVector$$(null, 32, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, $xs$jscomp$13_xs__$1$jscomp$2$$.slice(0, 32), null)).$cljs$core$IEditableCollection$_as_transient$arity$1$(null);;) {
    if ($i$jscomp$214_no_clone$$ < $l$jscomp$60$$) {
      var $G__34410$$ = $i$jscomp$214_no_clone$$ + 1;
      $G__34411_out$jscomp$3$$ = $cljs$core$conj_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($G__34411_out$jscomp$3$$, $xs$jscomp$13_xs__$1$jscomp$2$$[$i$jscomp$214_no_clone$$]);
      $i$jscomp$214_no_clone$$ = $G__34410$$;
    } else {
      return $cljs$core$_persistent_BANG_$$($G__34411_out$jscomp$3$$);
    }
  }
}
$cljs$core$PersistentVector$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$vec$$($coll$jscomp$364$$) {
  return $cljs$core$truth_$$($cljs$core$map_entry_QMARK_$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$map_entry_QMARK_$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$364$$) : $cljs$core$map_entry_QMARK_$$.call(null, $coll$jscomp$364$$)) ? new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$core$key$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$key$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$364$$) : $cljs$core$key$$.call(null, $coll$jscomp$364$$), 
  $cljs$core$val$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$val$$.$cljs$core$IFn$_invoke$arity$1$($coll$jscomp$364$$) : $cljs$core$val$$.call(null, $coll$jscomp$364$$)], null) : $cljs$core$vector_QMARK_$$($coll$jscomp$364$$) ? $cljs$core$with_meta$$($coll$jscomp$364$$, null) : Array.isArray($coll$jscomp$364$$) ? $cljs$core$PersistentVector$fromArray$$($coll$jscomp$364$$, !0) : $cljs$core$_persistent_BANG_$$($cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($cljs$core$_conj_BANG_$$, $cljs$core$_as_transient$$($cljs$core$PersistentVector$EMPTY$$), 
  $coll$jscomp$364$$));
}
var $cljs$core$vector$$ = function $cljs$core$vector$$($var_args$jscomp$246$$) {
  for (var $args__4824__auto__$jscomp$2$$ = [], $len__4818__auto___34412$$ = arguments.length, $i__4819__auto___34413$$ = 0;;) {
    if ($i__4819__auto___34413$$ < $len__4818__auto___34412$$) {
      $args__4824__auto__$jscomp$2$$.push(arguments[$i__4819__auto___34413$$]), $i__4819__auto___34413$$ += 1;
    } else {
      break;
    }
  }
  return $cljs$core$vector$$.$cljs$core$IFn$_invoke$arity$variadic$(0 < $args__4824__auto__$jscomp$2$$.length ? new $cljs$core$IndexedSeq$$($args__4824__auto__$jscomp$2$$.slice(0), 0, null) : null);
};
$cljs$core$vector$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($args$jscomp$91$$) {
  return $args$jscomp$91$$ instanceof $cljs$core$IndexedSeq$$ && 0 === $args$jscomp$91$$.$i$ ? $cljs$core$PersistentVector$fromArray$$($args$jscomp$91$$.$arr$, !Array.isArray($args$jscomp$91$$.$arr$)) : $cljs$core$vec$$($args$jscomp$91$$);
};
$cljs$core$vector$$.$cljs$lang$maxFixedArity$ = 0;
$cljs$core$vector$$.$cljs$lang$applyTo$ = function($seq32138$$) {
  return this.$cljs$core$IFn$_invoke$arity$variadic$($cljs$core$seq$$($seq32138$$));
};
function $cljs$core$ChunkedSeq$$($vec$$, $node$jscomp$16$$, $i$jscomp$215$$, $off$jscomp$4$$, $meta$jscomp$30$$) {
  this.$vec$ = $vec$$;
  this.node = $node$jscomp$16$$;
  this.$i$ = $i$jscomp$215$$;
  this.$off$ = $off$jscomp$4$$;
  this.$meta$ = $meta$jscomp$30$$;
  this.$__hash$ = null;
  this.$cljs$lang$protocol_mask$partition0$$ = 32375020;
  this.$cljs$lang$protocol_mask$partition1$$ = 1536;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$ChunkedSeq$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__34415$$ = null;
  $G__34415$$ = function($x$jscomp$488$$, $start$jscomp$77$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$488$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$488$$, $start$jscomp$77$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__34415$$.$cljs$core$IFn$_invoke$arity$1$ = function($x$jscomp$486$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$486$$, 0);
  };
  $G__34415$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$487$$, $start$jscomp$76$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$487$$, $start$jscomp$76$$);
  };
  return $G__34415$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__34416__1$$($x$jscomp$489$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$489$$, $cljs$core$count$$(this));
  }
  var $G__34416$$ = null;
  $G__34416$$ = function($x$jscomp$491$$, $start$jscomp$79$$) {
    switch(arguments.length) {
      case 1:
        return $G__34416__1$$.call(this, $x$jscomp$491$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$491$$, $start$jscomp$79$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__34416$$.$cljs$core$IFn$_invoke$arity$1$ = $G__34416__1$$;
  $G__34416$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$490$$, $start$jscomp$78$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$490$$, $start$jscomp$78$$);
  };
  return $G__34416$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  if (this.$off$ + 1 < this.node.length) {
    var $G__32139$jscomp$inline_594_s$jscomp$85$$ = this.$vec$;
    var $G__32140$jscomp$inline_595$$ = this.node, $G__32141$jscomp$inline_596$$ = this.$i$, $G__32142$jscomp$inline_597$$ = this.$off$ + 1;
    $G__32139$jscomp$inline_594_s$jscomp$85$$ = $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$ ? $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$($G__32139$jscomp$inline_594_s$jscomp$85$$, $G__32140$jscomp$inline_595$$, $G__32141$jscomp$inline_596$$, $G__32142$jscomp$inline_597$$) : $cljs$core$chunked_seq$$.call(null, $G__32139$jscomp$inline_594_s$jscomp$85$$, $G__32140$jscomp$inline_595$$, $G__32141$jscomp$inline_596$$, $G__32142$jscomp$inline_597$$);
    return null == $G__32139$jscomp$inline_594_s$jscomp$85$$ ? null : $G__32139$jscomp$inline_594_s$jscomp$85$$;
  }
  return this.$cljs$core$IChunkedNext$_chunked_next$arity$1$();
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4319__auto__$jscomp$8_h__4319__auto____$1$jscomp$8$$ = this.$__hash$;
  return null != $h__4319__auto__$jscomp$8_h__4319__auto____$1$jscomp$8$$ ? $h__4319__auto__$jscomp$8_h__4319__auto____$1$jscomp$8$$ : this.$__hash$ = $h__4319__auto__$jscomp$8_h__4319__auto____$1$jscomp$8$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$373$$, $other$jscomp$74$$) {
  return $cljs$core$equiv_sequential$$(this, $other$jscomp$74$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$375$$, $f$jscomp$256$$) {
  return $cljs$core$pv_reduce$cljs$0core$0IFn$0_invoke$0arity$04$$(this.$vec$, $f$jscomp$256$$, this.$i$ + this.$off$, $cljs$core$count$$(this.$vec$));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$jscomp$376$$, $f$jscomp$257$$, $start$jscomp$80$$) {
  return $cljs$core$pv_reduce$cljs$0core$0IFn$0_invoke$0arity$05$$(this.$vec$, $f$jscomp$257$$, $start$jscomp$80$$, this.$i$ + this.$off$, $cljs$core$count$$(this.$vec$));
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return this.node[this.$off$];
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  if (this.$off$ + 1 < this.node.length) {
    var $G__32143$jscomp$inline_599_s$jscomp$86$$ = this.$vec$;
    var $G__32144$jscomp$inline_600$$ = this.node, $G__32145$jscomp$inline_601$$ = this.$i$, $G__32146$jscomp$inline_602$$ = this.$off$ + 1;
    $G__32143$jscomp$inline_599_s$jscomp$86$$ = $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$ ? $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$($G__32143$jscomp$inline_599_s$jscomp$86$$, $G__32144$jscomp$inline_600$$, $G__32145$jscomp$inline_601$$, $G__32146$jscomp$inline_602$$) : $cljs$core$chunked_seq$$.call(null, $G__32143$jscomp$inline_599_s$jscomp$86$$, $G__32144$jscomp$inline_600$$, $G__32145$jscomp$inline_601$$, $G__32146$jscomp$inline_602$$);
    return null == $G__32143$jscomp$inline_599_s$jscomp$86$$ ? $cljs$core$List$EMPTY$$ : $G__32143$jscomp$inline_599_s$jscomp$86$$;
  }
  return this.$cljs$core$IChunkedSeq$_chunked_rest$arity$1$(null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IChunkedSeq$_chunked_first$arity$1$ = function() {
  var $arr$jscomp$inline_604$$ = this.node;
  return new $cljs$core$ArrayChunk$$($arr$jscomp$inline_604$$, this.$off$, $arr$jscomp$inline_604$$.length);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IChunkedSeq$_chunked_rest$arity$1$ = function() {
  var $end$jscomp$21$$ = this.$i$ + this.node.length;
  if ($end$jscomp$21$$ < $cljs$core$_count$$(this.$vec$)) {
    var $G__32147$$ = this.$vec$, $G__32148$$ = $cljs$core$unchecked_array_for$$(this.$vec$, $end$jscomp$21$$);
    return $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$ ? $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$($G__32147$$, $G__32148$$, $end$jscomp$21$$, 0) : $cljs$core$chunked_seq$$.call(null, $G__32147$$, $G__32148$$, $end$jscomp$21$$, 0);
  }
  return $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$382$$, $new_meta$jscomp$14$$) {
  return $new_meta$jscomp$14$$ === this.$meta$ ? this : $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$05$$ ? $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$05$$(this.$vec$, this.node, this.$i$, this.$off$, $new_meta$jscomp$14$$) : $cljs$core$chunked_seq$$.call(null, this.$vec$, this.node, this.$i$, this.$off$, $new_meta$jscomp$14$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$383$$, $o$jscomp$116$$) {
  return $cljs$core$cons$$($o$jscomp$116$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IChunkedNext$_chunked_next$arity$1$ = function() {
  var $end$jscomp$22$$ = this.$i$ + this.node.length;
  if ($end$jscomp$22$$ < $cljs$core$_count$$(this.$vec$)) {
    var $G__32151$$ = this.$vec$, $G__32152$$ = $cljs$core$unchecked_array_for$$(this.$vec$, $end$jscomp$22$$);
    return $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$ ? $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$($G__32151$$, $G__32152$$, $end$jscomp$22$$, 0) : $cljs$core$chunked_seq$$.call(null, $G__32151$$, $G__32152$$, $end$jscomp$22$$, 0);
  }
  return null;
};
$cljs$core$ChunkedSeq$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$chunked_seq$$($var_args$jscomp$247$$) {
  switch(arguments.length) {
    case 3:
      var $vec$jscomp$inline_611$$ = arguments[0], $i$jscomp$inline_612$$ = arguments[1], $off$jscomp$inline_613$$ = arguments[2];
      return new $cljs$core$ChunkedSeq$$($vec$jscomp$inline_611$$, $cljs$core$array_for$$($vec$jscomp$inline_611$$, $i$jscomp$inline_612$$), $i$jscomp$inline_612$$, $off$jscomp$inline_613$$, null);
    case 4:
      return $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$05$$(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length)].join(""));
  }
}
function $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$04$$($vec$jscomp$3$$, $node$jscomp$18$$, $i$jscomp$218$$, $off$jscomp$7$$) {
  return new $cljs$core$ChunkedSeq$$($vec$jscomp$3$$, $node$jscomp$18$$, $i$jscomp$218$$, $off$jscomp$7$$, null);
}
function $cljs$core$chunked_seq$cljs$0core$0IFn$0_invoke$0arity$05$$($vec$jscomp$4$$, $node$jscomp$19$$, $i$jscomp$219$$, $off$jscomp$8$$, $meta$jscomp$32$$) {
  return new $cljs$core$ChunkedSeq$$($vec$jscomp$4$$, $node$jscomp$19$$, $i$jscomp$219$$, $off$jscomp$8$$, $meta$jscomp$32$$);
}
function $cljs$core$Subvec$$($meta$jscomp$33$$, $v$jscomp$27$$, $start$jscomp$81$$, $end$jscomp$23$$, $__hash$jscomp$14$$) {
  this.$meta$ = $meta$jscomp$33$$;
  this.$v$ = $v$jscomp$27$$;
  this.start = $start$jscomp$81$$;
  this.end = $end$jscomp$23$$;
  this.$__hash$ = $__hash$jscomp$14$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 167666463;
  this.$cljs$lang$protocol_mask$partition1$$ = 139264;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$Subvec$$.prototype;
$JSCompiler_prototypeAlias$$.$cljs$core$IFind$_find$arity$2$ = function($coll$jscomp$385_idx$jscomp$20$$, $n$jscomp$103$$) {
  if (0 > $n$jscomp$103$$) {
    return null;
  }
  $coll$jscomp$385_idx$jscomp$20$$ = this.start + $n$jscomp$103$$;
  return $coll$jscomp$385_idx$jscomp$20$$ < this.end ? new $cljs$core$MapEntry$$($n$jscomp$103$$, $cljs$core$_lookup$$(this.$v$, $coll$jscomp$385_idx$jscomp$20$$)) : null;
};
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__34418$$ = null;
  $G__34418$$ = function($x$jscomp$494$$, $start__$1$jscomp$1$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$494$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$494$$, $start__$1$jscomp$1$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__34418$$.$cljs$core$IFn$_invoke$arity$1$ = function($x$jscomp$492$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$492$$, 0);
  };
  $G__34418$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$493$$, $start__$1$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$493$$, $start__$1$$);
  };
  return $G__34418$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__34419__1$$($x$jscomp$495$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$495$$, $cljs$core$count$$(this));
  }
  var $G__34419$$ = null;
  $G__34419$$ = function($x$jscomp$497$$, $start__$1$jscomp$3$$) {
    switch(arguments.length) {
      case 1:
        return $G__34419__1$$.call(this, $x$jscomp$497$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$497$$, $start__$1$jscomp$3$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__34419$$.$cljs$core$IFn$_invoke$arity$1$ = $G__34419__1$$;
  $G__34419$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$496$$, $start__$1$jscomp$2$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$496$$, $start__$1$jscomp$2$$);
  };
  return $G__34419$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($coll$jscomp$391$$, $k$jscomp$91$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$91$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($coll$jscomp$392$$, $k$jscomp$92$$, $not_found$jscomp$17$$) {
  return "number" === typeof $k$jscomp$92$$ ? this.$cljs$core$IIndexed$_nth$arity$3$(null, $k$jscomp$92$$, $not_found$jscomp$17$$) : $not_found$jscomp$17$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IKVReduce$_kv_reduce$arity$3$ = function($coll$jscomp$393_i$jscomp$220$$, $f$jscomp$258$$, $G__32158$jscomp$inline_615_G__34422_init$jscomp$13_init__$1$jscomp$2_init__$2$jscomp$4$$) {
  $coll$jscomp$393_i$jscomp$220$$ = this.start;
  for (var $G__34421_j$jscomp$64$$ = 0;;) {
    if ($coll$jscomp$393_i$jscomp$220$$ < this.end) {
      var $G__32159$jscomp$inline_616$$ = $G__34421_j$jscomp$64$$, $G__32160$jscomp$inline_617$$ = $cljs$core$_nth$$(this.$v$, $coll$jscomp$393_i$jscomp$220$$);
      $G__32158$jscomp$inline_615_G__34422_init$jscomp$13_init__$1$jscomp$2_init__$2$jscomp$4$$ = $f$jscomp$258$$.$cljs$core$IFn$_invoke$arity$3$ ? $f$jscomp$258$$.$cljs$core$IFn$_invoke$arity$3$($G__32158$jscomp$inline_615_G__34422_init$jscomp$13_init__$1$jscomp$2_init__$2$jscomp$4$$, $G__32159$jscomp$inline_616$$, $G__32160$jscomp$inline_617$$) : $f$jscomp$258$$.call(null, $G__32158$jscomp$inline_615_G__34422_init$jscomp$13_init__$1$jscomp$2_init__$2$jscomp$4$$, $G__32159$jscomp$inline_616$$, $G__32160$jscomp$inline_617$$);
      if ($cljs$core$reduced_QMARK_$$($G__32158$jscomp$inline_615_G__34422_init$jscomp$13_init__$1$jscomp$2_init__$2$jscomp$4$$)) {
        return $cljs$core$_deref$$($G__32158$jscomp$inline_615_G__34422_init$jscomp$13_init__$1$jscomp$2_init__$2$jscomp$4$$);
      }
      $G__34421_j$jscomp$64$$ += 1;
      $coll$jscomp$393_i$jscomp$220$$ += 1;
    } else {
      return $G__32158$jscomp$inline_615_G__34422_init$jscomp$13_init__$1$jscomp$2_init__$2$jscomp$4$$;
    }
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$2$ = function($coll$jscomp$394$$, $n$jscomp$104$$) {
  return 0 > $n$jscomp$104$$ || this.end <= this.start + $n$jscomp$104$$ ? $cljs$core$vector_index_out_of_bounds$$($n$jscomp$104$$, this.end - this.start) : $cljs$core$_nth$$(this.$v$, this.start + $n$jscomp$104$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$3$ = function($coll$jscomp$395$$, $n$jscomp$105$$, $not_found$jscomp$18$$) {
  return 0 > $n$jscomp$105$$ || this.end <= this.start + $n$jscomp$105$$ ? $not_found$jscomp$18$$ : $cljs$core$_nth$$(this.$v$, this.start + $n$jscomp$105$$, $not_found$jscomp$18$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IVector$_assoc_n$arity$3$ = function($G__32164_coll$jscomp$396_v_pos_y__4296__auto__$jscomp$inline_620$$, $G__32161_n$jscomp$106$$, $G__32162_val$jscomp$77$$) {
  $G__32164_coll$jscomp$396_v_pos_y__4296__auto__$jscomp$inline_620$$ = this.start + $G__32161_n$jscomp$106$$;
  if (0 > $G__32161_n$jscomp$106$$ || this.end + 1 <= $G__32164_coll$jscomp$396_v_pos_y__4296__auto__$jscomp$inline_620$$) {
    throw Error(["Index ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__32161_n$jscomp$106$$), " out of bounds [0,", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(this.$cljs$core$ICounted$_count$arity$1$(null)), "]"].join(""));
  }
  $G__32161_n$jscomp$106$$ = this.$meta$;
  $G__32162_val$jscomp$77$$ = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$(this.$v$, $G__32164_coll$jscomp$396_v_pos_y__4296__auto__$jscomp$inline_620$$, $G__32162_val$jscomp$77$$);
  var $G__32163$$ = this.start, $x__4295__auto__$jscomp$inline_619$$ = this.end;
  $G__32164_coll$jscomp$396_v_pos_y__4296__auto__$jscomp$inline_620$$ += 1;
  $G__32164_coll$jscomp$396_v_pos_y__4296__auto__$jscomp$inline_620$$ = $x__4295__auto__$jscomp$inline_619$$ > $G__32164_coll$jscomp$396_v_pos_y__4296__auto__$jscomp$inline_620$$ ? $x__4295__auto__$jscomp$inline_619$$ : $G__32164_coll$jscomp$396_v_pos_y__4296__auto__$jscomp$inline_620$$;
  return $cljs$core$build_subvec$$.$cljs$core$IFn$_invoke$arity$5$ ? $cljs$core$build_subvec$$.$cljs$core$IFn$_invoke$arity$5$($G__32161_n$jscomp$106$$, $G__32162_val$jscomp$77$$, $G__32163$$, $G__32164_coll$jscomp$396_v_pos_y__4296__auto__$jscomp$inline_620$$, null) : $cljs$core$build_subvec$$.call(null, $G__32161_n$jscomp$106$$, $G__32162_val$jscomp$77$$, $G__32163$$, $G__32164_coll$jscomp$396_v_pos_y__4296__auto__$jscomp$inline_620$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIterable$_iterator$arity$1$ = function() {
  return null != this.$v$ && $cljs$core$PROTOCOL_SENTINEL$$ === this.$v$.$cljs$core$APersistentVector$$ ? $cljs$core$ranged_iterator$$(this.$v$, this.start, this.end) : new $cljs$core$SeqIter$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return this.end - this.start;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IStack$_peek$arity$1$ = function() {
  return this.start === this.end ? null : $cljs$core$_nth$$(this.$v$, this.end - 1);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IStack$_pop$arity$1$ = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  var $G__32167$$ = this.$meta$, $G__32168$$ = this.$v$, $G__32169$$ = this.start, $G__32170$$ = this.end - 1;
  return $cljs$core$build_subvec$$.$cljs$core$IFn$_invoke$arity$5$ ? $cljs$core$build_subvec$$.$cljs$core$IFn$_invoke$arity$5$($G__32167$$, $G__32168$$, $G__32169$$, $G__32170$$, null) : $cljs$core$build_subvec$$.call(null, $G__32167$$, $G__32168$$, $G__32169$$, $G__32170$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4319__auto__$jscomp$9_h__4319__auto____$1$jscomp$9$$ = this.$__hash$;
  return null != $h__4319__auto__$jscomp$9_h__4319__auto____$1$jscomp$9$$ ? $h__4319__auto__$jscomp$9_h__4319__auto____$1$jscomp$9$$ : this.$__hash$ = $h__4319__auto__$jscomp$9_h__4319__auto____$1$jscomp$9$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$404$$, $other$jscomp$76$$) {
  return $cljs$core$equiv_sequential$$(this, $other$jscomp$76$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$_with_meta$$($cljs$core$PersistentVector$EMPTY$$, this.$meta$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$406$$, $f$jscomp$259$$) {
  return null != this.$v$ && $cljs$core$PROTOCOL_SENTINEL$$ === this.$v$.$cljs$core$APersistentVector$$ ? $cljs$core$pv_reduce$cljs$0core$0IFn$0_invoke$0arity$04$$(this.$v$, $f$jscomp$259$$, this.start, this.end) : $cljs$core$ci_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$(this, $f$jscomp$259$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$jscomp$407$$, $f$jscomp$260$$, $init$jscomp$14$$) {
  return null != this.$v$ && $cljs$core$PROTOCOL_SENTINEL$$ === this.$v$.$cljs$core$APersistentVector$$ ? $cljs$core$pv_reduce$cljs$0core$0IFn$0_invoke$0arity$05$$(this.$v$, $f$jscomp$260$$, $init$jscomp$14$$, this.start, this.end) : $cljs$core$ci_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $f$jscomp$260$$, $init$jscomp$14$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IAssociative$_assoc$arity$3$ = function($coll$jscomp$408$$, $key$jscomp$127$$, $val$jscomp$78$$) {
  if ("number" === typeof $key$jscomp$127$$) {
    return this.$cljs$core$IVector$_assoc_n$arity$3$(null, $key$jscomp$127$$, $val$jscomp$78$$);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
$JSCompiler_prototypeAlias$$.$cljs$core$IAssociative$_contains_key_QMARK_$arity$2$ = function($coll$jscomp$409$$, $key$jscomp$128$$) {
  return $cljs$core$integer_QMARK_$$($key$jscomp$128$$) ? 0 <= $key$jscomp$128$$ && $key$jscomp$128$$ < this.end - this.start : !1;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  var $self__$jscomp$416$$ = this;
  return function $cljs$core$subvec_seq$$($i$jscomp$221$$) {
    return $i$jscomp$221$$ === $self__$jscomp$416$$.end ? null : $cljs$core$cons$$($cljs$core$_nth$$($self__$jscomp$416$$.$v$, $i$jscomp$221$$), new $cljs$core$LazySeq$$(null, function() {
      return $cljs$core$subvec_seq$$($i$jscomp$221$$ + 1);
    }, null));
  }($self__$jscomp$416$$.start);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$411$$, $new_meta$jscomp$15$$) {
  return $new_meta$jscomp$15$$ === this.$meta$ ? this : $cljs$core$build_subvec$$.$cljs$core$IFn$_invoke$arity$5$ ? $cljs$core$build_subvec$$.$cljs$core$IFn$_invoke$arity$5$($new_meta$jscomp$15$$, this.$v$, this.start, this.end, this.$__hash$) : $cljs$core$build_subvec$$.call(null, $new_meta$jscomp$15$$, this.$v$, this.start, this.end, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($G__32174_coll$jscomp$412$$, $G__32175_o$jscomp$117$$) {
  $G__32174_coll$jscomp$412$$ = this.$meta$;
  $G__32175_o$jscomp$117$$ = $cljs$core$_assoc_n$$(this.$v$, this.end, $G__32175_o$jscomp$117$$);
  var $G__32176$$ = this.start, $G__32177$$ = this.end + 1;
  return $cljs$core$build_subvec$$.$cljs$core$IFn$_invoke$arity$5$ ? $cljs$core$build_subvec$$.$cljs$core$IFn$_invoke$arity$5$($G__32174_coll$jscomp$412$$, $G__32175_o$jscomp$117$$, $G__32176$$, $G__32177$$, null) : $cljs$core$build_subvec$$.call(null, $G__32174_coll$jscomp$412$$, $G__32175_o$jscomp$117$$, $G__32176$$, $G__32177$$, null);
};
$JSCompiler_prototypeAlias$$.call = function($unused__9507__auto__$jscomp$5$$) {
  switch(arguments.length - 1) {
    case 1:
      return this.$cljs$core$IFn$_invoke$arity$1$(arguments[1]);
    case 2:
      return this.$cljs$core$IFn$_invoke$arity$2$(arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length - 1)].join(""));
  }
};
$JSCompiler_prototypeAlias$$.apply = function($self__$jscomp$420$$, $args32157$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args32157$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($k$jscomp$93$$) {
  return this.$cljs$core$IIndexed$_nth$arity$2$(null, $k$jscomp$93$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($k$jscomp$94$$, $not_found$jscomp$19$$) {
  return this.$cljs$core$IIndexed$_nth$arity$3$(null, $k$jscomp$94$$, $not_found$jscomp$19$$);
};
$cljs$core$Subvec$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$build_subvec$$($meta$jscomp$35$$, $v$jscomp$29$$, $G__34426_start$jscomp$83$$, $G__34427_end$jscomp$25$$, $G__34428___hash$jscomp$16$$) {
  for (;;) {
    if ($v$jscomp$29$$ instanceof $cljs$core$Subvec$$) {
      $G__34426_start$jscomp$83$$ = $v$jscomp$29$$.start + $G__34426_start$jscomp$83$$, $G__34427_end$jscomp$25$$ = $v$jscomp$29$$.start + $G__34427_end$jscomp$25$$, $v$jscomp$29$$ = $v$jscomp$29$$.$v$;
    } else {
      if (!$cljs$core$vector_QMARK_$$($v$jscomp$29$$)) {
        throw Error("v must satisfy IVector");
      }
      if (0 > $G__34426_start$jscomp$83$$ || $G__34427_end$jscomp$25$$ < $G__34426_start$jscomp$83$$ || $G__34427_end$jscomp$25$$ > $cljs$core$count$$($v$jscomp$29$$)) {
        throw Error("Index out of bounds");
      }
      return new $cljs$core$Subvec$$($meta$jscomp$35$$, $v$jscomp$29$$, $G__34426_start$jscomp$83$$, $G__34427_end$jscomp$25$$, $G__34428___hash$jscomp$16$$);
    }
  }
}
function $cljs$core$tv_ensure_editable$$($edit$jscomp$4$$, $node$jscomp$20$$) {
  return $edit$jscomp$4$$ === $node$jscomp$20$$.$edit$ ? $node$jscomp$20$$ : new $cljs$core$VectorNode$$($edit$jscomp$4$$, $cljs$core$aclone$$($node$jscomp$20$$.$arr$));
}
function $cljs$core$tv_editable_root$$($node$jscomp$21$$) {
  return new $cljs$core$VectorNode$$({}, $cljs$core$aclone$$($node$jscomp$21$$.$arr$));
}
function $cljs$core$tv_editable_tail$$($tl$$) {
  var $ret$jscomp$24$$ = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  $cljs$core$array_copy$$($tl$$, 0, $ret$jscomp$24$$, 0, $tl$$.length);
  return $ret$jscomp$24$$;
}
var $cljs$core$tv_push_tail$$ = function $cljs$core$tv_push_tail$$($JSCompiler_temp$jscomp$88_tv$$, $G__32185$jscomp$inline_627_level$jscomp$25$$, $parent$jscomp$5_ret$jscomp$25$$, $tail_node$$) {
  $parent$jscomp$5_ret$jscomp$25$$ = $cljs$core$tv_ensure_editable$$($JSCompiler_temp$jscomp$88_tv$$.root.$edit$, $parent$jscomp$5_ret$jscomp$25$$);
  var $subidx$jscomp$3$$ = $JSCompiler_temp$jscomp$88_tv$$.$cnt$ - 1 >>> $G__32185$jscomp$inline_627_level$jscomp$25$$ & 31;
  if (5 === $G__32185$jscomp$inline_627_level$jscomp$25$$) {
    $JSCompiler_temp$jscomp$88_tv$$ = $tail_node$$;
  } else {
    var $child$jscomp$inline_626$$ = $parent$jscomp$5_ret$jscomp$25$$.$arr$[$subidx$jscomp$3$$];
    null != $child$jscomp$inline_626$$ ? ($G__32185$jscomp$inline_627_level$jscomp$25$$ -= 5, $JSCompiler_temp$jscomp$88_tv$$ = $cljs$core$tv_push_tail$$.$cljs$core$IFn$_invoke$arity$4$ ? $cljs$core$tv_push_tail$$.$cljs$core$IFn$_invoke$arity$4$($JSCompiler_temp$jscomp$88_tv$$, $G__32185$jscomp$inline_627_level$jscomp$25$$, $child$jscomp$inline_626$$, $tail_node$$) : $cljs$core$tv_push_tail$$.call(null, $JSCompiler_temp$jscomp$88_tv$$, $G__32185$jscomp$inline_627_level$jscomp$25$$, $child$jscomp$inline_626$$, 
    $tail_node$$)) : $JSCompiler_temp$jscomp$88_tv$$ = $cljs$core$new_path$$($JSCompiler_temp$jscomp$88_tv$$.root.$edit$, $G__32185$jscomp$inline_627_level$jscomp$25$$ - 5, $tail_node$$);
  }
  $parent$jscomp$5_ret$jscomp$25$$.$arr$[$subidx$jscomp$3$$] = $JSCompiler_temp$jscomp$88_tv$$;
  return $parent$jscomp$5_ret$jscomp$25$$;
};
function $cljs$core$TransientVector$$($cnt$jscomp$9$$, $shift$jscomp$2$$, $root$jscomp$7$$, $tail$jscomp$2$$) {
  this.$cnt$ = $cnt$jscomp$9$$;
  this.shift = $shift$jscomp$2$$;
  this.root = $root$jscomp$7$$;
  this.$tail$ = $tail$jscomp$2$$;
  this.$cljs$lang$protocol_mask$partition1$$ = 88;
  this.$cljs$lang$protocol_mask$partition0$$ = 275;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$TransientVector$$.prototype;
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientCollection$_conj_BANG_$arity$2$ = function($tail_node$jscomp$1_tcoll$jscomp$25$$, $new_root_array_o$jscomp$118$$) {
  if (this.root.$edit$) {
    if (32 > this.$cnt$ - $cljs$core$tail_off$$(this)) {
      this.$tail$[this.$cnt$ & 31] = $new_root_array_o$jscomp$118$$;
    } else {
      $tail_node$jscomp$1_tcoll$jscomp$25$$ = new $cljs$core$VectorNode$$(this.root.$edit$, this.$tail$);
      var $new_shift$jscomp$1_new_tail$jscomp$3$$ = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      $new_shift$jscomp$1_new_tail$jscomp$3$$[0] = $new_root_array_o$jscomp$118$$;
      this.$tail$ = $new_shift$jscomp$1_new_tail$jscomp$3$$;
      this.$cnt$ >>> 5 > 1 << this.shift ? ($new_root_array_o$jscomp$118$$ = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], $new_shift$jscomp$1_new_tail$jscomp$3$$ = this.shift + 5, $new_root_array_o$jscomp$118$$[0] = this.root, $new_root_array_o$jscomp$118$$[1] = $cljs$core$new_path$$(this.root.$edit$, this.shift, $tail_node$jscomp$1_tcoll$jscomp$25$$), 
      this.root = new $cljs$core$VectorNode$$(this.root.$edit$, $new_root_array_o$jscomp$118$$), this.shift = $new_shift$jscomp$1_new_tail$jscomp$3$$) : this.root = $cljs$core$tv_push_tail$$(this, this.shift, this.root, $tail_node$jscomp$1_tcoll$jscomp$25$$);
    }
    this.$cnt$ += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientCollection$_persistent_BANG_$arity$1$ = function() {
  if (this.root.$edit$) {
    this.root.$edit$ = null;
    var $len$jscomp$20$$ = this.$cnt$ - $cljs$core$tail_off$$(this), $trimmed_tail$$ = Array($len$jscomp$20$$);
    $cljs$core$array_copy$$(this.$tail$, 0, $trimmed_tail$$, 0, $len$jscomp$20$$);
    return new $cljs$core$PersistentVector$$(null, this.$cnt$, this.shift, this.root, $trimmed_tail$$, null);
  }
  throw Error("persistent! called twice");
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientAssociative$_assoc_BANG_$arity$3$ = function($tcoll$jscomp$27$$, $key$jscomp$129$$, $val$jscomp$79$$) {
  if ("number" === typeof $key$jscomp$129$$) {
    return $JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$$(this, $key$jscomp$129$$, $val$jscomp$79$$);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
function $JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$$($JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$self$$, $n$jscomp$107$$, $val$jscomp$80$$) {
  if ($JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$self$$.root.$edit$) {
    if (0 <= $n$jscomp$107$$ && $n$jscomp$107$$ < $JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$self$$.$cnt$) {
      if ($cljs$core$tail_off$$($JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$self$$) <= $n$jscomp$107$$) {
        $JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$self$$.$tail$[$n$jscomp$107$$ & 31] = $val$jscomp$80$$;
      } else {
        var $new_root$jscomp$3$$ = function $cljs$core$go$$($level$jscomp$28_val$jscomp$inline_1147$$, $node$jscomp$24_node__$1$jscomp$1$$) {
          $node$jscomp$24_node__$1$jscomp$1$$ = $cljs$core$tv_ensure_editable$$($JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$self$$.root.$edit$, $node$jscomp$24_node__$1$jscomp$1$$);
          if (0 === $level$jscomp$28_val$jscomp$inline_1147$$) {
            $node$jscomp$24_node__$1$jscomp$1$$.$arr$[$n$jscomp$107$$ & 31] = $val$jscomp$80$$;
          } else {
            var $subidx$jscomp$5$$ = $n$jscomp$107$$ >>> $level$jscomp$28_val$jscomp$inline_1147$$ & 31;
            $level$jscomp$28_val$jscomp$inline_1147$$ = $cljs$core$go$$($level$jscomp$28_val$jscomp$inline_1147$$ - 5, $node$jscomp$24_node__$1$jscomp$1$$.$arr$[$subidx$jscomp$5$$]);
            $node$jscomp$24_node__$1$jscomp$1$$.$arr$[$subidx$jscomp$5$$] = $level$jscomp$28_val$jscomp$inline_1147$$;
          }
          return $node$jscomp$24_node__$1$jscomp$1$$;
        }($JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$self$$.shift, $JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$self$$.root);
        $JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$self$$.root = $new_root$jscomp$3$$;
      }
      return $JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$self$$;
    }
    if ($n$jscomp$107$$ === $JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$self$$.$cnt$) {
      return $JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$self$$.$cljs$core$ITransientCollection$_conj_BANG_$arity$2$(null, $val$jscomp$80$$);
    }
    throw Error(["Index ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$107$$), " out of bounds for TransientVector of length", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_StaticMethods_cljs$core$ITransientVector$_assoc_n_BANG_$arity$3$self$$.$cnt$)].join(""));
  }
  throw Error("assoc! after persistent!");
}
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  if (this.root.$edit$) {
    return this.$cnt$;
  }
  throw Error("count after persistent!");
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$2$ = function($coll$jscomp$416$$, $n$jscomp$108$$) {
  if (this.root.$edit$) {
    return $cljs$core$array_for$$(this, $n$jscomp$108$$)[$n$jscomp$108$$ & 31];
  }
  throw Error("nth after persistent!");
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$3$ = function($coll$jscomp$417$$, $n$jscomp$109$$, $not_found$jscomp$20$$) {
  return 0 <= $n$jscomp$109$$ && $n$jscomp$109$$ < this.$cnt$ ? this.$cljs$core$IIndexed$_nth$arity$2$(null, $n$jscomp$109$$) : $not_found$jscomp$20$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($coll$jscomp$418$$, $k$jscomp$95$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$95$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($coll$jscomp$419$$, $k$jscomp$96$$, $not_found$jscomp$21$$) {
  if (this.root.$edit$) {
    return "number" === typeof $k$jscomp$96$$ ? this.$cljs$core$IIndexed$_nth$arity$3$(null, $k$jscomp$96$$, $not_found$jscomp$21$$) : $not_found$jscomp$21$$;
  }
  throw Error("lookup after persistent!");
};
$JSCompiler_prototypeAlias$$.call = function($unused__9507__auto__$jscomp$6$$) {
  switch(arguments.length - 1) {
    case 1:
      return this.$cljs$core$IFn$_invoke$arity$1$(arguments[1]);
    case 2:
      return this.$cljs$core$IFn$_invoke$arity$2$(arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length - 1)].join(""));
  }
};
$JSCompiler_prototypeAlias$$.apply = function($self__$jscomp$434$$, $args32191$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args32191$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($k$jscomp$97$$) {
  return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$jscomp$97$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($k$jscomp$98$$, $not_found$jscomp$22$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$98$$, $not_found$jscomp$22$$);
};
function $cljs$core$NeverEquiv$$() {
  this.$cljs$lang$protocol_mask$partition0$$ = 2097152;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$cljs$core$NeverEquiv$$.prototype.$cljs$core$IEquiv$_equiv$arity$2$ = function() {
  return !1;
};
var $cljs$core$never_equiv$$ = new $cljs$core$NeverEquiv$$;
function $cljs$core$equiv_map$$($x$jscomp$510$$, $y$jscomp$231$$) {
  return $cljs$core$boolean$0$$($cljs$core$map_QMARK_$$($y$jscomp$231$$) && !$cljs$core$record_QMARK_$$($y$jscomp$231$$) ? $cljs$core$count$$($x$jscomp$510$$) === $cljs$core$count$$($y$jscomp$231$$) ? (null != $x$jscomp$510$$ ? $x$jscomp$510$$.$cljs$lang$protocol_mask$partition0$$ & 1048576 || $cljs$core$PROTOCOL_SENTINEL$$ === $x$jscomp$510$$.$cljs$core$IKVReduce$$ || ($x$jscomp$510$$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IKVReduce$$, $x$jscomp$510$$)) : 
  $cljs$core$native_satisfies_QMARK_$$($cljs$core$IKVReduce$$, $x$jscomp$510$$)) ? $cljs$core$reduce_kv$$(function($_$jscomp$111$$, $k$jscomp$99$$, $v$jscomp$32$$) {
    return $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$get$$.$cljs$core$IFn$_invoke$arity$3$($y$jscomp$231$$, $k$jscomp$99$$, $cljs$core$never_equiv$$), $v$jscomp$32$$) ? !0 : new $cljs$core$Reduced$$;
  }, !0, $x$jscomp$510$$) : $cljs$core$every_QMARK_$$(function($xkv$$) {
    return $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$get$$.$cljs$core$IFn$_invoke$arity$3$($y$jscomp$231$$, $cljs$core$first$$($xkv$$), $cljs$core$never_equiv$$), $cljs$core$first$$($cljs$core$next$$($xkv$$)));
  }, $x$jscomp$510$$) : null : null);
}
function $cljs$core$ES6EntriesIterator$$($s$jscomp$87$$) {
  this.$s$ = $s$jscomp$87$$;
}
$cljs$core$ES6EntriesIterator$$.prototype.next = function() {
  if (null != this.$s$) {
    var $v$jscomp$35_vec__32204$$ = $cljs$core$first$$(this.$s$), $k$jscomp$112$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($v$jscomp$35_vec__32204$$, 0, null);
    $v$jscomp$35_vec__32204$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($v$jscomp$35_vec__32204$$, 1, null);
    this.$s$ = $cljs$core$next$$(this.$s$);
    return {value:[$k$jscomp$112$$, $v$jscomp$35_vec__32204$$], done:!1};
  }
  return {value:null, done:!0};
};
function $cljs$core$ES6SetEntriesIterator$$($s$jscomp$89$$) {
  this.$s$ = $s$jscomp$89$$;
}
$cljs$core$ES6SetEntriesIterator$$.prototype.next = function() {
  if (null != this.$s$) {
    var $x$jscomp$511$$ = $cljs$core$first$$(this.$s$);
    this.$s$ = $cljs$core$next$$(this.$s$);
    return {value:[$x$jscomp$511$$, $x$jscomp$511$$], done:!1};
  }
  return {value:null, done:!0};
};
function $cljs$core$array_index_of$$($JSCompiler_temp$jscomp$92_JSCompiler_temp$jscomp$93_JSCompiler_temp$jscomp$94_JSCompiler_temp$jscomp$95_arr$jscomp$101$$, $k$jscomp$117_kstr$jscomp$inline_644_kstr$jscomp$inline_655_len$jscomp$inline_659$$) {
  if ($k$jscomp$117_kstr$jscomp$inline_644_kstr$jscomp$inline_655_len$jscomp$inline_659$$ instanceof $cljs$core$Keyword$$) {
    a: {
      var $i$jscomp$inline_660_len$jscomp$inline_643_len$jscomp$inline_649_len$jscomp$inline_654_len$jscomp$inline_664$$ = $JSCompiler_temp$jscomp$92_JSCompiler_temp$jscomp$93_JSCompiler_temp$jscomp$94_JSCompiler_temp$jscomp$95_arr$jscomp$101$$.length;
      $k$jscomp$117_kstr$jscomp$inline_644_kstr$jscomp$inline_655_len$jscomp$inline_659$$ = $k$jscomp$117_kstr$jscomp$inline_644_kstr$jscomp$inline_655_len$jscomp$inline_659$$.$fqn$;
      for (var $i$jscomp$inline_645_i$jscomp$inline_650_i$jscomp$inline_656_i$jscomp$inline_665$$ = 0;;) {
        if ($i$jscomp$inline_660_len$jscomp$inline_643_len$jscomp$inline_649_len$jscomp$inline_654_len$jscomp$inline_664$$ <= $i$jscomp$inline_645_i$jscomp$inline_650_i$jscomp$inline_656_i$jscomp$inline_665$$) {
          $JSCompiler_temp$jscomp$92_JSCompiler_temp$jscomp$93_JSCompiler_temp$jscomp$94_JSCompiler_temp$jscomp$95_arr$jscomp$101$$ = -1;
          break a;
        }
        if ($JSCompiler_temp$jscomp$92_JSCompiler_temp$jscomp$93_JSCompiler_temp$jscomp$94_JSCompiler_temp$jscomp$95_arr$jscomp$101$$[$i$jscomp$inline_645_i$jscomp$inline_650_i$jscomp$inline_656_i$jscomp$inline_665$$] instanceof $cljs$core$Keyword$$ && $k$jscomp$117_kstr$jscomp$inline_644_kstr$jscomp$inline_655_len$jscomp$inline_659$$ === $JSCompiler_temp$jscomp$92_JSCompiler_temp$jscomp$93_JSCompiler_temp$jscomp$94_JSCompiler_temp$jscomp$95_arr$jscomp$101$$[$i$jscomp$inline_645_i$jscomp$inline_650_i$jscomp$inline_656_i$jscomp$inline_665$$].$fqn$) {
          $JSCompiler_temp$jscomp$92_JSCompiler_temp$jscomp$93_JSCompiler_temp$jscomp$94_JSCompiler_temp$jscomp$95_arr$jscomp$101$$ = $i$jscomp$inline_645_i$jscomp$inline_650_i$jscomp$inline_656_i$jscomp$inline_665$$;
          break a;
        }
        $i$jscomp$inline_645_i$jscomp$inline_650_i$jscomp$inline_656_i$jscomp$inline_665$$ += 2;
      }
    }
  } else {
    if ("string" === typeof $k$jscomp$117_kstr$jscomp$inline_644_kstr$jscomp$inline_655_len$jscomp$inline_659$$ || "number" === typeof $k$jscomp$117_kstr$jscomp$inline_644_kstr$jscomp$inline_655_len$jscomp$inline_659$$) {
      a: {
        for ($i$jscomp$inline_660_len$jscomp$inline_643_len$jscomp$inline_649_len$jscomp$inline_654_len$jscomp$inline_664$$ = $JSCompiler_temp$jscomp$92_JSCompiler_temp$jscomp$93_JSCompiler_temp$jscomp$94_JSCompiler_temp$jscomp$95_arr$jscomp$101$$.length, $i$jscomp$inline_645_i$jscomp$inline_650_i$jscomp$inline_656_i$jscomp$inline_665$$ = 0;;) {
          if ($i$jscomp$inline_660_len$jscomp$inline_643_len$jscomp$inline_649_len$jscomp$inline_654_len$jscomp$inline_664$$ <= $i$jscomp$inline_645_i$jscomp$inline_650_i$jscomp$inline_656_i$jscomp$inline_665$$) {
            $JSCompiler_temp$jscomp$92_JSCompiler_temp$jscomp$93_JSCompiler_temp$jscomp$94_JSCompiler_temp$jscomp$95_arr$jscomp$101$$ = -1;
            break a;
          }
          if ($k$jscomp$117_kstr$jscomp$inline_644_kstr$jscomp$inline_655_len$jscomp$inline_659$$ === $JSCompiler_temp$jscomp$92_JSCompiler_temp$jscomp$93_JSCompiler_temp$jscomp$94_JSCompiler_temp$jscomp$95_arr$jscomp$101$$[$i$jscomp$inline_645_i$jscomp$inline_650_i$jscomp$inline_656_i$jscomp$inline_665$$]) {
            $JSCompiler_temp$jscomp$92_JSCompiler_temp$jscomp$93_JSCompiler_temp$jscomp$94_JSCompiler_temp$jscomp$95_arr$jscomp$101$$ = $i$jscomp$inline_645_i$jscomp$inline_650_i$jscomp$inline_656_i$jscomp$inline_665$$;
            break a;
          }
          $i$jscomp$inline_645_i$jscomp$inline_650_i$jscomp$inline_656_i$jscomp$inline_665$$ += 2;
        }
      }
    } else {
      if ($k$jscomp$117_kstr$jscomp$inline_644_kstr$jscomp$inline_655_len$jscomp$inline_659$$ instanceof $cljs$core$Symbol$$) {
        a: {
          for ($i$jscomp$inline_660_len$jscomp$inline_643_len$jscomp$inline_649_len$jscomp$inline_654_len$jscomp$inline_664$$ = $JSCompiler_temp$jscomp$92_JSCompiler_temp$jscomp$93_JSCompiler_temp$jscomp$94_JSCompiler_temp$jscomp$95_arr$jscomp$101$$.length, $k$jscomp$117_kstr$jscomp$inline_644_kstr$jscomp$inline_655_len$jscomp$inline_659$$ = $k$jscomp$117_kstr$jscomp$inline_644_kstr$jscomp$inline_655_len$jscomp$inline_659$$.$str$, $i$jscomp$inline_645_i$jscomp$inline_650_i$jscomp$inline_656_i$jscomp$inline_665$$ = 
          0;;) {
            if ($i$jscomp$inline_660_len$jscomp$inline_643_len$jscomp$inline_649_len$jscomp$inline_654_len$jscomp$inline_664$$ <= $i$jscomp$inline_645_i$jscomp$inline_650_i$jscomp$inline_656_i$jscomp$inline_665$$) {
              $JSCompiler_temp$jscomp$92_JSCompiler_temp$jscomp$93_JSCompiler_temp$jscomp$94_JSCompiler_temp$jscomp$95_arr$jscomp$101$$ = -1;
              break a;
            }
            if ($JSCompiler_temp$jscomp$92_JSCompiler_temp$jscomp$93_JSCompiler_temp$jscomp$94_JSCompiler_temp$jscomp$95_arr$jscomp$101$$[$i$jscomp$inline_645_i$jscomp$inline_650_i$jscomp$inline_656_i$jscomp$inline_665$$] instanceof $cljs$core$Symbol$$ && $k$jscomp$117_kstr$jscomp$inline_644_kstr$jscomp$inline_655_len$jscomp$inline_659$$ === $JSCompiler_temp$jscomp$92_JSCompiler_temp$jscomp$93_JSCompiler_temp$jscomp$94_JSCompiler_temp$jscomp$95_arr$jscomp$101$$[$i$jscomp$inline_645_i$jscomp$inline_650_i$jscomp$inline_656_i$jscomp$inline_665$$].$str$) {
              $JSCompiler_temp$jscomp$92_JSCompiler_temp$jscomp$93_JSCompiler_temp$jscomp$94_JSCompiler_temp$jscomp$95_arr$jscomp$101$$ = $i$jscomp$inline_645_i$jscomp$inline_650_i$jscomp$inline_656_i$jscomp$inline_665$$;
              break a;
            }
            $i$jscomp$inline_645_i$jscomp$inline_650_i$jscomp$inline_656_i$jscomp$inline_665$$ += 2;
          }
        }
      } else {
        if (null == $k$jscomp$117_kstr$jscomp$inline_644_kstr$jscomp$inline_655_len$jscomp$inline_659$$) {
          a: {
            for ($k$jscomp$117_kstr$jscomp$inline_644_kstr$jscomp$inline_655_len$jscomp$inline_659$$ = $JSCompiler_temp$jscomp$92_JSCompiler_temp$jscomp$93_JSCompiler_temp$jscomp$94_JSCompiler_temp$jscomp$95_arr$jscomp$101$$.length, $i$jscomp$inline_660_len$jscomp$inline_643_len$jscomp$inline_649_len$jscomp$inline_654_len$jscomp$inline_664$$ = 0;;) {
              if ($k$jscomp$117_kstr$jscomp$inline_644_kstr$jscomp$inline_655_len$jscomp$inline_659$$ <= $i$jscomp$inline_660_len$jscomp$inline_643_len$jscomp$inline_649_len$jscomp$inline_654_len$jscomp$inline_664$$) {
                $JSCompiler_temp$jscomp$92_JSCompiler_temp$jscomp$93_JSCompiler_temp$jscomp$94_JSCompiler_temp$jscomp$95_arr$jscomp$101$$ = -1;
                break a;
              }
              if (null == $JSCompiler_temp$jscomp$92_JSCompiler_temp$jscomp$93_JSCompiler_temp$jscomp$94_JSCompiler_temp$jscomp$95_arr$jscomp$101$$[$i$jscomp$inline_660_len$jscomp$inline_643_len$jscomp$inline_649_len$jscomp$inline_654_len$jscomp$inline_664$$]) {
                $JSCompiler_temp$jscomp$92_JSCompiler_temp$jscomp$93_JSCompiler_temp$jscomp$94_JSCompiler_temp$jscomp$95_arr$jscomp$101$$ = $i$jscomp$inline_660_len$jscomp$inline_643_len$jscomp$inline_649_len$jscomp$inline_654_len$jscomp$inline_664$$;
                break a;
              }
              $i$jscomp$inline_660_len$jscomp$inline_643_len$jscomp$inline_649_len$jscomp$inline_654_len$jscomp$inline_664$$ += 2;
            }
          }
        } else {
          a: {
            for ($i$jscomp$inline_660_len$jscomp$inline_643_len$jscomp$inline_649_len$jscomp$inline_654_len$jscomp$inline_664$$ = $JSCompiler_temp$jscomp$92_JSCompiler_temp$jscomp$93_JSCompiler_temp$jscomp$94_JSCompiler_temp$jscomp$95_arr$jscomp$101$$.length, $i$jscomp$inline_645_i$jscomp$inline_650_i$jscomp$inline_656_i$jscomp$inline_665$$ = 0;;) {
              if ($i$jscomp$inline_660_len$jscomp$inline_643_len$jscomp$inline_649_len$jscomp$inline_654_len$jscomp$inline_664$$ <= $i$jscomp$inline_645_i$jscomp$inline_650_i$jscomp$inline_656_i$jscomp$inline_665$$) {
                $JSCompiler_temp$jscomp$92_JSCompiler_temp$jscomp$93_JSCompiler_temp$jscomp$94_JSCompiler_temp$jscomp$95_arr$jscomp$101$$ = -1;
                break a;
              }
              if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($k$jscomp$117_kstr$jscomp$inline_644_kstr$jscomp$inline_655_len$jscomp$inline_659$$, $JSCompiler_temp$jscomp$92_JSCompiler_temp$jscomp$93_JSCompiler_temp$jscomp$94_JSCompiler_temp$jscomp$95_arr$jscomp$101$$[$i$jscomp$inline_645_i$jscomp$inline_650_i$jscomp$inline_656_i$jscomp$inline_665$$])) {
                $JSCompiler_temp$jscomp$92_JSCompiler_temp$jscomp$93_JSCompiler_temp$jscomp$94_JSCompiler_temp$jscomp$95_arr$jscomp$101$$ = $i$jscomp$inline_645_i$jscomp$inline_650_i$jscomp$inline_656_i$jscomp$inline_665$$;
                break a;
              }
              $i$jscomp$inline_645_i$jscomp$inline_650_i$jscomp$inline_656_i$jscomp$inline_665$$ += 2;
            }
          }
        }
      }
    }
  }
  return $JSCompiler_temp$jscomp$92_JSCompiler_temp$jscomp$93_JSCompiler_temp$jscomp$94_JSCompiler_temp$jscomp$95_arr$jscomp$101$$;
}
function $cljs$core$MapEntry$$($key$jscomp$130$$, $val$jscomp$81$$) {
  this.key = $key$jscomp$130$$;
  this.$val$ = $val$jscomp$81$$;
  this.$__hash$ = null;
  this.$cljs$lang$protocol_mask$partition0$$ = 166619935;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$MapEntry$$.prototype;
$JSCompiler_prototypeAlias$$.$cljs$core$IFind$_find$arity$2$ = function($node$jscomp$25$$, $k$jscomp$121$$) {
  switch($k$jscomp$121$$) {
    case 0:
      return new $cljs$core$MapEntry$$(0, this.key);
    case 1:
      return new $cljs$core$MapEntry$$(1, this.$val$);
    default:
      return null;
  }
};
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__34454$$ = null;
  $G__34454$$ = function($x$jscomp$514$$, $start$jscomp$95$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$514$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$514$$, $start$jscomp$95$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__34454$$.$cljs$core$IFn$_invoke$arity$1$ = function($x$jscomp$512$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$512$$, 0);
  };
  $G__34454$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$513$$, $start$jscomp$94$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$513$$, $start$jscomp$94$$);
  };
  return $G__34454$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__34455__1$$($x$jscomp$515$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$515$$, $cljs$core$count$$(this));
  }
  var $G__34455$$ = null;
  $G__34455$$ = function($x$jscomp$517$$, $start$jscomp$97$$) {
    switch(arguments.length) {
      case 1:
        return $G__34455__1$$.call(this, $x$jscomp$517$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$517$$, $start$jscomp$97$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__34455$$.$cljs$core$IFn$_invoke$arity$1$ = $G__34455__1$$;
  $G__34455$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$516$$, $start$jscomp$96$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$516$$, $start$jscomp$96$$);
  };
  return $G__34455$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($node$jscomp$26$$, $k$jscomp$122$$) {
  return this.$cljs$core$IIndexed$_nth$arity$3$(null, $k$jscomp$122$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($node$jscomp$27$$, $k$jscomp$123$$, $not_found$jscomp$25$$) {
  return this.$cljs$core$IIndexed$_nth$arity$3$(null, $k$jscomp$123$$, $not_found$jscomp$25$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$2$ = function($node$jscomp$28$$, $n$jscomp$110$$) {
  if (0 === $n$jscomp$110$$) {
    return this.key;
  }
  if (1 === $n$jscomp$110$$) {
    return this.$val$;
  }
  throw Error("Index out of bounds");
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIndexed$_nth$arity$3$ = function($node$jscomp$29$$, $n$jscomp$111$$, $not_found$jscomp$26$$) {
  return 0 === $n$jscomp$111$$ ? this.key : 1 === $n$jscomp$111$$ ? this.$val$ : $not_found$jscomp$26$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IVector$_assoc_n$arity$3$ = function($node$jscomp$30$$, $n$jscomp$112$$, $v$jscomp$38$$) {
  return (new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [this.key, this.$val$], null)).$cljs$core$IVector$_assoc_n$arity$3$(null, $n$jscomp$112$$, $v$jscomp$38$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return 2;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMapEntry$_key$arity$1$ = function() {
  return this.key;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMapEntry$_val$arity$1$ = function() {
  return this.$val$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IStack$_peek$arity$1$ = function() {
  return this.$val$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IStack$_pop$arity$1$ = function() {
  return new $cljs$core$PersistentVector$$(null, 1, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [this.key], null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4319__auto__$jscomp$13_h__4319__auto____$1$jscomp$13$$ = this.$__hash$;
  return null != $h__4319__auto__$jscomp$13_h__4319__auto____$1$jscomp$13$$ ? $h__4319__auto__$jscomp$13_h__4319__auto____$1$jscomp$13$$ : this.$__hash$ = $h__4319__auto__$jscomp$13_h__4319__auto____$1$jscomp$13$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$482$$, $other$jscomp$85$$) {
  return $cljs$core$equiv_sequential$$(this, $other$jscomp$85$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($node$jscomp$39$$, $f$jscomp$262$$) {
  return $cljs$core$ci_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$(this, $f$jscomp$262$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($node$jscomp$40$$, $f$jscomp$263$$, $start$jscomp$98$$) {
  return $cljs$core$ci_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $f$jscomp$263$$, $start$jscomp$98$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IAssociative$_assoc$arity$3$ = function($node$jscomp$41$$, $k$jscomp$124$$, $v$jscomp$39$$) {
  return $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$(new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [this.key, this.$val$], null), $k$jscomp$124$$, $v$jscomp$39$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IAssociative$_contains_key_QMARK_$arity$2$ = function($node$jscomp$42$$, $k$jscomp$125$$) {
  return 0 === $k$jscomp$125$$ || 1 === $k$jscomp$125$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return new $cljs$core$IndexedSeq$$([this.key, this.$val$], 0, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($node$jscomp$44$$, $meta$jscomp$42$$) {
  return $cljs$core$with_meta$$(new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [this.key, this.$val$], null), $meta$jscomp$42$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($node$jscomp$45$$, $o$jscomp$122$$) {
  return new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [this.key, this.$val$, $o$jscomp$122$$], null);
};
$JSCompiler_prototypeAlias$$.call = function($unused__9507__auto__$jscomp$8$$) {
  switch(arguments.length - 1) {
    case 1:
      return this.$cljs$core$IFn$_invoke$arity$1$(arguments[1]);
    case 2:
      return this.$cljs$core$IFn$_invoke$arity$2$(arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length - 1)].join(""));
  }
};
$JSCompiler_prototypeAlias$$.apply = function($self__$jscomp$533$$, $args32207$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args32207$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($k$jscomp$126$$) {
  return this.$cljs$core$IIndexed$_nth$arity$2$(null, $k$jscomp$126$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($k$jscomp$127$$, $not_found$jscomp$27$$) {
  return this.$cljs$core$IIndexed$_nth$arity$3$(null, $k$jscomp$127$$, $not_found$jscomp$27$$);
};
function $cljs$core$map_entry_QMARK_$$($x$jscomp$518$$) {
  return null != $x$jscomp$518$$ ? $x$jscomp$518$$.$cljs$lang$protocol_mask$partition0$$ & 2048 || $cljs$core$PROTOCOL_SENTINEL$$ === $x$jscomp$518$$.$cljs$core$IMapEntry$$ ? !0 : !1 : !1;
}
function $cljs$core$PersistentArrayMapSeq$$($arr$jscomp$103$$, $i$jscomp$232$$, $_meta$jscomp$4$$) {
  this.$arr$ = $arr$jscomp$103$$;
  this.$i$ = $i$jscomp$232$$;
  this.$_meta$ = $_meta$jscomp$4$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 32374990;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$PersistentArrayMapSeq$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__34457$$ = null;
  $G__34457$$ = function($x$jscomp$521$$, $start$jscomp$100$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$521$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$521$$, $start$jscomp$100$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__34457$$.$cljs$core$IFn$_invoke$arity$1$ = function($x$jscomp$519$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$519$$, 0);
  };
  $G__34457$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$520$$, $start$jscomp$99$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$520$$, $start$jscomp$99$$);
  };
  return $G__34457$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__34458__1$$($x$jscomp$522$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$522$$, $cljs$core$count$$(this));
  }
  var $G__34458$$ = null;
  $G__34458$$ = function($x$jscomp$524$$, $start$jscomp$102$$) {
    switch(arguments.length) {
      case 1:
        return $G__34458__1$$.call(this, $x$jscomp$524$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$524$$, $start$jscomp$102$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__34458$$.$cljs$core$IFn$_invoke$arity$1$ = $G__34458__1$$;
  $G__34458$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$523$$, $start$jscomp$101$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$523$$, $start$jscomp$101$$);
  };
  return $G__34458$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$_meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  return this.$i$ < this.$arr$.length - 2 ? new $cljs$core$PersistentArrayMapSeq$$(this.$arr$, this.$i$ + 2, null) : null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return (this.$arr$.length - this.$i$) / 2;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  return $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$492$$, $other$jscomp$87$$) {
  return $cljs$core$equiv_sequential$$(this, $other$jscomp$87$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$494$$, $f$jscomp$264$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$264$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$jscomp$495$$, $f$jscomp$265$$, $start$jscomp$103$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$265$$, $start$jscomp$103$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return new $cljs$core$MapEntry$$(this.$arr$[this.$i$], this.$arr$[this.$i$ + 1]);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  return this.$i$ < this.$arr$.length - 2 ? new $cljs$core$PersistentArrayMapSeq$$(this.$arr$, this.$i$ + 2, null) : $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$499$$, $new_meta$jscomp$19$$) {
  return $new_meta$jscomp$19$$ === this.$_meta$ ? this : new $cljs$core$PersistentArrayMapSeq$$(this.$arr$, this.$i$, $new_meta$jscomp$19$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$500$$, $o$jscomp$123$$) {
  return $cljs$core$cons$$($o$jscomp$123$$, this);
};
$cljs$core$PersistentArrayMapSeq$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$PersistentArrayMapIterator$$($arr$jscomp$106$$, $cnt$jscomp$11$$) {
  this.$arr$ = $arr$jscomp$106$$;
  this.$i$ = 0;
  this.$cnt$ = $cnt$jscomp$11$$;
}
$cljs$core$PersistentArrayMapIterator$$.prototype.$hasNext$ = function() {
  return this.$i$ < this.$cnt$;
};
$cljs$core$PersistentArrayMapIterator$$.prototype.next = function() {
  var $ret$jscomp$27$$ = new $cljs$core$MapEntry$$(this.$arr$[this.$i$], this.$arr$[this.$i$ + 1]);
  this.$i$ += 2;
  return $ret$jscomp$27$$;
};
function $cljs$core$PersistentArrayMap$$($meta$jscomp$43$$, $cnt$jscomp$13$$, $arr$jscomp$108$$, $__hash$jscomp$25$$) {
  this.$meta$ = $meta$jscomp$43$$;
  this.$cnt$ = $cnt$jscomp$13$$;
  this.$arr$ = $arr$jscomp$108$$;
  this.$__hash$ = $__hash$jscomp$25$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 16647951;
  this.$cljs$lang$protocol_mask$partition1$$ = 139268;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$PersistentArrayMap$$.prototype;
$JSCompiler_prototypeAlias$$.$cljs$core$IFind$_find$arity$2$ = function($coll$jscomp$501_idx$jscomp$21$$, $k$jscomp$128$$) {
  $coll$jscomp$501_idx$jscomp$21$$ = $cljs$core$array_index_of$$(this.$arr$, $k$jscomp$128$$);
  return -1 === $coll$jscomp$501_idx$jscomp$21$$ ? null : new $cljs$core$MapEntry$$(this.$arr$[$coll$jscomp$501_idx$jscomp$21$$], this.$arr$[$coll$jscomp$501_idx$jscomp$21$$ + 1]);
};
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.keys = function() {
  return $cljs$core$es6_iterator$$($cljs$core$keys$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$keys$$.$cljs$core$IFn$_invoke$arity$1$(this) : $cljs$core$keys$$.call(null, this));
};
$JSCompiler_prototypeAlias$$.entries = function() {
  return new $cljs$core$ES6EntriesIterator$$($cljs$core$seq$$($cljs$core$seq$$(this)));
};
$JSCompiler_prototypeAlias$$.values = function() {
  return $cljs$core$es6_iterator$$($cljs$core$vals$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$vals$$.$cljs$core$IFn$_invoke$arity$1$(this) : $cljs$core$vals$$.call(null, this));
};
$JSCompiler_prototypeAlias$$.has = function($k$jscomp$129$$) {
  return $cljs$core$contains_QMARK_$$(this, $k$jscomp$129$$);
};
$JSCompiler_prototypeAlias$$.get = function($k$jscomp$130$$, $not_found$jscomp$28$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$130$$, $not_found$jscomp$28$$);
};
$JSCompiler_prototypeAlias$$.forEach = function($f$jscomp$266$$) {
  for (var $G__34463_seq__32212_seq__32212__$1_temp__5753__auto__$jscomp$10$$ = $cljs$core$seq$$(this), $c__4638__auto__$jscomp$1_chunk__32213_vec__32225$$ = null, $G__34465_count__32214$$ = 0, $i__32215$$ = 0;;) {
    if ($i__32215$$ < $G__34465_count__32214$$) {
      var $v$jscomp$40_vec__32222$$ = $c__4638__auto__$jscomp$1_chunk__32213_vec__32225$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__32215$$), $G__34464_k$jscomp$131$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($v$jscomp$40_vec__32222$$, 0, null);
      $v$jscomp$40_vec__32222$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($v$jscomp$40_vec__32222$$, 1, null);
      $f$jscomp$266$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$266$$.$cljs$core$IFn$_invoke$arity$2$($v$jscomp$40_vec__32222$$, $G__34464_k$jscomp$131$$) : $f$jscomp$266$$.call(null, $v$jscomp$40_vec__32222$$, $G__34464_k$jscomp$131$$);
      $i__32215$$ += 1;
    } else {
      if ($G__34463_seq__32212_seq__32212__$1_temp__5753__auto__$jscomp$10$$ = $cljs$core$seq$$($G__34463_seq__32212_seq__32212__$1_temp__5753__auto__$jscomp$10$$)) {
        $cljs$core$chunked_seq_QMARK_$$($G__34463_seq__32212_seq__32212__$1_temp__5753__auto__$jscomp$10$$) ? ($c__4638__auto__$jscomp$1_chunk__32213_vec__32225$$ = $cljs$core$_chunked_first$$($G__34463_seq__32212_seq__32212__$1_temp__5753__auto__$jscomp$10$$), $G__34463_seq__32212_seq__32212__$1_temp__5753__auto__$jscomp$10$$ = $cljs$core$_chunked_rest$$($G__34463_seq__32212_seq__32212__$1_temp__5753__auto__$jscomp$10$$), $G__34464_k$jscomp$131$$ = $c__4638__auto__$jscomp$1_chunk__32213_vec__32225$$, 
        $G__34465_count__32214$$ = $cljs$core$count$$($c__4638__auto__$jscomp$1_chunk__32213_vec__32225$$), $c__4638__auto__$jscomp$1_chunk__32213_vec__32225$$ = $G__34464_k$jscomp$131$$) : ($c__4638__auto__$jscomp$1_chunk__32213_vec__32225$$ = $cljs$core$first$$($G__34463_seq__32212_seq__32212__$1_temp__5753__auto__$jscomp$10$$), $G__34464_k$jscomp$131$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__4638__auto__$jscomp$1_chunk__32213_vec__32225$$, 0, null), $v$jscomp$40_vec__32222$$ = 
        $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__4638__auto__$jscomp$1_chunk__32213_vec__32225$$, 1, null), $f$jscomp$266$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$266$$.$cljs$core$IFn$_invoke$arity$2$($v$jscomp$40_vec__32222$$, $G__34464_k$jscomp$131$$) : $f$jscomp$266$$.call(null, $v$jscomp$40_vec__32222$$, $G__34464_k$jscomp$131$$), $G__34463_seq__32212_seq__32212__$1_temp__5753__auto__$jscomp$10$$ = $cljs$core$next$$($G__34463_seq__32212_seq__32212__$1_temp__5753__auto__$jscomp$10$$), 
        $c__4638__auto__$jscomp$1_chunk__32213_vec__32225$$ = null, $G__34465_count__32214$$ = 0), $i__32215$$ = 0;
      } else {
        return null;
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($coll$jscomp$509$$, $k$jscomp$132$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$132$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($coll$jscomp$510_idx$jscomp$22$$, $k$jscomp$133$$, $not_found$jscomp$29$$) {
  $coll$jscomp$510_idx$jscomp$22$$ = $cljs$core$array_index_of$$(this.$arr$, $k$jscomp$133$$);
  return -1 === $coll$jscomp$510_idx$jscomp$22$$ ? $not_found$jscomp$29$$ : this.$arr$[$coll$jscomp$510_idx$jscomp$22$$ + 1];
};
$JSCompiler_prototypeAlias$$.$cljs$core$IKVReduce$_kv_reduce$arity$3$ = function($coll$jscomp$511_len$jscomp$29$$, $f$jscomp$267$$, $G__32228$jscomp$inline_671_G__34472_init$jscomp$16_init__$1$jscomp$4_init__$2$jscomp$6$$) {
  $coll$jscomp$511_len$jscomp$29$$ = this.$arr$.length;
  for (var $i$jscomp$237$$ = 0;;) {
    if ($i$jscomp$237$$ < $coll$jscomp$511_len$jscomp$29$$) {
      var $G__32229$jscomp$inline_672$$ = this.$arr$[$i$jscomp$237$$], $G__32230$jscomp$inline_673$$ = this.$arr$[$i$jscomp$237$$ + 1];
      $G__32228$jscomp$inline_671_G__34472_init$jscomp$16_init__$1$jscomp$4_init__$2$jscomp$6$$ = $f$jscomp$267$$.$cljs$core$IFn$_invoke$arity$3$ ? $f$jscomp$267$$.$cljs$core$IFn$_invoke$arity$3$($G__32228$jscomp$inline_671_G__34472_init$jscomp$16_init__$1$jscomp$4_init__$2$jscomp$6$$, $G__32229$jscomp$inline_672$$, $G__32230$jscomp$inline_673$$) : $f$jscomp$267$$.call(null, $G__32228$jscomp$inline_671_G__34472_init$jscomp$16_init__$1$jscomp$4_init__$2$jscomp$6$$, $G__32229$jscomp$inline_672$$, $G__32230$jscomp$inline_673$$);
      if ($cljs$core$reduced_QMARK_$$($G__32228$jscomp$inline_671_G__34472_init$jscomp$16_init__$1$jscomp$4_init__$2$jscomp$6$$)) {
        return $cljs$core$_deref$$($G__32228$jscomp$inline_671_G__34472_init$jscomp$16_init__$1$jscomp$4_init__$2$jscomp$6$$);
      }
      $i$jscomp$237$$ += 2;
    } else {
      return $G__32228$jscomp$inline_671_G__34472_init$jscomp$16_init__$1$jscomp$4_init__$2$jscomp$6$$;
    }
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIterable$_iterator$arity$1$ = function() {
  return new $cljs$core$PersistentArrayMapIterator$$(this.$arr$, 2 * this.$cnt$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return this.$cnt$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4319__auto__$jscomp$14_h__4319__auto____$1$jscomp$14$$ = this.$__hash$;
  return null != $h__4319__auto__$jscomp$14_h__4319__auto____$1$jscomp$14$$ ? $h__4319__auto__$jscomp$14_h__4319__auto____$1$jscomp$14$$ : this.$__hash$ = $h__4319__auto__$jscomp$14_h__4319__auto____$1$jscomp$14$$ = $cljs$core$hash_unordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($alen_coll$jscomp$515$$, $other$jscomp$89$$) {
  if ($cljs$core$map_QMARK_$$($other$jscomp$89$$) && !$cljs$core$record_QMARK_$$($other$jscomp$89$$)) {
    if ($alen_coll$jscomp$515$$ = this.$arr$.length, this.$cnt$ === $other$jscomp$89$$.$cljs$core$ICounted$_count$arity$1$(null)) {
      for (var $i$jscomp$238$$ = 0;;) {
        if ($i$jscomp$238$$ < $alen_coll$jscomp$515$$) {
          var $v$jscomp$41$$ = $other$jscomp$89$$.$cljs$core$ILookup$_lookup$arity$3$(null, this.$arr$[$i$jscomp$238$$], $cljs$core$lookup_sentinel$$);
          if ($v$jscomp$41$$ !== $cljs$core$lookup_sentinel$$) {
            if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$(this.$arr$[$i$jscomp$238$$ + 1], $v$jscomp$41$$)) {
              $i$jscomp$238$$ += 2;
            } else {
              return !1;
            }
          } else {
            return !1;
          }
        } else {
          return !0;
        }
      }
    } else {
      return !1;
    }
  } else {
    return !1;
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEditableCollection$_as_transient$arity$1$ = function() {
  return new $cljs$core$TransientArrayMap$$(this.$arr$.length, $cljs$core$aclone$$(this.$arr$));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$_with_meta$$($cljs$core$PersistentArrayMap$EMPTY$$, this.$meta$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$518$$, $f$jscomp$268$$) {
  return $cljs$core$iter_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$(this, $f$jscomp$268$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$jscomp$519$$, $f$jscomp$269$$, $start$jscomp$104$$) {
  return $cljs$core$iter_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $f$jscomp$269$$, $start$jscomp$104$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMap$_dissoc$arity$2$ = function($coll$jscomp$520_len$jscomp$30$$, $k$jscomp$134$$) {
  if (0 <= $cljs$core$array_index_of$$(this.$arr$, $k$jscomp$134$$)) {
    $coll$jscomp$520_len$jscomp$30$$ = this.$arr$.length;
    var $new_arr$jscomp$1_new_len$$ = $coll$jscomp$520_len$jscomp$30$$ - 2;
    if (0 === $new_arr$jscomp$1_new_len$$) {
      return this.$cljs$core$IEmptyableCollection$_empty$arity$1$(null);
    }
    $new_arr$jscomp$1_new_len$$ = Array($new_arr$jscomp$1_new_len$$);
    for (var $s$jscomp$91$$ = 0, $G__34475_G__34477_d$jscomp$83$$ = 0;;) {
      if ($s$jscomp$91$$ >= $coll$jscomp$520_len$jscomp$30$$) {
        return new $cljs$core$PersistentArrayMap$$(this.$meta$, this.$cnt$ - 1, $new_arr$jscomp$1_new_len$$, null);
      }
      $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($k$jscomp$134$$, this.$arr$[$s$jscomp$91$$]) ? $s$jscomp$91$$ += 2 : ($new_arr$jscomp$1_new_len$$[$G__34475_G__34477_d$jscomp$83$$] = this.$arr$[$s$jscomp$91$$], $new_arr$jscomp$1_new_len$$[$G__34475_G__34477_d$jscomp$83$$ + 1] = this.$arr$[$s$jscomp$91$$ + 1], $G__34475_G__34477_d$jscomp$83$$ += 2, $s$jscomp$91$$ += 2);
    }
  } else {
    return this;
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$IAssociative$_assoc$arity$3$ = function($arr$jscomp$inline_1149_coll$jscomp$521_idx$jscomp$24$$, $G__32233$jscomp$inline_675_k$jscomp$135$$, $v$jscomp$42$$) {
  $arr$jscomp$inline_1149_coll$jscomp$521_idx$jscomp$24$$ = $cljs$core$array_index_of$$(this.$arr$, $G__32233$jscomp$inline_675_k$jscomp$135$$);
  if (-1 === $arr$jscomp$inline_1149_coll$jscomp$521_idx$jscomp$24$$) {
    if (this.$cnt$ < $cljs$core$PersistentArrayMap$HASHMAP_THRESHOLD$$) {
      $arr$jscomp$inline_1149_coll$jscomp$521_idx$jscomp$24$$ = this.$arr$;
      for (var $l$jscomp$inline_1152$$ = $arr$jscomp$inline_1149_coll$jscomp$521_idx$jscomp$24$$.length, $narr$jscomp$inline_1153$$ = Array($l$jscomp$inline_1152$$ + 2), $i_34451$jscomp$inline_1154$$ = 0;;) {
        if ($i_34451$jscomp$inline_1154$$ < $l$jscomp$inline_1152$$) {
          $narr$jscomp$inline_1153$$[$i_34451$jscomp$inline_1154$$] = $arr$jscomp$inline_1149_coll$jscomp$521_idx$jscomp$24$$[$i_34451$jscomp$inline_1154$$], $i_34451$jscomp$inline_1154$$ += 1;
        } else {
          break;
        }
      }
      $narr$jscomp$inline_1153$$[$l$jscomp$inline_1152$$] = $G__32233$jscomp$inline_675_k$jscomp$135$$;
      $narr$jscomp$inline_1153$$[$l$jscomp$inline_1152$$ + 1] = $v$jscomp$42$$;
      return new $cljs$core$PersistentArrayMap$$(this.$meta$, this.$cnt$ + 1, $narr$jscomp$inline_1153$$, null);
    }
    return $cljs$core$_with_meta$$($cljs$core$_assoc$$($cljs$core$into$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$PersistentHashMap$EMPTY$$, this), $G__32233$jscomp$inline_675_k$jscomp$135$$, $v$jscomp$42$$), this.$meta$);
  }
  if ($v$jscomp$42$$ === this.$arr$[$arr$jscomp$inline_1149_coll$jscomp$521_idx$jscomp$24$$ + 1]) {
    return this;
  }
  $G__32233$jscomp$inline_675_k$jscomp$135$$ = $cljs$core$aclone$$(this.$arr$);
  $G__32233$jscomp$inline_675_k$jscomp$135$$[$arr$jscomp$inline_1149_coll$jscomp$521_idx$jscomp$24$$ + 1] = $v$jscomp$42$$;
  return new $cljs$core$PersistentArrayMap$$(this.$meta$, this.$cnt$, $G__32233$jscomp$inline_675_k$jscomp$135$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IAssociative$_contains_key_QMARK_$arity$2$ = function($coll$jscomp$522$$, $k$jscomp$136$$) {
  return -1 !== $cljs$core$array_index_of$$(this.$arr$, $k$jscomp$136$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  var $arr$jscomp$inline_677$$ = this.$arr$;
  return 0 <= $arr$jscomp$inline_677$$.length - 2 ? new $cljs$core$PersistentArrayMapSeq$$($arr$jscomp$inline_677$$, 0, null) : null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$524$$, $new_meta$jscomp$20$$) {
  return $new_meta$jscomp$20$$ === this.$meta$ ? this : new $cljs$core$PersistentArrayMap$$($new_meta$jscomp$20$$, this.$cnt$, this.$arr$, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($G__34478_coll$jscomp$525_ret$jscomp$28$$, $G__34479_entry$jscomp$3_es$$) {
  if ($cljs$core$vector_QMARK_$$($G__34479_entry$jscomp$3_es$$)) {
    return this.$cljs$core$IAssociative$_assoc$arity$3$(null, $cljs$core$_nth$$($G__34479_entry$jscomp$3_es$$, 0), $cljs$core$_nth$$($G__34479_entry$jscomp$3_es$$, 1));
  }
  $G__34478_coll$jscomp$525_ret$jscomp$28$$ = this;
  for ($G__34479_entry$jscomp$3_es$$ = $cljs$core$seq$$($G__34479_entry$jscomp$3_es$$);;) {
    if (null == $G__34479_entry$jscomp$3_es$$) {
      return $G__34478_coll$jscomp$525_ret$jscomp$28$$;
    }
    var $e$jscomp$86$$ = $cljs$core$first$$($G__34479_entry$jscomp$3_es$$);
    if ($cljs$core$vector_QMARK_$$($e$jscomp$86$$)) {
      $G__34478_coll$jscomp$525_ret$jscomp$28$$ = $cljs$core$_assoc$$($G__34478_coll$jscomp$525_ret$jscomp$28$$, $cljs$core$_nth$$($e$jscomp$86$$, 0), $cljs$core$_nth$$($e$jscomp$86$$, 1)), $G__34479_entry$jscomp$3_es$$ = $cljs$core$next$$($G__34479_entry$jscomp$3_es$$);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
$JSCompiler_prototypeAlias$$.call = function($unused__9507__auto__$jscomp$9$$) {
  switch(arguments.length - 1) {
    case 1:
      return this.$cljs$core$IFn$_invoke$arity$1$(arguments[1]);
    case 2:
      return this.$cljs$core$IFn$_invoke$arity$2$(arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length - 1)].join(""));
  }
};
$JSCompiler_prototypeAlias$$.apply = function($self__$jscomp$586$$, $args32211$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args32211$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($k$jscomp$137$$) {
  return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$jscomp$137$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($k$jscomp$138$$, $not_found$jscomp$30$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$138$$, $not_found$jscomp$30$$);
};
var $cljs$core$PersistentArrayMap$EMPTY$$ = new $cljs$core$PersistentArrayMap$$(null, 0, [], $cljs$core$empty_unordered_hash$$), $cljs$core$PersistentArrayMap$HASHMAP_THRESHOLD$$ = 8;
$cljs$core$PersistentArrayMap$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$TransientArrayMap$$($len$jscomp$31$$, $arr$jscomp$113$$) {
  this.$editable_QMARK_$ = {};
  this.$len$ = $len$jscomp$31$$;
  this.$arr$ = $arr$jscomp$113$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 259;
  this.$cljs$lang$protocol_mask$partition1$$ = 56;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$TransientArrayMap$$.prototype;
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  if (this.$editable_QMARK_$) {
    return $cljs$core$quot$$(this.$len$);
  }
  throw Error("count after persistent!");
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($tcoll$jscomp$31$$, $k$jscomp$139$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$139$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($idx$jscomp$25_tcoll$jscomp$32$$, $k$jscomp$140$$, $not_found$jscomp$31$$) {
  if (this.$editable_QMARK_$) {
    return $idx$jscomp$25_tcoll$jscomp$32$$ = $cljs$core$array_index_of$$(this.$arr$, $k$jscomp$140$$), -1 === $idx$jscomp$25_tcoll$jscomp$32$$ ? $not_found$jscomp$31$$ : this.$arr$[$idx$jscomp$25_tcoll$jscomp$32$$ + 1];
  }
  throw Error("lookup after persistent!");
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientCollection$_conj_BANG_$arity$2$ = function($G__34498_es$jscomp$1_tcoll$jscomp$33$$, $G__34499_o$jscomp$124_tcoll__$2$$) {
  if (this.$editable_QMARK_$) {
    if ($cljs$core$map_entry_QMARK_$$($G__34499_o$jscomp$124_tcoll__$2$$)) {
      return this.$cljs$core$ITransientAssociative$_assoc_BANG_$arity$3$(null, $cljs$core$key$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$key$$.$cljs$core$IFn$_invoke$arity$1$($G__34499_o$jscomp$124_tcoll__$2$$) : $cljs$core$key$$.call(null, $G__34499_o$jscomp$124_tcoll__$2$$), $cljs$core$val$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$val$$.$cljs$core$IFn$_invoke$arity$1$($G__34499_o$jscomp$124_tcoll__$2$$) : $cljs$core$val$$.call(null, $G__34499_o$jscomp$124_tcoll__$2$$));
    }
    if ($cljs$core$vector_QMARK_$$($G__34499_o$jscomp$124_tcoll__$2$$)) {
      return this.$cljs$core$ITransientAssociative$_assoc_BANG_$arity$3$(null, $G__34499_o$jscomp$124_tcoll__$2$$.$cljs$core$IFn$_invoke$arity$1$ ? $G__34499_o$jscomp$124_tcoll__$2$$.$cljs$core$IFn$_invoke$arity$1$(0) : $G__34499_o$jscomp$124_tcoll__$2$$.call(null, 0), $G__34499_o$jscomp$124_tcoll__$2$$.$cljs$core$IFn$_invoke$arity$1$ ? $G__34499_o$jscomp$124_tcoll__$2$$.$cljs$core$IFn$_invoke$arity$1$(1) : $G__34499_o$jscomp$124_tcoll__$2$$.call(null, 1));
    }
    $G__34498_es$jscomp$1_tcoll$jscomp$33$$ = $cljs$core$seq$$($G__34499_o$jscomp$124_tcoll__$2$$);
    for ($G__34499_o$jscomp$124_tcoll__$2$$ = this;;) {
      var $e$jscomp$87_temp__5751__auto__$jscomp$8$$ = $cljs$core$first$$($G__34498_es$jscomp$1_tcoll$jscomp$33$$);
      if ($cljs$core$truth_$$($e$jscomp$87_temp__5751__auto__$jscomp$8$$)) {
        $G__34498_es$jscomp$1_tcoll$jscomp$33$$ = $cljs$core$next$$($G__34498_es$jscomp$1_tcoll$jscomp$33$$), $G__34499_o$jscomp$124_tcoll__$2$$ = $cljs$core$_assoc_BANG_$$($G__34499_o$jscomp$124_tcoll__$2$$, $cljs$core$key$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$key$$.$cljs$core$IFn$_invoke$arity$1$($e$jscomp$87_temp__5751__auto__$jscomp$8$$) : $cljs$core$key$$.call(null, $e$jscomp$87_temp__5751__auto__$jscomp$8$$), $cljs$core$val$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$val$$.$cljs$core$IFn$_invoke$arity$1$($e$jscomp$87_temp__5751__auto__$jscomp$8$$) : 
        $cljs$core$val$$.call(null, $e$jscomp$87_temp__5751__auto__$jscomp$8$$));
      } else {
        return $G__34499_o$jscomp$124_tcoll__$2$$;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientCollection$_persistent_BANG_$arity$1$ = function() {
  if (this.$editable_QMARK_$) {
    return this.$editable_QMARK_$ = !1, new $cljs$core$PersistentArrayMap$$(null, $cljs$core$quot$$(this.$len$), this.$arr$, null);
  }
  throw Error("persistent! called twice");
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientAssociative$_assoc_BANG_$arity$3$ = function($idx$jscomp$26_tcoll$jscomp$35_tcoll$jscomp$inline_685$$, $key$jscomp$132$$, $val$jscomp$83$$) {
  if (this.$editable_QMARK_$) {
    $idx$jscomp$26_tcoll$jscomp$35_tcoll$jscomp$inline_685$$ = $cljs$core$array_index_of$$(this.$arr$, $key$jscomp$132$$);
    if (-1 === $idx$jscomp$26_tcoll$jscomp$35_tcoll$jscomp$inline_685$$) {
      if (this.$len$ + 2 <= 2 * $cljs$core$PersistentArrayMap$HASHMAP_THRESHOLD$$) {
        return this.$len$ += 2, this.$arr$.push($key$jscomp$132$$), this.$arr$.push($val$jscomp$83$$), this;
      }
      $idx$jscomp$26_tcoll$jscomp$35_tcoll$jscomp$inline_685$$ = $cljs$core$array__GT_transient_hash_map$$.$cljs$core$IFn$_invoke$arity$2$ ? $cljs$core$array__GT_transient_hash_map$$.$cljs$core$IFn$_invoke$arity$2$(this.$len$, this.$arr$) : $cljs$core$array__GT_transient_hash_map$$.call(null, this.$len$, this.$arr$);
      return $cljs$core$_assoc_BANG_$$($idx$jscomp$26_tcoll$jscomp$35_tcoll$jscomp$inline_685$$, $key$jscomp$132$$, $val$jscomp$83$$);
    }
    $val$jscomp$83$$ !== this.$arr$[$idx$jscomp$26_tcoll$jscomp$35_tcoll$jscomp$inline_685$$ + 1] && (this.$arr$[$idx$jscomp$26_tcoll$jscomp$35_tcoll$jscomp$inline_685$$ + 1] = $val$jscomp$83$$);
    return this;
  }
  throw Error("assoc! after persistent!");
};
$JSCompiler_prototypeAlias$$.call = function($unused__9507__auto__$jscomp$10$$) {
  switch(arguments.length - 1) {
    case 1:
      return this.$cljs$core$IFn$_invoke$arity$1$(arguments[1]);
    case 2:
      return this.$cljs$core$IFn$_invoke$arity$2$(arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length - 1)].join(""));
  }
};
$JSCompiler_prototypeAlias$$.apply = function($self__$jscomp$597$$, $args32237$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args32237$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($key$jscomp$134$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $key$jscomp$134$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($key$jscomp$135$$, $not_found$jscomp$32$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $key$jscomp$135$$, $not_found$jscomp$32$$);
};
function $cljs$core$array__GT_transient_hash_map$$($len$jscomp$33$$, $arr$jscomp$115$$) {
  for (var $G__34502_out$jscomp$5$$ = $cljs$core$_as_transient$$($cljs$core$PersistentHashMap$EMPTY$$), $G__34503_i$jscomp$239$$ = 0;;) {
    if ($G__34503_i$jscomp$239$$ < $len$jscomp$33$$) {
      $G__34502_out$jscomp$5$$ = $cljs$core$_assoc_BANG_$$($G__34502_out$jscomp$5$$, $arr$jscomp$115$$[$G__34503_i$jscomp$239$$], $arr$jscomp$115$$[$G__34503_i$jscomp$239$$ + 1]), $G__34503_i$jscomp$239$$ += 2;
    } else {
      return $G__34502_out$jscomp$5$$;
    }
  }
}
function $cljs$core$Box$$() {
  this.$val$ = !1;
}
function $cljs$core$key_test$$($key$jscomp$136$$, $other$jscomp$90$$) {
  return $key$jscomp$136$$ === $other$jscomp$90$$ ? !0 : $key$jscomp$136$$ === $other$jscomp$90$$ || $key$jscomp$136$$ instanceof $cljs$core$Keyword$$ && $other$jscomp$90$$ instanceof $cljs$core$Keyword$$ && $key$jscomp$136$$.$fqn$ === $other$jscomp$90$$.$fqn$ ? !0 : $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($key$jscomp$136$$, $other$jscomp$90$$);
}
function $cljs$core$clone_and_set$cljs$0core$0IFn$0_invoke$0arity$03$$($G__32242_arr$jscomp$116$$, $i$jscomp$240$$, $a$jscomp$166$$) {
  $G__32242_arr$jscomp$116$$ = $cljs$core$aclone$$($G__32242_arr$jscomp$116$$);
  $G__32242_arr$jscomp$116$$[$i$jscomp$240$$] = $a$jscomp$166$$;
  return $G__32242_arr$jscomp$116$$;
}
function $cljs$core$remove_pair$$($arr$jscomp$118$$, $i$jscomp$242$$) {
  var $new_arr$jscomp$2$$ = Array($arr$jscomp$118$$.length - 2);
  $cljs$core$array_copy$$($arr$jscomp$118$$, 0, $new_arr$jscomp$2$$, 0, 2 * $i$jscomp$242$$);
  $cljs$core$array_copy$$($arr$jscomp$118$$, 2 * ($i$jscomp$242$$ + 1), $new_arr$jscomp$2$$, 2 * $i$jscomp$242$$, $new_arr$jscomp$2$$.length - 2 * $i$jscomp$242$$);
  return $new_arr$jscomp$2$$;
}
function $cljs$core$edit_and_set$cljs$0core$0IFn$0_invoke$0arity$04$$($editable_inode$$, $edit$jscomp$5$$, $i$jscomp$243$$, $a$jscomp$168$$) {
  $editable_inode$$ = $editable_inode$$.$ensure_editable$($edit$jscomp$5$$);
  $editable_inode$$.$arr$[$i$jscomp$243$$] = $a$jscomp$168$$;
  return $editable_inode$$;
}
function $cljs$core$inode_kv_reduce$$($arr$jscomp$119$$, $f$jscomp$270$$, $G__34507_init$jscomp$17_init__$2$jscomp$7_k$jscomp$inline_689_node$jscomp$inline_692$$) {
  for (var $len$jscomp$34$$ = $arr$jscomp$119$$.length, $i$jscomp$245$$ = 0, $G__32246$jscomp$inline_690_init__$1$jscomp$5$$ = $G__34507_init$jscomp$17_init__$2$jscomp$7_k$jscomp$inline_689_node$jscomp$inline_692$$;;) {
    if ($i$jscomp$245$$ < $len$jscomp$34$$) {
      $G__34507_init$jscomp$17_init__$2$jscomp$7_k$jscomp$inline_689_node$jscomp$inline_692$$ = $arr$jscomp$119$$[$i$jscomp$245$$];
      if (null != $G__34507_init$jscomp$17_init__$2$jscomp$7_k$jscomp$inline_689_node$jscomp$inline_692$$) {
        var $G__32248$jscomp$inline_691$$ = $arr$jscomp$119$$[$i$jscomp$245$$ + 1];
        $G__34507_init$jscomp$17_init__$2$jscomp$7_k$jscomp$inline_689_node$jscomp$inline_692$$ = $f$jscomp$270$$.$cljs$core$IFn$_invoke$arity$3$ ? $f$jscomp$270$$.$cljs$core$IFn$_invoke$arity$3$($G__32246$jscomp$inline_690_init__$1$jscomp$5$$, $G__34507_init$jscomp$17_init__$2$jscomp$7_k$jscomp$inline_689_node$jscomp$inline_692$$, $G__32248$jscomp$inline_691$$) : $f$jscomp$270$$.call(null, $G__32246$jscomp$inline_690_init__$1$jscomp$5$$, $G__34507_init$jscomp$17_init__$2$jscomp$7_k$jscomp$inline_689_node$jscomp$inline_692$$, 
        $G__32248$jscomp$inline_691$$);
      } else {
        $G__34507_init$jscomp$17_init__$2$jscomp$7_k$jscomp$inline_689_node$jscomp$inline_692$$ = $arr$jscomp$119$$[$i$jscomp$245$$ + 1], $G__34507_init$jscomp$17_init__$2$jscomp$7_k$jscomp$inline_689_node$jscomp$inline_692$$ = null != $G__34507_init$jscomp$17_init__$2$jscomp$7_k$jscomp$inline_689_node$jscomp$inline_692$$ ? $G__34507_init$jscomp$17_init__$2$jscomp$7_k$jscomp$inline_689_node$jscomp$inline_692$$.$kv_reduce$($f$jscomp$270$$, $G__32246$jscomp$inline_690_init__$1$jscomp$5$$) : $G__32246$jscomp$inline_690_init__$1$jscomp$5$$;
      }
      if ($cljs$core$reduced_QMARK_$$($G__34507_init$jscomp$17_init__$2$jscomp$7_k$jscomp$inline_689_node$jscomp$inline_692$$)) {
        return $G__34507_init$jscomp$17_init__$2$jscomp$7_k$jscomp$inline_689_node$jscomp$inline_692$$;
      }
      $i$jscomp$245$$ += 2;
      $G__32246$jscomp$inline_690_init__$1$jscomp$5$$ = $G__34507_init$jscomp$17_init__$2$jscomp$7_k$jscomp$inline_689_node$jscomp$inline_692$$;
    } else {
      return $G__32246$jscomp$inline_690_init__$1$jscomp$5$$;
    }
  }
}
function $cljs$core$NodeIterator$$($arr$jscomp$120$$) {
  this.$arr$ = $arr$jscomp$120$$;
  this.$i$ = 0;
  this.$next_iter$ = this.$next_entry$ = null;
}
$cljs$core$NodeIterator$$.prototype.advance = function() {
  for (var $len$jscomp$35$$ = this.$arr$.length;;) {
    if (this.$i$ < $len$jscomp$35$$) {
      var $JSCompiler_temp$jscomp$100_JSCompiler_temp$jscomp$99_found$jscomp$1_key$jscomp$137_new_iter$jscomp$inline_694$$ = this.$arr$[this.$i$], $node_or_val$$ = this.$arr$[this.$i$ + 1];
      null != $JSCompiler_temp$jscomp$100_JSCompiler_temp$jscomp$99_found$jscomp$1_key$jscomp$137_new_iter$jscomp$inline_694$$ ? $JSCompiler_temp$jscomp$100_JSCompiler_temp$jscomp$99_found$jscomp$1_key$jscomp$137_new_iter$jscomp$inline_694$$ = this.$next_entry$ = new $cljs$core$MapEntry$$($JSCompiler_temp$jscomp$100_JSCompiler_temp$jscomp$99_found$jscomp$1_key$jscomp$137_new_iter$jscomp$inline_694$$, $node_or_val$$) : null != $node_or_val$$ ? ($JSCompiler_temp$jscomp$100_JSCompiler_temp$jscomp$99_found$jscomp$1_key$jscomp$137_new_iter$jscomp$inline_694$$ = 
      $cljs$core$_iterator$$($node_or_val$$), $JSCompiler_temp$jscomp$100_JSCompiler_temp$jscomp$99_found$jscomp$1_key$jscomp$137_new_iter$jscomp$inline_694$$ = $JSCompiler_temp$jscomp$100_JSCompiler_temp$jscomp$99_found$jscomp$1_key$jscomp$137_new_iter$jscomp$inline_694$$.$hasNext$() ? this.$next_iter$ = $JSCompiler_temp$jscomp$100_JSCompiler_temp$jscomp$99_found$jscomp$1_key$jscomp$137_new_iter$jscomp$inline_694$$ : !1) : $JSCompiler_temp$jscomp$100_JSCompiler_temp$jscomp$99_found$jscomp$1_key$jscomp$137_new_iter$jscomp$inline_694$$ = 
      !1;
      this.$i$ += 2;
      if ($JSCompiler_temp$jscomp$100_JSCompiler_temp$jscomp$99_found$jscomp$1_key$jscomp$137_new_iter$jscomp$inline_694$$) {
        return !0;
      }
    } else {
      return !1;
    }
  }
};
$cljs$core$NodeIterator$$.prototype.$hasNext$ = function() {
  var $or__4212__auto__$jscomp$30_or__4212__auto____$1$jscomp$10$$ = null != this.$next_entry$;
  return $or__4212__auto__$jscomp$30_or__4212__auto____$1$jscomp$10$$ ? $or__4212__auto__$jscomp$30_or__4212__auto____$1$jscomp$10$$ : ($or__4212__auto__$jscomp$30_or__4212__auto____$1$jscomp$10$$ = null != this.$next_iter$) ? $or__4212__auto__$jscomp$30_or__4212__auto____$1$jscomp$10$$ : this.advance();
};
$cljs$core$NodeIterator$$.prototype.next = function() {
  if (null != this.$next_entry$) {
    var $ret$jscomp$32$$ = this.$next_entry$;
    this.$next_entry$ = null;
    return $ret$jscomp$32$$;
  }
  if (null != this.$next_iter$) {
    return $ret$jscomp$32$$ = this.$next_iter$.next(), this.$next_iter$.$hasNext$() || (this.$next_iter$ = null), $ret$jscomp$32$$;
  }
  if (this.advance()) {
    return this.next();
  }
  throw Error("No such element");
};
$cljs$core$NodeIterator$$.prototype.remove = function() {
  return Error("Unsupported operation");
};
function $cljs$core$BitmapIndexedNode$$($edit$jscomp$7$$, $bitmap$jscomp$1$$, $arr$jscomp$122$$) {
  this.$edit$ = $edit$jscomp$7$$;
  this.$bitmap$ = $bitmap$jscomp$1$$;
  this.$arr$ = $arr$jscomp$122$$;
  this.$cljs$lang$protocol_mask$partition1$$ = 131072;
  this.$cljs$lang$protocol_mask$partition0$$ = 0;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$BitmapIndexedNode$$.prototype;
$JSCompiler_prototypeAlias$$.$ensure_editable$ = function($e$jscomp$88$$) {
  if ($e$jscomp$88$$ === this.$edit$) {
    return this;
  }
  var $n$jscomp$113$$ = $cljs$core$bit_count$$(this.$bitmap$), $new_arr$jscomp$3$$ = Array(0 > $n$jscomp$113$$ ? 4 : 2 * ($n$jscomp$113$$ + 1));
  $cljs$core$array_copy$$(this.$arr$, 0, $new_arr$jscomp$3$$, 0, 2 * $n$jscomp$113$$);
  return new $cljs$core$BitmapIndexedNode$$($e$jscomp$88$$, this.$bitmap$, $new_arr$jscomp$3$$);
};
$JSCompiler_prototypeAlias$$.$inode_seq$ = function() {
  return $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$01$$ ? $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$01$$(this.$arr$) : $cljs$core$create_inode_seq$$.call(null, this.$arr$);
};
$JSCompiler_prototypeAlias$$.$kv_reduce$ = function($f$jscomp$271$$, $init$jscomp$18$$) {
  return $cljs$core$inode_kv_reduce$$(this.$arr$, $f$jscomp$271$$, $init$jscomp$18$$);
};
$JSCompiler_prototypeAlias$$.$inode_lookup$ = function($shift$jscomp$7$$, $hash$jscomp$6$$, $key$jscomp$139$$, $not_found$jscomp$33$$) {
  var $bit$jscomp$4_key_or_nil$jscomp$1$$ = 1 << ($hash$jscomp$6$$ >>> $shift$jscomp$7$$ & 31);
  if (0 === (this.$bitmap$ & $bit$jscomp$4_key_or_nil$jscomp$1$$)) {
    return $not_found$jscomp$33$$;
  }
  var $idx$jscomp$29_val_or_node$jscomp$1$$ = $cljs$core$bit_count$$(this.$bitmap$ & $bit$jscomp$4_key_or_nil$jscomp$1$$ - 1);
  $bit$jscomp$4_key_or_nil$jscomp$1$$ = this.$arr$[2 * $idx$jscomp$29_val_or_node$jscomp$1$$];
  $idx$jscomp$29_val_or_node$jscomp$1$$ = this.$arr$[2 * $idx$jscomp$29_val_or_node$jscomp$1$$ + 1];
  return null == $bit$jscomp$4_key_or_nil$jscomp$1$$ ? $idx$jscomp$29_val_or_node$jscomp$1$$.$inode_lookup$($shift$jscomp$7$$ + 5, $hash$jscomp$6$$, $key$jscomp$139$$, $not_found$jscomp$33$$) : $cljs$core$key_test$$($key$jscomp$139$$, $bit$jscomp$4_key_or_nil$jscomp$1$$) ? $idx$jscomp$29_val_or_node$jscomp$1$$ : $not_found$jscomp$33$$;
};
$JSCompiler_prototypeAlias$$.$inode_assoc_BANG_$ = function($edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_1173$$, $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$, $G__33582$jscomp$inline_1165_hash$jscomp$7_len$jscomp$inline_1160_len__$1$jscomp$inline_1163$$, $JSCompiler_inline_result$jscomp$101_i_34508_key$jscomp$140$$, $G__34511_G__34513_i$jscomp$inline_1169_j_34509_val$jscomp$86$$, $G__32250$jscomp$inline_696_added_leaf_QMARK__i__$1$jscomp$inline_1161$$) {
  var $bit$jscomp$5_val_or_node$jscomp$2$$ = 1 << ($G__33582$jscomp$inline_1165_hash$jscomp$7_len$jscomp$inline_1160_len__$1$jscomp$inline_1163$$ >>> $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$ & 31), $idx$jscomp$30_j$jscomp$inline_1171_nodes$jscomp$15$$ = $cljs$core$bit_count$$(this.$bitmap$ & $bit$jscomp$5_val_or_node$jscomp$2$$ - 1);
  if (0 === (this.$bitmap$ & $bit$jscomp$5_val_or_node$jscomp$2$$)) {
    var $G__33581$jscomp$inline_1164_j__$1$jscomp$inline_1162_key_or_nil$jscomp$2_n$jscomp$115$$ = $cljs$core$bit_count$$(this.$bitmap$);
    if (2 * $G__33581$jscomp$inline_1164_j__$1$jscomp$inline_1162_key_or_nil$jscomp$2_n$jscomp$115$$ < this.$arr$.length) {
      $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_1173$$ = this.$ensure_editable$($edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_1173$$);
      $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$ = $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_1173$$.$arr$;
      $G__32250$jscomp$inline_696_added_leaf_QMARK__i__$1$jscomp$inline_1161$$.$val$ = !0;
      $G__33582$jscomp$inline_1165_hash$jscomp$7_len$jscomp$inline_1160_len__$1$jscomp$inline_1163$$ = 2 * ($G__33581$jscomp$inline_1164_j__$1$jscomp$inline_1162_key_or_nil$jscomp$2_n$jscomp$115$$ - $idx$jscomp$30_j$jscomp$inline_1171_nodes$jscomp$15$$);
      $G__32250$jscomp$inline_696_added_leaf_QMARK__i__$1$jscomp$inline_1161$$ = 2 * $idx$jscomp$30_j$jscomp$inline_1171_nodes$jscomp$15$$ + ($G__33582$jscomp$inline_1165_hash$jscomp$7_len$jscomp$inline_1160_len__$1$jscomp$inline_1163$$ - 1);
      for ($G__33581$jscomp$inline_1164_j__$1$jscomp$inline_1162_key_or_nil$jscomp$2_n$jscomp$115$$ = 2 * ($idx$jscomp$30_j$jscomp$inline_1171_nodes$jscomp$15$$ + 1) + ($G__33582$jscomp$inline_1165_hash$jscomp$7_len$jscomp$inline_1160_len__$1$jscomp$inline_1163$$ - 1); 0 !== $G__33582$jscomp$inline_1165_hash$jscomp$7_len$jscomp$inline_1160_len__$1$jscomp$inline_1163$$;) {
        $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$[$G__33581$jscomp$inline_1164_j__$1$jscomp$inline_1162_key_or_nil$jscomp$2_n$jscomp$115$$] = $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$[$G__32250$jscomp$inline_696_added_leaf_QMARK__i__$1$jscomp$inline_1161$$], --$G__33581$jscomp$inline_1164_j__$1$jscomp$inline_1162_key_or_nil$jscomp$2_n$jscomp$115$$, --$G__33582$jscomp$inline_1165_hash$jscomp$7_len$jscomp$inline_1160_len__$1$jscomp$inline_1163$$, --$G__32250$jscomp$inline_696_added_leaf_QMARK__i__$1$jscomp$inline_1161$$;
      }
      $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$[2 * $idx$jscomp$30_j$jscomp$inline_1171_nodes$jscomp$15$$] = $JSCompiler_inline_result$jscomp$101_i_34508_key$jscomp$140$$;
      $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$[2 * $idx$jscomp$30_j$jscomp$inline_1171_nodes$jscomp$15$$ + 1] = $G__34511_G__34513_i$jscomp$inline_1169_j_34509_val$jscomp$86$$;
      $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_1173$$.$bitmap$ |= $bit$jscomp$5_val_or_node$jscomp$2$$;
      return $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_1173$$;
    }
    if (16 <= $G__33581$jscomp$inline_1164_j__$1$jscomp$inline_1162_key_or_nil$jscomp$2_n$jscomp$115$$) {
      $idx$jscomp$30_j$jscomp$inline_1171_nodes$jscomp$15$$ = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      $idx$jscomp$30_j$jscomp$inline_1171_nodes$jscomp$15$$[$G__33582$jscomp$inline_1165_hash$jscomp$7_len$jscomp$inline_1160_len__$1$jscomp$inline_1163$$ >>> $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$ & 31] = $cljs$core$BitmapIndexedNode$EMPTY$$.$inode_assoc_BANG_$($edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_1173$$, $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$ + 5, $G__33582$jscomp$inline_1165_hash$jscomp$7_len$jscomp$inline_1160_len__$1$jscomp$inline_1163$$, $JSCompiler_inline_result$jscomp$101_i_34508_key$jscomp$140$$, 
      $G__34511_G__34513_i$jscomp$inline_1169_j_34509_val$jscomp$86$$, $G__32250$jscomp$inline_696_added_leaf_QMARK__i__$1$jscomp$inline_1161$$);
      for ($G__34511_G__34513_i$jscomp$inline_1169_j_34509_val$jscomp$86$$ = $JSCompiler_inline_result$jscomp$101_i_34508_key$jscomp$140$$ = 0;;) {
        if (32 > $JSCompiler_inline_result$jscomp$101_i_34508_key$jscomp$140$$) {
          0 === (this.$bitmap$ >>> $JSCompiler_inline_result$jscomp$101_i_34508_key$jscomp$140$$ & 1) ? $JSCompiler_inline_result$jscomp$101_i_34508_key$jscomp$140$$ += 1 : ($idx$jscomp$30_j$jscomp$inline_1171_nodes$jscomp$15$$[$JSCompiler_inline_result$jscomp$101_i_34508_key$jscomp$140$$] = null != this.$arr$[$G__34511_G__34513_i$jscomp$inline_1169_j_34509_val$jscomp$86$$] ? $cljs$core$BitmapIndexedNode$EMPTY$$.$inode_assoc_BANG_$($edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_1173$$, 
          $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$ + 5, $cljs$core$hash$$(this.$arr$[$G__34511_G__34513_i$jscomp$inline_1169_j_34509_val$jscomp$86$$]), this.$arr$[$G__34511_G__34513_i$jscomp$inline_1169_j_34509_val$jscomp$86$$], this.$arr$[$G__34511_G__34513_i$jscomp$inline_1169_j_34509_val$jscomp$86$$ + 1], $G__32250$jscomp$inline_696_added_leaf_QMARK__i__$1$jscomp$inline_1161$$) : this.$arr$[$G__34511_G__34513_i$jscomp$inline_1169_j_34509_val$jscomp$86$$ + 1], $G__34511_G__34513_i$jscomp$inline_1169_j_34509_val$jscomp$86$$ += 
          2, $JSCompiler_inline_result$jscomp$101_i_34508_key$jscomp$140$$ += 1);
        } else {
          break;
        }
      }
      return new $cljs$core$ArrayNode$$($edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_1173$$, $G__33581$jscomp$inline_1164_j__$1$jscomp$inline_1162_key_or_nil$jscomp$2_n$jscomp$115$$ + 1, $idx$jscomp$30_j$jscomp$inline_1171_nodes$jscomp$15$$);
    }
    $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$ = Array(2 * ($G__33581$jscomp$inline_1164_j__$1$jscomp$inline_1162_key_or_nil$jscomp$2_n$jscomp$115$$ + 4));
    $cljs$core$array_copy$$(this.$arr$, 0, $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$, 0, 2 * $idx$jscomp$30_j$jscomp$inline_1171_nodes$jscomp$15$$);
    $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$[2 * $idx$jscomp$30_j$jscomp$inline_1171_nodes$jscomp$15$$] = $JSCompiler_inline_result$jscomp$101_i_34508_key$jscomp$140$$;
    $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$[2 * $idx$jscomp$30_j$jscomp$inline_1171_nodes$jscomp$15$$ + 1] = $G__34511_G__34513_i$jscomp$inline_1169_j_34509_val$jscomp$86$$;
    $cljs$core$array_copy$$(this.$arr$, 2 * $idx$jscomp$30_j$jscomp$inline_1171_nodes$jscomp$15$$, $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$, 2 * ($idx$jscomp$30_j$jscomp$inline_1171_nodes$jscomp$15$$ + 1), 2 * ($G__33581$jscomp$inline_1164_j__$1$jscomp$inline_1162_key_or_nil$jscomp$2_n$jscomp$115$$ - $idx$jscomp$30_j$jscomp$inline_1171_nodes$jscomp$15$$));
    $G__32250$jscomp$inline_696_added_leaf_QMARK__i__$1$jscomp$inline_1161$$.$val$ = !0;
    $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_1173$$ = this.$ensure_editable$($edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_1173$$);
    $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_1173$$.$arr$ = $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$;
    $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_1173$$.$bitmap$ |= $bit$jscomp$5_val_or_node$jscomp$2$$;
    return $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_1173$$;
  }
  $G__33581$jscomp$inline_1164_j__$1$jscomp$inline_1162_key_or_nil$jscomp$2_n$jscomp$115$$ = this.$arr$[2 * $idx$jscomp$30_j$jscomp$inline_1171_nodes$jscomp$15$$];
  $bit$jscomp$5_val_or_node$jscomp$2$$ = this.$arr$[2 * $idx$jscomp$30_j$jscomp$inline_1171_nodes$jscomp$15$$ + 1];
  if (null == $G__33581$jscomp$inline_1164_j__$1$jscomp$inline_1162_key_or_nil$jscomp$2_n$jscomp$115$$) {
    return $G__33581$jscomp$inline_1164_j__$1$jscomp$inline_1162_key_or_nil$jscomp$2_n$jscomp$115$$ = $bit$jscomp$5_val_or_node$jscomp$2$$.$inode_assoc_BANG_$($edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_1173$$, $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$ + 5, $G__33582$jscomp$inline_1165_hash$jscomp$7_len$jscomp$inline_1160_len__$1$jscomp$inline_1163$$, $JSCompiler_inline_result$jscomp$101_i_34508_key$jscomp$140$$, $G__34511_G__34513_i$jscomp$inline_1169_j_34509_val$jscomp$86$$, 
    $G__32250$jscomp$inline_696_added_leaf_QMARK__i__$1$jscomp$inline_1161$$), $G__33581$jscomp$inline_1164_j__$1$jscomp$inline_1162_key_or_nil$jscomp$2_n$jscomp$115$$ === $bit$jscomp$5_val_or_node$jscomp$2$$ ? this : $cljs$core$edit_and_set$cljs$0core$0IFn$0_invoke$0arity$04$$(this, $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_1173$$, 2 * $idx$jscomp$30_j$jscomp$inline_1171_nodes$jscomp$15$$ + 1, $G__33581$jscomp$inline_1164_j__$1$jscomp$inline_1162_key_or_nil$jscomp$2_n$jscomp$115$$);
  }
  if ($cljs$core$key_test$$($JSCompiler_inline_result$jscomp$101_i_34508_key$jscomp$140$$, $G__33581$jscomp$inline_1164_j__$1$jscomp$inline_1162_key_or_nil$jscomp$2_n$jscomp$115$$)) {
    return $G__34511_G__34513_i$jscomp$inline_1169_j_34509_val$jscomp$86$$ === $bit$jscomp$5_val_or_node$jscomp$2$$ ? this : $cljs$core$edit_and_set$cljs$0core$0IFn$0_invoke$0arity$04$$(this, $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_1173$$, 2 * $idx$jscomp$30_j$jscomp$inline_1171_nodes$jscomp$15$$ + 1, $G__34511_G__34513_i$jscomp$inline_1169_j_34509_val$jscomp$86$$);
  }
  $G__32250$jscomp$inline_696_added_leaf_QMARK__i__$1$jscomp$inline_1161$$.$val$ = !0;
  $G__32250$jscomp$inline_696_added_leaf_QMARK__i__$1$jscomp$inline_1161$$ = $earr$jscomp$1_new_arr$jscomp$4_shift$jscomp$8$$ + 5;
  $JSCompiler_inline_result$jscomp$101_i_34508_key$jscomp$140$$ = $cljs$core$create_node$cljs$0core$0IFn$0_invoke$0arity$07$$ ? $cljs$core$create_node$cljs$0core$0IFn$0_invoke$0arity$07$$($edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_1173$$, $G__32250$jscomp$inline_696_added_leaf_QMARK__i__$1$jscomp$inline_1161$$, $G__33581$jscomp$inline_1164_j__$1$jscomp$inline_1162_key_or_nil$jscomp$2_n$jscomp$115$$, $bit$jscomp$5_val_or_node$jscomp$2$$, $G__33582$jscomp$inline_1165_hash$jscomp$7_len$jscomp$inline_1160_len__$1$jscomp$inline_1163$$, 
  $JSCompiler_inline_result$jscomp$101_i_34508_key$jscomp$140$$, $G__34511_G__34513_i$jscomp$inline_1169_j_34509_val$jscomp$86$$) : $cljs$core$create_node$$.call(null, $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_1173$$, $G__32250$jscomp$inline_696_added_leaf_QMARK__i__$1$jscomp$inline_1161$$, $G__33581$jscomp$inline_1164_j__$1$jscomp$inline_1162_key_or_nil$jscomp$2_n$jscomp$115$$, $bit$jscomp$5_val_or_node$jscomp$2$$, $G__33582$jscomp$inline_1165_hash$jscomp$7_len$jscomp$inline_1160_len__$1$jscomp$inline_1163$$, 
  $JSCompiler_inline_result$jscomp$101_i_34508_key$jscomp$140$$, $G__34511_G__34513_i$jscomp$inline_1169_j_34509_val$jscomp$86$$);
  $G__34511_G__34513_i$jscomp$inline_1169_j_34509_val$jscomp$86$$ = 2 * $idx$jscomp$30_j$jscomp$inline_1171_nodes$jscomp$15$$;
  $idx$jscomp$30_j$jscomp$inline_1171_nodes$jscomp$15$$ = 2 * $idx$jscomp$30_j$jscomp$inline_1171_nodes$jscomp$15$$ + 1;
  $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_1173$$ = this.$ensure_editable$($edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_1173$$);
  $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_1173$$.$arr$[$G__34511_G__34513_i$jscomp$inline_1169_j_34509_val$jscomp$86$$] = null;
  $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_1173$$.$arr$[$idx$jscomp$30_j$jscomp$inline_1171_nodes$jscomp$15$$] = $JSCompiler_inline_result$jscomp$101_i_34508_key$jscomp$140$$;
  return $edit__$1$jscomp$1_editable$jscomp$3_editable$jscomp$inline_1173$$;
};
$JSCompiler_prototypeAlias$$.$inode_assoc$ = function($G__32256$jscomp$inline_698_JSCompiler_inline_result$jscomp$104_new_arr$jscomp$5_shift$jscomp$9$$, $hash$jscomp$8$$, $i$jscomp$inline_1176_i_34514_key$jscomp$141$$, $G__32243$jscomp$inline_1179_G__34517_G__34519_j_34515_val$jscomp$87$$, $JSCompiler_temp_const$jscomp$103_added_leaf_QMARK_$jscomp$1$$) {
  var $bit$jscomp$6_val_or_node$jscomp$3$$ = 1 << ($hash$jscomp$8$$ >>> $G__32256$jscomp$inline_698_JSCompiler_inline_result$jscomp$104_new_arr$jscomp$5_shift$jscomp$9$$ & 31), $idx$jscomp$31_j$jscomp$inline_1177_nodes$jscomp$16$$ = $cljs$core$bit_count$$(this.$bitmap$ & $bit$jscomp$6_val_or_node$jscomp$3$$ - 1);
  if (0 === (this.$bitmap$ & $bit$jscomp$6_val_or_node$jscomp$3$$)) {
    var $JSCompiler_temp_const$jscomp$102_n$jscomp$116$$ = $cljs$core$bit_count$$(this.$bitmap$);
    if (16 <= $JSCompiler_temp_const$jscomp$102_n$jscomp$116$$) {
      $idx$jscomp$31_j$jscomp$inline_1177_nodes$jscomp$16$$ = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      $idx$jscomp$31_j$jscomp$inline_1177_nodes$jscomp$16$$[$hash$jscomp$8$$ >>> $G__32256$jscomp$inline_698_JSCompiler_inline_result$jscomp$104_new_arr$jscomp$5_shift$jscomp$9$$ & 31] = $cljs$core$BitmapIndexedNode$EMPTY$$.$inode_assoc$($G__32256$jscomp$inline_698_JSCompiler_inline_result$jscomp$104_new_arr$jscomp$5_shift$jscomp$9$$ + 5, $hash$jscomp$8$$, $i$jscomp$inline_1176_i_34514_key$jscomp$141$$, $G__32243$jscomp$inline_1179_G__34517_G__34519_j_34515_val$jscomp$87$$, $JSCompiler_temp_const$jscomp$103_added_leaf_QMARK_$jscomp$1$$);
      for ($G__32243$jscomp$inline_1179_G__34517_G__34519_j_34515_val$jscomp$87$$ = $i$jscomp$inline_1176_i_34514_key$jscomp$141$$ = 0;;) {
        if (32 > $i$jscomp$inline_1176_i_34514_key$jscomp$141$$) {
          0 === (this.$bitmap$ >>> $i$jscomp$inline_1176_i_34514_key$jscomp$141$$ & 1) ? $i$jscomp$inline_1176_i_34514_key$jscomp$141$$ += 1 : ($idx$jscomp$31_j$jscomp$inline_1177_nodes$jscomp$16$$[$i$jscomp$inline_1176_i_34514_key$jscomp$141$$] = null != this.$arr$[$G__32243$jscomp$inline_1179_G__34517_G__34519_j_34515_val$jscomp$87$$] ? $cljs$core$BitmapIndexedNode$EMPTY$$.$inode_assoc$($G__32256$jscomp$inline_698_JSCompiler_inline_result$jscomp$104_new_arr$jscomp$5_shift$jscomp$9$$ + 5, $cljs$core$hash$$(this.$arr$[$G__32243$jscomp$inline_1179_G__34517_G__34519_j_34515_val$jscomp$87$$]), 
          this.$arr$[$G__32243$jscomp$inline_1179_G__34517_G__34519_j_34515_val$jscomp$87$$], this.$arr$[$G__32243$jscomp$inline_1179_G__34517_G__34519_j_34515_val$jscomp$87$$ + 1], $JSCompiler_temp_const$jscomp$103_added_leaf_QMARK_$jscomp$1$$) : this.$arr$[$G__32243$jscomp$inline_1179_G__34517_G__34519_j_34515_val$jscomp$87$$ + 1], $G__32243$jscomp$inline_1179_G__34517_G__34519_j_34515_val$jscomp$87$$ += 2, $i$jscomp$inline_1176_i_34514_key$jscomp$141$$ += 1);
        } else {
          break;
        }
      }
      return new $cljs$core$ArrayNode$$(null, $JSCompiler_temp_const$jscomp$102_n$jscomp$116$$ + 1, $idx$jscomp$31_j$jscomp$inline_1177_nodes$jscomp$16$$);
    }
    $G__32256$jscomp$inline_698_JSCompiler_inline_result$jscomp$104_new_arr$jscomp$5_shift$jscomp$9$$ = Array(2 * ($JSCompiler_temp_const$jscomp$102_n$jscomp$116$$ + 1));
    $cljs$core$array_copy$$(this.$arr$, 0, $G__32256$jscomp$inline_698_JSCompiler_inline_result$jscomp$104_new_arr$jscomp$5_shift$jscomp$9$$, 0, 2 * $idx$jscomp$31_j$jscomp$inline_1177_nodes$jscomp$16$$);
    $G__32256$jscomp$inline_698_JSCompiler_inline_result$jscomp$104_new_arr$jscomp$5_shift$jscomp$9$$[2 * $idx$jscomp$31_j$jscomp$inline_1177_nodes$jscomp$16$$] = $i$jscomp$inline_1176_i_34514_key$jscomp$141$$;
    $G__32256$jscomp$inline_698_JSCompiler_inline_result$jscomp$104_new_arr$jscomp$5_shift$jscomp$9$$[2 * $idx$jscomp$31_j$jscomp$inline_1177_nodes$jscomp$16$$ + 1] = $G__32243$jscomp$inline_1179_G__34517_G__34519_j_34515_val$jscomp$87$$;
    $cljs$core$array_copy$$(this.$arr$, 2 * $idx$jscomp$31_j$jscomp$inline_1177_nodes$jscomp$16$$, $G__32256$jscomp$inline_698_JSCompiler_inline_result$jscomp$104_new_arr$jscomp$5_shift$jscomp$9$$, 2 * ($idx$jscomp$31_j$jscomp$inline_1177_nodes$jscomp$16$$ + 1), 2 * ($JSCompiler_temp_const$jscomp$102_n$jscomp$116$$ - $idx$jscomp$31_j$jscomp$inline_1177_nodes$jscomp$16$$));
    $JSCompiler_temp_const$jscomp$103_added_leaf_QMARK_$jscomp$1$$.$val$ = !0;
    return new $cljs$core$BitmapIndexedNode$$(null, this.$bitmap$ | $bit$jscomp$6_val_or_node$jscomp$3$$, $G__32256$jscomp$inline_698_JSCompiler_inline_result$jscomp$104_new_arr$jscomp$5_shift$jscomp$9$$);
  }
  var $key_or_nil$jscomp$3$$ = this.$arr$[2 * $idx$jscomp$31_j$jscomp$inline_1177_nodes$jscomp$16$$];
  $bit$jscomp$6_val_or_node$jscomp$3$$ = this.$arr$[2 * $idx$jscomp$31_j$jscomp$inline_1177_nodes$jscomp$16$$ + 1];
  if (null == $key_or_nil$jscomp$3$$) {
    return $JSCompiler_temp_const$jscomp$102_n$jscomp$116$$ = $bit$jscomp$6_val_or_node$jscomp$3$$.$inode_assoc$($G__32256$jscomp$inline_698_JSCompiler_inline_result$jscomp$104_new_arr$jscomp$5_shift$jscomp$9$$ + 5, $hash$jscomp$8$$, $i$jscomp$inline_1176_i_34514_key$jscomp$141$$, $G__32243$jscomp$inline_1179_G__34517_G__34519_j_34515_val$jscomp$87$$, $JSCompiler_temp_const$jscomp$103_added_leaf_QMARK_$jscomp$1$$), $JSCompiler_temp_const$jscomp$102_n$jscomp$116$$ === $bit$jscomp$6_val_or_node$jscomp$3$$ ? 
    this : new $cljs$core$BitmapIndexedNode$$(null, this.$bitmap$, $cljs$core$clone_and_set$cljs$0core$0IFn$0_invoke$0arity$03$$(this.$arr$, 2 * $idx$jscomp$31_j$jscomp$inline_1177_nodes$jscomp$16$$ + 1, $JSCompiler_temp_const$jscomp$102_n$jscomp$116$$));
  }
  if ($cljs$core$key_test$$($i$jscomp$inline_1176_i_34514_key$jscomp$141$$, $key_or_nil$jscomp$3$$)) {
    return $G__32243$jscomp$inline_1179_G__34517_G__34519_j_34515_val$jscomp$87$$ === $bit$jscomp$6_val_or_node$jscomp$3$$ ? this : new $cljs$core$BitmapIndexedNode$$(null, this.$bitmap$, $cljs$core$clone_and_set$cljs$0core$0IFn$0_invoke$0arity$03$$(this.$arr$, 2 * $idx$jscomp$31_j$jscomp$inline_1177_nodes$jscomp$16$$ + 1, $G__32243$jscomp$inline_1179_G__34517_G__34519_j_34515_val$jscomp$87$$));
  }
  $JSCompiler_temp_const$jscomp$103_added_leaf_QMARK_$jscomp$1$$.$val$ = !0;
  $JSCompiler_temp_const$jscomp$103_added_leaf_QMARK_$jscomp$1$$ = this.$bitmap$;
  $JSCompiler_temp_const$jscomp$102_n$jscomp$116$$ = this.$arr$;
  $G__32256$jscomp$inline_698_JSCompiler_inline_result$jscomp$104_new_arr$jscomp$5_shift$jscomp$9$$ += 5;
  $G__32256$jscomp$inline_698_JSCompiler_inline_result$jscomp$104_new_arr$jscomp$5_shift$jscomp$9$$ = $cljs$core$create_node$cljs$0core$0IFn$0_invoke$0arity$06$$ ? $cljs$core$create_node$cljs$0core$0IFn$0_invoke$0arity$06$$($G__32256$jscomp$inline_698_JSCompiler_inline_result$jscomp$104_new_arr$jscomp$5_shift$jscomp$9$$, $key_or_nil$jscomp$3$$, $bit$jscomp$6_val_or_node$jscomp$3$$, $hash$jscomp$8$$, $i$jscomp$inline_1176_i_34514_key$jscomp$141$$, $G__32243$jscomp$inline_1179_G__34517_G__34519_j_34515_val$jscomp$87$$) : 
  $cljs$core$create_node$$.call(null, $G__32256$jscomp$inline_698_JSCompiler_inline_result$jscomp$104_new_arr$jscomp$5_shift$jscomp$9$$, $key_or_nil$jscomp$3$$, $bit$jscomp$6_val_or_node$jscomp$3$$, $hash$jscomp$8$$, $i$jscomp$inline_1176_i_34514_key$jscomp$141$$, $G__32243$jscomp$inline_1179_G__34517_G__34519_j_34515_val$jscomp$87$$);
  $i$jscomp$inline_1176_i_34514_key$jscomp$141$$ = 2 * $idx$jscomp$31_j$jscomp$inline_1177_nodes$jscomp$16$$;
  $idx$jscomp$31_j$jscomp$inline_1177_nodes$jscomp$16$$ = 2 * $idx$jscomp$31_j$jscomp$inline_1177_nodes$jscomp$16$$ + 1;
  $G__32243$jscomp$inline_1179_G__34517_G__34519_j_34515_val$jscomp$87$$ = $cljs$core$aclone$$($JSCompiler_temp_const$jscomp$102_n$jscomp$116$$);
  $G__32243$jscomp$inline_1179_G__34517_G__34519_j_34515_val$jscomp$87$$[$i$jscomp$inline_1176_i_34514_key$jscomp$141$$] = null;
  $G__32243$jscomp$inline_1179_G__34517_G__34519_j_34515_val$jscomp$87$$[$idx$jscomp$31_j$jscomp$inline_1177_nodes$jscomp$16$$] = $G__32256$jscomp$inline_698_JSCompiler_inline_result$jscomp$104_new_arr$jscomp$5_shift$jscomp$9$$;
  return new $cljs$core$BitmapIndexedNode$$(null, $JSCompiler_temp_const$jscomp$103_added_leaf_QMARK_$jscomp$1$$, $G__32243$jscomp$inline_1179_G__34517_G__34519_j_34515_val$jscomp$87$$);
};
$JSCompiler_prototypeAlias$$.$inode_find$ = function($shift$jscomp$10$$, $hash$jscomp$9$$, $key$jscomp$142$$, $not_found$jscomp$34$$) {
  var $bit$jscomp$7_key_or_nil$jscomp$4$$ = 1 << ($hash$jscomp$9$$ >>> $shift$jscomp$10$$ & 31);
  if (0 === (this.$bitmap$ & $bit$jscomp$7_key_or_nil$jscomp$4$$)) {
    return $not_found$jscomp$34$$;
  }
  var $idx$jscomp$32_val_or_node$jscomp$4$$ = $cljs$core$bit_count$$(this.$bitmap$ & $bit$jscomp$7_key_or_nil$jscomp$4$$ - 1);
  $bit$jscomp$7_key_or_nil$jscomp$4$$ = this.$arr$[2 * $idx$jscomp$32_val_or_node$jscomp$4$$];
  $idx$jscomp$32_val_or_node$jscomp$4$$ = this.$arr$[2 * $idx$jscomp$32_val_or_node$jscomp$4$$ + 1];
  return null == $bit$jscomp$7_key_or_nil$jscomp$4$$ ? $idx$jscomp$32_val_or_node$jscomp$4$$.$inode_find$($shift$jscomp$10$$ + 5, $hash$jscomp$9$$, $key$jscomp$142$$, $not_found$jscomp$34$$) : $cljs$core$key_test$$($key$jscomp$142$$, $bit$jscomp$7_key_or_nil$jscomp$4$$) ? new $cljs$core$MapEntry$$($bit$jscomp$7_key_or_nil$jscomp$4$$, $idx$jscomp$32_val_or_node$jscomp$4$$) : $not_found$jscomp$34$$;
};
$JSCompiler_prototypeAlias$$.$inode_without$ = function($n$jscomp$117_shift$jscomp$11$$, $hash$jscomp$10$$, $key$jscomp$143$$) {
  var $bit$jscomp$8$$ = 1 << ($hash$jscomp$10$$ >>> $n$jscomp$117_shift$jscomp$11$$ & 31);
  if (0 === (this.$bitmap$ & $bit$jscomp$8$$)) {
    return this;
  }
  var $idx$jscomp$33$$ = $cljs$core$bit_count$$(this.$bitmap$ & $bit$jscomp$8$$ - 1), $key_or_nil$jscomp$5$$ = this.$arr$[2 * $idx$jscomp$33$$], $val_or_node$jscomp$5$$ = this.$arr$[2 * $idx$jscomp$33$$ + 1];
  return null == $key_or_nil$jscomp$5$$ ? ($n$jscomp$117_shift$jscomp$11$$ = $val_or_node$jscomp$5$$.$inode_without$($n$jscomp$117_shift$jscomp$11$$ + 5, $hash$jscomp$10$$, $key$jscomp$143$$), $n$jscomp$117_shift$jscomp$11$$ === $val_or_node$jscomp$5$$ ? this : null != $n$jscomp$117_shift$jscomp$11$$ ? new $cljs$core$BitmapIndexedNode$$(null, this.$bitmap$, $cljs$core$clone_and_set$cljs$0core$0IFn$0_invoke$0arity$03$$(this.$arr$, 2 * $idx$jscomp$33$$ + 1, $n$jscomp$117_shift$jscomp$11$$)) : this.$bitmap$ === 
  $bit$jscomp$8$$ ? null : new $cljs$core$BitmapIndexedNode$$(null, this.$bitmap$ ^ $bit$jscomp$8$$, $cljs$core$remove_pair$$(this.$arr$, $idx$jscomp$33$$))) : $cljs$core$key_test$$($key$jscomp$143$$, $key_or_nil$jscomp$5$$) ? new $cljs$core$BitmapIndexedNode$$(null, this.$bitmap$ ^ $bit$jscomp$8$$, $cljs$core$remove_pair$$(this.$arr$, $idx$jscomp$33$$)) : this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIterable$_iterator$arity$1$ = function() {
  return new $cljs$core$NodeIterator$$(this.$arr$);
};
var $cljs$core$BitmapIndexedNode$EMPTY$$ = new $cljs$core$BitmapIndexedNode$$(null, 0, []);
function $cljs$core$ArrayNodeIterator$$($arr$jscomp$125$$) {
  this.$arr$ = $arr$jscomp$125$$;
  this.$i$ = 0;
  this.$next_iter$ = null;
}
$cljs$core$ArrayNodeIterator$$.prototype.$hasNext$ = function() {
  for (var $len$jscomp$38$$ = this.$arr$.length;;) {
    if (null != this.$next_iter$ && this.$next_iter$.$hasNext$()) {
      return !0;
    }
    if (this.$i$ < $len$jscomp$38$$) {
      var $node$jscomp$49$$ = this.$arr$[this.$i$];
      this.$i$ += 1;
      null != $node$jscomp$49$$ && (this.$next_iter$ = $cljs$core$_iterator$$($node$jscomp$49$$));
    } else {
      return !1;
    }
  }
};
$cljs$core$ArrayNodeIterator$$.prototype.next = function() {
  if (this.$hasNext$()) {
    return this.$next_iter$.next();
  }
  throw Error("No such element");
};
$cljs$core$ArrayNodeIterator$$.prototype.remove = function() {
  return Error("Unsupported operation");
};
function $cljs$core$ArrayNode$$($edit$jscomp$10$$, $cnt$jscomp$17$$, $arr$jscomp$127$$) {
  this.$edit$ = $edit$jscomp$10$$;
  this.$cnt$ = $cnt$jscomp$17$$;
  this.$arr$ = $arr$jscomp$127$$;
  this.$cljs$lang$protocol_mask$partition1$$ = 131072;
  this.$cljs$lang$protocol_mask$partition0$$ = 0;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$ArrayNode$$.prototype;
$JSCompiler_prototypeAlias$$.$ensure_editable$ = function($e$jscomp$90$$) {
  return $e$jscomp$90$$ === this.$edit$ ? this : new $cljs$core$ArrayNode$$($e$jscomp$90$$, this.$cnt$, $cljs$core$aclone$$(this.$arr$));
};
$JSCompiler_prototypeAlias$$.$inode_seq$ = function() {
  return $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$01$$ ? $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$01$$(this.$arr$) : $cljs$core$create_array_node_seq$$.call(null, this.$arr$);
};
$JSCompiler_prototypeAlias$$.$kv_reduce$ = function($f$jscomp$272$$, $G__34527_G__34529_init$jscomp$19_init__$1$jscomp$6_init__$2$jscomp$8$$) {
  for (var $len$jscomp$39$$ = this.$arr$.length, $i$jscomp$252$$ = 0;;) {
    if ($i$jscomp$252$$ < $len$jscomp$39$$) {
      var $node$jscomp$51$$ = this.$arr$[$i$jscomp$252$$];
      if (null != $node$jscomp$51$$) {
        $G__34527_G__34529_init$jscomp$19_init__$1$jscomp$6_init__$2$jscomp$8$$ = $node$jscomp$51$$.$kv_reduce$($f$jscomp$272$$, $G__34527_G__34529_init$jscomp$19_init__$1$jscomp$6_init__$2$jscomp$8$$);
        if ($cljs$core$reduced_QMARK_$$($G__34527_G__34529_init$jscomp$19_init__$1$jscomp$6_init__$2$jscomp$8$$)) {
          return $G__34527_G__34529_init$jscomp$19_init__$1$jscomp$6_init__$2$jscomp$8$$;
        }
        $i$jscomp$252$$ += 1;
      } else {
        $i$jscomp$252$$ += 1;
      }
    } else {
      return $G__34527_G__34529_init$jscomp$19_init__$1$jscomp$6_init__$2$jscomp$8$$;
    }
  }
};
$JSCompiler_prototypeAlias$$.$inode_lookup$ = function($shift$jscomp$13$$, $hash$jscomp$12$$, $key$jscomp$145$$, $not_found$jscomp$35$$) {
  var $node$jscomp$52$$ = this.$arr$[$hash$jscomp$12$$ >>> $shift$jscomp$13$$ & 31];
  return null != $node$jscomp$52$$ ? $node$jscomp$52$$.$inode_lookup$($shift$jscomp$13$$ + 5, $hash$jscomp$12$$, $key$jscomp$145$$, $not_found$jscomp$35$$) : $not_found$jscomp$35$$;
};
$JSCompiler_prototypeAlias$$.$inode_assoc_BANG_$ = function($edit__$1$jscomp$3_editable$jscomp$5$$, $n$jscomp$119_shift$jscomp$14$$, $hash$jscomp$13$$, $key$jscomp$146$$, $val$jscomp$88$$, $added_leaf_QMARK_$jscomp$2$$) {
  var $idx$jscomp$37$$ = $hash$jscomp$13$$ >>> $n$jscomp$119_shift$jscomp$14$$ & 31, $node$jscomp$53$$ = this.$arr$[$idx$jscomp$37$$];
  if (null == $node$jscomp$53$$) {
    return $edit__$1$jscomp$3_editable$jscomp$5$$ = $cljs$core$edit_and_set$cljs$0core$0IFn$0_invoke$0arity$04$$(this, $edit__$1$jscomp$3_editable$jscomp$5$$, $idx$jscomp$37$$, $cljs$core$BitmapIndexedNode$EMPTY$$.$inode_assoc_BANG_$($edit__$1$jscomp$3_editable$jscomp$5$$, $n$jscomp$119_shift$jscomp$14$$ + 5, $hash$jscomp$13$$, $key$jscomp$146$$, $val$jscomp$88$$, $added_leaf_QMARK_$jscomp$2$$)), $edit__$1$jscomp$3_editable$jscomp$5$$.$cnt$ += 1, $edit__$1$jscomp$3_editable$jscomp$5$$;
  }
  $n$jscomp$119_shift$jscomp$14$$ = $node$jscomp$53$$.$inode_assoc_BANG_$($edit__$1$jscomp$3_editable$jscomp$5$$, $n$jscomp$119_shift$jscomp$14$$ + 5, $hash$jscomp$13$$, $key$jscomp$146$$, $val$jscomp$88$$, $added_leaf_QMARK_$jscomp$2$$);
  return $n$jscomp$119_shift$jscomp$14$$ === $node$jscomp$53$$ ? this : $cljs$core$edit_and_set$cljs$0core$0IFn$0_invoke$0arity$04$$(this, $edit__$1$jscomp$3_editable$jscomp$5$$, $idx$jscomp$37$$, $n$jscomp$119_shift$jscomp$14$$);
};
$JSCompiler_prototypeAlias$$.$inode_assoc$ = function($n$jscomp$120_shift$jscomp$15$$, $hash$jscomp$14$$, $key$jscomp$147$$, $val$jscomp$89$$, $added_leaf_QMARK_$jscomp$3$$) {
  var $idx$jscomp$38$$ = $hash$jscomp$14$$ >>> $n$jscomp$120_shift$jscomp$15$$ & 31, $node$jscomp$54$$ = this.$arr$[$idx$jscomp$38$$];
  if (null == $node$jscomp$54$$) {
    return new $cljs$core$ArrayNode$$(null, this.$cnt$ + 1, $cljs$core$clone_and_set$cljs$0core$0IFn$0_invoke$0arity$03$$(this.$arr$, $idx$jscomp$38$$, $cljs$core$BitmapIndexedNode$EMPTY$$.$inode_assoc$($n$jscomp$120_shift$jscomp$15$$ + 5, $hash$jscomp$14$$, $key$jscomp$147$$, $val$jscomp$89$$, $added_leaf_QMARK_$jscomp$3$$)));
  }
  $n$jscomp$120_shift$jscomp$15$$ = $node$jscomp$54$$.$inode_assoc$($n$jscomp$120_shift$jscomp$15$$ + 5, $hash$jscomp$14$$, $key$jscomp$147$$, $val$jscomp$89$$, $added_leaf_QMARK_$jscomp$3$$);
  return $n$jscomp$120_shift$jscomp$15$$ === $node$jscomp$54$$ ? this : new $cljs$core$ArrayNode$$(null, this.$cnt$, $cljs$core$clone_and_set$cljs$0core$0IFn$0_invoke$0arity$03$$(this.$arr$, $idx$jscomp$38$$, $n$jscomp$120_shift$jscomp$15$$));
};
$JSCompiler_prototypeAlias$$.$inode_find$ = function($shift$jscomp$16$$, $hash$jscomp$15$$, $key$jscomp$148$$, $not_found$jscomp$36$$) {
  var $node$jscomp$55$$ = this.$arr$[$hash$jscomp$15$$ >>> $shift$jscomp$16$$ & 31];
  return null != $node$jscomp$55$$ ? $node$jscomp$55$$.$inode_find$($shift$jscomp$16$$ + 5, $hash$jscomp$15$$, $key$jscomp$148$$, $not_found$jscomp$36$$) : $not_found$jscomp$36$$;
};
$JSCompiler_prototypeAlias$$.$inode_without$ = function($len$jscomp$inline_704_n$jscomp$121_shift$jscomp$17$$, $hash$jscomp$16_new_arr$jscomp$inline_705$$, $i$jscomp$inline_706_key$jscomp$149$$) {
  var $JSCompiler_temp$jscomp$105_JSCompiler_temp$jscomp$106_JSCompiler_temp$jscomp$107_idx$jscomp$40$$ = $hash$jscomp$16_new_arr$jscomp$inline_705$$ >>> $len$jscomp$inline_704_n$jscomp$121_shift$jscomp$17$$ & 31, $arr$jscomp$inline_703_node$jscomp$56$$ = this.$arr$[$JSCompiler_temp$jscomp$105_JSCompiler_temp$jscomp$106_JSCompiler_temp$jscomp$107_idx$jscomp$40$$];
  if (null != $arr$jscomp$inline_703_node$jscomp$56$$) {
    $len$jscomp$inline_704_n$jscomp$121_shift$jscomp$17$$ = $arr$jscomp$inline_703_node$jscomp$56$$.$inode_without$($len$jscomp$inline_704_n$jscomp$121_shift$jscomp$17$$ + 5, $hash$jscomp$16_new_arr$jscomp$inline_705$$, $i$jscomp$inline_706_key$jscomp$149$$);
    if ($len$jscomp$inline_704_n$jscomp$121_shift$jscomp$17$$ === $arr$jscomp$inline_703_node$jscomp$56$$) {
      $JSCompiler_temp$jscomp$105_JSCompiler_temp$jscomp$106_JSCompiler_temp$jscomp$107_idx$jscomp$40$$ = this;
    } else {
      if (null == $len$jscomp$inline_704_n$jscomp$121_shift$jscomp$17$$) {
        if (8 >= this.$cnt$) {
          a: {
            $arr$jscomp$inline_703_node$jscomp$56$$ = this.$arr$;
            $len$jscomp$inline_704_n$jscomp$121_shift$jscomp$17$$ = $arr$jscomp$inline_703_node$jscomp$56$$.length;
            $hash$jscomp$16_new_arr$jscomp$inline_705$$ = Array(2 * (this.$cnt$ - 1));
            $i$jscomp$inline_706_key$jscomp$149$$ = 0;
            for (var $G__34521$jscomp$inline_709_G__34524$jscomp$inline_711_j$jscomp$inline_707$$ = 1, $G__34522$jscomp$inline_710_G__34525$jscomp$inline_712_bitmap$jscomp$inline_708$$ = 0;;) {
              if ($i$jscomp$inline_706_key$jscomp$149$$ < $len$jscomp$inline_704_n$jscomp$121_shift$jscomp$17$$) {
                $i$jscomp$inline_706_key$jscomp$149$$ !== $JSCompiler_temp$jscomp$105_JSCompiler_temp$jscomp$106_JSCompiler_temp$jscomp$107_idx$jscomp$40$$ && null != $arr$jscomp$inline_703_node$jscomp$56$$[$i$jscomp$inline_706_key$jscomp$149$$] ? ($hash$jscomp$16_new_arr$jscomp$inline_705$$[$G__34521$jscomp$inline_709_G__34524$jscomp$inline_711_j$jscomp$inline_707$$] = $arr$jscomp$inline_703_node$jscomp$56$$[$i$jscomp$inline_706_key$jscomp$149$$], $G__34521$jscomp$inline_709_G__34524$jscomp$inline_711_j$jscomp$inline_707$$ += 
                2, $G__34522$jscomp$inline_710_G__34525$jscomp$inline_712_bitmap$jscomp$inline_708$$ |= 1 << $i$jscomp$inline_706_key$jscomp$149$$, $i$jscomp$inline_706_key$jscomp$149$$ += 1) : $i$jscomp$inline_706_key$jscomp$149$$ += 1;
              } else {
                $JSCompiler_temp$jscomp$105_JSCompiler_temp$jscomp$106_JSCompiler_temp$jscomp$107_idx$jscomp$40$$ = new $cljs$core$BitmapIndexedNode$$(null, $G__34522$jscomp$inline_710_G__34525$jscomp$inline_712_bitmap$jscomp$inline_708$$, $hash$jscomp$16_new_arr$jscomp$inline_705$$);
                break a;
              }
            }
          }
        } else {
          $JSCompiler_temp$jscomp$105_JSCompiler_temp$jscomp$106_JSCompiler_temp$jscomp$107_idx$jscomp$40$$ = new $cljs$core$ArrayNode$$(null, this.$cnt$ - 1, $cljs$core$clone_and_set$cljs$0core$0IFn$0_invoke$0arity$03$$(this.$arr$, $JSCompiler_temp$jscomp$105_JSCompiler_temp$jscomp$106_JSCompiler_temp$jscomp$107_idx$jscomp$40$$, $len$jscomp$inline_704_n$jscomp$121_shift$jscomp$17$$));
        }
      } else {
        $JSCompiler_temp$jscomp$105_JSCompiler_temp$jscomp$106_JSCompiler_temp$jscomp$107_idx$jscomp$40$$ = new $cljs$core$ArrayNode$$(null, this.$cnt$, $cljs$core$clone_and_set$cljs$0core$0IFn$0_invoke$0arity$03$$(this.$arr$, $JSCompiler_temp$jscomp$105_JSCompiler_temp$jscomp$106_JSCompiler_temp$jscomp$107_idx$jscomp$40$$, $len$jscomp$inline_704_n$jscomp$121_shift$jscomp$17$$));
      }
    }
    return $JSCompiler_temp$jscomp$105_JSCompiler_temp$jscomp$106_JSCompiler_temp$jscomp$107_idx$jscomp$40$$;
  }
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIterable$_iterator$arity$1$ = function() {
  return new $cljs$core$ArrayNodeIterator$$(this.$arr$);
};
function $cljs$core$hash_collision_node_find_index$$($arr$jscomp$129$$, $cnt$jscomp$19_lim$$, $key$jscomp$150$$) {
  $cnt$jscomp$19_lim$$ *= 2;
  for (var $i$jscomp$253$$ = 0;;) {
    if ($i$jscomp$253$$ < $cnt$jscomp$19_lim$$) {
      if ($cljs$core$key_test$$($key$jscomp$150$$, $arr$jscomp$129$$[$i$jscomp$253$$])) {
        return $i$jscomp$253$$;
      }
      $i$jscomp$253$$ += 2;
    } else {
      return -1;
    }
  }
}
function $cljs$core$HashCollisionNode$$($edit$jscomp$12$$, $collision_hash$$, $cnt$jscomp$20$$, $arr$jscomp$130$$) {
  this.$edit$ = $edit$jscomp$12$$;
  this.$collision_hash$ = $collision_hash$$;
  this.$cnt$ = $cnt$jscomp$20$$;
  this.$arr$ = $arr$jscomp$130$$;
  this.$cljs$lang$protocol_mask$partition1$$ = 131072;
  this.$cljs$lang$protocol_mask$partition0$$ = 0;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$HashCollisionNode$$.prototype;
$JSCompiler_prototypeAlias$$.$ensure_editable$ = function($e$jscomp$91$$) {
  if ($e$jscomp$91$$ === this.$edit$) {
    return this;
  }
  var $new_arr$jscomp$7$$ = Array(2 * (this.$cnt$ + 1));
  $cljs$core$array_copy$$(this.$arr$, 0, $new_arr$jscomp$7$$, 0, 2 * this.$cnt$);
  return new $cljs$core$HashCollisionNode$$($e$jscomp$91$$, this.$collision_hash$, this.$cnt$, $new_arr$jscomp$7$$);
};
$JSCompiler_prototypeAlias$$.$inode_seq$ = function() {
  return $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$01$$ ? $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$01$$(this.$arr$) : $cljs$core$create_inode_seq$$.call(null, this.$arr$);
};
$JSCompiler_prototypeAlias$$.$kv_reduce$ = function($f$jscomp$273$$, $init$jscomp$20$$) {
  return $cljs$core$inode_kv_reduce$$(this.$arr$, $f$jscomp$273$$, $init$jscomp$20$$);
};
$JSCompiler_prototypeAlias$$.$inode_lookup$ = function($idx$jscomp$42_shift$jscomp$19$$, $hash$jscomp$18$$, $key$jscomp$152$$, $not_found$jscomp$37$$) {
  $idx$jscomp$42_shift$jscomp$19$$ = $cljs$core$hash_collision_node_find_index$$(this.$arr$, this.$cnt$, $key$jscomp$152$$);
  return 0 > $idx$jscomp$42_shift$jscomp$19$$ ? $not_found$jscomp$37$$ : $cljs$core$key_test$$($key$jscomp$152$$, this.$arr$[$idx$jscomp$42_shift$jscomp$19$$]) ? this.$arr$[$idx$jscomp$42_shift$jscomp$19$$ + 1] : $not_found$jscomp$37$$;
};
$JSCompiler_prototypeAlias$$.$inode_assoc_BANG_$ = function($JSCompiler_inline_result$jscomp$108_edit__$1$jscomp$5_editable$jscomp$inline_1187$$, $i$jscomp$inline_1183_idx$jscomp$43_new_arr$jscomp$8_shift$jscomp$20$$, $hash$jscomp$19_j$jscomp$inline_1185_len$jscomp$40$$, $count$jscomp$inline_716_key$jscomp$153$$, $val$jscomp$90$$, $added_leaf_QMARK_$jscomp$4$$) {
  if ($hash$jscomp$19_j$jscomp$inline_1185_len$jscomp$40$$ === this.$collision_hash$) {
    $i$jscomp$inline_1183_idx$jscomp$43_new_arr$jscomp$8_shift$jscomp$20$$ = $cljs$core$hash_collision_node_find_index$$(this.$arr$, this.$cnt$, $count$jscomp$inline_716_key$jscomp$153$$);
    if (-1 === $i$jscomp$inline_1183_idx$jscomp$43_new_arr$jscomp$8_shift$jscomp$20$$) {
      if (this.$arr$.length > 2 * this.$cnt$) {
        return $i$jscomp$inline_1183_idx$jscomp$43_new_arr$jscomp$8_shift$jscomp$20$$ = 2 * this.$cnt$, $hash$jscomp$19_j$jscomp$inline_1185_len$jscomp$40$$ = 2 * this.$cnt$ + 1, $JSCompiler_inline_result$jscomp$108_edit__$1$jscomp$5_editable$jscomp$inline_1187$$ = this.$ensure_editable$($JSCompiler_inline_result$jscomp$108_edit__$1$jscomp$5_editable$jscomp$inline_1187$$), $JSCompiler_inline_result$jscomp$108_edit__$1$jscomp$5_editable$jscomp$inline_1187$$.$arr$[$i$jscomp$inline_1183_idx$jscomp$43_new_arr$jscomp$8_shift$jscomp$20$$] = 
        $count$jscomp$inline_716_key$jscomp$153$$, $JSCompiler_inline_result$jscomp$108_edit__$1$jscomp$5_editable$jscomp$inline_1187$$.$arr$[$hash$jscomp$19_j$jscomp$inline_1185_len$jscomp$40$$] = $val$jscomp$90$$, $added_leaf_QMARK_$jscomp$4$$.$val$ = !0, $JSCompiler_inline_result$jscomp$108_edit__$1$jscomp$5_editable$jscomp$inline_1187$$.$cnt$ += 1, $JSCompiler_inline_result$jscomp$108_edit__$1$jscomp$5_editable$jscomp$inline_1187$$;
      }
      $hash$jscomp$19_j$jscomp$inline_1185_len$jscomp$40$$ = this.$arr$.length;
      $i$jscomp$inline_1183_idx$jscomp$43_new_arr$jscomp$8_shift$jscomp$20$$ = Array($hash$jscomp$19_j$jscomp$inline_1185_len$jscomp$40$$ + 2);
      $cljs$core$array_copy$$(this.$arr$, 0, $i$jscomp$inline_1183_idx$jscomp$43_new_arr$jscomp$8_shift$jscomp$20$$, 0, $hash$jscomp$19_j$jscomp$inline_1185_len$jscomp$40$$);
      $i$jscomp$inline_1183_idx$jscomp$43_new_arr$jscomp$8_shift$jscomp$20$$[$hash$jscomp$19_j$jscomp$inline_1185_len$jscomp$40$$] = $count$jscomp$inline_716_key$jscomp$153$$;
      $i$jscomp$inline_1183_idx$jscomp$43_new_arr$jscomp$8_shift$jscomp$20$$[$hash$jscomp$19_j$jscomp$inline_1185_len$jscomp$40$$ + 1] = $val$jscomp$90$$;
      $added_leaf_QMARK_$jscomp$4$$.$val$ = !0;
      $count$jscomp$inline_716_key$jscomp$153$$ = this.$cnt$ + 1;
      $JSCompiler_inline_result$jscomp$108_edit__$1$jscomp$5_editable$jscomp$inline_1187$$ === this.$edit$ ? (this.$arr$ = $i$jscomp$inline_1183_idx$jscomp$43_new_arr$jscomp$8_shift$jscomp$20$$, this.$cnt$ = $count$jscomp$inline_716_key$jscomp$153$$, $JSCompiler_inline_result$jscomp$108_edit__$1$jscomp$5_editable$jscomp$inline_1187$$ = this) : $JSCompiler_inline_result$jscomp$108_edit__$1$jscomp$5_editable$jscomp$inline_1187$$ = new $cljs$core$HashCollisionNode$$(this.$edit$, this.$collision_hash$, 
      $count$jscomp$inline_716_key$jscomp$153$$, $i$jscomp$inline_1183_idx$jscomp$43_new_arr$jscomp$8_shift$jscomp$20$$);
      return $JSCompiler_inline_result$jscomp$108_edit__$1$jscomp$5_editable$jscomp$inline_1187$$;
    }
    return this.$arr$[$i$jscomp$inline_1183_idx$jscomp$43_new_arr$jscomp$8_shift$jscomp$20$$ + 1] === $val$jscomp$90$$ ? this : $cljs$core$edit_and_set$cljs$0core$0IFn$0_invoke$0arity$04$$(this, $JSCompiler_inline_result$jscomp$108_edit__$1$jscomp$5_editable$jscomp$inline_1187$$, $i$jscomp$inline_1183_idx$jscomp$43_new_arr$jscomp$8_shift$jscomp$20$$ + 1, $val$jscomp$90$$);
  }
  return (new $cljs$core$BitmapIndexedNode$$($JSCompiler_inline_result$jscomp$108_edit__$1$jscomp$5_editable$jscomp$inline_1187$$, 1 << (this.$collision_hash$ >>> $i$jscomp$inline_1183_idx$jscomp$43_new_arr$jscomp$8_shift$jscomp$20$$ & 31), [null, this, null, null])).$inode_assoc_BANG_$($JSCompiler_inline_result$jscomp$108_edit__$1$jscomp$5_editable$jscomp$inline_1187$$, $i$jscomp$inline_1183_idx$jscomp$43_new_arr$jscomp$8_shift$jscomp$20$$, $hash$jscomp$19_j$jscomp$inline_1185_len$jscomp$40$$, $count$jscomp$inline_716_key$jscomp$153$$, 
  $val$jscomp$90$$, $added_leaf_QMARK_$jscomp$4$$);
};
$JSCompiler_prototypeAlias$$.$inode_assoc$ = function($idx$jscomp$44_len$jscomp$41_shift$jscomp$21$$, $hash$jscomp$20_new_arr$jscomp$9$$, $key$jscomp$154$$, $val$jscomp$91$$, $added_leaf_QMARK_$jscomp$5$$) {
  return $hash$jscomp$20_new_arr$jscomp$9$$ === this.$collision_hash$ ? ($idx$jscomp$44_len$jscomp$41_shift$jscomp$21$$ = $cljs$core$hash_collision_node_find_index$$(this.$arr$, this.$cnt$, $key$jscomp$154$$), -1 === $idx$jscomp$44_len$jscomp$41_shift$jscomp$21$$ ? ($idx$jscomp$44_len$jscomp$41_shift$jscomp$21$$ = 2 * this.$cnt$, $hash$jscomp$20_new_arr$jscomp$9$$ = Array($idx$jscomp$44_len$jscomp$41_shift$jscomp$21$$ + 2), $cljs$core$array_copy$$(this.$arr$, 0, $hash$jscomp$20_new_arr$jscomp$9$$, 
  0, $idx$jscomp$44_len$jscomp$41_shift$jscomp$21$$), $hash$jscomp$20_new_arr$jscomp$9$$[$idx$jscomp$44_len$jscomp$41_shift$jscomp$21$$] = $key$jscomp$154$$, $hash$jscomp$20_new_arr$jscomp$9$$[$idx$jscomp$44_len$jscomp$41_shift$jscomp$21$$ + 1] = $val$jscomp$91$$, $added_leaf_QMARK_$jscomp$5$$.$val$ = !0, new $cljs$core$HashCollisionNode$$(null, this.$collision_hash$, this.$cnt$ + 1, $hash$jscomp$20_new_arr$jscomp$9$$)) : $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$(this.$arr$[$idx$jscomp$44_len$jscomp$41_shift$jscomp$21$$ + 
  1], $val$jscomp$91$$) ? this : new $cljs$core$HashCollisionNode$$(null, this.$collision_hash$, this.$cnt$, $cljs$core$clone_and_set$cljs$0core$0IFn$0_invoke$0arity$03$$(this.$arr$, $idx$jscomp$44_len$jscomp$41_shift$jscomp$21$$ + 1, $val$jscomp$91$$))) : (new $cljs$core$BitmapIndexedNode$$(null, 1 << (this.$collision_hash$ >>> $idx$jscomp$44_len$jscomp$41_shift$jscomp$21$$ & 31), [null, this])).$inode_assoc$($idx$jscomp$44_len$jscomp$41_shift$jscomp$21$$, $hash$jscomp$20_new_arr$jscomp$9$$, $key$jscomp$154$$, 
  $val$jscomp$91$$, $added_leaf_QMARK_$jscomp$5$$);
};
$JSCompiler_prototypeAlias$$.$inode_find$ = function($idx$jscomp$45_shift$jscomp$22$$, $hash$jscomp$21$$, $key$jscomp$155$$, $not_found$jscomp$38$$) {
  $idx$jscomp$45_shift$jscomp$22$$ = $cljs$core$hash_collision_node_find_index$$(this.$arr$, this.$cnt$, $key$jscomp$155$$);
  return 0 > $idx$jscomp$45_shift$jscomp$22$$ ? $not_found$jscomp$38$$ : $cljs$core$key_test$$($key$jscomp$155$$, this.$arr$[$idx$jscomp$45_shift$jscomp$22$$]) ? new $cljs$core$MapEntry$$(this.$arr$[$idx$jscomp$45_shift$jscomp$22$$], this.$arr$[$idx$jscomp$45_shift$jscomp$22$$ + 1]) : $not_found$jscomp$38$$;
};
$JSCompiler_prototypeAlias$$.$inode_without$ = function($idx$jscomp$46_shift$jscomp$23$$, $hash$jscomp$22$$, $key$jscomp$156$$) {
  $idx$jscomp$46_shift$jscomp$23$$ = $cljs$core$hash_collision_node_find_index$$(this.$arr$, this.$cnt$, $key$jscomp$156$$);
  return -1 === $idx$jscomp$46_shift$jscomp$23$$ ? this : 1 === this.$cnt$ ? null : new $cljs$core$HashCollisionNode$$(null, this.$collision_hash$, this.$cnt$ - 1, $cljs$core$remove_pair$$(this.$arr$, $cljs$core$quot$$($idx$jscomp$46_shift$jscomp$23$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIterable$_iterator$arity$1$ = function() {
  return new $cljs$core$NodeIterator$$(this.$arr$);
};
function $cljs$core$create_node$$($var_args$jscomp$251$$) {
  switch(arguments.length) {
    case 6:
      return $cljs$core$create_node$cljs$0core$0IFn$0_invoke$0arity$06$$(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return $cljs$core$create_node$cljs$0core$0IFn$0_invoke$0arity$07$$(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length)].join(""));
  }
}
function $cljs$core$create_node$cljs$0core$0IFn$0_invoke$0arity$06$$($shift$jscomp$24$$, $key1$$, $val1$$, $key2hash$$, $key2$$, $val2$$) {
  var $key1hash$$ = $cljs$core$hash$$($key1$$);
  if ($key1hash$$ === $key2hash$$) {
    return new $cljs$core$HashCollisionNode$$(null, $key1hash$$, 2, [$key1$$, $val1$$, $key2$$, $val2$$]);
  }
  var $added_leaf_QMARK_$jscomp$6$$ = new $cljs$core$Box$$;
  return $cljs$core$BitmapIndexedNode$EMPTY$$.$inode_assoc$($shift$jscomp$24$$, $key1hash$$, $key1$$, $val1$$, $added_leaf_QMARK_$jscomp$6$$).$inode_assoc$($shift$jscomp$24$$, $key2hash$$, $key2$$, $val2$$, $added_leaf_QMARK_$jscomp$6$$);
}
function $cljs$core$create_node$cljs$0core$0IFn$0_invoke$0arity$07$$($edit$jscomp$14$$, $shift$jscomp$25$$, $key1$jscomp$1$$, $val1$jscomp$1$$, $key2hash$jscomp$1$$, $key2$jscomp$1$$, $val2$jscomp$1$$) {
  var $key1hash$jscomp$1$$ = $cljs$core$hash$$($key1$jscomp$1$$);
  if ($key1hash$jscomp$1$$ === $key2hash$jscomp$1$$) {
    return new $cljs$core$HashCollisionNode$$(null, $key1hash$jscomp$1$$, 2, [$key1$jscomp$1$$, $val1$jscomp$1$$, $key2$jscomp$1$$, $val2$jscomp$1$$]);
  }
  var $added_leaf_QMARK_$jscomp$7$$ = new $cljs$core$Box$$;
  return $cljs$core$BitmapIndexedNode$EMPTY$$.$inode_assoc_BANG_$($edit$jscomp$14$$, $shift$jscomp$25$$, $key1hash$jscomp$1$$, $key1$jscomp$1$$, $val1$jscomp$1$$, $added_leaf_QMARK_$jscomp$7$$).$inode_assoc_BANG_$($edit$jscomp$14$$, $shift$jscomp$25$$, $key2hash$jscomp$1$$, $key2$jscomp$1$$, $val2$jscomp$1$$, $added_leaf_QMARK_$jscomp$7$$);
}
function $cljs$core$NodeSeq$$($meta$jscomp$45$$, $nodes$jscomp$17$$, $i$jscomp$254$$, $s$jscomp$92$$, $__hash$jscomp$27$$) {
  this.$meta$ = $meta$jscomp$45$$;
  this.$nodes$ = $nodes$jscomp$17$$;
  this.$i$ = $i$jscomp$254$$;
  this.$s$ = $s$jscomp$92$$;
  this.$__hash$ = $__hash$jscomp$27$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 32374988;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$NodeSeq$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__34532$$ = null;
  $G__34532$$ = function($x$jscomp$527$$, $start$jscomp$106$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$527$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$527$$, $start$jscomp$106$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__34532$$.$cljs$core$IFn$_invoke$arity$1$ = function($x$jscomp$525$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$525$$, 0);
  };
  $G__34532$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$526$$, $start$jscomp$105$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$526$$, $start$jscomp$105$$);
  };
  return $G__34532$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__34533__1$$($x$jscomp$528$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$528$$, $cljs$core$count$$(this));
  }
  var $G__34533$$ = null;
  $G__34533$$ = function($x$jscomp$530$$, $start$jscomp$108$$) {
    switch(arguments.length) {
      case 1:
        return $G__34533__1$$.call(this, $x$jscomp$530$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$530$$, $start$jscomp$108$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__34533$$.$cljs$core$IFn$_invoke$arity$1$ = $G__34533__1$$;
  $G__34533$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$529$$, $start$jscomp$107$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$529$$, $start$jscomp$107$$);
  };
  return $G__34533$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  if (null == this.$s$) {
    var $G__32264_G__32267$$ = this.$nodes$, $G__32265_G__32268$$ = this.$i$ + 2;
    return $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$03$$ ? $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$03$$($G__32264_G__32267$$, $G__32265_G__32268$$, null) : $cljs$core$create_inode_seq$$.call(null, $G__32264_G__32267$$, $G__32265_G__32268$$, null);
  }
  $G__32264_G__32267$$ = this.$nodes$;
  $G__32265_G__32268$$ = this.$i$;
  var $G__32269$$ = $cljs$core$next$$(this.$s$);
  return $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$03$$ ? $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$03$$($G__32264_G__32267$$, $G__32265_G__32268$$, $G__32269$$) : $cljs$core$create_inode_seq$$.call(null, $G__32264_G__32267$$, $G__32265_G__32268$$, $G__32269$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4319__auto__$jscomp$15_h__4319__auto____$1$jscomp$15$$ = this.$__hash$;
  return null != $h__4319__auto__$jscomp$15_h__4319__auto____$1$jscomp$15$$ ? $h__4319__auto__$jscomp$15_h__4319__auto____$1$jscomp$15$$ : this.$__hash$ = $h__4319__auto__$jscomp$15_h__4319__auto____$1$jscomp$15$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$539$$, $other$jscomp$92$$) {
  return $cljs$core$equiv_sequential$$(this, $other$jscomp$92$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$541$$, $f$jscomp$274$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$274$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$jscomp$542$$, $f$jscomp$275$$, $start$jscomp$109$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$275$$, $start$jscomp$109$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return null == this.$s$ ? new $cljs$core$MapEntry$$(this.$nodes$[this.$i$], this.$nodes$[this.$i$ + 1]) : $cljs$core$first$$(this.$s$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  var $self__$jscomp$653$$ = this, $ret$jscomp$33$$ = null == $self__$jscomp$653$$.$s$ ? function() {
    var $G__32270$$ = $self__$jscomp$653$$.$nodes$, $G__32271$$ = $self__$jscomp$653$$.$i$ + 2;
    return $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$03$$ ? $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$03$$($G__32270$$, $G__32271$$, null) : $cljs$core$create_inode_seq$$.call(null, $G__32270$$, $G__32271$$, null);
  }() : function() {
    var $G__32273$$ = $self__$jscomp$653$$.$nodes$, $G__32274$$ = $self__$jscomp$653$$.$i$, $G__32275$$ = $cljs$core$next$$($self__$jscomp$653$$.$s$);
    return $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$03$$ ? $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$03$$($G__32273$$, $G__32274$$, $G__32275$$) : $cljs$core$create_inode_seq$$.call(null, $G__32273$$, $G__32274$$, $G__32275$$);
  }();
  return null != $ret$jscomp$33$$ ? $ret$jscomp$33$$ : $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$545$$, $new_meta$jscomp$21$$) {
  return $new_meta$jscomp$21$$ === this.$meta$ ? this : new $cljs$core$NodeSeq$$($new_meta$jscomp$21$$, this.$nodes$, this.$i$, this.$s$, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$546$$, $o$jscomp$125$$) {
  return $cljs$core$cons$$($o$jscomp$125$$, this);
};
$cljs$core$NodeSeq$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$create_inode_seq$$($var_args$jscomp$252$$) {
  switch(arguments.length) {
    case 1:
      return $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$01$$(arguments[0]);
    case 3:
      return $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$03$$(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length)].join(""));
  }
}
function $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$01$$($nodes$jscomp$19$$) {
  return $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$03$$($nodes$jscomp$19$$, 0, null);
}
function $cljs$core$create_inode_seq$cljs$0core$0IFn$0_invoke$0arity$03$$($nodes$jscomp$20$$, $i$jscomp$256_j$jscomp$68$$, $len$jscomp$42_s$jscomp$94$$) {
  if (null == $len$jscomp$42_s$jscomp$94$$) {
    for ($len$jscomp$42_s$jscomp$94$$ = $nodes$jscomp$20$$.length;;) {
      if ($i$jscomp$256_j$jscomp$68$$ < $len$jscomp$42_s$jscomp$94$$) {
        if (null != $nodes$jscomp$20$$[$i$jscomp$256_j$jscomp$68$$]) {
          return new $cljs$core$NodeSeq$$(null, $nodes$jscomp$20$$, $i$jscomp$256_j$jscomp$68$$, null, null);
        }
        var $temp__5751__auto__$jscomp$9_temp__5751__auto____$1$$ = $nodes$jscomp$20$$[$i$jscomp$256_j$jscomp$68$$ + 1];
        if ($cljs$core$truth_$$($temp__5751__auto__$jscomp$9_temp__5751__auto____$1$$) && ($temp__5751__auto__$jscomp$9_temp__5751__auto____$1$$ = $temp__5751__auto__$jscomp$9_temp__5751__auto____$1$$.$inode_seq$(), $cljs$core$truth_$$($temp__5751__auto__$jscomp$9_temp__5751__auto____$1$$))) {
          return new $cljs$core$NodeSeq$$(null, $nodes$jscomp$20$$, $i$jscomp$256_j$jscomp$68$$ + 2, $temp__5751__auto__$jscomp$9_temp__5751__auto____$1$$, null);
        }
        $i$jscomp$256_j$jscomp$68$$ += 2;
      } else {
        return null;
      }
    }
  } else {
    return new $cljs$core$NodeSeq$$(null, $nodes$jscomp$20$$, $i$jscomp$256_j$jscomp$68$$, $len$jscomp$42_s$jscomp$94$$, null);
  }
}
function $cljs$core$ArrayNodeSeq$$($meta$jscomp$47$$, $nodes$jscomp$21$$, $i$jscomp$257$$, $s$jscomp$95$$, $__hash$jscomp$29$$) {
  this.$meta$ = $meta$jscomp$47$$;
  this.$nodes$ = $nodes$jscomp$21$$;
  this.$i$ = $i$jscomp$257$$;
  this.$s$ = $s$jscomp$95$$;
  this.$__hash$ = $__hash$jscomp$29$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 32374988;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$ArrayNodeSeq$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__34537$$ = null;
  $G__34537$$ = function($x$jscomp$533$$, $start$jscomp$111$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$533$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$533$$, $start$jscomp$111$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__34537$$.$cljs$core$IFn$_invoke$arity$1$ = function($x$jscomp$531$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$531$$, 0);
  };
  $G__34537$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$532$$, $start$jscomp$110$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$532$$, $start$jscomp$110$$);
  };
  return $G__34537$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__34538__1$$($x$jscomp$534$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$534$$, $cljs$core$count$$(this));
  }
  var $G__34538$$ = null;
  $G__34538$$ = function($x$jscomp$536$$, $start$jscomp$113$$) {
    switch(arguments.length) {
      case 1:
        return $G__34538__1$$.call(this, $x$jscomp$536$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$536$$, $start$jscomp$113$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__34538$$.$cljs$core$IFn$_invoke$arity$1$ = $G__34538__1$$;
  $G__34538$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$535$$, $start$jscomp$112$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$535$$, $start$jscomp$112$$);
  };
  return $G__34538$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  var $G__32278$$ = this.$nodes$, $G__32279$$ = this.$i$, $G__32280$$ = $cljs$core$next$$(this.$s$);
  return $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$03$$ ? $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$03$$($G__32278$$, $G__32279$$, $G__32280$$) : $cljs$core$create_array_node_seq$$.call(null, $G__32278$$, $G__32279$$, $G__32280$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4319__auto__$jscomp$16_h__4319__auto____$1$jscomp$16$$ = this.$__hash$;
  return null != $h__4319__auto__$jscomp$16_h__4319__auto____$1$jscomp$16$$ ? $h__4319__auto__$jscomp$16_h__4319__auto____$1$jscomp$16$$ : this.$__hash$ = $h__4319__auto__$jscomp$16_h__4319__auto____$1$jscomp$16$$ = $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$555$$, $other$jscomp$94$$) {
  return $cljs$core$equiv_sequential$$(this, $other$jscomp$94$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$557$$, $f$jscomp$276$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$276$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$jscomp$558$$, $f$jscomp$277$$, $start$jscomp$114$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$277$$, $start$jscomp$114$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return $cljs$core$first$$(this.$s$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  var $G__32281$jscomp$inline_723_ret$jscomp$34$$ = this.$nodes$;
  var $G__32282$jscomp$inline_724$$ = this.$i$, $G__32283$jscomp$inline_725$$ = $cljs$core$next$$(this.$s$);
  $G__32281$jscomp$inline_723_ret$jscomp$34$$ = $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$03$$ ? $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$03$$($G__32281$jscomp$inline_723_ret$jscomp$34$$, $G__32282$jscomp$inline_724$$, $G__32283$jscomp$inline_725$$) : $cljs$core$create_array_node_seq$$.call(null, $G__32281$jscomp$inline_723_ret$jscomp$34$$, $G__32282$jscomp$inline_724$$, $G__32283$jscomp$inline_725$$);
  return null != $G__32281$jscomp$inline_723_ret$jscomp$34$$ ? $G__32281$jscomp$inline_723_ret$jscomp$34$$ : $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$561$$, $new_meta$jscomp$22$$) {
  return $new_meta$jscomp$22$$ === this.$meta$ ? this : new $cljs$core$ArrayNodeSeq$$($new_meta$jscomp$22$$, this.$nodes$, this.$i$, this.$s$, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$562$$, $o$jscomp$126$$) {
  return $cljs$core$cons$$($o$jscomp$126$$, this);
};
$cljs$core$ArrayNodeSeq$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$create_array_node_seq$$($var_args$jscomp$253$$) {
  switch(arguments.length) {
    case 1:
      return $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$01$$(arguments[0]);
    case 3:
      return $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$03$$(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length)].join(""));
  }
}
function $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$01$$($nodes$jscomp$23$$) {
  return $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$03$$($nodes$jscomp$23$$, 0, null);
}
function $cljs$core$create_array_node_seq$cljs$0core$0IFn$0_invoke$0arity$03$$($nodes$jscomp$24$$, $i$jscomp$259_j$jscomp$69$$, $len$jscomp$43_s$jscomp$97$$) {
  if (null == $len$jscomp$43_s$jscomp$97$$) {
    for ($len$jscomp$43_s$jscomp$97$$ = $nodes$jscomp$24$$.length;;) {
      if ($i$jscomp$259_j$jscomp$69$$ < $len$jscomp$43_s$jscomp$97$$) {
        var $temp__5751__auto__$jscomp$10_temp__5751__auto____$1$jscomp$1$$ = $nodes$jscomp$24$$[$i$jscomp$259_j$jscomp$69$$];
        if ($cljs$core$truth_$$($temp__5751__auto__$jscomp$10_temp__5751__auto____$1$jscomp$1$$) && ($temp__5751__auto__$jscomp$10_temp__5751__auto____$1$jscomp$1$$ = $temp__5751__auto__$jscomp$10_temp__5751__auto____$1$jscomp$1$$.$inode_seq$(), $cljs$core$truth_$$($temp__5751__auto__$jscomp$10_temp__5751__auto____$1$jscomp$1$$))) {
          return new $cljs$core$ArrayNodeSeq$$(null, $nodes$jscomp$24$$, $i$jscomp$259_j$jscomp$69$$ + 1, $temp__5751__auto__$jscomp$10_temp__5751__auto____$1$jscomp$1$$, null);
        }
        $i$jscomp$259_j$jscomp$69$$ += 1;
      } else {
        return null;
      }
    }
  } else {
    return new $cljs$core$ArrayNodeSeq$$(null, $nodes$jscomp$24$$, $i$jscomp$259_j$jscomp$69$$, $len$jscomp$43_s$jscomp$97$$, null);
  }
}
function $cljs$core$HashMapIter$$($nil_val$$, $root_iter$$) {
  this.$nil_val$ = $nil_val$$;
  this.$root_iter$ = $root_iter$$;
  this.$seen$ = !1;
}
$cljs$core$HashMapIter$$.prototype.$hasNext$ = function() {
  return !this.$seen$ || this.$root_iter$.$hasNext$();
};
$cljs$core$HashMapIter$$.prototype.next = function() {
  if (this.$seen$) {
    return this.$root_iter$.next();
  }
  this.$seen$ = !0;
  return new $cljs$core$MapEntry$$(null, this.$nil_val$);
};
$cljs$core$HashMapIter$$.prototype.remove = function() {
  return Error("Unsupported operation");
};
function $cljs$core$PersistentHashMap$$($meta$jscomp$49$$, $cnt$jscomp$22$$, $root$jscomp$9$$, $has_nil_QMARK_$$, $nil_val$jscomp$2$$, $__hash$jscomp$31$$) {
  this.$meta$ = $meta$jscomp$49$$;
  this.$cnt$ = $cnt$jscomp$22$$;
  this.root = $root$jscomp$9$$;
  this.$has_nil_QMARK_$ = $has_nil_QMARK_$$;
  this.$nil_val$ = $nil_val$jscomp$2$$;
  this.$__hash$ = $__hash$jscomp$31$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 16123663;
  this.$cljs$lang$protocol_mask$partition1$$ = 139268;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$PersistentHashMap$$.prototype;
$JSCompiler_prototypeAlias$$.$cljs$core$IFind$_find$arity$2$ = function($coll$jscomp$563$$, $k$jscomp$142$$) {
  return null == $k$jscomp$142$$ ? this.$has_nil_QMARK_$ ? new $cljs$core$MapEntry$$(null, this.$nil_val$) : null : null == this.root ? null : this.root.$inode_find$(0, $cljs$core$hash$$($k$jscomp$142$$), $k$jscomp$142$$, null);
};
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.keys = function() {
  return $cljs$core$es6_iterator$$($cljs$core$keys$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$keys$$.$cljs$core$IFn$_invoke$arity$1$(this) : $cljs$core$keys$$.call(null, this));
};
$JSCompiler_prototypeAlias$$.entries = function() {
  return new $cljs$core$ES6EntriesIterator$$($cljs$core$seq$$($cljs$core$seq$$(this)));
};
$JSCompiler_prototypeAlias$$.values = function() {
  return $cljs$core$es6_iterator$$($cljs$core$vals$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$vals$$.$cljs$core$IFn$_invoke$arity$1$(this) : $cljs$core$vals$$.call(null, this));
};
$JSCompiler_prototypeAlias$$.has = function($k$jscomp$143$$) {
  return $cljs$core$contains_QMARK_$$(this, $k$jscomp$143$$);
};
$JSCompiler_prototypeAlias$$.get = function($k$jscomp$144$$, $not_found$jscomp$39$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$144$$, $not_found$jscomp$39$$);
};
$JSCompiler_prototypeAlias$$.forEach = function($f$jscomp$278$$) {
  for (var $G__34546_seq__32287_seq__32287__$1_temp__5753__auto__$jscomp$11$$ = $cljs$core$seq$$(this), $c__4638__auto__$jscomp$2_chunk__32288_vec__32300$$ = null, $G__34548_count__32289$$ = 0, $i__32290$$ = 0;;) {
    if ($i__32290$$ < $G__34548_count__32289$$) {
      var $v$jscomp$43_vec__32297$$ = $c__4638__auto__$jscomp$2_chunk__32288_vec__32300$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__32290$$), $G__34547_k$jscomp$145$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($v$jscomp$43_vec__32297$$, 0, null);
      $v$jscomp$43_vec__32297$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($v$jscomp$43_vec__32297$$, 1, null);
      $f$jscomp$278$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$278$$.$cljs$core$IFn$_invoke$arity$2$($v$jscomp$43_vec__32297$$, $G__34547_k$jscomp$145$$) : $f$jscomp$278$$.call(null, $v$jscomp$43_vec__32297$$, $G__34547_k$jscomp$145$$);
      $i__32290$$ += 1;
    } else {
      if ($G__34546_seq__32287_seq__32287__$1_temp__5753__auto__$jscomp$11$$ = $cljs$core$seq$$($G__34546_seq__32287_seq__32287__$1_temp__5753__auto__$jscomp$11$$)) {
        $cljs$core$chunked_seq_QMARK_$$($G__34546_seq__32287_seq__32287__$1_temp__5753__auto__$jscomp$11$$) ? ($c__4638__auto__$jscomp$2_chunk__32288_vec__32300$$ = $cljs$core$_chunked_first$$($G__34546_seq__32287_seq__32287__$1_temp__5753__auto__$jscomp$11$$), $G__34546_seq__32287_seq__32287__$1_temp__5753__auto__$jscomp$11$$ = $cljs$core$_chunked_rest$$($G__34546_seq__32287_seq__32287__$1_temp__5753__auto__$jscomp$11$$), $G__34547_k$jscomp$145$$ = $c__4638__auto__$jscomp$2_chunk__32288_vec__32300$$, 
        $G__34548_count__32289$$ = $cljs$core$count$$($c__4638__auto__$jscomp$2_chunk__32288_vec__32300$$), $c__4638__auto__$jscomp$2_chunk__32288_vec__32300$$ = $G__34547_k$jscomp$145$$) : ($c__4638__auto__$jscomp$2_chunk__32288_vec__32300$$ = $cljs$core$first$$($G__34546_seq__32287_seq__32287__$1_temp__5753__auto__$jscomp$11$$), $G__34547_k$jscomp$145$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__4638__auto__$jscomp$2_chunk__32288_vec__32300$$, 0, null), $v$jscomp$43_vec__32297$$ = 
        $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__4638__auto__$jscomp$2_chunk__32288_vec__32300$$, 1, null), $f$jscomp$278$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$278$$.$cljs$core$IFn$_invoke$arity$2$($v$jscomp$43_vec__32297$$, $G__34547_k$jscomp$145$$) : $f$jscomp$278$$.call(null, $v$jscomp$43_vec__32297$$, $G__34547_k$jscomp$145$$), $G__34546_seq__32287_seq__32287__$1_temp__5753__auto__$jscomp$11$$ = $cljs$core$next$$($G__34546_seq__32287_seq__32287__$1_temp__5753__auto__$jscomp$11$$), 
        $c__4638__auto__$jscomp$2_chunk__32288_vec__32300$$ = null, $G__34548_count__32289$$ = 0), $i__32290$$ = 0;
      } else {
        return null;
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($coll$jscomp$571$$, $k$jscomp$146$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$146$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($coll$jscomp$572$$, $k$jscomp$147$$, $not_found$jscomp$40$$) {
  return null == $k$jscomp$147$$ ? this.$has_nil_QMARK_$ ? this.$nil_val$ : $not_found$jscomp$40$$ : null == this.root ? $not_found$jscomp$40$$ : this.root.$inode_lookup$(0, $cljs$core$hash$$($k$jscomp$147$$), $k$jscomp$147$$, $not_found$jscomp$40$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IKVReduce$_kv_reduce$arity$3$ = function($coll$jscomp$573_init__$1$jscomp$7$$, $JSCompiler_temp$jscomp$1046_JSCompiler_temp$jscomp$1047_f$jscomp$279_x$jscomp$inline_1189$$, $init$jscomp$21$$) {
  $coll$jscomp$573_init__$1$jscomp$7$$ = this.$has_nil_QMARK_$ ? $JSCompiler_temp$jscomp$1046_JSCompiler_temp$jscomp$1047_f$jscomp$279_x$jscomp$inline_1189$$.$cljs$core$IFn$_invoke$arity$3$ ? $JSCompiler_temp$jscomp$1046_JSCompiler_temp$jscomp$1047_f$jscomp$279_x$jscomp$inline_1189$$.$cljs$core$IFn$_invoke$arity$3$($init$jscomp$21$$, null, this.$nil_val$) : $JSCompiler_temp$jscomp$1046_JSCompiler_temp$jscomp$1047_f$jscomp$279_x$jscomp$inline_1189$$.call(null, $init$jscomp$21$$, null, this.$nil_val$) : 
  $init$jscomp$21$$;
  $cljs$core$reduced_QMARK_$$($coll$jscomp$573_init__$1$jscomp$7$$) ? $JSCompiler_temp$jscomp$1046_JSCompiler_temp$jscomp$1047_f$jscomp$279_x$jscomp$inline_1189$$ = $cljs$core$_deref$$($coll$jscomp$573_init__$1$jscomp$7$$) : null != this.root ? ($JSCompiler_temp$jscomp$1046_JSCompiler_temp$jscomp$1047_f$jscomp$279_x$jscomp$inline_1189$$ = this.root.$kv_reduce$($JSCompiler_temp$jscomp$1046_JSCompiler_temp$jscomp$1047_f$jscomp$279_x$jscomp$inline_1189$$, $coll$jscomp$573_init__$1$jscomp$7$$), $JSCompiler_temp$jscomp$1046_JSCompiler_temp$jscomp$1047_f$jscomp$279_x$jscomp$inline_1189$$ = 
  $cljs$core$reduced_QMARK_$$($JSCompiler_temp$jscomp$1046_JSCompiler_temp$jscomp$1047_f$jscomp$279_x$jscomp$inline_1189$$) ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$deref$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$1046_JSCompiler_temp$jscomp$1047_f$jscomp$279_x$jscomp$inline_1189$$) : $cljs$core$deref$$.call(null, $JSCompiler_temp$jscomp$1046_JSCompiler_temp$jscomp$1047_f$jscomp$279_x$jscomp$inline_1189$$) : $JSCompiler_temp$jscomp$1046_JSCompiler_temp$jscomp$1047_f$jscomp$279_x$jscomp$inline_1189$$) : 
  $JSCompiler_temp$jscomp$1046_JSCompiler_temp$jscomp$1047_f$jscomp$279_x$jscomp$inline_1189$$ = $coll$jscomp$573_init__$1$jscomp$7$$;
  return $JSCompiler_temp$jscomp$1046_JSCompiler_temp$jscomp$1047_f$jscomp$279_x$jscomp$inline_1189$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIterable$_iterator$arity$1$ = function() {
  var $root_iter$jscomp$2$$ = this.root ? $cljs$core$_iterator$$(this.root) : $cljs$core$nil_iter$$();
  return this.$has_nil_QMARK_$ ? new $cljs$core$HashMapIter$$(this.$nil_val$, $root_iter$jscomp$2$$) : $root_iter$jscomp$2$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return this.$cnt$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4319__auto__$jscomp$17_h__4319__auto____$1$jscomp$17$$ = this.$__hash$;
  return null != $h__4319__auto__$jscomp$17_h__4319__auto____$1$jscomp$17$$ ? $h__4319__auto__$jscomp$17_h__4319__auto____$1$jscomp$17$$ : this.$__hash$ = $h__4319__auto__$jscomp$17_h__4319__auto____$1$jscomp$17$$ = $cljs$core$hash_unordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$578$$, $other$jscomp$96$$) {
  return $cljs$core$equiv_map$$(this, $other$jscomp$96$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEditableCollection$_as_transient$arity$1$ = function() {
  return new $cljs$core$TransientHashMap$$(this.root, this.$cnt$, this.$has_nil_QMARK_$, this.$nil_val$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$_with_meta$$($cljs$core$PersistentHashMap$EMPTY$$, this.$meta$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMap$_dissoc$arity$2$ = function($coll$jscomp$581_new_root$jscomp$5$$, $k$jscomp$148$$) {
  if (null == $k$jscomp$148$$) {
    return this.$has_nil_QMARK_$ ? new $cljs$core$PersistentHashMap$$(this.$meta$, this.$cnt$ - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  $coll$jscomp$581_new_root$jscomp$5$$ = this.root.$inode_without$(0, $cljs$core$hash$$($k$jscomp$148$$), $k$jscomp$148$$);
  return $coll$jscomp$581_new_root$jscomp$5$$ === this.root ? this : new $cljs$core$PersistentHashMap$$(this.$meta$, this.$cnt$ - 1, $coll$jscomp$581_new_root$jscomp$5$$, this.$has_nil_QMARK_$, this.$nil_val$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IAssociative$_assoc$arity$3$ = function($added_leaf_QMARK_$jscomp$8_coll$jscomp$582$$, $k$jscomp$149_new_root$jscomp$6$$, $v$jscomp$44$$) {
  if (null == $k$jscomp$149_new_root$jscomp$6$$) {
    return this.$has_nil_QMARK_$ && $v$jscomp$44$$ === this.$nil_val$ ? this : new $cljs$core$PersistentHashMap$$(this.$meta$, this.$has_nil_QMARK_$ ? this.$cnt$ : this.$cnt$ + 1, this.root, !0, $v$jscomp$44$$, null);
  }
  $added_leaf_QMARK_$jscomp$8_coll$jscomp$582$$ = new $cljs$core$Box$$;
  $k$jscomp$149_new_root$jscomp$6$$ = (null == this.root ? $cljs$core$BitmapIndexedNode$EMPTY$$ : this.root).$inode_assoc$(0, $cljs$core$hash$$($k$jscomp$149_new_root$jscomp$6$$), $k$jscomp$149_new_root$jscomp$6$$, $v$jscomp$44$$, $added_leaf_QMARK_$jscomp$8_coll$jscomp$582$$);
  return $k$jscomp$149_new_root$jscomp$6$$ === this.root ? this : new $cljs$core$PersistentHashMap$$(this.$meta$, $added_leaf_QMARK_$jscomp$8_coll$jscomp$582$$.$val$ ? this.$cnt$ + 1 : this.$cnt$, $k$jscomp$149_new_root$jscomp$6$$, this.$has_nil_QMARK_$, this.$nil_val$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IAssociative$_contains_key_QMARK_$arity$2$ = function($coll$jscomp$583$$, $k$jscomp$150$$) {
  return null == $k$jscomp$150$$ ? this.$has_nil_QMARK_$ : null == this.root ? !1 : this.root.$inode_lookup$(0, $cljs$core$hash$$($k$jscomp$150$$), $k$jscomp$150$$, $cljs$core$lookup_sentinel$$) !== $cljs$core$lookup_sentinel$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  if (0 < this.$cnt$) {
    var $s$jscomp$98$$ = null != this.root ? this.root.$inode_seq$() : null;
    return this.$has_nil_QMARK_$ ? $cljs$core$cons$$(new $cljs$core$MapEntry$$(null, this.$nil_val$), $s$jscomp$98$$) : $s$jscomp$98$$;
  }
  return null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$585$$, $new_meta$jscomp$23$$) {
  return $new_meta$jscomp$23$$ === this.$meta$ ? this : new $cljs$core$PersistentHashMap$$($new_meta$jscomp$23$$, this.$cnt$, this.root, this.$has_nil_QMARK_$, this.$nil_val$, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($G__34554_coll$jscomp$586_ret$jscomp$35$$, $G__34555_entry$jscomp$4_es$jscomp$2$$) {
  if ($cljs$core$vector_QMARK_$$($G__34555_entry$jscomp$4_es$jscomp$2$$)) {
    return this.$cljs$core$IAssociative$_assoc$arity$3$(null, $cljs$core$_nth$$($G__34555_entry$jscomp$4_es$jscomp$2$$, 0), $cljs$core$_nth$$($G__34555_entry$jscomp$4_es$jscomp$2$$, 1));
  }
  $G__34554_coll$jscomp$586_ret$jscomp$35$$ = this;
  for ($G__34555_entry$jscomp$4_es$jscomp$2$$ = $cljs$core$seq$$($G__34555_entry$jscomp$4_es$jscomp$2$$);;) {
    if (null == $G__34555_entry$jscomp$4_es$jscomp$2$$) {
      return $G__34554_coll$jscomp$586_ret$jscomp$35$$;
    }
    var $e$jscomp$93$$ = $cljs$core$first$$($G__34555_entry$jscomp$4_es$jscomp$2$$);
    if ($cljs$core$vector_QMARK_$$($e$jscomp$93$$)) {
      $G__34554_coll$jscomp$586_ret$jscomp$35$$ = $cljs$core$_assoc$$($G__34554_coll$jscomp$586_ret$jscomp$35$$, $cljs$core$_nth$$($e$jscomp$93$$, 0), $cljs$core$_nth$$($e$jscomp$93$$, 1)), $G__34555_entry$jscomp$4_es$jscomp$2$$ = $cljs$core$next$$($G__34555_entry$jscomp$4_es$jscomp$2$$);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
$JSCompiler_prototypeAlias$$.call = function($unused__9507__auto__$jscomp$11$$) {
  switch(arguments.length - 1) {
    case 1:
      return this.$cljs$core$IFn$_invoke$arity$1$(arguments[1]);
    case 2:
      return this.$cljs$core$IFn$_invoke$arity$2$(arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length - 1)].join(""));
  }
};
$JSCompiler_prototypeAlias$$.apply = function($self__$jscomp$705$$, $args32286$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args32286$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($k$jscomp$151$$) {
  return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$jscomp$151$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($k$jscomp$152$$, $not_found$jscomp$41$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$152$$, $not_found$jscomp$41$$);
};
var $cljs$core$PersistentHashMap$EMPTY$$ = new $cljs$core$PersistentHashMap$$(null, 0, null, !1, null, $cljs$core$empty_unordered_hash$$);
$cljs$core$PersistentHashMap$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$TransientHashMap$$($root$jscomp$11$$, $count$jscomp$50$$, $has_nil_QMARK_$jscomp$2$$, $nil_val$jscomp$4$$) {
  this.$edit$ = {};
  this.root = $root$jscomp$11$$;
  this.count = $count$jscomp$50$$;
  this.$has_nil_QMARK_$ = $has_nil_QMARK_$jscomp$2$$;
  this.$nil_val$ = $nil_val$jscomp$4$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 259;
  this.$cljs$lang$protocol_mask$partition1$$ = 56;
}
function $JSCompiler_StaticMethods_assoc_BANG_$$($JSCompiler_StaticMethods_assoc_BANG_$self$$, $k$jscomp$153_node$jscomp$58$$, $v$jscomp$45$$) {
  if ($JSCompiler_StaticMethods_assoc_BANG_$self$$.$edit$) {
    if (null == $k$jscomp$153_node$jscomp$58$$) {
      $JSCompiler_StaticMethods_assoc_BANG_$self$$.$nil_val$ !== $v$jscomp$45$$ && ($JSCompiler_StaticMethods_assoc_BANG_$self$$.$nil_val$ = $v$jscomp$45$$), $JSCompiler_StaticMethods_assoc_BANG_$self$$.$has_nil_QMARK_$ || ($JSCompiler_StaticMethods_assoc_BANG_$self$$.count += 1, $JSCompiler_StaticMethods_assoc_BANG_$self$$.$has_nil_QMARK_$ = !0);
    } else {
      var $added_leaf_QMARK_$jscomp$9$$ = new $cljs$core$Box$$;
      $k$jscomp$153_node$jscomp$58$$ = (null == $JSCompiler_StaticMethods_assoc_BANG_$self$$.root ? $cljs$core$BitmapIndexedNode$EMPTY$$ : $JSCompiler_StaticMethods_assoc_BANG_$self$$.root).$inode_assoc_BANG_$($JSCompiler_StaticMethods_assoc_BANG_$self$$.$edit$, 0, $cljs$core$hash$$($k$jscomp$153_node$jscomp$58$$), $k$jscomp$153_node$jscomp$58$$, $v$jscomp$45$$, $added_leaf_QMARK_$jscomp$9$$);
      $k$jscomp$153_node$jscomp$58$$ !== $JSCompiler_StaticMethods_assoc_BANG_$self$$.root && ($JSCompiler_StaticMethods_assoc_BANG_$self$$.root = $k$jscomp$153_node$jscomp$58$$);
      $added_leaf_QMARK_$jscomp$9$$.$val$ && ($JSCompiler_StaticMethods_assoc_BANG_$self$$.count += 1);
    }
    return $JSCompiler_StaticMethods_assoc_BANG_$self$$;
  }
  throw Error("assoc! after persistent!");
}
$JSCompiler_prototypeAlias$$ = $cljs$core$TransientHashMap$$.prototype;
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  if (this.$edit$) {
    return this.count;
  }
  throw Error("count after persistent!");
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($tcoll$jscomp$43$$, $k$jscomp$155$$) {
  return null == $k$jscomp$155$$ ? this.$has_nil_QMARK_$ ? this.$nil_val$ : null : null == this.root ? null : this.root.$inode_lookup$(0, $cljs$core$hash$$($k$jscomp$155$$), $k$jscomp$155$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($tcoll$jscomp$44$$, $k$jscomp$156$$, $not_found$jscomp$42$$) {
  return null == $k$jscomp$156$$ ? this.$has_nil_QMARK_$ ? this.$nil_val$ : $not_found$jscomp$42$$ : null == this.root ? $not_found$jscomp$42$$ : this.root.$inode_lookup$(0, $cljs$core$hash$$($k$jscomp$156$$), $k$jscomp$156$$, $not_found$jscomp$42$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientCollection$_conj_BANG_$arity$2$ = function($G__34563$jscomp$inline_741_JSCompiler_inline_result$jscomp$109_es$jscomp$inline_737_tcoll$jscomp$45$$, $G__34564$jscomp$inline_742_tcoll__$1$jscomp$inline_738_val$jscomp$92$$) {
  a: {
    if (this.$edit$) {
      if ($cljs$core$map_entry_QMARK_$$($G__34564$jscomp$inline_742_tcoll__$1$jscomp$inline_738_val$jscomp$92$$)) {
        $G__34563$jscomp$inline_741_JSCompiler_inline_result$jscomp$109_es$jscomp$inline_737_tcoll$jscomp$45$$ = $JSCompiler_StaticMethods_assoc_BANG_$$(this, $cljs$core$key$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$key$$.$cljs$core$IFn$_invoke$arity$1$($G__34564$jscomp$inline_742_tcoll__$1$jscomp$inline_738_val$jscomp$92$$) : $cljs$core$key$$.call(null, $G__34564$jscomp$inline_742_tcoll__$1$jscomp$inline_738_val$jscomp$92$$), $cljs$core$val$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$val$$.$cljs$core$IFn$_invoke$arity$1$($G__34564$jscomp$inline_742_tcoll__$1$jscomp$inline_738_val$jscomp$92$$) : 
        $cljs$core$val$$.call(null, $G__34564$jscomp$inline_742_tcoll__$1$jscomp$inline_738_val$jscomp$92$$));
      } else {
        if ($cljs$core$vector_QMARK_$$($G__34564$jscomp$inline_742_tcoll__$1$jscomp$inline_738_val$jscomp$92$$)) {
          $G__34563$jscomp$inline_741_JSCompiler_inline_result$jscomp$109_es$jscomp$inline_737_tcoll$jscomp$45$$ = $JSCompiler_StaticMethods_assoc_BANG_$$(this, $G__34564$jscomp$inline_742_tcoll__$1$jscomp$inline_738_val$jscomp$92$$.$cljs$core$IFn$_invoke$arity$1$ ? $G__34564$jscomp$inline_742_tcoll__$1$jscomp$inline_738_val$jscomp$92$$.$cljs$core$IFn$_invoke$arity$1$(0) : $G__34564$jscomp$inline_742_tcoll__$1$jscomp$inline_738_val$jscomp$92$$.call(null, 0), $G__34564$jscomp$inline_742_tcoll__$1$jscomp$inline_738_val$jscomp$92$$.$cljs$core$IFn$_invoke$arity$1$ ? 
          $G__34564$jscomp$inline_742_tcoll__$1$jscomp$inline_738_val$jscomp$92$$.$cljs$core$IFn$_invoke$arity$1$(1) : $G__34564$jscomp$inline_742_tcoll__$1$jscomp$inline_738_val$jscomp$92$$.call(null, 1));
        } else {
          for ($G__34563$jscomp$inline_741_JSCompiler_inline_result$jscomp$109_es$jscomp$inline_737_tcoll$jscomp$45$$ = $cljs$core$seq$$($G__34564$jscomp$inline_742_tcoll__$1$jscomp$inline_738_val$jscomp$92$$), $G__34564$jscomp$inline_742_tcoll__$1$jscomp$inline_738_val$jscomp$92$$ = this;;) {
            var $e$jscomp$inline_740_temp__5751__auto__$jscomp$inline_739$$ = $cljs$core$first$$($G__34563$jscomp$inline_741_JSCompiler_inline_result$jscomp$109_es$jscomp$inline_737_tcoll$jscomp$45$$);
            if ($cljs$core$truth_$$($e$jscomp$inline_740_temp__5751__auto__$jscomp$inline_739$$)) {
              $G__34563$jscomp$inline_741_JSCompiler_inline_result$jscomp$109_es$jscomp$inline_737_tcoll$jscomp$45$$ = $cljs$core$next$$($G__34563$jscomp$inline_741_JSCompiler_inline_result$jscomp$109_es$jscomp$inline_737_tcoll$jscomp$45$$), $G__34564$jscomp$inline_742_tcoll__$1$jscomp$inline_738_val$jscomp$92$$ = $JSCompiler_StaticMethods_assoc_BANG_$$($G__34564$jscomp$inline_742_tcoll__$1$jscomp$inline_738_val$jscomp$92$$, $cljs$core$key$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$key$$.$cljs$core$IFn$_invoke$arity$1$($e$jscomp$inline_740_temp__5751__auto__$jscomp$inline_739$$) : 
              $cljs$core$key$$.call(null, $e$jscomp$inline_740_temp__5751__auto__$jscomp$inline_739$$), $cljs$core$val$$.$cljs$core$IFn$_invoke$arity$1$ ? $cljs$core$val$$.$cljs$core$IFn$_invoke$arity$1$($e$jscomp$inline_740_temp__5751__auto__$jscomp$inline_739$$) : $cljs$core$val$$.call(null, $e$jscomp$inline_740_temp__5751__auto__$jscomp$inline_739$$));
            } else {
              $G__34563$jscomp$inline_741_JSCompiler_inline_result$jscomp$109_es$jscomp$inline_737_tcoll$jscomp$45$$ = $G__34564$jscomp$inline_742_tcoll__$1$jscomp$inline_738_val$jscomp$92$$;
              break a;
            }
          }
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
  }
  return $G__34563$jscomp$inline_741_JSCompiler_inline_result$jscomp$109_es$jscomp$inline_737_tcoll$jscomp$45$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientCollection$_persistent_BANG_$arity$1$ = function() {
  if (this.$edit$) {
    this.$edit$ = null;
    var $JSCompiler_inline_result$jscomp$110$$ = new $cljs$core$PersistentHashMap$$(null, this.count, this.root, this.$has_nil_QMARK_$, this.$nil_val$, null);
  } else {
    throw Error("persistent! called twice");
  }
  return $JSCompiler_inline_result$jscomp$110$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientAssociative$_assoc_BANG_$arity$3$ = function($tcoll$jscomp$47$$, $key$jscomp$157$$, $val$jscomp$93$$) {
  return $JSCompiler_StaticMethods_assoc_BANG_$$(this, $key$jscomp$157$$, $val$jscomp$93$$);
};
$JSCompiler_prototypeAlias$$.call = function($unused__9507__auto__$jscomp$12$$) {
  switch(arguments.length - 1) {
    case 1:
      return this.$cljs$core$IFn$_invoke$arity$1$(arguments[1]);
    case 2:
      return this.$cljs$core$IFn$_invoke$arity$2$(arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length - 1)].join(""));
  }
};
$JSCompiler_prototypeAlias$$.apply = function($self__$jscomp$720$$, $args32306$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args32306$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($key$jscomp$159$$) {
  return this.$cljs$core$ILookup$_lookup$arity$2$(null, $key$jscomp$159$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($key$jscomp$160$$, $not_found$jscomp$43$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $key$jscomp$160$$, $not_found$jscomp$43$$);
};
var $cljs$core$hash_map$$ = function $cljs$core$hash_map$$($var_args$jscomp$254$$) {
  for (var $args__4824__auto__$jscomp$3$$ = [], $len__4818__auto___34603$$ = arguments.length, $i__4819__auto___34604$$ = 0;;) {
    if ($i__4819__auto___34604$$ < $len__4818__auto___34603$$) {
      $args__4824__auto__$jscomp$3$$.push(arguments[$i__4819__auto___34604$$]), $i__4819__auto___34604$$ += 1;
    } else {
      break;
    }
  }
  return $cljs$core$hash_map$$.$cljs$core$IFn$_invoke$arity$variadic$(0 < $args__4824__auto__$jscomp$3$$.length ? new $cljs$core$IndexedSeq$$($args__4824__auto__$jscomp$3$$.slice(0), 0, null) : null);
};
$cljs$core$hash_map$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($G__34606_keyvals$jscomp$1$$) {
  for (var $in$$jscomp$2_val$jscomp$inline_770$$ = $cljs$core$seq$$($G__34606_keyvals$jscomp$1$$), $G__34607_out$jscomp$7$$ = $cljs$core$_as_transient$$($cljs$core$PersistentHashMap$EMPTY$$);;) {
    if ($in$$jscomp$2_val$jscomp$inline_770$$) {
      $G__34606_keyvals$jscomp$1$$ = $cljs$core$next$$($cljs$core$next$$($in$$jscomp$2_val$jscomp$inline_770$$));
      var $key$jscomp$inline_769$$ = $cljs$core$first$$($in$$jscomp$2_val$jscomp$inline_770$$);
      $in$$jscomp$2_val$jscomp$inline_770$$ = $cljs$core$first$$($cljs$core$next$$($in$$jscomp$2_val$jscomp$inline_770$$));
      $G__34607_out$jscomp$7$$ = $cljs$core$_assoc_BANG_$$($G__34607_out$jscomp$7$$, $key$jscomp$inline_769$$, $in$$jscomp$2_val$jscomp$inline_770$$);
      $in$$jscomp$2_val$jscomp$inline_770$$ = $G__34606_keyvals$jscomp$1$$;
    } else {
      return $cljs$core$_persistent_BANG_$$($G__34607_out$jscomp$7$$);
    }
  }
};
$cljs$core$hash_map$$.$cljs$lang$maxFixedArity$ = 0;
$cljs$core$hash_map$$.$cljs$lang$applyTo$ = function($seq32385$$) {
  return this.$cljs$core$IFn$_invoke$arity$variadic$($cljs$core$seq$$($seq32385$$));
};
function $cljs$core$KeySeq$$($mseq$$, $_meta$jscomp$7$$) {
  this.$mseq$ = $mseq$$;
  this.$_meta$ = $_meta$jscomp$7$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 32374988;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$KeySeq$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__34625$$ = null;
  $G__34625$$ = function($x$jscomp$557$$, $start$jscomp$131$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$557$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$557$$, $start$jscomp$131$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__34625$$.$cljs$core$IFn$_invoke$arity$1$ = function($x$jscomp$555$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$555$$, 0);
  };
  $G__34625$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$556$$, $start$jscomp$130$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$556$$, $start$jscomp$130$$);
  };
  return $G__34625$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__34626__1$$($x$jscomp$558$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$558$$, $cljs$core$count$$(this));
  }
  var $G__34626$$ = null;
  $G__34626$$ = function($x$jscomp$560$$, $start$jscomp$133$$) {
    switch(arguments.length) {
      case 1:
        return $G__34626__1$$.call(this, $x$jscomp$560$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$560$$, $start$jscomp$133$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__34626$$.$cljs$core$IFn$_invoke$arity$1$ = $G__34626__1$$;
  $G__34626$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$559$$, $start$jscomp$132$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$559$$, $start$jscomp$132$$);
  };
  return $G__34626$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$_meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  var $nseq$$ = (null != this.$mseq$ ? this.$mseq$.$cljs$lang$protocol_mask$partition0$$ & 128 || $cljs$core$PROTOCOL_SENTINEL$$ === this.$mseq$.$cljs$core$INext$$ || (this.$mseq$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$INext$$, this.$mseq$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$INext$$, this.$mseq$)) ? this.$mseq$.$cljs$core$INext$_next$arity$1$() : $cljs$core$next$$(this.$mseq$);
  return null == $nseq$$ ? null : new $cljs$core$KeySeq$$($nseq$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  return $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$654$$, $other$jscomp$104$$) {
  return $cljs$core$equiv_sequential$$(this, $other$jscomp$104$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$656$$, $f$jscomp$291$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$291$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$jscomp$657$$, $f$jscomp$292$$, $start$jscomp$134$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$292$$, $start$jscomp$134$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return this.$mseq$.$cljs$core$ISeq$_first$arity$1$(null).key;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  var $nseq$jscomp$1$$ = (null != this.$mseq$ ? this.$mseq$.$cljs$lang$protocol_mask$partition0$$ & 128 || $cljs$core$PROTOCOL_SENTINEL$$ === this.$mseq$.$cljs$core$INext$$ || (this.$mseq$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$INext$$, this.$mseq$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$INext$$, this.$mseq$)) ? this.$mseq$.$cljs$core$INext$_next$arity$1$() : $cljs$core$next$$(this.$mseq$);
  return null != $nseq$jscomp$1$$ ? new $cljs$core$KeySeq$$($nseq$jscomp$1$$, null) : $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$661$$, $new_meta$jscomp$26$$) {
  return $new_meta$jscomp$26$$ === this.$_meta$ ? this : new $cljs$core$KeySeq$$(this.$mseq$, $new_meta$jscomp$26$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$662$$, $o$jscomp$131$$) {
  return $cljs$core$cons$$($o$jscomp$131$$, this);
};
$cljs$core$KeySeq$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$keys$$($map$jscomp$5_temp__5753__auto__$jscomp$13$$) {
  return ($map$jscomp$5_temp__5753__auto__$jscomp$13$$ = $cljs$core$seq$$($map$jscomp$5_temp__5753__auto__$jscomp$13$$)) ? new $cljs$core$KeySeq$$($map$jscomp$5_temp__5753__auto__$jscomp$13$$, null) : null;
}
function $cljs$core$key$$($map_entry$$) {
  return $cljs$core$_key$$($map_entry$$);
}
function $cljs$core$ValSeq$$($mseq$jscomp$3$$, $_meta$jscomp$9$$) {
  this.$mseq$ = $mseq$jscomp$3$$;
  this.$_meta$ = $_meta$jscomp$9$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 32374988;
  this.$cljs$lang$protocol_mask$partition1$$ = 0;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$ValSeq$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.indexOf = function() {
  var $G__34627$$ = null;
  $G__34627$$ = function($x$jscomp$563$$, $start$jscomp$136$$) {
    switch(arguments.length) {
      case 1:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$563$$, 0);
      case 2:
        return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$563$$, $start$jscomp$136$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__34627$$.$cljs$core$IFn$_invoke$arity$1$ = function($x$jscomp$561$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$561$$, 0);
  };
  $G__34627$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$562$$, $start$jscomp$135$$) {
    return $cljs$core$_indexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$562$$, $start$jscomp$135$$);
  };
  return $G__34627$$;
}();
$JSCompiler_prototypeAlias$$.lastIndexOf = function() {
  function $G__34628__1$$($x$jscomp$564$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$564$$, $cljs$core$count$$(this));
  }
  var $G__34628$$ = null;
  $G__34628$$ = function($x$jscomp$566$$, $start$jscomp$138$$) {
    switch(arguments.length) {
      case 1:
        return $G__34628__1$$.call(this, $x$jscomp$566$$);
      case 2:
        return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$566$$, $start$jscomp$138$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__34628$$.$cljs$core$IFn$_invoke$arity$1$ = $G__34628__1$$;
  $G__34628$$.$cljs$core$IFn$_invoke$arity$2$ = function($x$jscomp$565$$, $start$jscomp$137$$) {
    return $cljs$core$_lastIndexOf$cljs$0core$0IFn$0_invoke$0arity$03$$(this, $x$jscomp$565$$, $start$jscomp$137$$);
  };
  return $G__34628$$;
}();
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$_meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$INext$_next$arity$1$ = function() {
  var $nseq$jscomp$2$$ = (null != this.$mseq$ ? this.$mseq$.$cljs$lang$protocol_mask$partition0$$ & 128 || $cljs$core$PROTOCOL_SENTINEL$$ === this.$mseq$.$cljs$core$INext$$ || (this.$mseq$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$INext$$, this.$mseq$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$INext$$, this.$mseq$)) ? this.$mseq$.$cljs$core$INext$_next$arity$1$() : $cljs$core$next$$(this.$mseq$);
  return null == $nseq$jscomp$2$$ ? null : new $cljs$core$ValSeq$$($nseq$jscomp$2$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  return $cljs$core$hash_ordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($coll$jscomp$671$$, $other$jscomp$106$$) {
  return $cljs$core$equiv_sequential$$(this, $other$jscomp$106$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$2$ = function($coll$jscomp$673$$, $f$jscomp$293$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$293$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReduce$_reduce$arity$3$ = function($coll$jscomp$674$$, $f$jscomp$294$$, $start$jscomp$139$$) {
  return $cljs$core$seq_reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($f$jscomp$294$$, $start$jscomp$139$$, this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_first$arity$1$ = function() {
  return this.$mseq$.$cljs$core$ISeq$_first$arity$1$(null).$val$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeq$_rest$arity$1$ = function() {
  var $nseq$jscomp$3$$ = (null != this.$mseq$ ? this.$mseq$.$cljs$lang$protocol_mask$partition0$$ & 128 || $cljs$core$PROTOCOL_SENTINEL$$ === this.$mseq$.$cljs$core$INext$$ || (this.$mseq$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$INext$$, this.$mseq$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$INext$$, this.$mseq$)) ? this.$mseq$.$cljs$core$INext$_next$arity$1$() : $cljs$core$next$$(this.$mseq$);
  return null != $nseq$jscomp$3$$ ? new $cljs$core$ValSeq$$($nseq$jscomp$3$$, null) : $cljs$core$List$EMPTY$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$678$$, $new_meta$jscomp$27$$) {
  return $new_meta$jscomp$27$$ === this.$_meta$ ? this : new $cljs$core$ValSeq$$(this.$mseq$, $new_meta$jscomp$27$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$679$$, $o$jscomp$132$$) {
  return $cljs$core$cons$$($o$jscomp$132$$, this);
};
$cljs$core$ValSeq$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$vals$$($map$jscomp$6_temp__5753__auto__$jscomp$14$$) {
  return ($map$jscomp$6_temp__5753__auto__$jscomp$14$$ = $cljs$core$seq$$($map$jscomp$6_temp__5753__auto__$jscomp$14$$)) ? new $cljs$core$ValSeq$$($map$jscomp$6_temp__5753__auto__$jscomp$14$$, null) : null;
}
function $cljs$core$val$$($map_entry$jscomp$1$$) {
  return $cljs$core$_val$$($map_entry$jscomp$1$$);
}
function $cljs$core$merge$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($maps$$) {
  return $cljs$core$truth_$$($cljs$core$some$$($maps$$)) ? $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$02$$(function($p1__32397_SHARP_$$, $p2__32398_SHARP_$$) {
    return $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$truth_$$($p1__32397_SHARP_$$) ? $p1__32397_SHARP_$$ : $cljs$core$PersistentArrayMap$EMPTY$$, $p2__32398_SHARP_$$);
  }, $maps$$) : null;
}
function $cljs$core$select_keys$$($map$jscomp$7$$) {
  for (var $G__34635_ret$jscomp$39$$ = $cljs$core$PersistentArrayMap$EMPTY$$, $G__34636_keys$jscomp$16$$ = $cljs$core$seq$$($reagent$impl$component$built_in_static_method_names$$);;) {
    if ($G__34636_keys$jscomp$16$$) {
      var $key$jscomp$169$$ = $cljs$core$first$$($G__34636_keys$jscomp$16$$), $entry$jscomp$7$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$3$($map$jscomp$7$$, $key$jscomp$169$$, $cljs$cst$keyword$cljs_DOT_core_SLASH_not_DASH_found$$);
      $G__34635_ret$jscomp$39$$ = $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($entry$jscomp$7$$, $cljs$cst$keyword$cljs_DOT_core_SLASH_not_DASH_found$$) ? $G__34635_ret$jscomp$39$$ : $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($G__34635_ret$jscomp$39$$, $key$jscomp$169$$, $entry$jscomp$7$$);
      $G__34636_keys$jscomp$16$$ = $cljs$core$next$$($G__34636_keys$jscomp$16$$);
    } else {
      return $cljs$core$_with_meta$$($G__34635_ret$jscomp$39$$, $cljs$core$meta$$($map$jscomp$7$$));
    }
  }
}
function $cljs$core$HashSetIter$$($iter$jscomp$23$$) {
  this.$iter$ = $iter$jscomp$23$$;
}
$cljs$core$HashSetIter$$.prototype.$hasNext$ = function() {
  return this.$iter$.$hasNext$();
};
$cljs$core$HashSetIter$$.prototype.next = function() {
  if (this.$iter$.$hasNext$()) {
    return this.$iter$.next().key;
  }
  throw Error("No such element");
};
$cljs$core$HashSetIter$$.prototype.remove = function() {
  return Error("Unsupported operation");
};
function $cljs$core$PersistentHashSet$$($meta$jscomp$57$$, $hash_map$$, $__hash$jscomp$41$$) {
  this.$meta$ = $meta$jscomp$57$$;
  this.$hash_map$ = $hash_map$$;
  this.$__hash$ = $__hash$jscomp$41$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 15077647;
  this.$cljs$lang$protocol_mask$partition1$$ = 139268;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$PersistentHashSet$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function() {
  return $cljs$core$pr_str_STAR_$$(this);
};
$JSCompiler_prototypeAlias$$.keys = function() {
  return $cljs$core$es6_iterator$$($cljs$core$seq$$(this));
};
$JSCompiler_prototypeAlias$$.entries = function() {
  return new $cljs$core$ES6SetEntriesIterator$$($cljs$core$seq$$($cljs$core$seq$$(this)));
};
$JSCompiler_prototypeAlias$$.values = function() {
  return $cljs$core$es6_iterator$$($cljs$core$seq$$(this));
};
$JSCompiler_prototypeAlias$$.has = function($k$jscomp$188$$) {
  return $cljs$core$contains_QMARK_$$(this, $k$jscomp$188$$);
};
$JSCompiler_prototypeAlias$$.forEach = function($f$jscomp$296$$) {
  for (var $G__34641_seq__32407_seq__32407__$1_temp__5753__auto__$jscomp$15$$ = $cljs$core$seq$$(this), $c__4638__auto__$jscomp$4_chunk__32408_vec__32420$$ = null, $G__34643_count__32409$$ = 0, $i__32410$$ = 0;;) {
    if ($i__32410$$ < $G__34643_count__32409$$) {
      var $v$jscomp$55_vec__32417$$ = $c__4638__auto__$jscomp$4_chunk__32408_vec__32420$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__32410$$), $G__34642_k$jscomp$189$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($v$jscomp$55_vec__32417$$, 0, null);
      $v$jscomp$55_vec__32417$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($v$jscomp$55_vec__32417$$, 1, null);
      $f$jscomp$296$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$296$$.$cljs$core$IFn$_invoke$arity$2$($v$jscomp$55_vec__32417$$, $G__34642_k$jscomp$189$$) : $f$jscomp$296$$.call(null, $v$jscomp$55_vec__32417$$, $G__34642_k$jscomp$189$$);
      $i__32410$$ += 1;
    } else {
      if ($G__34641_seq__32407_seq__32407__$1_temp__5753__auto__$jscomp$15$$ = $cljs$core$seq$$($G__34641_seq__32407_seq__32407__$1_temp__5753__auto__$jscomp$15$$)) {
        $cljs$core$chunked_seq_QMARK_$$($G__34641_seq__32407_seq__32407__$1_temp__5753__auto__$jscomp$15$$) ? ($c__4638__auto__$jscomp$4_chunk__32408_vec__32420$$ = $cljs$core$_chunked_first$$($G__34641_seq__32407_seq__32407__$1_temp__5753__auto__$jscomp$15$$), $G__34641_seq__32407_seq__32407__$1_temp__5753__auto__$jscomp$15$$ = $cljs$core$_chunked_rest$$($G__34641_seq__32407_seq__32407__$1_temp__5753__auto__$jscomp$15$$), $G__34642_k$jscomp$189$$ = $c__4638__auto__$jscomp$4_chunk__32408_vec__32420$$, 
        $G__34643_count__32409$$ = $cljs$core$count$$($c__4638__auto__$jscomp$4_chunk__32408_vec__32420$$), $c__4638__auto__$jscomp$4_chunk__32408_vec__32420$$ = $G__34642_k$jscomp$189$$) : ($c__4638__auto__$jscomp$4_chunk__32408_vec__32420$$ = $cljs$core$first$$($G__34641_seq__32407_seq__32407__$1_temp__5753__auto__$jscomp$15$$), $G__34642_k$jscomp$189$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__4638__auto__$jscomp$4_chunk__32408_vec__32420$$, 0, null), $v$jscomp$55_vec__32417$$ = 
        $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($c__4638__auto__$jscomp$4_chunk__32408_vec__32420$$, 1, null), $f$jscomp$296$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$296$$.$cljs$core$IFn$_invoke$arity$2$($v$jscomp$55_vec__32417$$, $G__34642_k$jscomp$189$$) : $f$jscomp$296$$.call(null, $v$jscomp$55_vec__32417$$, $G__34642_k$jscomp$189$$), $G__34641_seq__32407_seq__32407__$1_temp__5753__auto__$jscomp$15$$ = $cljs$core$next$$($G__34641_seq__32407_seq__32407__$1_temp__5753__auto__$jscomp$15$$), 
        $c__4638__auto__$jscomp$4_chunk__32408_vec__32420$$ = null, $G__34643_count__32409$$ = 0), $i__32410$$ = 0;
      } else {
        return null;
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($coll$jscomp$686$$, $v$jscomp$56$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $v$jscomp$56$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($coll$jscomp$687_temp__5751__auto__$jscomp$12$$, $v$jscomp$57$$, $not_found$jscomp$53$$) {
  $coll$jscomp$687_temp__5751__auto__$jscomp$12$$ = $cljs$core$_find$$(this.$hash_map$, $v$jscomp$57$$);
  return $cljs$core$truth_$$($coll$jscomp$687_temp__5751__auto__$jscomp$12$$) ? $cljs$core$_key$$($coll$jscomp$687_temp__5751__auto__$jscomp$12$$) : $not_found$jscomp$53$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IIterable$_iterator$arity$1$ = function() {
  return new $cljs$core$HashSetIter$$($cljs$core$_iterator$$(this.$hash_map$));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return $cljs$core$_count$$(this.$hash_map$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  var $h__4319__auto__$jscomp$22_h__4319__auto____$1$jscomp$22$$ = this.$__hash$;
  return null != $h__4319__auto__$jscomp$22_h__4319__auto____$1$jscomp$22$$ ? $h__4319__auto__$jscomp$22_h__4319__auto____$1$jscomp$22$$ : this.$__hash$ = $h__4319__auto__$jscomp$22_h__4319__auto____$1$jscomp$22$$ = $cljs$core$hash_unordered_coll$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($and__4210__auto__$jscomp$26_and__4210__auto____$1$jscomp$12_coll$jscomp$692$$, $other$jscomp$108$$) {
  if ($and__4210__auto__$jscomp$26_and__4210__auto____$1$jscomp$12_coll$jscomp$692$$ = $cljs$core$set_QMARK_$$($other$jscomp$108$$)) {
    if ($and__4210__auto__$jscomp$26_and__4210__auto____$1$jscomp$12_coll$jscomp$692$$ = $cljs$core$count$$(this) === $cljs$core$count$$($other$jscomp$108$$)) {
      try {
        return $cljs$core$reduce_kv$$(function($or__4212__auto__$jscomp$33_p1__32405_SHARP_$$, $p2__32404_SHARP_$$) {
          return ($or__4212__auto__$jscomp$33_p1__32405_SHARP_$$ = $cljs$core$contains_QMARK_$$($other$jscomp$108$$, $p2__32404_SHARP_$$)) ? $or__4212__auto__$jscomp$33_p1__32405_SHARP_$$ : new $cljs$core$Reduced$$;
        }, !0, this.$hash_map$);
      } catch ($e32423$$) {
        if ($e32423$$ instanceof Error) {
          return !1;
        }
        throw $e32423$$;
      }
    } else {
      return $and__4210__auto__$jscomp$26_and__4210__auto____$1$jscomp$12_coll$jscomp$692$$;
    }
  } else {
    return $and__4210__auto__$jscomp$26_and__4210__auto____$1$jscomp$12_coll$jscomp$692$$;
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEditableCollection$_as_transient$arity$1$ = function() {
  return new $cljs$core$TransientHashSet$$($cljs$core$_as_transient$$(this.$hash_map$));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEmptyableCollection$_empty$arity$1$ = function() {
  return $cljs$core$_with_meta$$($cljs$core$PersistentHashSet$EMPTY$$, this.$meta$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISet$_disjoin$arity$2$ = function($coll$jscomp$695$$, $v$jscomp$58$$) {
  return new $cljs$core$PersistentHashSet$$(this.$meta$, $cljs$core$_dissoc$$(this.$hash_map$, $v$jscomp$58$$), null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISeqable$_seq$arity$1$ = function() {
  return $cljs$core$keys$$(this.$hash_map$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($coll$jscomp$697$$, $new_meta$jscomp$28$$) {
  return $new_meta$jscomp$28$$ === this.$meta$ ? this : new $cljs$core$PersistentHashSet$$($new_meta$jscomp$28$$, this.$hash_map$, this.$__hash$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICollection$_conj$arity$2$ = function($coll$jscomp$698$$, $o$jscomp$133$$) {
  return new $cljs$core$PersistentHashSet$$(this.$meta$, $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$(this.$hash_map$, $o$jscomp$133$$, null), null);
};
$JSCompiler_prototypeAlias$$.call = function($unused__9507__auto__$jscomp$16$$) {
  switch(arguments.length - 1) {
    case 1:
      return this.$cljs$core$IFn$_invoke$arity$1$(arguments[1]);
    case 2:
      return this.$cljs$core$IFn$_invoke$arity$2$(arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length - 1)].join(""));
  }
};
$JSCompiler_prototypeAlias$$.apply = function($self__$jscomp$919$$, $args32406$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args32406$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($k$jscomp$190$$) {
  return this.$cljs$core$ILookup$_lookup$arity$2$(null, $k$jscomp$190$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($k$jscomp$191$$, $not_found$jscomp$54$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $k$jscomp$191$$, $not_found$jscomp$54$$);
};
var $cljs$core$PersistentHashSet$EMPTY$$ = new $cljs$core$PersistentHashSet$$(null, $cljs$core$PersistentArrayMap$EMPTY$$, $cljs$core$empty_unordered_hash$$);
$cljs$core$PersistentHashSet$$.prototype[$cljs$core$ITER_SYMBOL$$] = function() {
  return $cljs$core$es6_iterator$$(this);
};
function $cljs$core$TransientHashSet$$($transient_map$$) {
  this.$transient_map$ = $transient_map$$;
  this.$cljs$lang$protocol_mask$partition1$$ = 136;
  this.$cljs$lang$protocol_mask$partition0$$ = 259;
}
$JSCompiler_prototypeAlias$$ = $cljs$core$TransientHashSet$$.prototype;
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientCollection$_conj_BANG_$arity$2$ = function($tcoll$jscomp$51$$, $o$jscomp$134$$) {
  this.$transient_map$ = $cljs$core$_assoc_BANG_$$(this.$transient_map$, $o$jscomp$134$$, null);
  return this;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ITransientCollection$_persistent_BANG_$arity$1$ = function() {
  return new $cljs$core$PersistentHashSet$$(null, $cljs$core$_persistent_BANG_$$(this.$transient_map$), null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ICounted$_count$arity$1$ = function() {
  return $cljs$core$count$$(this.$transient_map$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$2$ = function($tcoll$jscomp$55$$, $v$jscomp$60$$) {
  return this.$cljs$core$ILookup$_lookup$arity$3$(null, $v$jscomp$60$$, null);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ILookup$_lookup$arity$3$ = function($tcoll$jscomp$56$$, $v$jscomp$61$$, $not_found$jscomp$55$$) {
  return $cljs$core$_lookup$$(this.$transient_map$, $v$jscomp$61$$, $cljs$core$lookup_sentinel$$) === $cljs$core$lookup_sentinel$$ ? $not_found$jscomp$55$$ : $v$jscomp$61$$;
};
$JSCompiler_prototypeAlias$$.call = function($unused__9507__auto__$jscomp$17$$) {
  switch(arguments.length - 1) {
    case 1:
      return this.$cljs$core$IFn$_invoke$arity$1$(arguments[1]);
    case 2:
      return this.$cljs$core$IFn$_invoke$arity$2$(arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length - 1)].join(""));
  }
};
$JSCompiler_prototypeAlias$$.apply = function($self__$jscomp$929$$, $args32425$$) {
  return this.call.apply(this, [this].concat($cljs$core$aclone$$($args32425$$)));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$1$ = function($k$jscomp$192$$) {
  return $cljs$core$_lookup$$(this.$transient_map$, $k$jscomp$192$$, $cljs$core$lookup_sentinel$$) === $cljs$core$lookup_sentinel$$ ? null : $k$jscomp$192$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IFn$_invoke$arity$2$ = function($k$jscomp$193$$, $not_found$jscomp$56$$) {
  return $cljs$core$_lookup$$(this.$transient_map$, $k$jscomp$193$$, $cljs$core$lookup_sentinel$$) === $cljs$core$lookup_sentinel$$ ? $not_found$jscomp$56$$ : $k$jscomp$193$$;
};
function $cljs$core$set$$($coll$jscomp$725_in$$jscomp$5_in$__$1_items$jscomp$inline_788$$) {
  if ($cljs$core$set_QMARK_$$($coll$jscomp$725_in$$jscomp$5_in$__$1_items$jscomp$inline_788$$)) {
    return $cljs$core$with_meta$$($coll$jscomp$725_in$$jscomp$5_in$__$1_items$jscomp$inline_788$$, null);
  }
  $coll$jscomp$725_in$$jscomp$5_in$__$1_items$jscomp$inline_788$$ = $cljs$core$seq$$($coll$jscomp$725_in$$jscomp$5_in$__$1_items$jscomp$inline_788$$);
  if (null == $coll$jscomp$725_in$$jscomp$5_in$__$1_items$jscomp$inline_788$$) {
    return $cljs$core$PersistentHashSet$EMPTY$$;
  }
  if ($coll$jscomp$725_in$$jscomp$5_in$__$1_items$jscomp$inline_788$$ instanceof $cljs$core$IndexedSeq$$ && 0 === $coll$jscomp$725_in$$jscomp$5_in$__$1_items$jscomp$inline_788$$.$i$) {
    $coll$jscomp$725_in$$jscomp$5_in$__$1_items$jscomp$inline_788$$ = $coll$jscomp$725_in$$jscomp$5_in$__$1_items$jscomp$inline_788$$.$arr$;
    for (var $G__34676_len$jscomp$inline_789$$ = $coll$jscomp$725_in$$jscomp$5_in$__$1_items$jscomp$inline_788$$.length, $G__34677_out$jscomp$11_t$jscomp$inline_790$$ = $cljs$core$_as_transient$$($cljs$core$PersistentHashSet$EMPTY$$), $i_34658$jscomp$inline_791$$ = 0;;) {
      if ($i_34658$jscomp$inline_791$$ < $G__34676_len$jscomp$inline_789$$) {
        $cljs$core$_conj_BANG_$$($G__34677_out$jscomp$11_t$jscomp$inline_790$$, $coll$jscomp$725_in$$jscomp$5_in$__$1_items$jscomp$inline_788$$[$i_34658$jscomp$inline_791$$]), $i_34658$jscomp$inline_791$$ += 1;
      } else {
        break;
      }
    }
    return $cljs$core$_persistent_BANG_$$($G__34677_out$jscomp$11_t$jscomp$inline_790$$);
  }
  for ($G__34677_out$jscomp$11_t$jscomp$inline_790$$ = $cljs$core$_as_transient$$($cljs$core$PersistentHashSet$EMPTY$$);;) {
    if (null != $coll$jscomp$725_in$$jscomp$5_in$__$1_items$jscomp$inline_788$$) {
      $G__34676_len$jscomp$inline_789$$ = $cljs$core$next$$($coll$jscomp$725_in$$jscomp$5_in$__$1_items$jscomp$inline_788$$), $G__34677_out$jscomp$11_t$jscomp$inline_790$$ = $cljs$core$_conj_BANG_$$($G__34677_out$jscomp$11_t$jscomp$inline_790$$, $cljs$core$_first$$($coll$jscomp$725_in$$jscomp$5_in$__$1_items$jscomp$inline_788$$)), $coll$jscomp$725_in$$jscomp$5_in$__$1_items$jscomp$inline_788$$ = $G__34676_len$jscomp$inline_789$$;
    } else {
      return $cljs$core$_persistent_BANG_$$($G__34677_out$jscomp$11_t$jscomp$inline_790$$);
    }
  }
}
function $cljs$core$name$$($x$jscomp$567$$) {
  if (null != $x$jscomp$567$$ && ($x$jscomp$567$$.$cljs$lang$protocol_mask$partition1$$ & 4096 || $cljs$core$PROTOCOL_SENTINEL$$ === $x$jscomp$567$$.$cljs$core$INamed$$)) {
    return $x$jscomp$567$$.name;
  }
  if ("string" === typeof $x$jscomp$567$$) {
    return $x$jscomp$567$$;
  }
  throw Error(["Doesn't support name: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($x$jscomp$567$$)].join(""));
}
function $cljs$core$re_matches$$($matches$jscomp$1_re$jscomp$3$$, $s$jscomp$114$$) {
  if ("string" === typeof $s$jscomp$114$$) {
    return $matches$jscomp$1_re$jscomp$3$$ = $matches$jscomp$1_re$jscomp$3$$.exec($s$jscomp$114$$), null != $matches$jscomp$1_re$jscomp$3$$ && $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($matches$jscomp$1_re$jscomp$3$$[0], $s$jscomp$114$$) ? 1 === $matches$jscomp$1_re$jscomp$3$$.length ? $matches$jscomp$1_re$jscomp$3$$[0] : $cljs$core$vec$$($matches$jscomp$1_re$jscomp$3$$) : null;
  }
  throw new TypeError("re-matches must match against a string.");
}
function $cljs$core$pr_sequential_writer$$($writer$jscomp$9$$, $print_one$$, $G__32550_34767_G__34770_begin$jscomp$5$$, $sep$jscomp$2$$, $end$jscomp$36$$, $opts$jscomp$2$$, $G__32551_34768_coll$jscomp$758$$) {
  var $_STAR_print_level_STAR__orig_val__32544$$ = $cljs$core$_STAR_print_level_STAR_$$;
  $cljs$core$_STAR_print_level_STAR_$$ = null == $cljs$core$_STAR_print_level_STAR_$$ ? null : $cljs$core$_STAR_print_level_STAR_$$ - 1;
  try {
    if (null != $cljs$core$_STAR_print_level_STAR_$$ && 0 > $cljs$core$_STAR_print_level_STAR_$$) {
      return $cljs$core$_write$$($writer$jscomp$9$$, "#");
    }
    $cljs$core$_write$$($writer$jscomp$9$$, $G__32550_34767_G__34770_begin$jscomp$5$$);
    if (0 === $cljs$cst$keyword$print_DASH_length$$.$cljs$core$IFn$_invoke$arity$1$($opts$jscomp$2$$)) {
      $cljs$core$seq$$($G__32551_34768_coll$jscomp$758$$) && $cljs$core$_write$$($writer$jscomp$9$$, function() {
        var $or__4212__auto__$jscomp$36$$ = $cljs$cst$keyword$more_DASH_marker$$.$cljs$core$IFn$_invoke$arity$1$($opts$jscomp$2$$);
        return $cljs$core$truth_$$($or__4212__auto__$jscomp$36$$) ? $or__4212__auto__$jscomp$36$$ : "...";
      }());
    } else {
      if ($cljs$core$seq$$($G__32551_34768_coll$jscomp$758$$)) {
        var $G__32546_34761$$ = $cljs$core$first$$($G__32551_34768_coll$jscomp$758$$);
        $print_one$$.$cljs$core$IFn$_invoke$arity$3$ ? $print_one$$.$cljs$core$IFn$_invoke$arity$3$($G__32546_34761$$, $writer$jscomp$9$$, $opts$jscomp$2$$) : $print_one$$.call(null, $G__32546_34761$$, $writer$jscomp$9$$, $opts$jscomp$2$$);
      }
      for (var $coll_34764__$1$$ = $cljs$core$next$$($G__32551_34768_coll$jscomp$758$$), $n_34765$$ = $cljs$cst$keyword$print_DASH_length$$.$cljs$core$IFn$_invoke$arity$1$($opts$jscomp$2$$) - 1;;) {
        if (!$coll_34764__$1$$ || null != $n_34765$$ && 0 === $n_34765$$) {
          $cljs$core$seq$$($coll_34764__$1$$) && 0 === $n_34765$$ && ($cljs$core$_write$$($writer$jscomp$9$$, $sep$jscomp$2$$), $cljs$core$_write$$($writer$jscomp$9$$, function() {
            var $or__4212__auto__$jscomp$37$$ = $cljs$cst$keyword$more_DASH_marker$$.$cljs$core$IFn$_invoke$arity$1$($opts$jscomp$2$$);
            return $cljs$core$truth_$$($or__4212__auto__$jscomp$37$$) ? $or__4212__auto__$jscomp$37$$ : "...";
          }()));
          break;
        } else {
          $cljs$core$_write$$($writer$jscomp$9$$, $sep$jscomp$2$$);
          var $G__32549_34766$$ = $cljs$core$first$$($coll_34764__$1$$);
          $G__32550_34767_G__34770_begin$jscomp$5$$ = $writer$jscomp$9$$;
          $G__32551_34768_coll$jscomp$758$$ = $opts$jscomp$2$$;
          $print_one$$.$cljs$core$IFn$_invoke$arity$3$ ? $print_one$$.$cljs$core$IFn$_invoke$arity$3$($G__32549_34766$$, $G__32550_34767_G__34770_begin$jscomp$5$$, $G__32551_34768_coll$jscomp$758$$) : $print_one$$.call(null, $G__32549_34766$$, $G__32550_34767_G__34770_begin$jscomp$5$$, $G__32551_34768_coll$jscomp$758$$);
          var $G__34769$$ = $cljs$core$next$$($coll_34764__$1$$);
          $G__32550_34767_G__34770_begin$jscomp$5$$ = $n_34765$$ - 1;
          $coll_34764__$1$$ = $G__34769$$;
          $n_34765$$ = $G__32550_34767_G__34770_begin$jscomp$5$$;
        }
      }
    }
    return $cljs$core$_write$$($writer$jscomp$9$$, $end$jscomp$36$$);
  } finally {
    $cljs$core$_STAR_print_level_STAR_$$ = $_STAR_print_level_STAR__orig_val__32544$$;
  }
}
function $cljs$core$write_all$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($writer$jscomp$10$$, $c__4638__auto__$jscomp$6_seq__32554_ss$jscomp$5_temp__5753__auto__$jscomp$28$$) {
  $c__4638__auto__$jscomp$6_seq__32554_ss$jscomp$5_temp__5753__auto__$jscomp$28$$ = $cljs$core$seq$$($c__4638__auto__$jscomp$6_seq__32554_ss$jscomp$5_temp__5753__auto__$jscomp$28$$);
  for (var $G__34779_chunk__32555_seq__32554__$1$$ = null, $G__34778_count__32556$$ = 0, $i__32557$$ = 0;;) {
    if ($i__32557$$ < $G__34778_count__32556$$) {
      var $G__34780_s$jscomp$119$$ = $G__34779_chunk__32555_seq__32554__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__32557$$);
      $cljs$core$_write$$($writer$jscomp$10$$, $G__34780_s$jscomp$119$$);
      $i__32557$$ += 1;
    } else {
      if ($c__4638__auto__$jscomp$6_seq__32554_ss$jscomp$5_temp__5753__auto__$jscomp$28$$ = $cljs$core$seq$$($c__4638__auto__$jscomp$6_seq__32554_ss$jscomp$5_temp__5753__auto__$jscomp$28$$)) {
        $G__34779_chunk__32555_seq__32554__$1$$ = $c__4638__auto__$jscomp$6_seq__32554_ss$jscomp$5_temp__5753__auto__$jscomp$28$$, $cljs$core$chunked_seq_QMARK_$$($G__34779_chunk__32555_seq__32554__$1$$) ? ($c__4638__auto__$jscomp$6_seq__32554_ss$jscomp$5_temp__5753__auto__$jscomp$28$$ = $cljs$core$_chunked_first$$($G__34779_chunk__32555_seq__32554__$1$$), $G__34778_count__32556$$ = $cljs$core$_chunked_rest$$($G__34779_chunk__32555_seq__32554__$1$$), $G__34779_chunk__32555_seq__32554__$1$$ = $c__4638__auto__$jscomp$6_seq__32554_ss$jscomp$5_temp__5753__auto__$jscomp$28$$, 
        $G__34780_s$jscomp$119$$ = $cljs$core$count$$($c__4638__auto__$jscomp$6_seq__32554_ss$jscomp$5_temp__5753__auto__$jscomp$28$$), $c__4638__auto__$jscomp$6_seq__32554_ss$jscomp$5_temp__5753__auto__$jscomp$28$$ = $G__34778_count__32556$$, $G__34778_count__32556$$ = $G__34780_s$jscomp$119$$) : ($G__34780_s$jscomp$119$$ = $cljs$core$first$$($G__34779_chunk__32555_seq__32554__$1$$), $cljs$core$_write$$($writer$jscomp$10$$, $G__34780_s$jscomp$119$$), $c__4638__auto__$jscomp$6_seq__32554_ss$jscomp$5_temp__5753__auto__$jscomp$28$$ = 
        $cljs$core$next$$($G__34779_chunk__32555_seq__32554__$1$$), $G__34779_chunk__32555_seq__32554__$1$$ = null, $G__34778_count__32556$$ = 0), $i__32557$$ = 0;
      } else {
        return null;
      }
    }
  }
}
function $cljs$core$string_print$$($x$jscomp$617$$) {
  if (null == $cljs$core$_STAR_print_fn_STAR_$$) {
    throw Error("No *print-fn* fn set for evaluation environment");
  }
  $cljs$core$_STAR_print_fn_STAR_$$.call(null, $x$jscomp$617$$);
}
var $cljs$core$char_escapes$$ = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function $cljs$core$quote_string$$($s$jscomp$120$$) {
  return ['"', $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($s$jscomp$120$$.replace(/[\\"\b\f\n\r\t]/g, function($match$jscomp$7$$) {
    return $cljs$core$char_escapes$$[$match$jscomp$7$$];
  })), '"'].join("");
}
function $cljs$core$print_meta_QMARK_$$($and__4210__auto__$jscomp$28_and__4210__auto____$1$jscomp$14_opts$jscomp$3$$, $obj$jscomp$93$$) {
  return ($and__4210__auto__$jscomp$28_and__4210__auto____$1$jscomp$14_opts$jscomp$3$$ = $cljs$core$boolean$0$$($cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($and__4210__auto__$jscomp$28_and__4210__auto____$1$jscomp$14_opts$jscomp$3$$, $cljs$cst$keyword$meta$$))) ? ($and__4210__auto__$jscomp$28_and__4210__auto____$1$jscomp$14_opts$jscomp$3$$ = null != $obj$jscomp$93$$ ? $obj$jscomp$93$$.$cljs$lang$protocol_mask$partition0$$ & 131072 || $cljs$core$PROTOCOL_SENTINEL$$ === $obj$jscomp$93$$.$cljs$core$IMeta$$ ? 
  !0 : !1 : !1) ? null != $cljs$core$meta$$($obj$jscomp$93$$) : $and__4210__auto__$jscomp$28_and__4210__auto____$1$jscomp$14_opts$jscomp$3$$ : $and__4210__auto__$jscomp$28_and__4210__auto____$1$jscomp$14_opts$jscomp$3$$;
}
function $cljs$core$pr_writer_impl$$($obj$jscomp$94$$, $writer$jscomp$11$$, $name__$1$jscomp$1_normalize_opts$jscomp$4$$) {
  if (null == $obj$jscomp$94$$) {
    return $cljs$core$_write$$($writer$jscomp$11$$, "nil");
  }
  if ($cljs$core$print_meta_QMARK_$$($name__$1$jscomp$1_normalize_opts$jscomp$4$$, $obj$jscomp$94$$)) {
    $cljs$core$_write$$($writer$jscomp$11$$, "^");
    var $G__32561_34786_G__32565$$ = $cljs$core$meta$$($obj$jscomp$94$$);
    $cljs$core$pr_writer$$.$cljs$core$IFn$_invoke$arity$3$ ? $cljs$core$pr_writer$$.$cljs$core$IFn$_invoke$arity$3$($G__32561_34786_G__32565$$, $writer$jscomp$11$$, $name__$1$jscomp$1_normalize_opts$jscomp$4$$) : $cljs$core$pr_writer$$.call(null, $G__32561_34786_G__32565$$, $writer$jscomp$11$$, $name__$1$jscomp$1_normalize_opts$jscomp$4$$);
    $cljs$core$_write$$($writer$jscomp$11$$, " ");
  }
  if ($obj$jscomp$94$$.$cljs$lang$type$) {
    return $obj$jscomp$94$$.$cljs$lang$ctorPrWriter$($writer$jscomp$11$$);
  }
  if (null != $obj$jscomp$94$$ ? $obj$jscomp$94$$.$cljs$lang$protocol_mask$partition0$$ & 2147483648 || $cljs$core$PROTOCOL_SENTINEL$$ === $obj$jscomp$94$$.$cljs$core$IPrintWithWriter$$ || ($obj$jscomp$94$$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IPrintWithWriter$$, $obj$jscomp$94$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IPrintWithWriter$$, $obj$jscomp$94$$)) {
    return $cljs$core$_pr_writer$$($obj$jscomp$94$$, $writer$jscomp$11$$, $name__$1$jscomp$1_normalize_opts$jscomp$4$$);
  }
  if (!0 === $obj$jscomp$94$$ || !1 === $obj$jscomp$94$$) {
    return $cljs$core$_write$$($writer$jscomp$11$$, $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($obj$jscomp$94$$));
  }
  if ("number" === typeof $obj$jscomp$94$$) {
    return $cljs$core$_write$$($writer$jscomp$11$$, isNaN($obj$jscomp$94$$) ? "##NaN" : $obj$jscomp$94$$ === Number.POSITIVE_INFINITY ? "##Inf" : $obj$jscomp$94$$ === Number.NEGATIVE_INFINITY ? "##-Inf" : $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($obj$jscomp$94$$));
  }
  if (null != $obj$jscomp$94$$ && $obj$jscomp$94$$.constructor === Object) {
    return $cljs$core$_write$$($writer$jscomp$11$$, "#js "), $G__32561_34786_G__32565$$ = $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($k$jscomp$205$$) {
      return new $cljs$core$MapEntry$$(null != $cljs$core$re_matches$$(/[A-Za-z_\*\+\?!\-'][\w\*\+\?!\-']*/, $k$jscomp$205$$) ? $cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($k$jscomp$205$$) : $k$jscomp$205$$, $obj$jscomp$94$$[$k$jscomp$205$$]);
    }, $goog$object$getKeys$$($obj$jscomp$94$$)), $cljs$core$print_map$$.$cljs$core$IFn$_invoke$arity$4$ ? $cljs$core$print_map$$.$cljs$core$IFn$_invoke$arity$4$($G__32561_34786_G__32565$$, $cljs$core$pr_writer$$, $writer$jscomp$11$$, $name__$1$jscomp$1_normalize_opts$jscomp$4$$) : $cljs$core$print_map$$.call(null, $G__32561_34786_G__32565$$, $cljs$core$pr_writer$$, $writer$jscomp$11$$, $name__$1$jscomp$1_normalize_opts$jscomp$4$$);
  }
  if (Array.isArray($obj$jscomp$94$$)) {
    return $cljs$core$pr_sequential_writer$$($writer$jscomp$11$$, $cljs$core$pr_writer$$, "#js [", " ", "]", $name__$1$jscomp$1_normalize_opts$jscomp$4$$, $obj$jscomp$94$$);
  }
  if ("string" === typeof $obj$jscomp$94$$) {
    return $cljs$core$truth_$$($cljs$cst$keyword$readably$$.$cljs$core$IFn$_invoke$arity$1$($name__$1$jscomp$1_normalize_opts$jscomp$4$$)) ? $cljs$core$_write$$($writer$jscomp$11$$, $cljs$core$quote_string$$($obj$jscomp$94$$)) : $cljs$core$_write$$($writer$jscomp$11$$, $obj$jscomp$94$$);
  }
  if ("function" === typeof $obj$jscomp$94$$) {
    var $name$jscomp$104$$ = $obj$jscomp$94$$.name;
    $name__$1$jscomp$1_normalize_opts$jscomp$4$$ = $cljs$core$truth_$$(function() {
      var $or__4212__auto__$jscomp$38$$ = null == $name$jscomp$104$$;
      return $or__4212__auto__$jscomp$38$$ ? $or__4212__auto__$jscomp$38$$ : /^[\s\xa0]*$/.test($name$jscomp$104$$);
    }()) ? "Function" : $name$jscomp$104$$;
    return $cljs$core$write_all$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($writer$jscomp$11$$, $cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["#object[", $name__$1$jscomp$1_normalize_opts$jscomp$4$$, $cljs$core$truth_$$(!1) ? [' "', $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($obj$jscomp$94$$), '"'].join("") : "", "]"]));
  }
  if ($obj$jscomp$94$$ instanceof Date) {
    return $name__$1$jscomp$1_normalize_opts$jscomp$4$$ = function($n$jscomp$141_ns$jscomp$8$$, $len$jscomp$50$$) {
      for ($n$jscomp$141_ns$jscomp$8$$ = $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$141_ns$jscomp$8$$);;) {
        if ($n$jscomp$141_ns$jscomp$8$$.length < $len$jscomp$50$$) {
          $n$jscomp$141_ns$jscomp$8$$ = ["0", $n$jscomp$141_ns$jscomp$8$$].join("");
        } else {
          return $n$jscomp$141_ns$jscomp$8$$;
        }
      }
    }, $cljs$core$write_all$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($writer$jscomp$11$$, $cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(['#inst "', $name__$1$jscomp$1_normalize_opts$jscomp$4$$($obj$jscomp$94$$.getUTCFullYear(), 4), "-", $name__$1$jscomp$1_normalize_opts$jscomp$4$$($obj$jscomp$94$$.getUTCMonth() + 1, 2), "-", $name__$1$jscomp$1_normalize_opts$jscomp$4$$($obj$jscomp$94$$.getUTCDate(), 2), "T", $name__$1$jscomp$1_normalize_opts$jscomp$4$$($obj$jscomp$94$$.getUTCHours(), 
    2), ":", $name__$1$jscomp$1_normalize_opts$jscomp$4$$($obj$jscomp$94$$.getUTCMinutes(), 2), ":", $name__$1$jscomp$1_normalize_opts$jscomp$4$$($obj$jscomp$94$$.getUTCSeconds(), 2), ".", $name__$1$jscomp$1_normalize_opts$jscomp$4$$($obj$jscomp$94$$.getUTCMilliseconds(), 3), "-", '00:00"']));
  }
  if ($obj$jscomp$94$$ instanceof RegExp) {
    return $cljs$core$write_all$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($writer$jscomp$11$$, $cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(['#"', $obj$jscomp$94$$.source, '"']));
  }
  if ("symbol" === $goog$typeOf$$($obj$jscomp$94$$) || "undefined" !== typeof Symbol && $obj$jscomp$94$$ instanceof Symbol) {
    return $cljs$core$write_all$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($writer$jscomp$11$$, $cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["#object[", $obj$jscomp$94$$.toString(), "]"]));
  }
  if ($cljs$core$truth_$$(function() {
    var $G__32570__$1$$ = null == $obj$jscomp$94$$ ? null : $obj$jscomp$94$$.constructor;
    return null == $G__32570__$1$$ ? null : $G__32570__$1$$.$cljs$lang$ctorStr$;
  }())) {
    return $cljs$core$write_all$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($writer$jscomp$11$$, $cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["#object[", $obj$jscomp$94$$.constructor.$cljs$lang$ctorStr$.replace(/\//g, "."), "]"]));
  }
  $name$jscomp$104$$ = function() {
    var $G__32571__$1$$ = null == $obj$jscomp$94$$ ? null : $obj$jscomp$94$$.constructor;
    return null == $G__32571__$1$$ ? null : $G__32571__$1$$.name;
  }();
  $name__$1$jscomp$1_normalize_opts$jscomp$4$$ = $cljs$core$truth_$$(function() {
    var $or__4212__auto__$jscomp$39$$ = null == $name$jscomp$104$$;
    return $or__4212__auto__$jscomp$39$$ ? $or__4212__auto__$jscomp$39$$ : /^[\s\xa0]*$/.test($name$jscomp$104$$);
  }()) ? "Object" : $name$jscomp$104$$;
  return null == $obj$jscomp$94$$.constructor ? $cljs$core$write_all$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($writer$jscomp$11$$, $cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["#object[", $name__$1$jscomp$1_normalize_opts$jscomp$4$$, "]"])) : $cljs$core$write_all$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($writer$jscomp$11$$, $cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["#object[", $name__$1$jscomp$1_normalize_opts$jscomp$4$$, " ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($obj$jscomp$94$$), 
  "]"]));
}
function $cljs$core$pr_writer$$($obj$jscomp$95$$, $writer$jscomp$12$$, $G__32574_opts$jscomp$5$$) {
  var $temp__5751__auto__$jscomp$17$$ = $cljs$cst$keyword$alt_DASH_impl$$.$cljs$core$IFn$_invoke$arity$1$($G__32574_opts$jscomp$5$$);
  return $cljs$core$truth_$$($temp__5751__auto__$jscomp$17$$) ? ($G__32574_opts$jscomp$5$$ = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($G__32574_opts$jscomp$5$$, $cljs$cst$keyword$fallback_DASH_impl$$, $cljs$core$pr_writer_impl$$), $temp__5751__auto__$jscomp$17$$.$cljs$core$IFn$_invoke$arity$3$ ? $temp__5751__auto__$jscomp$17$$.$cljs$core$IFn$_invoke$arity$3$($obj$jscomp$95$$, $writer$jscomp$12$$, $G__32574_opts$jscomp$5$$) : $temp__5751__auto__$jscomp$17$$.call(null, $obj$jscomp$95$$, $writer$jscomp$12$$, 
  $G__32574_opts$jscomp$5$$)) : $cljs$core$pr_writer_impl$$($obj$jscomp$95$$, $writer$jscomp$12$$, $G__32574_opts$jscomp$5$$);
}
function $cljs$core$pr_str_with_opts$$($c__4638__auto__$jscomp$inline_1201_objs$jscomp$2_seq__32575$jscomp$inline_1194_temp__5753__auto__$jscomp$inline_1199$$, $JSCompiler_temp$jscomp$113_opts$jscomp$8$$) {
  if ($cljs$core$empty_QMARK_$$($c__4638__auto__$jscomp$inline_1201_objs$jscomp$2_seq__32575$jscomp$inline_1194_temp__5753__auto__$jscomp$inline_1199$$)) {
    $JSCompiler_temp$jscomp$113_opts$jscomp$8$$ = "";
  } else {
    var $JSCompiler_temp_const$jscomp$115$$ = $cljs$core$str$$, $JSCompiler_temp_const$jscomp$114$$ = $JSCompiler_temp_const$jscomp$115$$.$cljs$core$IFn$_invoke$arity$1$, $sb$jscomp$inline_811$$ = new $goog$string$StringBuffer$$, $writer$jscomp$inline_1192$$ = new $cljs$core$StringBufferWriter$$($sb$jscomp$inline_811$$);
    $cljs$core$pr_writer$$($cljs$core$first$$($c__4638__auto__$jscomp$inline_1201_objs$jscomp$2_seq__32575$jscomp$inline_1194_temp__5753__auto__$jscomp$inline_1199$$), $writer$jscomp$inline_1192$$, $JSCompiler_temp$jscomp$113_opts$jscomp$8$$);
    $c__4638__auto__$jscomp$inline_1201_objs$jscomp$2_seq__32575$jscomp$inline_1194_temp__5753__auto__$jscomp$inline_1199$$ = $cljs$core$seq$$($cljs$core$next$$($c__4638__auto__$jscomp$inline_1201_objs$jscomp$2_seq__32575$jscomp$inline_1194_temp__5753__auto__$jscomp$inline_1199$$));
    for (var $G__34795$jscomp$inline_1203_chunk__32576$jscomp$inline_1195_seq__32575__$1$jscomp$inline_1200$$ = null, $G__34794$jscomp$inline_1202_count__32577$jscomp$inline_1196$$ = 0, $i__32578$jscomp$inline_1197$$ = 0;;) {
      if ($i__32578$jscomp$inline_1197$$ < $G__34794$jscomp$inline_1202_count__32577$jscomp$inline_1196$$) {
        var $G__34796$jscomp$inline_1204_obj$jscomp$inline_1198$$ = $G__34795$jscomp$inline_1203_chunk__32576$jscomp$inline_1195_seq__32575__$1$jscomp$inline_1200$$.$cljs$core$IIndexed$_nth$arity$2$(null, $i__32578$jscomp$inline_1197$$);
        $cljs$core$_write$$($writer$jscomp$inline_1192$$, " ");
        $cljs$core$pr_writer$$($G__34796$jscomp$inline_1204_obj$jscomp$inline_1198$$, $writer$jscomp$inline_1192$$, $JSCompiler_temp$jscomp$113_opts$jscomp$8$$);
        $i__32578$jscomp$inline_1197$$ += 1;
      } else {
        if ($c__4638__auto__$jscomp$inline_1201_objs$jscomp$2_seq__32575$jscomp$inline_1194_temp__5753__auto__$jscomp$inline_1199$$ = $cljs$core$seq$$($c__4638__auto__$jscomp$inline_1201_objs$jscomp$2_seq__32575$jscomp$inline_1194_temp__5753__auto__$jscomp$inline_1199$$)) {
          $G__34795$jscomp$inline_1203_chunk__32576$jscomp$inline_1195_seq__32575__$1$jscomp$inline_1200$$ = $c__4638__auto__$jscomp$inline_1201_objs$jscomp$2_seq__32575$jscomp$inline_1194_temp__5753__auto__$jscomp$inline_1199$$, $cljs$core$chunked_seq_QMARK_$$($G__34795$jscomp$inline_1203_chunk__32576$jscomp$inline_1195_seq__32575__$1$jscomp$inline_1200$$) ? ($c__4638__auto__$jscomp$inline_1201_objs$jscomp$2_seq__32575$jscomp$inline_1194_temp__5753__auto__$jscomp$inline_1199$$ = $cljs$core$_chunked_first$$($G__34795$jscomp$inline_1203_chunk__32576$jscomp$inline_1195_seq__32575__$1$jscomp$inline_1200$$), 
          $G__34794$jscomp$inline_1202_count__32577$jscomp$inline_1196$$ = $cljs$core$_chunked_rest$$($G__34795$jscomp$inline_1203_chunk__32576$jscomp$inline_1195_seq__32575__$1$jscomp$inline_1200$$), $G__34795$jscomp$inline_1203_chunk__32576$jscomp$inline_1195_seq__32575__$1$jscomp$inline_1200$$ = $c__4638__auto__$jscomp$inline_1201_objs$jscomp$2_seq__32575$jscomp$inline_1194_temp__5753__auto__$jscomp$inline_1199$$, $G__34796$jscomp$inline_1204_obj$jscomp$inline_1198$$ = $cljs$core$count$$($c__4638__auto__$jscomp$inline_1201_objs$jscomp$2_seq__32575$jscomp$inline_1194_temp__5753__auto__$jscomp$inline_1199$$), 
          $c__4638__auto__$jscomp$inline_1201_objs$jscomp$2_seq__32575$jscomp$inline_1194_temp__5753__auto__$jscomp$inline_1199$$ = $G__34794$jscomp$inline_1202_count__32577$jscomp$inline_1196$$, $G__34794$jscomp$inline_1202_count__32577$jscomp$inline_1196$$ = $G__34796$jscomp$inline_1204_obj$jscomp$inline_1198$$) : ($G__34796$jscomp$inline_1204_obj$jscomp$inline_1198$$ = $cljs$core$first$$($G__34795$jscomp$inline_1203_chunk__32576$jscomp$inline_1195_seq__32575__$1$jscomp$inline_1200$$), $cljs$core$_write$$($writer$jscomp$inline_1192$$, 
          " "), $cljs$core$pr_writer$$($G__34796$jscomp$inline_1204_obj$jscomp$inline_1198$$, $writer$jscomp$inline_1192$$, $JSCompiler_temp$jscomp$113_opts$jscomp$8$$), $c__4638__auto__$jscomp$inline_1201_objs$jscomp$2_seq__32575$jscomp$inline_1194_temp__5753__auto__$jscomp$inline_1199$$ = $cljs$core$next$$($G__34795$jscomp$inline_1203_chunk__32576$jscomp$inline_1195_seq__32575__$1$jscomp$inline_1200$$), $G__34795$jscomp$inline_1203_chunk__32576$jscomp$inline_1195_seq__32575__$1$jscomp$inline_1200$$ = 
          null, $G__34794$jscomp$inline_1202_count__32577$jscomp$inline_1196$$ = 0), $i__32578$jscomp$inline_1197$$ = 0;
        } else {
          break;
        }
      }
    }
    $JSCompiler_temp$jscomp$113_opts$jscomp$8$$ = $JSCompiler_temp_const$jscomp$114$$.call($JSCompiler_temp_const$jscomp$115$$, $sb$jscomp$inline_811$$);
  }
  return $JSCompiler_temp$jscomp$113_opts$jscomp$8$$;
}
function $cljs$core$strip_ns$$($named$$) {
  return $named$$ instanceof $cljs$core$Symbol$$ ? $cljs$core$symbol$$.$cljs$core$IFn$_invoke$arity$2$(null, $cljs$core$name$$($named$$)) : $cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$2$(null, $cljs$core$name$$($named$$));
}
function $cljs$core$lift_ns$$($first__32609_k__$1$jscomp$1_m$jscomp$56_ns__$1$jscomp$1$$) {
  if ($cljs$core$truth_$$(!1)) {
    var $G__32594_G__32594__$1_seq__32608_v__$1$jscomp$6$$ = $cljs$core$seq$$($first__32609_k__$1$jscomp$1_m$jscomp$56_ns__$1$jscomp$1$$), $G__34828_G__34831_lm_lm__$1_lm__$2_seq__32596$$ = $cljs$core$seq$$($G__32594_G__32594__$1_seq__32608_v__$1$jscomp$6$$), $G__34826_G__34829_first__32597_ns__$2_temp__5753__auto__$jscomp$30$$ = $cljs$core$first$$($G__34828_G__34831_lm_lm__$1_lm__$2_seq__32596$$);
    $cljs$core$next$$($G__34828_G__34831_lm_lm__$1_lm__$2_seq__32596$$);
    $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34826_G__34829_first__32597_ns__$2_temp__5753__auto__$jscomp$30$$, 0, null);
    $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34826_G__34829_first__32597_ns__$2_temp__5753__auto__$jscomp$30$$, 1, null);
    $G__34828_G__34831_lm_lm__$1_lm__$2_seq__32596$$ = null == $first__32609_k__$1$jscomp$1_m$jscomp$56_ns__$1$jscomp$1$$ ? null : null != $first__32609_k__$1$jscomp$1_m$jscomp$56_ns__$1$jscomp$1$$ && ($first__32609_k__$1$jscomp$1_m$jscomp$56_ns__$1$jscomp$1$$.$cljs$lang$protocol_mask$partition0$$ & 4 || $cljs$core$PROTOCOL_SENTINEL$$ === $first__32609_k__$1$jscomp$1_m$jscomp$56_ns__$1$jscomp$1$$.$cljs$core$IEmptyableCollection$$) ? $first__32609_k__$1$jscomp$1_m$jscomp$56_ns__$1$jscomp$1$$.$cljs$core$IEmptyableCollection$_empty$arity$1$(null) : 
    (null != $first__32609_k__$1$jscomp$1_m$jscomp$56_ns__$1$jscomp$1$$ ? $first__32609_k__$1$jscomp$1_m$jscomp$56_ns__$1$jscomp$1$$.$cljs$lang$protocol_mask$partition0$$ & 4 || $cljs$core$PROTOCOL_SENTINEL$$ === $first__32609_k__$1$jscomp$1_m$jscomp$56_ns__$1$jscomp$1$$.$cljs$core$IEmptyableCollection$$ || ($first__32609_k__$1$jscomp$1_m$jscomp$56_ns__$1$jscomp$1$$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IEmptyableCollection$$, $first__32609_k__$1$jscomp$1_m$jscomp$56_ns__$1$jscomp$1$$)) : 
    $cljs$core$native_satisfies_QMARK_$$($cljs$core$IEmptyableCollection$$, $first__32609_k__$1$jscomp$1_m$jscomp$56_ns__$1$jscomp$1$$)) ? $cljs$core$_empty$$($first__32609_k__$1$jscomp$1_m$jscomp$56_ns__$1$jscomp$1$$) : null;
    for ($first__32609_k__$1$jscomp$1_m$jscomp$56_ns__$1$jscomp$1$$ = null;;) {
      $G__34826_G__34829_first__32597_ns__$2_temp__5753__auto__$jscomp$30$$ = $first__32609_k__$1$jscomp$1_m$jscomp$56_ns__$1$jscomp$1$$;
      $G__32594_G__32594__$1_seq__32608_v__$1$jscomp$6$$ = $cljs$core$seq$$($G__32594_G__32594__$1_seq__32608_v__$1$jscomp$6$$);
      $first__32609_k__$1$jscomp$1_m$jscomp$56_ns__$1$jscomp$1$$ = $cljs$core$first$$($G__32594_G__32594__$1_seq__32608_v__$1$jscomp$6$$);
      var $G__34827_G__34830_entries__$1_seq__32608__$1$$ = $cljs$core$next$$($G__32594_G__32594__$1_seq__32608_v__$1$jscomp$6$$), $vec__32610$$ = $first__32609_k__$1$jscomp$1_m$jscomp$56_ns__$1$jscomp$1$$;
      $first__32609_k__$1$jscomp$1_m$jscomp$56_ns__$1$jscomp$1$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__32610$$, 0, null);
      $G__32594_G__32594__$1_seq__32608_v__$1$jscomp$6$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__32610$$, 1, null);
      if ($cljs$core$truth_$$($vec__32610$$)) {
        if ($first__32609_k__$1$jscomp$1_m$jscomp$56_ns__$1$jscomp$1$$ instanceof $cljs$core$Keyword$$ || $first__32609_k__$1$jscomp$1_m$jscomp$56_ns__$1$jscomp$1$$ instanceof $cljs$core$Symbol$$) {
          if ($cljs$core$truth_$$($G__34826_G__34829_first__32597_ns__$2_temp__5753__auto__$jscomp$30$$)) {
            if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($G__34826_G__34829_first__32597_ns__$2_temp__5753__auto__$jscomp$30$$, $cljs$core$namespace$$($first__32609_k__$1$jscomp$1_m$jscomp$56_ns__$1$jscomp$1$$))) {
              $G__34828_G__34831_lm_lm__$1_lm__$2_seq__32596$$ = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($G__34828_G__34831_lm_lm__$1_lm__$2_seq__32596$$, $cljs$core$strip_ns$$($first__32609_k__$1$jscomp$1_m$jscomp$56_ns__$1$jscomp$1$$), $G__32594_G__32594__$1_seq__32608_v__$1$jscomp$6$$), $first__32609_k__$1$jscomp$1_m$jscomp$56_ns__$1$jscomp$1$$ = $G__34826_G__34829_first__32597_ns__$2_temp__5753__auto__$jscomp$30$$, $G__32594_G__32594__$1_seq__32608_v__$1$jscomp$6$$ = $G__34827_G__34830_entries__$1_seq__32608__$1$$;
            } else {
              return null;
            }
          } else {
            if ($G__34826_G__34829_first__32597_ns__$2_temp__5753__auto__$jscomp$30$$ = $cljs$core$namespace$$($first__32609_k__$1$jscomp$1_m$jscomp$56_ns__$1$jscomp$1$$), $cljs$core$truth_$$($G__34826_G__34829_first__32597_ns__$2_temp__5753__auto__$jscomp$30$$)) {
              $G__34828_G__34831_lm_lm__$1_lm__$2_seq__32596$$ = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($G__34828_G__34831_lm_lm__$1_lm__$2_seq__32596$$, $cljs$core$strip_ns$$($first__32609_k__$1$jscomp$1_m$jscomp$56_ns__$1$jscomp$1$$), $G__32594_G__32594__$1_seq__32608_v__$1$jscomp$6$$), $first__32609_k__$1$jscomp$1_m$jscomp$56_ns__$1$jscomp$1$$ = $G__34826_G__34829_first__32597_ns__$2_temp__5753__auto__$jscomp$30$$, $G__32594_G__32594__$1_seq__32608_v__$1$jscomp$6$$ = $G__34827_G__34830_entries__$1_seq__32608__$1$$;
            } else {
              return null;
            }
          }
        } else {
          return null;
        }
      } else {
        return new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$G__34826_G__34829_first__32597_ns__$2_temp__5753__auto__$jscomp$30$$, $G__34828_G__34831_lm_lm__$1_lm__$2_seq__32596$$], null);
      }
    }
  } else {
    return null;
  }
}
function $cljs$core$print_prefix_map$$($prefix$jscomp$6$$, $m$jscomp$57$$, $print_one$jscomp$1$$, $writer$jscomp$15$$, $opts$jscomp$12$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$15$$, function($G__32616_e$jscomp$105$$, $w$jscomp$11$$, $opts__$1$$) {
    var $G__32613_34832$$ = $cljs$core$_key$$($G__32616_e$jscomp$105$$);
    $print_one$jscomp$1$$.$cljs$core$IFn$_invoke$arity$3$ ? $print_one$jscomp$1$$.$cljs$core$IFn$_invoke$arity$3$($G__32613_34832$$, $w$jscomp$11$$, $opts__$1$$) : $print_one$jscomp$1$$.call(null, $G__32613_34832$$, $w$jscomp$11$$, $opts__$1$$);
    $cljs$core$_write$$($w$jscomp$11$$, " ");
    $G__32616_e$jscomp$105$$ = $cljs$core$_val$$($G__32616_e$jscomp$105$$);
    return $print_one$jscomp$1$$.$cljs$core$IFn$_invoke$arity$3$ ? $print_one$jscomp$1$$.$cljs$core$IFn$_invoke$arity$3$($G__32616_e$jscomp$105$$, $w$jscomp$11$$, $opts__$1$$) : $print_one$jscomp$1$$.call(null, $G__32616_e$jscomp$105$$, $w$jscomp$11$$, $opts__$1$$);
  }, [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($prefix$jscomp$6$$), "{"].join(""), ", ", "}", $opts$jscomp$12$$, $cljs$core$seq$$($m$jscomp$57$$));
}
function $cljs$core$print_map$$($m$jscomp$58$$, $print_one$jscomp$2$$, $writer$jscomp$16$$, $opts$jscomp$13$$) {
  var $lift_map_vec__32619$$ = $cljs$core$map_QMARK_$$($m$jscomp$58$$) ? $cljs$core$lift_ns$$($m$jscomp$58$$) : null, $ns$jscomp$10$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($lift_map_vec__32619$$, 0, null);
  $lift_map_vec__32619$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($lift_map_vec__32619$$, 1, null);
  return $cljs$core$truth_$$($ns$jscomp$10$$) ? $cljs$core$print_prefix_map$$(["#:", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($ns$jscomp$10$$)].join(""), $lift_map_vec__32619$$, $print_one$jscomp$2$$, $writer$jscomp$16$$, $opts$jscomp$13$$) : $cljs$core$print_prefix_map$$(null, $m$jscomp$58$$, $print_one$jscomp$2$$, $writer$jscomp$16$$, $opts$jscomp$13$$);
}
$cljs$core$IndexedSeq$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$IndexedSeq$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$759$$, $writer$jscomp$19$$, $opts$jscomp$16$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$19$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$jscomp$16$$, this);
};
$cljs$core$LazySeq$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$LazySeq$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$760$$, $writer$jscomp$20$$, $opts$jscomp$17$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$20$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$jscomp$17$$, this);
};
$cljs$core$MapEntry$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$MapEntry$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$761$$, $writer$jscomp$21$$, $opts$jscomp$18$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$21$$, $cljs$core$pr_writer$$, "[", " ", "]", $opts$jscomp$18$$, this);
};
$cljs$core$NodeSeq$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$NodeSeq$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$763$$, $writer$jscomp$23$$, $opts$jscomp$20$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$23$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$jscomp$20$$, this);
};
$cljs$core$PersistentArrayMapSeq$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$PersistentArrayMapSeq$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$765$$, $writer$jscomp$25$$, $opts$jscomp$22$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$25$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$jscomp$22$$, this);
};
$cljs$core$ES6IteratorSeq$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$ES6IteratorSeq$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$766$$, $writer$jscomp$26$$, $opts$jscomp$23$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$26$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$jscomp$23$$, this);
};
$cljs$core$ChunkedSeq$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$ChunkedSeq$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$768$$, $writer$jscomp$28$$, $opts$jscomp$25$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$28$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$jscomp$25$$, this);
};
$cljs$core$Cons$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$Cons$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$770$$, $writer$jscomp$30$$, $opts$jscomp$27$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$30$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$jscomp$27$$, this);
};
$cljs$core$PersistentHashMap$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$PersistentHashMap$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$774$$, $writer$jscomp$34$$, $opts$jscomp$31$$) {
  return $cljs$core$print_map$$(this, $cljs$core$pr_writer$$, $writer$jscomp$34$$, $opts$jscomp$31$$);
};
$cljs$core$ArrayNodeSeq$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$ArrayNodeSeq$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$775$$, $writer$jscomp$35$$, $opts$jscomp$32$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$35$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$jscomp$32$$, this);
};
$cljs$core$Subvec$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$Subvec$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$776$$, $writer$jscomp$36$$, $opts$jscomp$33$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$36$$, $cljs$core$pr_writer$$, "[", " ", "]", $opts$jscomp$33$$, this);
};
$cljs$core$PersistentHashSet$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$PersistentHashSet$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$779$$, $writer$jscomp$39$$, $opts$jscomp$36$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$39$$, $cljs$core$pr_writer$$, "#{", " ", "}", $opts$jscomp$36$$, this);
};
$cljs$core$ChunkedCons$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$ChunkedCons$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$780$$, $writer$jscomp$40$$, $opts$jscomp$37$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$40$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$jscomp$37$$, this);
};
$cljs$core$Atom$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$Atom$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($a$jscomp$174$$, $writer$jscomp$41$$, $opts$jscomp$38$$) {
  $cljs$core$_write$$($writer$jscomp$41$$, "#object[cljs.core.Atom ");
  $cljs$core$pr_writer$$(new $cljs$core$PersistentArrayMap$$(null, 1, [$cljs$cst$keyword$val$$, this.state], null), $writer$jscomp$41$$, $opts$jscomp$38$$);
  return $cljs$core$_write$$($writer$jscomp$41$$, "]");
};
$cljs$core$ValSeq$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$ValSeq$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$781$$, $writer$jscomp$42$$, $opts$jscomp$39$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$42$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$jscomp$39$$, this);
};
$cljs$core$PersistentVector$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$PersistentVector$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$784$$, $writer$jscomp$45$$, $opts$jscomp$42$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$45$$, $cljs$core$pr_writer$$, "[", " ", "]", $opts$jscomp$42$$, this);
};
$cljs$core$EmptyList$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$EmptyList$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$786$$, $writer$jscomp$47$$) {
  return $cljs$core$_write$$($writer$jscomp$47$$, "()");
};
$cljs$core$PersistentArrayMap$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$PersistentArrayMap$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$788$$, $writer$jscomp$49$$, $opts$jscomp$46$$) {
  return $cljs$core$print_map$$(this, $cljs$core$pr_writer$$, $writer$jscomp$49$$, $opts$jscomp$46$$);
};
$cljs$core$KeySeq$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$KeySeq$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$791$$, $writer$jscomp$52$$, $opts$jscomp$49$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$52$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$jscomp$49$$, this);
};
$cljs$core$List$$.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
$cljs$core$List$$.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($coll$jscomp$792$$, $writer$jscomp$53$$, $opts$jscomp$50$$) {
  return $cljs$core$pr_sequential_writer$$($writer$jscomp$53$$, $cljs$core$pr_writer$$, "(", " ", ")", $opts$jscomp$50$$, this);
};
var $cljs$core$gensym_counter$$ = null;
function $cljs$core$gensym$cljs$0core$0IFn$0_invoke$0arity$01$$($prefix_string$$) {
  null == $cljs$core$gensym_counter$$ && ($cljs$core$gensym_counter$$ = new $cljs$core$Atom$$(0));
  return $cljs$core$symbol$$.$cljs$core$IFn$_invoke$arity$1$([$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($prefix_string$$), $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$gensym_counter$$, $cljs$core$inc$$))].join(""));
}
function $cljs$core$IEncodeJS$$() {
}
function $cljs$core$_clj__GT_js$$($JSCompiler_temp$jscomp$118_x$jscomp$637$$) {
  if (null != $JSCompiler_temp$jscomp$118_x$jscomp$637$$ && null != $JSCompiler_temp$jscomp$118_x$jscomp$637$$.$cljs$core$IEncodeJS$_clj__GT_js$arity$1$) {
    $JSCompiler_temp$jscomp$118_x$jscomp$637$$ = $JSCompiler_temp$jscomp$118_x$jscomp$637$$.$cljs$core$IEncodeJS$_clj__GT_js$arity$1$($JSCompiler_temp$jscomp$118_x$jscomp$637$$);
  } else {
    var $m__4508__auto__$jscomp$inline_829_m__4510__auto__$jscomp$inline_828$$ = $cljs$core$_clj__GT_js$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$118_x$jscomp$637$$ ? null : $JSCompiler_temp$jscomp$118_x$jscomp$637$$)];
    if (null != $m__4508__auto__$jscomp$inline_829_m__4510__auto__$jscomp$inline_828$$) {
      $JSCompiler_temp$jscomp$118_x$jscomp$637$$ = $m__4508__auto__$jscomp$inline_829_m__4510__auto__$jscomp$inline_828$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_829_m__4510__auto__$jscomp$inline_828$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$118_x$jscomp$637$$) : $m__4508__auto__$jscomp$inline_829_m__4510__auto__$jscomp$inline_828$$.call(null, $JSCompiler_temp$jscomp$118_x$jscomp$637$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_829_m__4510__auto__$jscomp$inline_828$$ = $cljs$core$_clj__GT_js$$._, null != $m__4508__auto__$jscomp$inline_829_m__4510__auto__$jscomp$inline_828$$) {
        $JSCompiler_temp$jscomp$118_x$jscomp$637$$ = $m__4508__auto__$jscomp$inline_829_m__4510__auto__$jscomp$inline_828$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_829_m__4510__auto__$jscomp$inline_828$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$118_x$jscomp$637$$) : $m__4508__auto__$jscomp$inline_829_m__4510__auto__$jscomp$inline_828$$.call(null, $JSCompiler_temp$jscomp$118_x$jscomp$637$$);
      } else {
        throw $cljs$core$missing_protocol$$("IEncodeJS.-clj-\x3ejs", $JSCompiler_temp$jscomp$118_x$jscomp$637$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$118_x$jscomp$637$$;
}
function $cljs$core$key__GT_js$cljs$0core$0IFn$0_invoke$0arity$02$$($k$jscomp$208$$, $primitive_fn$$) {
  return (null != $k$jscomp$208$$ ? $cljs$core$PROTOCOL_SENTINEL$$ === $k$jscomp$208$$.$cljs$core$IEncodeJS$$ || ($k$jscomp$208$$.$cljs$lang$protocol_mask$partition$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IEncodeJS$$, $k$jscomp$208$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IEncodeJS$$, $k$jscomp$208$$)) ? $cljs$core$_clj__GT_js$$($k$jscomp$208$$) : "string" === typeof $k$jscomp$208$$ || "number" === typeof $k$jscomp$208$$ || $k$jscomp$208$$ instanceof $cljs$core$Keyword$$ || 
  $k$jscomp$208$$ instanceof $cljs$core$Symbol$$ ? $primitive_fn$$.$cljs$core$IFn$_invoke$arity$1$ ? $primitive_fn$$.$cljs$core$IFn$_invoke$arity$1$($k$jscomp$208$$) : $primitive_fn$$.call(null, $k$jscomp$208$$) : $cljs$core$pr_str_with_opts$$($cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$k$jscomp$208$$]), $cljs$core$pr_opts$$());
}
var $cljs$core$clj__GT_js$$ = function $cljs$core$clj__GT_js$$($var_args$jscomp$304$$) {
  for (var $args__4824__auto__$jscomp$22$$ = [], $len__4818__auto___34853$$ = arguments.length, $i__4819__auto___34854$$ = 0;;) {
    if ($i__4819__auto___34854$$ < $len__4818__auto___34853$$) {
      $args__4824__auto__$jscomp$22$$.push(arguments[$i__4819__auto___34854$$]), $i__4819__auto___34854$$ += 1;
    } else {
      break;
    }
  }
  return $cljs$core$clj__GT_js$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], 1 < $args__4824__auto__$jscomp$22$$.length ? new $cljs$core$IndexedSeq$$($args__4824__auto__$jscomp$22$$.slice(1), 0, null) : null);
};
$cljs$core$clj__GT_js$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($x$jscomp$640$$, $map__32646__$1_p__32645$$) {
  $map__32646__$1_p__32645$$ = $cljs$core$__destructure_map$$($map__32646__$1_p__32645$$);
  var $keyword_fn$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$3$($map__32646__$1_p__32645$$, $cljs$cst$keyword$keyword_DASH_fn$$, $cljs$core$name$$), $thisfn$$ = function $cljs$core$thisfn$$($G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$) {
    if (null == $G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$) {
      return null;
    }
    if (null != $G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$ ? $cljs$core$PROTOCOL_SENTINEL$$ === $G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$.$cljs$core$IEncodeJS$$ || ($G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$.$cljs$lang$protocol_mask$partition$$ ? 
    0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IEncodeJS$$, $G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IEncodeJS$$, $G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$)) {
      return $cljs$core$_clj__GT_js$$($G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$);
    }
    if ($G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$ instanceof $cljs$core$Keyword$$) {
      return $keyword_fn$$.$cljs$core$IFn$_invoke$arity$1$ ? $keyword_fn$$.$cljs$core$IFn$_invoke$arity$1$($G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$) : $keyword_fn$$.call(null, $G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$);
    }
    if ($G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$ instanceof $cljs$core$Symbol$$) {
      return $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$);
    }
    if ($cljs$core$map_QMARK_$$($G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$)) {
      var $arr$jscomp$140_m$jscomp$60$$ = {};
      $G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$ = $cljs$core$seq$$($G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$);
      for (var $G__34871_G__34894_chunk__32674_34857_chunk__32690_34882_k_34875_key$jscomp$inline_836_seq__32689_34891__$1$$ = null, $G__34872_G__34895_c__4638__auto___34869_count__32675_34858_count__32691_34883_v_34876_value$jscomp$inline_837_vec__32686_34874$$ = 0, $G__34893_i__32676_34859_i__32692_34884$$ = 0;;) {
        if ($G__34893_i__32676_34859_i__32692_34884$$ < $G__34872_G__34895_c__4638__auto___34869_count__32675_34858_count__32691_34883_v_34876_value$jscomp$inline_837_vec__32686_34874$$) {
          var $v_34862_value$jscomp$inline_833_vec__32683_34860$$ = $G__34871_G__34894_chunk__32674_34857_chunk__32690_34882_k_34875_key$jscomp$inline_836_seq__32689_34891__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__34893_i__32676_34859_i__32692_34884$$), $k_34861_key$jscomp$inline_832_x_34885__$2$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($v_34862_value$jscomp$inline_833_vec__32683_34860$$, 0, null);
          $v_34862_value$jscomp$inline_833_vec__32683_34860$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($v_34862_value$jscomp$inline_833_vec__32683_34860$$, 1, null);
          $k_34861_key$jscomp$inline_832_x_34885__$2$$ = $cljs$core$key__GT_js$cljs$0core$0IFn$0_invoke$0arity$02$$($k_34861_key$jscomp$inline_832_x_34885__$2$$, $thisfn$$);
          $v_34862_value$jscomp$inline_833_vec__32683_34860$$ = $cljs$core$thisfn$$($v_34862_value$jscomp$inline_833_vec__32683_34860$$);
          $arr$jscomp$140_m$jscomp$60$$[$k_34861_key$jscomp$inline_832_x_34885__$2$$] = $v_34862_value$jscomp$inline_833_vec__32683_34860$$;
          $G__34893_i__32676_34859_i__32692_34884$$ += 1;
        } else {
          if ($G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$ = $cljs$core$seq$$($G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$)) {
            $cljs$core$chunked_seq_QMARK_$$($G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$) ? ($G__34872_G__34895_c__4638__auto___34869_count__32675_34858_count__32691_34883_v_34876_value$jscomp$inline_837_vec__32686_34874$$ = $cljs$core$_chunked_first$$($G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$), 
            $G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$ = $cljs$core$_chunked_rest$$($G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$), $G__34871_G__34894_chunk__32674_34857_chunk__32690_34882_k_34875_key$jscomp$inline_836_seq__32689_34891__$1$$ = $G__34872_G__34895_c__4638__auto___34869_count__32675_34858_count__32691_34883_v_34876_value$jscomp$inline_837_vec__32686_34874$$, 
            $G__34872_G__34895_c__4638__auto___34869_count__32675_34858_count__32691_34883_v_34876_value$jscomp$inline_837_vec__32686_34874$$ = $cljs$core$count$$($G__34872_G__34895_c__4638__auto___34869_count__32675_34858_count__32691_34883_v_34876_value$jscomp$inline_837_vec__32686_34874$$)) : ($G__34872_G__34895_c__4638__auto___34869_count__32675_34858_count__32691_34883_v_34876_value$jscomp$inline_837_vec__32686_34874$$ = $cljs$core$first$$($G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$), 
            $G__34871_G__34894_chunk__32674_34857_chunk__32690_34882_k_34875_key$jscomp$inline_836_seq__32689_34891__$1$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34872_G__34895_c__4638__auto___34869_count__32675_34858_count__32691_34883_v_34876_value$jscomp$inline_837_vec__32686_34874$$, 0, null), $G__34872_G__34895_c__4638__auto___34869_count__32675_34858_count__32691_34883_v_34876_value$jscomp$inline_837_vec__32686_34874$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34872_G__34895_c__4638__auto___34869_count__32675_34858_count__32691_34883_v_34876_value$jscomp$inline_837_vec__32686_34874$$, 
            1, null), $G__34871_G__34894_chunk__32674_34857_chunk__32690_34882_k_34875_key$jscomp$inline_836_seq__32689_34891__$1$$ = $cljs$core$key__GT_js$cljs$0core$0IFn$0_invoke$0arity$02$$($G__34871_G__34894_chunk__32674_34857_chunk__32690_34882_k_34875_key$jscomp$inline_836_seq__32689_34891__$1$$, $thisfn$$), $G__34872_G__34895_c__4638__auto___34869_count__32675_34858_count__32691_34883_v_34876_value$jscomp$inline_837_vec__32686_34874$$ = $cljs$core$thisfn$$($G__34872_G__34895_c__4638__auto___34869_count__32675_34858_count__32691_34883_v_34876_value$jscomp$inline_837_vec__32686_34874$$), 
            $arr$jscomp$140_m$jscomp$60$$[$G__34871_G__34894_chunk__32674_34857_chunk__32690_34882_k_34875_key$jscomp$inline_836_seq__32689_34891__$1$$] = $G__34872_G__34895_c__4638__auto___34869_count__32675_34858_count__32691_34883_v_34876_value$jscomp$inline_837_vec__32686_34874$$, $G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$ = $cljs$core$next$$($G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$), 
            $G__34871_G__34894_chunk__32674_34857_chunk__32690_34882_k_34875_key$jscomp$inline_836_seq__32689_34891__$1$$ = null, $G__34872_G__34895_c__4638__auto___34869_count__32675_34858_count__32691_34883_v_34876_value$jscomp$inline_837_vec__32686_34874$$ = 0), $G__34893_i__32676_34859_i__32692_34884$$ = 0;
          } else {
            break;
          }
        }
      }
      return $arr$jscomp$140_m$jscomp$60$$;
    }
    if ($cljs$core$coll_QMARK_$$($G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$)) {
      $arr$jscomp$140_m$jscomp$60$$ = [];
      $G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$ = $cljs$core$seq$$($cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$thisfn$$, $G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$));
      $G__34871_G__34894_chunk__32674_34857_chunk__32690_34882_k_34875_key$jscomp$inline_836_seq__32689_34891__$1$$ = null;
      for ($G__34893_i__32676_34859_i__32692_34884$$ = $G__34872_G__34895_c__4638__auto___34869_count__32675_34858_count__32691_34883_v_34876_value$jscomp$inline_837_vec__32686_34874$$ = 0;;) {
        if ($G__34893_i__32676_34859_i__32692_34884$$ < $G__34872_G__34895_c__4638__auto___34869_count__32675_34858_count__32691_34883_v_34876_value$jscomp$inline_837_vec__32686_34874$$) {
          $k_34861_key$jscomp$inline_832_x_34885__$2$$ = $G__34871_G__34894_chunk__32674_34857_chunk__32690_34882_k_34875_key$jscomp$inline_836_seq__32689_34891__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__34893_i__32676_34859_i__32692_34884$$), $arr$jscomp$140_m$jscomp$60$$.push($k_34861_key$jscomp$inline_832_x_34885__$2$$), $G__34893_i__32676_34859_i__32692_34884$$ += 1;
        } else {
          if ($G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$ = $cljs$core$seq$$($G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$)) {
            $G__34871_G__34894_chunk__32674_34857_chunk__32690_34882_k_34875_key$jscomp$inline_836_seq__32689_34891__$1$$ = $G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$, $cljs$core$chunked_seq_QMARK_$$($G__34871_G__34894_chunk__32674_34857_chunk__32690_34882_k_34875_key$jscomp$inline_836_seq__32689_34891__$1$$) ? ($G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$ = 
            $cljs$core$_chunked_first$$($G__34871_G__34894_chunk__32674_34857_chunk__32690_34882_k_34875_key$jscomp$inline_836_seq__32689_34891__$1$$), $G__34893_i__32676_34859_i__32692_34884$$ = $cljs$core$_chunked_rest$$($G__34871_G__34894_chunk__32674_34857_chunk__32690_34882_k_34875_key$jscomp$inline_836_seq__32689_34891__$1$$), $G__34871_G__34894_chunk__32674_34857_chunk__32690_34882_k_34875_key$jscomp$inline_836_seq__32689_34891__$1$$ = $G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$, 
            $G__34872_G__34895_c__4638__auto___34869_count__32675_34858_count__32691_34883_v_34876_value$jscomp$inline_837_vec__32686_34874$$ = $cljs$core$count$$($G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$), $G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$ = 
            $G__34893_i__32676_34859_i__32692_34884$$) : ($G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$ = $cljs$core$first$$($G__34871_G__34894_chunk__32674_34857_chunk__32690_34882_k_34875_key$jscomp$inline_836_seq__32689_34891__$1$$), $arr$jscomp$140_m$jscomp$60$$.push($G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$), 
            $G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$ = $cljs$core$next$$($G__34871_G__34894_chunk__32674_34857_chunk__32690_34882_k_34875_key$jscomp$inline_836_seq__32689_34891__$1$$), $G__34871_G__34894_chunk__32674_34857_chunk__32690_34882_k_34875_key$jscomp$inline_836_seq__32689_34891__$1$$ = null, $G__34872_G__34895_c__4638__auto___34869_count__32675_34858_count__32691_34883_v_34876_value$jscomp$inline_837_vec__32686_34874$$ = 
            0), $G__34893_i__32676_34859_i__32692_34884$$ = 0;
          } else {
            break;
          }
        }
      }
      return $arr$jscomp$140_m$jscomp$60$$;
    }
    return $G__34870_c__4638__auto___34892_seq__32673_34856_seq__32673_34868__$1_seq__32689_34881_temp__5753__auto___34867_temp__5753__auto___34890_x_34897__$2_x__$1$jscomp$11$$;
  };
  return $thisfn$$($x$jscomp$640$$);
};
$cljs$core$clj__GT_js$$.$cljs$lang$maxFixedArity$ = 1;
$cljs$core$clj__GT_js$$.$cljs$lang$applyTo$ = function($seq32643_seq32643__$1$$) {
  var $G__32644$$ = $cljs$core$first$$($seq32643_seq32643__$1$$);
  $seq32643_seq32643__$1$$ = $cljs$core$next$$($seq32643_seq32643__$1$$);
  return this.$cljs$core$IFn$_invoke$arity$variadic$($G__32644$$, $seq32643_seq32643__$1$$);
};
"undefined" !== typeof console && $cljs$core$enable_console_print_BANG_$$();
$cljs$core$enable_console_print_BANG_$$();
var $cljs$cst$keyword$val$$ = new $cljs$core$Keyword$$(null, "val", "val", 128701612), $cljs$cst$keyword$render$$ = new $cljs$core$Keyword$$(null, "render", "render", -1408033454), $cljs$cst$keyword$auto_DASH_run$$ = new $cljs$core$Keyword$$(null, "auto-run", "auto-run", 1958400437), $cljs$cst$keyword$meta$$ = new $cljs$core$Keyword$$(null, "meta", "meta", 1499536964), $cljs$cst$keyword$displayName$$ = new $cljs$core$Keyword$$(null, "displayName", "displayName", -809144601), $cljs$cst$keyword$on_DASH_dispose$$ = 
new $cljs$core$Keyword$$(null, "on-dispose", "on-dispose", 2105306360), $cljs$cst$keyword$namespace$$ = new $cljs$core$Keyword$$(null, "namespace", "namespace", -377510372), $cljs$cst$keyword$getDerivedStateFromError$$ = new $cljs$core$Keyword$$(null, "getDerivedStateFromError", "getDerivedStateFromError", 166658477), $cljs$cst$keyword$main$$ = new $cljs$core$Keyword$$(null, "main", "main", -2117802661), $cljs$cst$keyword$constructor$$ = new $cljs$core$Keyword$$(null, "constructor", "constructor", 
-1953928811), $cljs$cst$keyword$childContextTypes$$ = new $cljs$core$Keyword$$(null, "childContextTypes", "childContextTypes", 578717991), $cljs$cst$keyword$class$$ = new $cljs$core$Keyword$$(null, "class", "class", -2030961996), $cljs$cst$keyword$cljsLegacyRender$$ = new $cljs$core$Keyword$$(null, "cljsLegacyRender", "cljsLegacyRender", -1527295613), $cljs$cst$keyword$reagentRender$$ = new $cljs$core$Keyword$$(null, "reagentRender", "reagentRender", -358306383), $cljs$cst$keyword$name$$ = new $cljs$core$Keyword$$(null, 
"name", "name", 1843675177), $cljs$cst$keyword$interval$$ = new $cljs$core$Keyword$$(null, "interval", "interval", 1708495417), $cljs$cst$keyword$getInitialState$$ = new $cljs$core$Keyword$$(null, "getInitialState", "getInitialState", 1541760916), $cljs$cst$keyword$alt_DASH_impl$$ = new $cljs$core$Keyword$$(null, "alt-impl", "alt-impl", 670969595), $cljs$cst$keyword$on_DASH_set$$ = new $cljs$core$Keyword$$(null, "on-set", "on-set", -140953470), $cljs$cst$keyword$path$$ = new $cljs$core$Keyword$$(null, 
"path", "path", -188191168), $cljs$cst$keyword$cljs_DOT_core_SLASH_not_DASH_found$$ = new $cljs$core$Keyword$$("cljs.core", "not-found", "cljs.core/not-found", -1572889185), $cljs$cst$keyword$no_DASH_cache$$ = new $cljs$core$Keyword$$(null, "no-cache", "no-cache", 1588056370), $cljs$cst$keyword$dup$$ = new $cljs$core$Keyword$$(null, "dup", "dup", 556298533), $cljs$cst$keyword$h1$$ = new $cljs$core$Keyword$$(null, "h1", "h1", -1896887462), $cljs$cst$keyword$print_DASH_length$$ = new $cljs$core$Keyword$$(null, 
"print-length", "print-length", 1931866356), $cljs$cst$keyword$flush_DASH_on_DASH_newline$$ = new $cljs$core$Keyword$$(null, "flush-on-newline", "flush-on-newline", -151457939), $cljs$cst$keyword$component_DASH_did_DASH_update$$ = new $cljs$core$Keyword$$(null, "component-did-update", "component-did-update", -1468549173), $cljs$cst$keyword$reagent_DASH_render$$ = new $cljs$core$Keyword$$(null, "reagent-render", "reagent-render", -985383853), $cljs$cst$keyword$function_DASH_components$$ = new $cljs$core$Keyword$$(null, 
"function-components", "function-components", 1492814963), $cljs$cst$keyword$question$$ = new $cljs$core$Keyword$$(null, "question", "question", -1411720117), $cljs$cst$keyword$on_DASH_write$$ = new $cljs$core$Keyword$$(null, "on-write", "on-write", 31519475), $cljs$cst$keyword$key$$ = new $cljs$core$Keyword$$(null, "key", "key", -1516042587), $cljs$cst$keyword$a$$ = new $cljs$core$Keyword$$(null, "a", "a", -2123407586), $cljs$cst$keyword$componentWillUnmount$$ = new $cljs$core$Keyword$$(null, "componentWillUnmount", 
"componentWillUnmount", 1573788814), $cljs$cst$keyword$p$$ = new $cljs$core$Keyword$$(null, "p", "p", 151049309), $cljs$cst$keyword$contextType$$ = new $cljs$core$Keyword$$(null, "contextType", "contextType", 1033066077), $cljs$cst$keyword$teeToStdout$$ = new $cljs$core$Keyword$$(null, "teeToStdout", "teeToStdout", 1776409963), $cljs$cst$keyword$getDerivedStateFromProps$$ = new $cljs$core$Keyword$$(null, "getDerivedStateFromProps", "getDerivedStateFromProps", -991834739), $cljs$cst$keyword$fallback_DASH_impl$$ = 
new $cljs$core$Keyword$$(null, "fallback-impl", "fallback-impl", -1501286995), $cljs$cst$keyword$display_DASH_name$$ = new $cljs$core$Keyword$$(null, "display-name", "display-name", 694513143), $cljs$cst$keyword$readably$$ = new $cljs$core$Keyword$$(null, "readably", "readably", 1129599760), $cljs$cst$keyword$contextTypes$$ = new $cljs$core$Keyword$$(null, "contextTypes", "contextTypes", -2023853910), $cljs$cst$keyword$keyword_DASH_fn$$ = new $cljs$core$Keyword$$(null, "keyword-fn", "keyword-fn", 
-64566675), $cljs$cst$keyword$clear$$ = new $cljs$core$Keyword$$(null, "clear", "clear", 1877104959), $cljs$cst$keyword$shouldComponentUpdate$$ = new $cljs$core$Keyword$$(null, "shouldComponentUpdate", "shouldComponentUpdate", 1795750960), $cljs$cst$keyword$id$$ = new $cljs$core$Keyword$$(null, "id", "id", -1388402092), $cljs$cst$keyword$component_DASH_will_DASH_unmount$$ = new $cljs$core$Keyword$$(null, "component-will-unmount", "component-will-unmount", -2058314698), $cljs$cst$keyword$className$$ = 
new $cljs$core$Keyword$$(null, "className", "className", -1983287057), $cljs$cst$keyword$href$$ = new $cljs$core$Keyword$$(null, "href", "href", -793805698), $cljs$cst$keyword$more_DASH_marker$$ = new $cljs$core$Keyword$$(null, "more-marker", "more-marker", -14717935);
var $shadow$js$shim$module$0fs$$ = require("fs");
var $promesa$protocols$IPromise$_bind$dyn_32851$$ = function() {
  function $G__32852__3$$($_$jscomp$164$$, $f$jscomp$347$$, $executor$$) {
    var $m__4508__auto__$jscomp$101_m__4510__auto__$jscomp$101$$ = $promesa$protocols$_bind$$[$goog$typeOf$$(null == $_$jscomp$164$$ ? null : $_$jscomp$164$$)];
    if (null != $m__4508__auto__$jscomp$101_m__4510__auto__$jscomp$101$$) {
      return $m__4508__auto__$jscomp$101_m__4510__auto__$jscomp$101$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__4508__auto__$jscomp$101_m__4510__auto__$jscomp$101$$.$cljs$core$IFn$_invoke$arity$3$($_$jscomp$164$$, $f$jscomp$347$$, $executor$$) : $m__4508__auto__$jscomp$101_m__4510__auto__$jscomp$101$$.call(null, $_$jscomp$164$$, $f$jscomp$347$$, $executor$$);
    }
    $m__4508__auto__$jscomp$101_m__4510__auto__$jscomp$101$$ = $promesa$protocols$_bind$$._;
    if (null != $m__4508__auto__$jscomp$101_m__4510__auto__$jscomp$101$$) {
      return $m__4508__auto__$jscomp$101_m__4510__auto__$jscomp$101$$.$cljs$core$IFn$_invoke$arity$3$ ? $m__4508__auto__$jscomp$101_m__4510__auto__$jscomp$101$$.$cljs$core$IFn$_invoke$arity$3$($_$jscomp$164$$, $f$jscomp$347$$, $executor$$) : $m__4508__auto__$jscomp$101_m__4510__auto__$jscomp$101$$.call(null, $_$jscomp$164$$, $f$jscomp$347$$, $executor$$);
    }
    throw $cljs$core$missing_protocol$$("IPromise.-bind", $_$jscomp$164$$);
  }
  function $G__32852__2$$($_$jscomp$163$$, $f$jscomp$346$$) {
    var $m__4508__auto__$jscomp$100_m__4510__auto__$jscomp$100$$ = $promesa$protocols$_bind$$[$goog$typeOf$$(null == $_$jscomp$163$$ ? null : $_$jscomp$163$$)];
    if (null != $m__4508__auto__$jscomp$100_m__4510__auto__$jscomp$100$$) {
      return $m__4508__auto__$jscomp$100_m__4510__auto__$jscomp$100$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$100_m__4510__auto__$jscomp$100$$.$cljs$core$IFn$_invoke$arity$2$($_$jscomp$163$$, $f$jscomp$346$$) : $m__4508__auto__$jscomp$100_m__4510__auto__$jscomp$100$$.call(null, $_$jscomp$163$$, $f$jscomp$346$$);
    }
    $m__4508__auto__$jscomp$100_m__4510__auto__$jscomp$100$$ = $promesa$protocols$_bind$$._;
    if (null != $m__4508__auto__$jscomp$100_m__4510__auto__$jscomp$100$$) {
      return $m__4508__auto__$jscomp$100_m__4510__auto__$jscomp$100$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$100_m__4510__auto__$jscomp$100$$.$cljs$core$IFn$_invoke$arity$2$($_$jscomp$163$$, $f$jscomp$346$$) : $m__4508__auto__$jscomp$100_m__4510__auto__$jscomp$100$$.call(null, $_$jscomp$163$$, $f$jscomp$346$$);
    }
    throw $cljs$core$missing_protocol$$("IPromise.-bind", $_$jscomp$163$$);
  }
  var $G__32852$$ = null;
  $G__32852$$ = function($_$jscomp$165$$, $f$jscomp$348$$, $executor$jscomp$1$$) {
    switch(arguments.length) {
      case 2:
        return $G__32852__2$$.call(this, $_$jscomp$165$$, $f$jscomp$348$$);
      case 3:
        return $G__32852__3$$.call(this, $_$jscomp$165$$, $f$jscomp$348$$, $executor$jscomp$1$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__32852$$.$cljs$core$IFn$_invoke$arity$2$ = $G__32852__2$$;
  $G__32852$$.$cljs$core$IFn$_invoke$arity$3$ = $G__32852__3$$;
  return $G__32852$$;
}(), $promesa$protocols$_bind$$ = function $promesa$protocols$_bind$$($var_args$jscomp$329$$) {
  switch(arguments.length) {
    case 2:
      return $promesa$protocols$_bind$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    case 3:
      return $promesa$protocols$_bind$$.$cljs$core$IFn$_invoke$arity$3$(arguments[0], arguments[1], arguments[2]);
    default:
      throw Error(["Invalid arity: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(arguments.length)].join(""));
  }
};
$promesa$protocols$_bind$$.$cljs$core$IFn$_invoke$arity$2$ = function($_$jscomp$166$$, $f$jscomp$349$$) {
  return null != $_$jscomp$166$$ && null != $_$jscomp$166$$.$promesa$protocols$IPromise$_bind$arity$2$ ? $_$jscomp$166$$.$promesa$protocols$IPromise$_bind$arity$2$($_$jscomp$166$$, $f$jscomp$349$$) : $promesa$protocols$IPromise$_bind$dyn_32851$$($_$jscomp$166$$, $f$jscomp$349$$);
};
$promesa$protocols$_bind$$.$cljs$core$IFn$_invoke$arity$3$ = function($_$jscomp$167$$, $f$jscomp$350$$, $executor$jscomp$2$$) {
  return null != $_$jscomp$167$$ && null != $_$jscomp$167$$.$promesa$protocols$IPromise$_bind$arity$3$ ? $_$jscomp$167$$.$promesa$protocols$IPromise$_bind$arity$3$($_$jscomp$167$$, $f$jscomp$350$$, $executor$jscomp$2$$) : $promesa$protocols$IPromise$_bind$dyn_32851$$($_$jscomp$167$$, $f$jscomp$350$$, $executor$jscomp$2$$);
};
$promesa$protocols$_bind$$.$cljs$lang$maxFixedArity$ = 3;
function $promesa$protocols$_promise$$($JSCompiler_temp$jscomp$119__$jscomp$207$$) {
  if (null != $JSCompiler_temp$jscomp$119__$jscomp$207$$ && null != $JSCompiler_temp$jscomp$119__$jscomp$207$$.$promesa$protocols$IPromiseFactory$_promise$arity$1$) {
    $JSCompiler_temp$jscomp$119__$jscomp$207$$ = $JSCompiler_temp$jscomp$119__$jscomp$207$$.$promesa$protocols$IPromiseFactory$_promise$arity$1$($JSCompiler_temp$jscomp$119__$jscomp$207$$);
  } else {
    var $m__4508__auto__$jscomp$inline_841_m__4510__auto__$jscomp$inline_840$$ = $promesa$protocols$_promise$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$119__$jscomp$207$$ ? null : $JSCompiler_temp$jscomp$119__$jscomp$207$$)];
    if (null != $m__4508__auto__$jscomp$inline_841_m__4510__auto__$jscomp$inline_840$$) {
      $JSCompiler_temp$jscomp$119__$jscomp$207$$ = $m__4508__auto__$jscomp$inline_841_m__4510__auto__$jscomp$inline_840$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_841_m__4510__auto__$jscomp$inline_840$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$119__$jscomp$207$$) : $m__4508__auto__$jscomp$inline_841_m__4510__auto__$jscomp$inline_840$$.call(null, $JSCompiler_temp$jscomp$119__$jscomp$207$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_841_m__4510__auto__$jscomp$inline_840$$ = $promesa$protocols$_promise$$._, null != $m__4508__auto__$jscomp$inline_841_m__4510__auto__$jscomp$inline_840$$) {
        $JSCompiler_temp$jscomp$119__$jscomp$207$$ = $m__4508__auto__$jscomp$inline_841_m__4510__auto__$jscomp$inline_840$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_841_m__4510__auto__$jscomp$inline_840$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$119__$jscomp$207$$) : $m__4508__auto__$jscomp$inline_841_m__4510__auto__$jscomp$inline_840$$.call(null, $JSCompiler_temp$jscomp$119__$jscomp$207$$);
      } else {
        throw $cljs$core$missing_protocol$$("IPromiseFactory.-promise", $JSCompiler_temp$jscomp$119__$jscomp$207$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$119__$jscomp$207$$;
}
;var $promesa$impl$_STAR_default_promise_STAR_$$ = Promise;
(function($t$jscomp$21$$) {
  $t$jscomp$21$$.prototype.$promesa$protocols$IPromiseFactory$_promise$arity$1$ = function() {
    return this;
  };
  $t$jscomp$21$$.prototype.$promesa$protocols$IPromise$_bind$arity$2$ = function($it$jscomp$5$$, $f$jscomp$388$$) {
    return this.then(function($p1__33029_SHARP_$$) {
      return $f$jscomp$388$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$388$$.$cljs$core$IFn$_invoke$arity$1$($p1__33029_SHARP_$$) : $f$jscomp$388$$.call(null, $p1__33029_SHARP_$$);
    });
  };
  $t$jscomp$21$$.prototype.$promesa$protocols$IPromise$_bind$arity$3$ = function($it$jscomp$6$$, $f$jscomp$389$$) {
    return this.then(function($p1__33031_SHARP_$$) {
      return $f$jscomp$389$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$389$$.$cljs$core$IFn$_invoke$arity$1$($p1__33031_SHARP_$$) : $f$jscomp$389$$.call(null, $p1__33031_SHARP_$$);
    });
  };
  return function($it$jscomp$16$$, $f$jscomp$399$$) {
    this.then(function($p1__33044_SHARP_$$) {
      return $f$jscomp$399$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$399$$.$cljs$core$IFn$_invoke$arity$2$($p1__33044_SHARP_$$, null) : $f$jscomp$399$$.call(null, $p1__33044_SHARP_$$, null);
    }, function($p1__33045_SHARP_$$) {
      return $f$jscomp$399$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$399$$.$cljs$core$IFn$_invoke$arity$2$(null, $p1__33045_SHARP_$$) : $f$jscomp$399$$.call(null, null, $p1__33045_SHARP_$$);
    });
    return this;
  };
})(Promise);
$promesa$protocols$_bind$$._ = function() {
  function $G__33198__3$$($it$jscomp$21$$, $f$jscomp$404$$, $e$jscomp$138$$) {
    return $promesa$protocols$_bind$$($promesa$protocols$_promise$$($it$jscomp$21$$), $f$jscomp$404$$, $e$jscomp$138$$);
  }
  function $G__33198__2$$($it$jscomp$20$$, $f$jscomp$403$$) {
    return $promesa$protocols$_bind$$($promesa$protocols$_promise$$($it$jscomp$20$$), $f$jscomp$403$$);
  }
  var $G__33198$$ = null;
  $G__33198$$ = function($it$jscomp$22$$, $f$jscomp$405$$, $e$jscomp$139$$) {
    switch(arguments.length) {
      case 2:
        return $G__33198__2$$.call(this, $it$jscomp$22$$, $f$jscomp$405$$);
      case 3:
        return $G__33198__3$$.call(this, $it$jscomp$22$$, $f$jscomp$405$$, $e$jscomp$139$$);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  $G__33198$$.$cljs$core$IFn$_invoke$arity$2$ = $G__33198__2$$;
  $G__33198$$.$cljs$core$IFn$_invoke$arity$3$ = $G__33198__3$$;
  return $G__33198$$;
}();
Error.prototype.$promesa$protocols$IPromiseFactory$_promise$arity$1$ = function() {
  return $promesa$impl$_STAR_default_promise_STAR_$$.reject(this);
};
$promesa$protocols$_promise$$._ = function($v$jscomp$86$$) {
  return $promesa$impl$_STAR_default_promise_STAR_$$.resolve($v$jscomp$86$$);
};
Promise.prototype.$cljs$core$IPrintWithWriter$$ = $cljs$core$PROTOCOL_SENTINEL$$;
Promise.prototype.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($p$jscomp$38$$, $writer$jscomp$60$$) {
  return $cljs$core$_write$$($writer$jscomp$60$$, "#\x3cPromise[~]\x3e");
};
var $shadow$js$shim$module$0react_dom$0server$$ = require("react-dom/server");
function $clojure$string$replace_all$$($s$jscomp$128$$, $JSCompiler_inline_result$jscomp$122_re$jscomp$7$$, $replacement$jscomp$4$$) {
  var $JSCompiler_temp_const$jscomp$121$$ = RegExp, $JSCompiler_temp_const$jscomp$120$$ = $JSCompiler_inline_result$jscomp$122_re$jscomp$7$$.source, $G__33164__$1$jscomp$inline_875_G__33164__$2$jscomp$inline_876$$ = $cljs$core$truth_$$($JSCompiler_inline_result$jscomp$122_re$jscomp$7$$.ignoreCase) ? "gi" : "g";
  $G__33164__$1$jscomp$inline_875_G__33164__$2$jscomp$inline_876$$ = $cljs$core$truth_$$($JSCompiler_inline_result$jscomp$122_re$jscomp$7$$.multiline) ? [$G__33164__$1$jscomp$inline_875_G__33164__$2$jscomp$inline_876$$, "m"].join("") : $G__33164__$1$jscomp$inline_875_G__33164__$2$jscomp$inline_876$$;
  $JSCompiler_inline_result$jscomp$122_re$jscomp$7$$ = $cljs$core$truth_$$($JSCompiler_inline_result$jscomp$122_re$jscomp$7$$.$unicode$) ? [$G__33164__$1$jscomp$inline_875_G__33164__$2$jscomp$inline_876$$, "u"].join("") : $G__33164__$1$jscomp$inline_875_G__33164__$2$jscomp$inline_876$$;
  return $s$jscomp$128$$.replace(new $JSCompiler_temp_const$jscomp$121$$($JSCompiler_temp_const$jscomp$120$$, $JSCompiler_inline_result$jscomp$122_re$jscomp$7$$), $replacement$jscomp$4$$);
}
function $clojure$string$replace_with$$($f$jscomp$449$$) {
  return function() {
    function $G__33256$$($var_args$jscomp$361$$) {
      var $G__33257__i_args$jscomp$123$$ = null;
      if (0 < arguments.length) {
        $G__33257__i_args$jscomp$123$$ = 0;
        for (var $G__33257__a$$ = Array(arguments.length - 0); $G__33257__i_args$jscomp$123$$ < $G__33257__a$$.length;) {
          $G__33257__a$$[$G__33257__i_args$jscomp$123$$] = arguments[$G__33257__i_args$jscomp$123$$ + 0], ++$G__33257__i_args$jscomp$123$$;
        }
        $G__33257__i_args$jscomp$123$$ = new $cljs$core$IndexedSeq$$($G__33257__a$$, 0, null);
      }
      return $G__33256__delegate$$.call(this, $G__33257__i_args$jscomp$123$$);
    }
    function $G__33256__delegate$$($G__33170_G__33172_args$jscomp$122_matches$jscomp$4$$) {
      $G__33170_G__33172_args$jscomp$122_matches$jscomp$4$$ = $cljs$core$drop_last$cljs$0core$0IFn$0_invoke$0arity$02$$($G__33170_G__33172_args$jscomp$122_matches$jscomp$4$$);
      if ($cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$count$$($G__33170_G__33172_args$jscomp$122_matches$jscomp$4$$), 1)) {
        return $G__33170_G__33172_args$jscomp$122_matches$jscomp$4$$ = $cljs$core$first$$($G__33170_G__33172_args$jscomp$122_matches$jscomp$4$$), $f$jscomp$449$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$449$$.$cljs$core$IFn$_invoke$arity$1$($G__33170_G__33172_args$jscomp$122_matches$jscomp$4$$) : $f$jscomp$449$$.call(null, $G__33170_G__33172_args$jscomp$122_matches$jscomp$4$$);
      }
      $G__33170_G__33172_args$jscomp$122_matches$jscomp$4$$ = $cljs$core$vec$$($G__33170_G__33172_args$jscomp$122_matches$jscomp$4$$);
      return $f$jscomp$449$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$449$$.$cljs$core$IFn$_invoke$arity$1$($G__33170_G__33172_args$jscomp$122_matches$jscomp$4$$) : $f$jscomp$449$$.call(null, $G__33170_G__33172_args$jscomp$122_matches$jscomp$4$$);
    }
    $G__33256$$.$cljs$lang$maxFixedArity$ = 0;
    $G__33256$$.$cljs$lang$applyTo$ = function($arglist__33258_args$jscomp$124$$) {
      $arglist__33258_args$jscomp$124$$ = $cljs$core$seq$$($arglist__33258_args$jscomp$124$$);
      return $G__33256__delegate$$($arglist__33258_args$jscomp$124$$);
    };
    $G__33256$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__33256__delegate$$;
    return $G__33256$$;
  }();
}
function $clojure$string$replace$$($s$jscomp$129$$, $match$jscomp$9$$, $replacement$jscomp$5$$) {
  if ("string" === typeof $match$jscomp$9$$) {
    return $s$jscomp$129$$.replace(new RegExp(String($match$jscomp$9$$).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), $replacement$jscomp$5$$);
  }
  if ($match$jscomp$9$$ instanceof RegExp) {
    return "string" === typeof $replacement$jscomp$5$$ ? $clojure$string$replace_all$$($s$jscomp$129$$, $match$jscomp$9$$, $replacement$jscomp$5$$) : $clojure$string$replace_all$$($s$jscomp$129$$, $match$jscomp$9$$, $clojure$string$replace_with$$($replacement$jscomp$5$$));
  }
  throw ["Invalid match arg: ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($match$jscomp$9$$)].join("");
}
function $clojure$string$join$cljs$0core$0IFn$0_invoke$0arity$02$$($coll$jscomp$805_coll__$1$jscomp$448_coll__$2$jscomp$1$$) {
  var $sb$jscomp$11$$ = new $goog$string$StringBuffer$$;
  for ($coll$jscomp$805_coll__$1$jscomp$448_coll__$2$jscomp$1$$ = $cljs$core$seq$$($coll$jscomp$805_coll__$1$jscomp$448_coll__$2$jscomp$1$$);;) {
    if (null != $coll$jscomp$805_coll__$1$jscomp$448_coll__$2$jscomp$1$$) {
      $sb$jscomp$11$$.append($cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$first$$($coll$jscomp$805_coll__$1$jscomp$448_coll__$2$jscomp$1$$))), $coll$jscomp$805_coll__$1$jscomp$448_coll__$2$jscomp$1$$ = $cljs$core$next$$($coll$jscomp$805_coll__$1$jscomp$448_coll__$2$jscomp$1$$), null != $coll$jscomp$805_coll__$1$jscomp$448_coll__$2$jscomp$1$$ && $sb$jscomp$11$$.append(" ");
    } else {
      return $sb$jscomp$11$$.toString();
    }
  }
}
function $clojure$string$split$cljs$0core$0IFn$0_invoke$0arity$03$$($JSCompiler_temp$jscomp$1282_JSCompiler_temp$jscomp$inline_1212_s$jscomp$136_v$jscomp$inline_1210_v__$1$jscomp$inline_1213$$) {
  var $re$jscomp$9$$ = /-/;
  $JSCompiler_temp$jscomp$1282_JSCompiler_temp$jscomp$inline_1212_s$jscomp$136_v$jscomp$inline_1210_v__$1$jscomp$inline_1213$$ = "/(?:)/" === $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($re$jscomp$9$$) ? $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$vec$$($cljs$core$cons$$("", $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$str$$, $cljs$core$seq$$($JSCompiler_temp$jscomp$1282_JSCompiler_temp$jscomp$inline_1212_s$jscomp$136_v$jscomp$inline_1210_v__$1$jscomp$inline_1213$$)))), 
  "") : $cljs$core$vec$$($cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$1282_JSCompiler_temp$jscomp$inline_1212_s$jscomp$136_v$jscomp$inline_1210_v__$1$jscomp$inline_1213$$).split($re$jscomp$9$$));
  if (1 < $cljs$core$count$$($JSCompiler_temp$jscomp$1282_JSCompiler_temp$jscomp$inline_1212_s$jscomp$136_v$jscomp$inline_1210_v__$1$jscomp$inline_1213$$)) {
    a: {
      for (;;) {
        if ("" === (null == $JSCompiler_temp$jscomp$1282_JSCompiler_temp$jscomp$inline_1212_s$jscomp$136_v$jscomp$inline_1210_v__$1$jscomp$inline_1213$$ ? null : $cljs$core$_peek$$($JSCompiler_temp$jscomp$1282_JSCompiler_temp$jscomp$inline_1212_s$jscomp$136_v$jscomp$inline_1210_v__$1$jscomp$inline_1213$$))) {
          $JSCompiler_temp$jscomp$1282_JSCompiler_temp$jscomp$inline_1212_s$jscomp$136_v$jscomp$inline_1210_v__$1$jscomp$inline_1213$$ = null == $JSCompiler_temp$jscomp$1282_JSCompiler_temp$jscomp$inline_1212_s$jscomp$136_v$jscomp$inline_1210_v__$1$jscomp$inline_1213$$ ? null : $cljs$core$_pop$$($JSCompiler_temp$jscomp$1282_JSCompiler_temp$jscomp$inline_1212_s$jscomp$136_v$jscomp$inline_1210_v__$1$jscomp$inline_1213$$);
        } else {
          break a;
        }
      }
    }
  }
  return $JSCompiler_temp$jscomp$1282_JSCompiler_temp$jscomp$inline_1212_s$jscomp$136_v$jscomp$inline_1210_v__$1$jscomp$inline_1213$$;
}
;var $reagent$$ = {};
var $reagent$impl$$ = {}, $reagent$impl$util$is_client$$ = "undefined" !== typeof window && null != window.document, $reagent$impl$util$_STAR_non_reactive_STAR_$$ = !1, $reagent$impl$util$dont_camel_case$$ = new $cljs$core$PersistentHashSet$$(null, new $cljs$core$PersistentArrayMap$$(null, 2, ["aria", null, "data", null], null), null);
function $reagent$impl$util$capitalize$$($s$jscomp$151$$) {
  return 2 > $cljs$core$count$$($s$jscomp$151$$) ? $s$jscomp$151$$.toUpperCase() : [$s$jscomp$151$$.substring(0, 1).toUpperCase(), $s$jscomp$151$$.substring(1)].join("");
}
function $reagent$impl$util$dash_to_prop_name$$($dashed_name_str$$) {
  if ("string" === typeof $dashed_name_str$$) {
    return $dashed_name_str$$;
  }
  $dashed_name_str$$ = $cljs$core$name$$($dashed_name_str$$);
  var $first__33299_vec__33297$$ = $clojure$string$split$cljs$0core$0IFn$0_invoke$0arity$03$$($dashed_name_str$$), $parts$jscomp$14_seq__33298$$ = $cljs$core$seq$$($first__33299_vec__33297$$);
  $first__33299_vec__33297$$ = $cljs$core$first$$($parts$jscomp$14_seq__33298$$);
  $parts$jscomp$14_seq__33298$$ = $cljs$core$next$$($parts$jscomp$14_seq__33298$$);
  return $cljs$core$truth_$$($reagent$impl$util$dont_camel_case$$.$cljs$core$IFn$_invoke$arity$1$ ? $reagent$impl$util$dont_camel_case$$.$cljs$core$IFn$_invoke$arity$1$($first__33299_vec__33297$$) : $reagent$impl$util$dont_camel_case$$.call(null, $first__33299_vec__33297$$)) ? $dashed_name_str$$ : $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$03$$($cljs$core$str$$, $first__33299_vec__33297$$, $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($reagent$impl$util$capitalize$$, $parts$jscomp$14_seq__33298$$));
}
function $reagent$impl$util$fun_name$$($f$jscomp$456$$) {
  var $n$jscomp$152$$ = function() {
    var $m$jscomp$75_or__4212__auto__$jscomp$44_or__4212__auto____$1$jscomp$13$$ = function() {
      var $and__4210__auto__$jscomp$33_n$jscomp$153_or__4212__auto__$jscomp$45$$ = $cljs$core$fn_QMARK_$$($f$jscomp$456$$);
      if ($and__4210__auto__$jscomp$33_n$jscomp$153_or__4212__auto__$jscomp$45$$) {
        $and__4210__auto__$jscomp$33_n$jscomp$153_or__4212__auto__$jscomp$45$$ = $f$jscomp$456$$.displayName;
        if ($cljs$core$truth_$$($and__4210__auto__$jscomp$33_n$jscomp$153_or__4212__auto__$jscomp$45$$)) {
          return $and__4210__auto__$jscomp$33_n$jscomp$153_or__4212__auto__$jscomp$45$$;
        }
        $and__4210__auto__$jscomp$33_n$jscomp$153_or__4212__auto__$jscomp$45$$ = $f$jscomp$456$$.name;
        return "string" === typeof $and__4210__auto__$jscomp$33_n$jscomp$153_or__4212__auto__$jscomp$45$$ && $cljs$core$seq$$($and__4210__auto__$jscomp$33_n$jscomp$153_or__4212__auto__$jscomp$45$$) ? $and__4210__auto__$jscomp$33_n$jscomp$153_or__4212__auto__$jscomp$45$$ : null;
      }
      return $and__4210__auto__$jscomp$33_n$jscomp$153_or__4212__auto__$jscomp$45$$;
    }();
    if ($cljs$core$truth_$$($m$jscomp$75_or__4212__auto__$jscomp$44_or__4212__auto____$1$jscomp$13$$)) {
      return $m$jscomp$75_or__4212__auto__$jscomp$44_or__4212__auto____$1$jscomp$13$$;
    }
    $m$jscomp$75_or__4212__auto__$jscomp$44_or__4212__auto____$1$jscomp$13$$ = function() {
      var $and__4210__auto__$jscomp$34$$ = null != $f$jscomp$456$$ ? $f$jscomp$456$$.$cljs$lang$protocol_mask$partition1$$ & 4096 || $cljs$core$PROTOCOL_SENTINEL$$ === $f$jscomp$456$$.$cljs$core$INamed$$ ? !0 : !1 : !1;
      return $and__4210__auto__$jscomp$34$$ ? $cljs$core$name$$($f$jscomp$456$$) : $and__4210__auto__$jscomp$34$$;
    }();
    if ($cljs$core$truth_$$($m$jscomp$75_or__4212__auto__$jscomp$44_or__4212__auto____$1$jscomp$13$$)) {
      return $m$jscomp$75_or__4212__auto__$jscomp$44_or__4212__auto____$1$jscomp$13$$;
    }
    $m$jscomp$75_or__4212__auto__$jscomp$44_or__4212__auto____$1$jscomp$13$$ = $cljs$core$meta$$($f$jscomp$456$$);
    return $cljs$core$map_QMARK_$$($m$jscomp$75_or__4212__auto__$jscomp$44_or__4212__auto____$1$jscomp$13$$) ? $cljs$cst$keyword$name$$.$cljs$core$IFn$_invoke$arity$1$($m$jscomp$75_or__4212__auto__$jscomp$44_or__4212__auto____$1$jscomp$13$$) : null;
  }();
  return $cljs$core$truth_$$($n$jscomp$152$$) ? $clojure$string$replace$$($cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($n$jscomp$152$$), "$", ".") : null;
}
function $reagent$impl$util$named_QMARK_$$($x$jscomp$664$$) {
  return $x$jscomp$664$$ instanceof $cljs$core$Keyword$$ || $x$jscomp$664$$ instanceof $cljs$core$Symbol$$;
}
var $reagent$impl$util$class_names$$ = function $reagent$impl$util$class_names$$($var_args$jscomp$368$$) {
  switch(arguments.length) {
    case 0:
      return $reagent$impl$util$class_names$$.$cljs$core$IFn$_invoke$arity$0$();
    case 1:
      return $reagent$impl$util$class_names$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $reagent$impl$util$class_names$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      for (var $args_arr__4839__auto__$jscomp$69$$ = [], $len__4818__auto___33507$$ = arguments.length, $i__4819__auto___33508$$ = 0;;) {
        if ($i__4819__auto___33508$$ < $len__4818__auto___33507$$) {
          $args_arr__4839__auto__$jscomp$69$$.push(arguments[$i__4819__auto___33508$$]), $i__4819__auto___33508$$ += 1;
        } else {
          break;
        }
      }
      return $reagent$impl$util$class_names$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], arguments[1], new $cljs$core$IndexedSeq$$($args_arr__4839__auto__$jscomp$69$$.slice(2), 0, null));
  }
};
$reagent$impl$util$class_names$$.$cljs$core$IFn$_invoke$arity$0$ = function() {
  return null;
};
$reagent$impl$util$class_names$$.$cljs$core$IFn$_invoke$arity$1$ = function($class$_classes$$) {
  return $cljs$core$coll_QMARK_$$($class$_classes$$) ? ($class$_classes$$ = $cljs$core$keep$cljs$0core$0IFn$0_invoke$0arity$02$$(function($c$jscomp$155$$) {
    return $cljs$core$truth_$$($c$jscomp$155$$) ? $reagent$impl$util$named_QMARK_$$($c$jscomp$155$$) ? $cljs$core$name$$($c$jscomp$155$$) : $c$jscomp$155$$ : null;
  }, $class$_classes$$), $cljs$core$seq$$($class$_classes$$) ? $clojure$string$join$cljs$0core$0IFn$0_invoke$0arity$02$$($class$_classes$$) : null) : $reagent$impl$util$named_QMARK_$$($class$_classes$$) ? $cljs$core$name$$($class$_classes$$) : $class$_classes$$;
};
$reagent$impl$util$class_names$$.$cljs$core$IFn$_invoke$arity$2$ = function($a$jscomp$218$$, $b$jscomp$185$$) {
  return $cljs$core$truth_$$($a$jscomp$218$$) ? $cljs$core$truth_$$($b$jscomp$185$$) ? [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($reagent$impl$util$class_names$$.$cljs$core$IFn$_invoke$arity$1$($a$jscomp$218$$)), " ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($reagent$impl$util$class_names$$.$cljs$core$IFn$_invoke$arity$1$($b$jscomp$185$$))].join("") : $reagent$impl$util$class_names$$.$cljs$core$IFn$_invoke$arity$1$($a$jscomp$218$$) : $reagent$impl$util$class_names$$.$cljs$core$IFn$_invoke$arity$1$($b$jscomp$185$$);
};
$reagent$impl$util$class_names$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($a$jscomp$219$$, $b$jscomp$186$$, $rst$$) {
  return $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($reagent$impl$util$class_names$$, $reagent$impl$util$class_names$$.$cljs$core$IFn$_invoke$arity$2$($a$jscomp$219$$, $b$jscomp$186$$), $rst$$);
};
$reagent$impl$util$class_names$$.$cljs$lang$applyTo$ = function($G__33352_seq33350$$) {
  var $G__33351$$ = $cljs$core$first$$($G__33352_seq33350$$), $seq33350__$1_seq33350__$2$$ = $cljs$core$next$$($G__33352_seq33350$$);
  $G__33352_seq33350$$ = $cljs$core$first$$($seq33350__$1_seq33350__$2$$);
  $seq33350__$1_seq33350__$2$$ = $cljs$core$next$$($seq33350__$1_seq33350__$2$$);
  return this.$cljs$core$IFn$_invoke$arity$variadic$($G__33351$$, $G__33352_seq33350$$, $seq33350__$1_seq33350__$2$$);
};
$reagent$impl$util$class_names$$.$cljs$lang$maxFixedArity$ = 2;
function $reagent$impl$util$get_react_key$$($x$jscomp$667$$) {
  if ($cljs$core$map_QMARK_$$($x$jscomp$667$$)) {
    try {
      var $JSCompiler_temp$jscomp$130$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($x$jscomp$667$$, $cljs$cst$keyword$key$$);
    } catch ($e33424$jscomp$inline_891$$) {
      $JSCompiler_temp$jscomp$130$$ = null;
    }
  } else {
    $JSCompiler_temp$jscomp$130$$ = null;
  }
  return $JSCompiler_temp$jscomp$130$$;
}
function $reagent$impl$util$react_key_from_vec$$($G__33427_v$jscomp$108$$) {
  var $G__33426_or__4212__auto__$jscomp$46_or__4212__auto____$1$jscomp$14$$ = $cljs$cst$keyword$key$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$meta$$($G__33427_v$jscomp$108$$));
  if ($cljs$core$truth_$$($G__33426_or__4212__auto__$jscomp$46_or__4212__auto____$1$jscomp$14$$)) {
    return $G__33426_or__4212__auto__$jscomp$46_or__4212__auto____$1$jscomp$14$$;
  }
  $G__33426_or__4212__auto__$jscomp$46_or__4212__auto____$1$jscomp$14$$ = $reagent$impl$util$get_react_key$$($cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__33427_v$jscomp$108$$, 1, null));
  if ($cljs$core$truth_$$($G__33426_or__4212__auto__$jscomp$46_or__4212__auto____$1$jscomp$14$$)) {
    return $G__33426_or__4212__auto__$jscomp$46_or__4212__auto____$1$jscomp$14$$;
  }
  $G__33426_or__4212__auto__$jscomp$46_or__4212__auto____$1$jscomp$14$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__33427_v$jscomp$108$$, 0, null);
  switch($G__33426_or__4212__auto__$jscomp$46_or__4212__auto____$1$jscomp$14$$ instanceof $cljs$core$Keyword$$ ? $G__33426_or__4212__auto__$jscomp$46_or__4212__auto____$1$jscomp$14$$.$fqn$ : null) {
    case "\x3e":
    case "f\x3e":
      return $reagent$impl$util$get_react_key$$($cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__33427_v$jscomp$108$$, 2, null));
    case "r\x3e":
      return $G__33427_v$jscomp$108$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__33427_v$jscomp$108$$, 2, null), null == $G__33427_v$jscomp$108$$ ? null : $G__33427_v$jscomp$108$$.key;
    default:
      return null;
  }
}
;var $shadow$js$shim$module$0react$$ = require("react");
var $reagent$impl$batching$mount_count$$ = 0;
function $reagent$impl$batching$fake_raf$$($f$jscomp$460$$) {
  return setTimeout($f$jscomp$460$$, 16);
}
var $reagent$impl$batching$next_tick$$ = $reagent$impl$util$is_client$$ ? function() {
  var $w$jscomp$12$$ = window;
  return function() {
    var $or__4212__auto__$jscomp$47_or__4212__auto____$1$jscomp$15_or__4212__auto____$2$jscomp$6_or__4212__auto____$3$jscomp$3$$ = $w$jscomp$12$$.requestAnimationFrame;
    if ($cljs$core$truth_$$($or__4212__auto__$jscomp$47_or__4212__auto____$1$jscomp$15_or__4212__auto____$2$jscomp$6_or__4212__auto____$3$jscomp$3$$)) {
      return $or__4212__auto__$jscomp$47_or__4212__auto____$1$jscomp$15_or__4212__auto____$2$jscomp$6_or__4212__auto____$3$jscomp$3$$;
    }
    $or__4212__auto__$jscomp$47_or__4212__auto____$1$jscomp$15_or__4212__auto____$2$jscomp$6_or__4212__auto____$3$jscomp$3$$ = $w$jscomp$12$$.webkitRequestAnimationFrame;
    if ($cljs$core$truth_$$($or__4212__auto__$jscomp$47_or__4212__auto____$1$jscomp$15_or__4212__auto____$2$jscomp$6_or__4212__auto____$3$jscomp$3$$)) {
      return $or__4212__auto__$jscomp$47_or__4212__auto____$1$jscomp$15_or__4212__auto____$2$jscomp$6_or__4212__auto____$3$jscomp$3$$;
    }
    $or__4212__auto__$jscomp$47_or__4212__auto____$1$jscomp$15_or__4212__auto____$2$jscomp$6_or__4212__auto____$3$jscomp$3$$ = $w$jscomp$12$$.mozRequestAnimationFrame;
    if ($cljs$core$truth_$$($or__4212__auto__$jscomp$47_or__4212__auto____$1$jscomp$15_or__4212__auto____$2$jscomp$6_or__4212__auto____$3$jscomp$3$$)) {
      return $or__4212__auto__$jscomp$47_or__4212__auto____$1$jscomp$15_or__4212__auto____$2$jscomp$6_or__4212__auto____$3$jscomp$3$$;
    }
    $or__4212__auto__$jscomp$47_or__4212__auto____$1$jscomp$15_or__4212__auto____$2$jscomp$6_or__4212__auto____$3$jscomp$3$$ = $w$jscomp$12$$.msRequestAnimationFrame;
    return $cljs$core$truth_$$($or__4212__auto__$jscomp$47_or__4212__auto____$1$jscomp$15_or__4212__auto____$2$jscomp$6_or__4212__auto____$3$jscomp$3$$) ? $or__4212__auto__$jscomp$47_or__4212__auto____$1$jscomp$15_or__4212__auto____$2$jscomp$6_or__4212__auto____$3$jscomp$3$$ : $reagent$impl$batching$fake_raf$$;
  }().bind($w$jscomp$12$$);
}() : $reagent$impl$batching$fake_raf$$;
function $reagent$impl$batching$compare_mount_order$$($c1$jscomp$10$$, $c2$jscomp$8$$) {
  return $c1$jscomp$10$$.$cljsMountOrder$ - $c2$jscomp$8$$.$cljsMountOrder$;
}
function $reagent$impl$batching$ratom_flush$$() {
  return null;
}
function $reagent$impl$batching$run_funs$$($fs$jscomp$4$$) {
  for (var $n__4695__auto__$jscomp$1$$ = $fs$jscomp$4$$.length, $i$jscomp$302$$ = 0;;) {
    if ($i$jscomp$302$$ < $n__4695__auto__$jscomp$1$$) {
      var $fexpr__33469_33520$$ = $fs$jscomp$4$$[$i$jscomp$302$$];
      $fexpr__33469_33520$$.$cljs$core$IFn$_invoke$arity$0$ ? $fexpr__33469_33520$$.$cljs$core$IFn$_invoke$arity$0$() : $fexpr__33469_33520$$.call(null);
      $i$jscomp$302$$ += 1;
    } else {
      return null;
    }
  }
}
function $reagent$impl$batching$enqueue$$($queue$$, $fs$jscomp$5$$, $f$jscomp$461$$) {
  $fs$jscomp$5$$.push($f$jscomp$461$$);
  return $queue$$.schedule();
}
function $reagent$impl$batching$RenderQueue$$() {
  this.$scheduled_QMARK_$ = !1;
}
$JSCompiler_prototypeAlias$$ = $reagent$impl$batching$RenderQueue$$.prototype;
$JSCompiler_prototypeAlias$$.flush_after_render = function() {
  var $temp__5757__auto__$jscomp$1$$ = this.$afterRender$;
  if (null == $temp__5757__auto__$jscomp$1$$) {
    return null;
  }
  this.$afterRender$ = null;
  return $reagent$impl$batching$run_funs$$($temp__5757__auto__$jscomp$1$$);
};
$JSCompiler_prototypeAlias$$.queue_render = function($c$jscomp$158$$) {
  null == this.$componentQueue$ && (this.$componentQueue$ = []);
  return $reagent$impl$batching$enqueue$$(this, this.$componentQueue$, $c$jscomp$158$$);
};
$JSCompiler_prototypeAlias$$.schedule = function() {
  function $G__33475$$() {
    return $this$$jscomp$142$$.run_queues();
  }
  var $this$$jscomp$142$$ = this;
  if (this.$scheduled_QMARK_$) {
    return null;
  }
  this.$scheduled_QMARK_$ = !0;
  return $reagent$impl$batching$next_tick$$.$cljs$core$IFn$_invoke$arity$1$ ? $reagent$impl$batching$next_tick$$.$cljs$core$IFn$_invoke$arity$1$($G__33475$$) : $reagent$impl$batching$next_tick$$.call(null, $G__33475$$);
};
$JSCompiler_prototypeAlias$$.flush_before_flush = function() {
  var $temp__5757__auto__$jscomp$2$$ = this.$beforeFlush$;
  if (null == $temp__5757__auto__$jscomp$2$$) {
    return null;
  }
  this.$beforeFlush$ = null;
  return $reagent$impl$batching$run_funs$$($temp__5757__auto__$jscomp$2$$);
};
$JSCompiler_prototypeAlias$$.flush_queues = function() {
  this.flush_before_flush();
  $reagent$impl$batching$ratom_flush$$();
  this.flush_render();
  return this.flush_after_render();
};
$JSCompiler_prototypeAlias$$.run_queues = function() {
  this.$scheduled_QMARK_$ = !1;
  return this.flush_queues();
};
$JSCompiler_prototypeAlias$$.add_before_flush = function($f$jscomp$462$$) {
  null == this.$beforeFlush$ && (this.$beforeFlush$ = []);
  return $reagent$impl$batching$enqueue$$(this, this.$beforeFlush$, $f$jscomp$462$$);
};
$JSCompiler_prototypeAlias$$.add_after_render = function($f$jscomp$463$$) {
  null == this.$afterRender$ && (this.$afterRender$ = []);
  return $reagent$impl$batching$enqueue$$(this, this.$afterRender$, $f$jscomp$463$$);
};
$JSCompiler_prototypeAlias$$.flush_render = function() {
  var $temp__5757__auto__$jscomp$3$$ = this.$componentQueue$;
  if (null == $temp__5757__auto__$jscomp$3$$) {
    return null;
  }
  this.$componentQueue$ = null;
  a: {
    $temp__5757__auto__$jscomp$3$$.sort($reagent$impl$batching$compare_mount_order$$);
    for (var $n__4695__auto__$jscomp$inline_894$$ = $temp__5757__auto__$jscomp$3$$.length, $i$jscomp$inline_895$$ = 0;;) {
      if ($i$jscomp$inline_895$$ < $n__4695__auto__$jscomp$inline_894$$) {
        var $c_33516$jscomp$inline_896$$ = $temp__5757__auto__$jscomp$3$$[$i$jscomp$inline_895$$];
        !0 === $c_33516$jscomp$inline_896$$.cljsIsDirty && $c_33516$jscomp$inline_896$$.forceUpdate();
        $i$jscomp$inline_895$$ += 1;
      } else {
        break a;
      }
    }
  }
  return null;
};
var $reagent$impl$batching$render_queue$$ = new $reagent$impl$batching$RenderQueue$$;
function $reagent$impl$batching$queue_render$$($c$jscomp$159$$) {
  if ($cljs$core$truth_$$($c$jscomp$159$$.cljsIsDirty)) {
    return null;
  }
  $c$jscomp$159$$.cljsIsDirty = !0;
  return $reagent$impl$batching$render_queue$$.queue_render($c$jscomp$159$$);
}
;function $reagent$impl$protocols$get_id$$($JSCompiler_temp$jscomp$132_this$$jscomp$150$$) {
  if (null != $JSCompiler_temp$jscomp$132_this$$jscomp$150$$ && null != $JSCompiler_temp$jscomp$132_this$$jscomp$150$$.$reagent$impl$protocols$Compiler$get_id$arity$1$) {
    $JSCompiler_temp$jscomp$132_this$$jscomp$150$$ = $JSCompiler_temp$jscomp$132_this$$jscomp$150$$.id;
  } else {
    var $m__4508__auto__$jscomp$inline_900_m__4510__auto__$jscomp$inline_899$$ = $reagent$impl$protocols$get_id$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$132_this$$jscomp$150$$ ? null : $JSCompiler_temp$jscomp$132_this$$jscomp$150$$)];
    if (null != $m__4508__auto__$jscomp$inline_900_m__4510__auto__$jscomp$inline_899$$) {
      $JSCompiler_temp$jscomp$132_this$$jscomp$150$$ = $m__4508__auto__$jscomp$inline_900_m__4510__auto__$jscomp$inline_899$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_900_m__4510__auto__$jscomp$inline_899$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$132_this$$jscomp$150$$) : $m__4508__auto__$jscomp$inline_900_m__4510__auto__$jscomp$inline_899$$.call(null, $JSCompiler_temp$jscomp$132_this$$jscomp$150$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_900_m__4510__auto__$jscomp$inline_899$$ = $reagent$impl$protocols$get_id$$._, null != $m__4508__auto__$jscomp$inline_900_m__4510__auto__$jscomp$inline_899$$) {
        $JSCompiler_temp$jscomp$132_this$$jscomp$150$$ = $m__4508__auto__$jscomp$inline_900_m__4510__auto__$jscomp$inline_899$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_900_m__4510__auto__$jscomp$inline_899$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$132_this$$jscomp$150$$) : $m__4508__auto__$jscomp$inline_900_m__4510__auto__$jscomp$inline_899$$.call(null, $JSCompiler_temp$jscomp$132_this$$jscomp$150$$);
      } else {
        throw $cljs$core$missing_protocol$$("Compiler.get-id", $JSCompiler_temp$jscomp$132_this$$jscomp$150$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$132_this$$jscomp$150$$;
}
function $reagent$impl$protocols$as_element$$($JSCompiler_temp$jscomp$133_this$$jscomp$152$$, $x$jscomp$669$$) {
  if (null != $JSCompiler_temp$jscomp$133_this$$jscomp$152$$ && null != $JSCompiler_temp$jscomp$133_this$$jscomp$152$$.$reagent$impl$protocols$Compiler$as_element$arity$2$) {
    $JSCompiler_temp$jscomp$133_this$$jscomp$152$$ = $JSCompiler_temp$jscomp$133_this$$jscomp$152$$.$reagent$impl$protocols$Compiler$as_element$arity$2$($JSCompiler_temp$jscomp$133_this$$jscomp$152$$, $x$jscomp$669$$);
  } else {
    var $m__4508__auto__$jscomp$inline_905_m__4510__auto__$jscomp$inline_904$$ = $reagent$impl$protocols$as_element$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$133_this$$jscomp$152$$ ? null : $JSCompiler_temp$jscomp$133_this$$jscomp$152$$)];
    if (null != $m__4508__auto__$jscomp$inline_905_m__4510__auto__$jscomp$inline_904$$) {
      $JSCompiler_temp$jscomp$133_this$$jscomp$152$$ = $m__4508__auto__$jscomp$inline_905_m__4510__auto__$jscomp$inline_904$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$inline_905_m__4510__auto__$jscomp$inline_904$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$jscomp$133_this$$jscomp$152$$, $x$jscomp$669$$) : $m__4508__auto__$jscomp$inline_905_m__4510__auto__$jscomp$inline_904$$.call(null, $JSCompiler_temp$jscomp$133_this$$jscomp$152$$, $x$jscomp$669$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_905_m__4510__auto__$jscomp$inline_904$$ = $reagent$impl$protocols$as_element$$._, null != $m__4508__auto__$jscomp$inline_905_m__4510__auto__$jscomp$inline_904$$) {
        $JSCompiler_temp$jscomp$133_this$$jscomp$152$$ = $m__4508__auto__$jscomp$inline_905_m__4510__auto__$jscomp$inline_904$$.$cljs$core$IFn$_invoke$arity$2$ ? $m__4508__auto__$jscomp$inline_905_m__4510__auto__$jscomp$inline_904$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$jscomp$133_this$$jscomp$152$$, $x$jscomp$669$$) : $m__4508__auto__$jscomp$inline_905_m__4510__auto__$jscomp$inline_904$$.call(null, $JSCompiler_temp$jscomp$133_this$$jscomp$152$$, $x$jscomp$669$$);
      } else {
        throw $cljs$core$missing_protocol$$("Compiler.as-element", $JSCompiler_temp$jscomp$133_this$$jscomp$152$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$133_this$$jscomp$152$$;
}
function $reagent$impl$protocols$make_element$$($JSCompiler_temp$jscomp$134_this$$jscomp$154$$, $argv$jscomp$1$$, $component$jscomp$1$$, $jsprops$jscomp$1$$, $first_child$jscomp$1$$) {
  if (null != $JSCompiler_temp$jscomp$134_this$$jscomp$154$$ && null != $JSCompiler_temp$jscomp$134_this$$jscomp$154$$.$reagent$impl$protocols$Compiler$make_element$arity$5$) {
    $JSCompiler_temp$jscomp$134_this$$jscomp$154$$ = $JSCompiler_temp$jscomp$134_this$$jscomp$154$$.$reagent$impl$protocols$Compiler$make_element$arity$5$($JSCompiler_temp$jscomp$134_this$$jscomp$154$$, $argv$jscomp$1$$, $component$jscomp$1$$, $jsprops$jscomp$1$$, $first_child$jscomp$1$$);
  } else {
    var $m__4508__auto__$jscomp$inline_913_m__4510__auto__$jscomp$inline_912$$ = $reagent$impl$protocols$make_element$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$134_this$$jscomp$154$$ ? null : $JSCompiler_temp$jscomp$134_this$$jscomp$154$$)];
    if (null != $m__4508__auto__$jscomp$inline_913_m__4510__auto__$jscomp$inline_912$$) {
      $JSCompiler_temp$jscomp$134_this$$jscomp$154$$ = $m__4508__auto__$jscomp$inline_913_m__4510__auto__$jscomp$inline_912$$.$cljs$core$IFn$_invoke$arity$5$ ? $m__4508__auto__$jscomp$inline_913_m__4510__auto__$jscomp$inline_912$$.$cljs$core$IFn$_invoke$arity$5$($JSCompiler_temp$jscomp$134_this$$jscomp$154$$, $argv$jscomp$1$$, $component$jscomp$1$$, $jsprops$jscomp$1$$, $first_child$jscomp$1$$) : $m__4508__auto__$jscomp$inline_913_m__4510__auto__$jscomp$inline_912$$.call(null, $JSCompiler_temp$jscomp$134_this$$jscomp$154$$, 
      $argv$jscomp$1$$, $component$jscomp$1$$, $jsprops$jscomp$1$$, $first_child$jscomp$1$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_913_m__4510__auto__$jscomp$inline_912$$ = $reagent$impl$protocols$make_element$$._, null != $m__4508__auto__$jscomp$inline_913_m__4510__auto__$jscomp$inline_912$$) {
        $JSCompiler_temp$jscomp$134_this$$jscomp$154$$ = $m__4508__auto__$jscomp$inline_913_m__4510__auto__$jscomp$inline_912$$.$cljs$core$IFn$_invoke$arity$5$ ? $m__4508__auto__$jscomp$inline_913_m__4510__auto__$jscomp$inline_912$$.$cljs$core$IFn$_invoke$arity$5$($JSCompiler_temp$jscomp$134_this$$jscomp$154$$, $argv$jscomp$1$$, $component$jscomp$1$$, $jsprops$jscomp$1$$, $first_child$jscomp$1$$) : $m__4508__auto__$jscomp$inline_913_m__4510__auto__$jscomp$inline_912$$.call(null, $JSCompiler_temp$jscomp$134_this$$jscomp$154$$, 
        $argv$jscomp$1$$, $component$jscomp$1$$, $jsprops$jscomp$1$$, $first_child$jscomp$1$$);
      } else {
        throw $cljs$core$missing_protocol$$("Compiler.make-element", $JSCompiler_temp$jscomp$134_this$$jscomp$154$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$134_this$$jscomp$154$$;
}
;var $clojure$set$difference$$ = function $clojure$set$difference$$($var_args$jscomp$373$$) {
  switch(arguments.length) {
    case 1:
      return $clojure$set$difference$$.$cljs$core$IFn$_invoke$arity$1$(arguments[0]);
    case 2:
      return $clojure$set$difference$$.$cljs$core$IFn$_invoke$arity$2$(arguments[0], arguments[1]);
    default:
      for (var $args_arr__4839__auto__$jscomp$73$$ = [], $len__4818__auto___33445$$ = arguments.length, $i__4819__auto___33446$$ = 0;;) {
        if ($i__4819__auto___33446$$ < $len__4818__auto___33445$$) {
          $args_arr__4839__auto__$jscomp$73$$.push(arguments[$i__4819__auto___33446$$]), $i__4819__auto___33446$$ += 1;
        } else {
          break;
        }
      }
      return $clojure$set$difference$$.$cljs$core$IFn$_invoke$arity$variadic$(arguments[0], arguments[1], new $cljs$core$IndexedSeq$$($args_arr__4839__auto__$jscomp$73$$.slice(2), 0, null));
  }
};
$clojure$set$difference$$.$cljs$core$IFn$_invoke$arity$1$ = function($s1$jscomp$11$$) {
  return $s1$jscomp$11$$;
};
$clojure$set$difference$$.$cljs$core$IFn$_invoke$arity$2$ = function($s1$jscomp$12$$, $s2$jscomp$9$$) {
  return $cljs$core$count$$($s1$jscomp$12$$) < $cljs$core$count$$($s2$jscomp$9$$) ? $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$(function($result$jscomp$82$$, $item$jscomp$3$$) {
    return $cljs$core$contains_QMARK_$$($s2$jscomp$9$$, $item$jscomp$3$$) ? $cljs$core$disj$$.$cljs$core$IFn$_invoke$arity$2$($result$jscomp$82$$, $item$jscomp$3$$) : $result$jscomp$82$$;
  }, $s1$jscomp$12$$, $s1$jscomp$12$$) : $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($cljs$core$disj$$, $s1$jscomp$12$$, $s2$jscomp$9$$);
};
$clojure$set$difference$$.$cljs$core$IFn$_invoke$arity$variadic$ = function($s1$jscomp$13$$, $s2$jscomp$10$$, $sets$jscomp$4$$) {
  return $cljs$core$reduce$cljs$0core$0IFn$0_invoke$0arity$03$$($clojure$set$difference$$, $s1$jscomp$13$$, $cljs$core$conj$$.$cljs$core$IFn$_invoke$arity$2$($sets$jscomp$4$$, $s2$jscomp$10$$));
};
$clojure$set$difference$$.$cljs$lang$applyTo$ = function($G__33356_seq33354$$) {
  var $G__33355$$ = $cljs$core$first$$($G__33356_seq33354$$), $seq33354__$1_seq33354__$2$$ = $cljs$core$next$$($G__33356_seq33354$$);
  $G__33356_seq33354$$ = $cljs$core$first$$($seq33354__$1_seq33354__$2$$);
  $seq33354__$1_seq33354__$2$$ = $cljs$core$next$$($seq33354__$1_seq33354__$2$$);
  return this.$cljs$core$IFn$_invoke$arity$variadic$($G__33355$$, $G__33356_seq33354$$, $seq33354__$1_seq33354__$2$$);
};
$clojure$set$difference$$.$cljs$lang$maxFixedArity$ = 2;
var $reagent$ratom$_STAR_ratom_context_STAR_$$;
function $reagent$ratom$deref_capture$$($c$jscomp$161_f$jscomp$467$$, $r$jscomp$39$$) {
  $r$jscomp$39$$.$captured$ = null;
  a: {
    var $JSCompiler_inline_result$jscomp$135__STAR_ratom_context_STAR__orig_val__33536$jscomp$inline_917_y$jscomp$inline_920$$ = $reagent$ratom$_STAR_ratom_context_STAR_$$;
    $reagent$ratom$_STAR_ratom_context_STAR_$$ = $r$jscomp$39$$;
    try {
      var $res$jscomp$12$$ = $c$jscomp$161_f$jscomp$467$$.$cljs$core$IFn$_invoke$arity$0$ ? $c$jscomp$161_f$jscomp$467$$.$cljs$core$IFn$_invoke$arity$0$() : $c$jscomp$161_f$jscomp$467$$.call(null);
      break a;
    } finally {
      $reagent$ratom$_STAR_ratom_context_STAR_$$ = $JSCompiler_inline_result$jscomp$135__STAR_ratom_context_STAR__orig_val__33536$jscomp$inline_917_y$jscomp$inline_920$$;
    }
    $res$jscomp$12$$ = void 0;
  }
  $c$jscomp$161_f$jscomp$467$$ = $r$jscomp$39$$.$captured$;
  $r$jscomp$39$$.$dirty_QMARK_$ = !1;
  a: {
    $JSCompiler_inline_result$jscomp$135__STAR_ratom_context_STAR__orig_val__33536$jscomp$inline_917_y$jscomp$inline_920$$ = $r$jscomp$39$$.$watching$;
    var $len$jscomp$inline_921$$ = null == $c$jscomp$161_f$jscomp$467$$ ? 0 : $c$jscomp$161_f$jscomp$467$$.length, $and__4210__auto__$jscomp$inline_922_i$jscomp$inline_923$$ = $len$jscomp$inline_921$$ === (null == $JSCompiler_inline_result$jscomp$135__STAR_ratom_context_STAR__orig_val__33536$jscomp$inline_917_y$jscomp$inline_920$$ ? 0 : $JSCompiler_inline_result$jscomp$135__STAR_ratom_context_STAR__orig_val__33536$jscomp$inline_917_y$jscomp$inline_920$$.length);
    if ($and__4210__auto__$jscomp$inline_922_i$jscomp$inline_923$$) {
      for ($and__4210__auto__$jscomp$inline_922_i$jscomp$inline_923$$ = 0;;) {
        var $or__4212__auto__$jscomp$inline_924$$ = $and__4210__auto__$jscomp$inline_922_i$jscomp$inline_923$$ === $len$jscomp$inline_921$$;
        if ($or__4212__auto__$jscomp$inline_924$$) {
          $JSCompiler_inline_result$jscomp$135__STAR_ratom_context_STAR__orig_val__33536$jscomp$inline_917_y$jscomp$inline_920$$ = $or__4212__auto__$jscomp$inline_924$$;
          break a;
        }
        if ($c$jscomp$161_f$jscomp$467$$[$and__4210__auto__$jscomp$inline_922_i$jscomp$inline_923$$] === $JSCompiler_inline_result$jscomp$135__STAR_ratom_context_STAR__orig_val__33536$jscomp$inline_917_y$jscomp$inline_920$$[$and__4210__auto__$jscomp$inline_922_i$jscomp$inline_923$$]) {
          $and__4210__auto__$jscomp$inline_922_i$jscomp$inline_923$$ += 1;
        } else {
          $JSCompiler_inline_result$jscomp$135__STAR_ratom_context_STAR__orig_val__33536$jscomp$inline_917_y$jscomp$inline_920$$ = !1;
          break a;
        }
      }
    } else {
      $JSCompiler_inline_result$jscomp$135__STAR_ratom_context_STAR__orig_val__33536$jscomp$inline_917_y$jscomp$inline_920$$ = $and__4210__auto__$jscomp$inline_922_i$jscomp$inline_923$$;
    }
  }
  $JSCompiler_inline_result$jscomp$135__STAR_ratom_context_STAR__orig_val__33536$jscomp$inline_917_y$jscomp$inline_920$$ || $r$jscomp$39$$._update_watching($c$jscomp$161_f$jscomp$467$$);
  return $res$jscomp$12$$;
}
function $reagent$ratom$notify_deref_watcher_BANG_$$($derefed$$) {
  var $temp__5757__auto__$jscomp$4$$ = $reagent$ratom$_STAR_ratom_context_STAR_$$;
  if (null != $temp__5757__auto__$jscomp$4$$) {
    var $c$jscomp$162$$ = $temp__5757__auto__$jscomp$4$$.$captured$;
    null == $c$jscomp$162$$ ? $temp__5757__auto__$jscomp$4$$.$captured$ = [$derefed$$] : $c$jscomp$162$$.push($derefed$$);
  }
}
function $reagent$ratom$add_w$$($this$$jscomp$155$$, $key$jscomp$175$$, $f$jscomp$468$$) {
  $this$$jscomp$155$$.$watches$ = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($this$$jscomp$155$$.$watches$, $key$jscomp$175$$, $f$jscomp$468$$);
  return $this$$jscomp$155$$.$watchesArr$ = null;
}
function $reagent$ratom$remove_w$$($this$$jscomp$156$$, $key$jscomp$176$$) {
  $this$$jscomp$156$$.$watches$ = $cljs$core$dissoc$$.$cljs$core$IFn$_invoke$arity$2$($this$$jscomp$156$$.$watches$, $key$jscomp$176$$);
  return $this$$jscomp$156$$.$watchesArr$ = null;
}
function $reagent$ratom$notify_w$$($this$$jscomp$157$$, $old$jscomp$3$$, $new$$jscomp$2$$) {
  var $a$jscomp$221_w$jscomp$15$$ = $this$$jscomp$157$$.$watchesArr$;
  $a$jscomp$221_w$jscomp$15$$ = null == $a$jscomp$221_w$jscomp$15$$ ? $this$$jscomp$157$$.$watchesArr$ = $cljs$core$reduce_kv$$(function($p1__33562_SHARP_$$, $p2__33563_SHARP_$$, $p3__33564_SHARP_$$) {
    $p1__33562_SHARP_$$.push($p2__33563_SHARP_$$);
    $p1__33562_SHARP_$$.push($p3__33564_SHARP_$$);
    return $p1__33562_SHARP_$$;
  }, [], $this$$jscomp$157$$.$watches$) : $a$jscomp$221_w$jscomp$15$$;
  for (var $len$jscomp$53$$ = $a$jscomp$221_w$jscomp$15$$.length, $i$jscomp$304$$ = 0;;) {
    if ($i$jscomp$304$$ < $len$jscomp$53$$) {
      var $k_33916$$ = $a$jscomp$221_w$jscomp$15$$[$i$jscomp$304$$], $f_33917$$ = $a$jscomp$221_w$jscomp$15$$[$i$jscomp$304$$ + 1];
      $f_33917$$.$cljs$core$IFn$_invoke$arity$4$ ? $f_33917$$.$cljs$core$IFn$_invoke$arity$4$($k_33916$$, $this$$jscomp$157$$, $old$jscomp$3$$, $new$$jscomp$2$$) : $f_33917$$.call(null, $k_33916$$, $this$$jscomp$157$$, $old$jscomp$3$$, $new$$jscomp$2$$);
      $i$jscomp$304$$ = 2 + $i$jscomp$304$$;
    } else {
      break;
    }
  }
}
function $reagent$ratom$pr_atom$$($writer$jscomp$61$$, $opts$jscomp$58$$, $_STAR_ratom_context_STAR__orig_val__33578$jscomp$inline_926_s$jscomp$158$$, $v$jscomp$111$$) {
  $cljs$core$_write$$($writer$jscomp$61$$, ["#object[reagent.ratom.", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($_STAR_ratom_context_STAR__orig_val__33578$jscomp$inline_926_s$jscomp$158$$), " "].join(""));
  a: {
    $_STAR_ratom_context_STAR__orig_val__33578$jscomp$inline_926_s$jscomp$158$$ = $reagent$ratom$_STAR_ratom_context_STAR_$$;
    $reagent$ratom$_STAR_ratom_context_STAR_$$ = null;
    try {
      var $JSCompiler_inline_result$jscomp$136$$ = $v$jscomp$111$$;
      break a;
    } finally {
      $reagent$ratom$_STAR_ratom_context_STAR_$$ = $_STAR_ratom_context_STAR__orig_val__33578$jscomp$inline_926_s$jscomp$158$$;
    }
    $JSCompiler_inline_result$jscomp$136$$ = void 0;
  }
  $cljs$core$pr_writer$$($JSCompiler_inline_result$jscomp$136$$, $writer$jscomp$61$$, $opts$jscomp$58$$);
  return $cljs$core$_write$$($writer$jscomp$61$$, "]");
}
var $reagent$ratom$rea_queue$$ = null;
function $reagent$ratom$flush_BANG_$$() {
  for (;;) {
    var $q$jscomp$33$$ = $reagent$ratom$rea_queue$$;
    if (null == $q$jscomp$33$$) {
      return null;
    }
    $reagent$ratom$rea_queue$$ = null;
    for (var $n__4695__auto___33926$$ = $q$jscomp$33$$.length, $i_33927$$ = 0;;) {
      if ($i_33927$$ < $n__4695__auto___33926$$) {
        $q$jscomp$33$$[$i_33927$$]._queued_run(), $i_33927$$ += 1;
      } else {
        break;
      }
    }
  }
}
$reagent$impl$batching$ratom_flush$$ = $reagent$ratom$flush_BANG_$$;
function $reagent$ratom$RAtom$$($state$jscomp$16$$, $meta$jscomp$65$$, $validator$jscomp$3$$, $watches$jscomp$2$$) {
  this.state = $state$jscomp$16$$;
  this.$meta$ = $meta$jscomp$65$$;
  this.$validator$ = $validator$jscomp$3$$;
  this.$watches$ = $watches$jscomp$2$$;
  this.$cljs$lang$protocol_mask$partition0$$ = 2154201088;
  this.$cljs$lang$protocol_mask$partition1$$ = 114690;
}
$JSCompiler_prototypeAlias$$ = $reagent$ratom$RAtom$$.prototype;
$JSCompiler_prototypeAlias$$.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($a$jscomp$223$$, $w$jscomp$16$$, $opts$jscomp$59$$) {
  return $reagent$ratom$pr_atom$$($w$jscomp$16$$, $opts$jscomp$59$$, "RAtom", new $cljs$core$PersistentArrayMap$$(null, 1, [$cljs$cst$keyword$val$$, this.$cljs$core$IDeref$_deref$arity$1$(null)], null));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IMeta$_meta$arity$1$ = function() {
  return this.$meta$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  return $goog$getUid$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($o$jscomp$159$$, $other$jscomp$121$$) {
  return this === $other$jscomp$121$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReset$_reset_BANG_$arity$2$ = function($a$jscomp$224_old_value$jscomp$2$$, $new_value$jscomp$6$$) {
  $a$jscomp$224_old_value$jscomp$2$$ = this.state;
  this.state = $new_value$jscomp$6$$;
  null != this.$watches$ && $reagent$ratom$notify_w$$(this, $a$jscomp$224_old_value$jscomp$2$$, $new_value$jscomp$6$$);
  return $new_value$jscomp$6$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISwap$_swap_BANG_$arity$2$ = function($a$jscomp$225$$, $f$jscomp$469$$) {
  return this.$cljs$core$IReset$_reset_BANG_$arity$2$(null, $f$jscomp$469$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$469$$.$cljs$core$IFn$_invoke$arity$1$(this.state) : $f$jscomp$469$$.call(null, this.state));
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISwap$_swap_BANG_$arity$3$ = function($a$jscomp$226$$, $f$jscomp$470$$, $x$jscomp$675$$) {
  return this.$cljs$core$IReset$_reset_BANG_$arity$2$(null, $f$jscomp$470$$.$cljs$core$IFn$_invoke$arity$2$ ? $f$jscomp$470$$.$cljs$core$IFn$_invoke$arity$2$(this.state, $x$jscomp$675$$) : $f$jscomp$470$$.call(null, this.state, $x$jscomp$675$$));
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISwap$_swap_BANG_$arity$4$ = function($a$jscomp$227$$, $f$jscomp$471$$, $x$jscomp$676$$, $y$jscomp$271$$) {
  return this.$cljs$core$IReset$_reset_BANG_$arity$2$(null, $f$jscomp$471$$.$cljs$core$IFn$_invoke$arity$3$ ? $f$jscomp$471$$.$cljs$core$IFn$_invoke$arity$3$(this.state, $x$jscomp$676$$, $y$jscomp$271$$) : $f$jscomp$471$$.call(null, this.state, $x$jscomp$676$$, $y$jscomp$271$$));
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISwap$_swap_BANG_$arity$5$ = function($a$jscomp$228$$, $f$jscomp$472$$, $x$jscomp$677$$, $y$jscomp$272$$, $more$jscomp$36$$) {
  return this.$cljs$core$IReset$_reset_BANG_$arity$2$(null, $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$05$$($f$jscomp$472$$, this.state, $x$jscomp$677$$, $y$jscomp$272$$, $more$jscomp$36$$));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWatchable$_notify_watches$arity$3$ = function($old$jscomp$4$$, $new$$jscomp$3$$) {
  $reagent$ratom$notify_w$$(this, $old$jscomp$4$$, $new$$jscomp$3$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWatchable$_add_watch$arity$3$ = function($this$$jscomp$160$$, $key$jscomp$177$$, $f$jscomp$473$$) {
  return $reagent$ratom$add_w$$(this, $key$jscomp$177$$, $f$jscomp$473$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWatchable$_remove_watch$arity$2$ = function($this$$jscomp$161$$, $key$jscomp$178$$) {
  return $reagent$ratom$remove_w$$(this, $key$jscomp$178$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($_$jscomp$256$$, $new_meta$jscomp$32$$) {
  return new $reagent$ratom$RAtom$$(this.state, $new_meta$jscomp$32$$, this.$validator$, this.$watches$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IDeref$_deref$arity$1$ = function() {
  $reagent$ratom$notify_deref_watcher_BANG_$$(this);
  return this.state;
};
function $reagent$ratom$dispose_BANG_$$($JSCompiler_temp$jscomp$138_this$$jscomp$172$$) {
  if (null != $JSCompiler_temp$jscomp$138_this$$jscomp$172$$ && null != $JSCompiler_temp$jscomp$138_this$$jscomp$172$$.$reagent$ratom$IDisposable$dispose_BANG_$arity$1$) {
    $JSCompiler_temp$jscomp$138_this$$jscomp$172$$ = $JSCompiler_temp$jscomp$138_this$$jscomp$172$$.$reagent$ratom$IDisposable$dispose_BANG_$arity$1$($JSCompiler_temp$jscomp$138_this$$jscomp$172$$);
  } else {
    var $m__4508__auto__$jscomp$inline_930_m__4510__auto__$jscomp$inline_929$$ = $reagent$ratom$dispose_BANG_$$[$goog$typeOf$$(null == $JSCompiler_temp$jscomp$138_this$$jscomp$172$$ ? null : $JSCompiler_temp$jscomp$138_this$$jscomp$172$$)];
    if (null != $m__4508__auto__$jscomp$inline_930_m__4510__auto__$jscomp$inline_929$$) {
      $JSCompiler_temp$jscomp$138_this$$jscomp$172$$ = $m__4508__auto__$jscomp$inline_930_m__4510__auto__$jscomp$inline_929$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_930_m__4510__auto__$jscomp$inline_929$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$138_this$$jscomp$172$$) : $m__4508__auto__$jscomp$inline_930_m__4510__auto__$jscomp$inline_929$$.call(null, $JSCompiler_temp$jscomp$138_this$$jscomp$172$$);
    } else {
      if ($m__4508__auto__$jscomp$inline_930_m__4510__auto__$jscomp$inline_929$$ = $reagent$ratom$dispose_BANG_$$._, null != $m__4508__auto__$jscomp$inline_930_m__4510__auto__$jscomp$inline_929$$) {
        $JSCompiler_temp$jscomp$138_this$$jscomp$172$$ = $m__4508__auto__$jscomp$inline_930_m__4510__auto__$jscomp$inline_929$$.$cljs$core$IFn$_invoke$arity$1$ ? $m__4508__auto__$jscomp$inline_930_m__4510__auto__$jscomp$inline_929$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$138_this$$jscomp$172$$) : $m__4508__auto__$jscomp$inline_930_m__4510__auto__$jscomp$inline_929$$.call(null, $JSCompiler_temp$jscomp$138_this$$jscomp$172$$);
      } else {
        throw $cljs$core$missing_protocol$$("IDisposable.dispose!", $JSCompiler_temp$jscomp$138_this$$jscomp$172$$);
      }
    }
  }
  return $JSCompiler_temp$jscomp$138_this$$jscomp$172$$;
}
function $reagent$ratom$handle_reaction_change$$($this$$jscomp$177$$, $sender$jscomp$1$$, $old$jscomp$6$$, $new$$jscomp$5$$) {
  return $this$$jscomp$177$$._handle_change($sender$jscomp$1$$, $old$jscomp$6$$, $new$$jscomp$5$$);
}
function $reagent$ratom$Reaction$$($f$jscomp$490$$) {
  this.f = $f$jscomp$490$$;
  this.state = null;
  this.$dirty_QMARK_$ = !0;
  this.$nocache_QMARK_$ = !1;
  this.$caught$ = this.$auto_run$ = this.$watches$ = this.$watching$ = null;
  this.$cljs$lang$protocol_mask$partition0$$ = 2153807872;
  this.$cljs$lang$protocol_mask$partition1$$ = 114690;
}
$JSCompiler_prototypeAlias$$ = $reagent$ratom$Reaction$$.prototype;
$JSCompiler_prototypeAlias$$._peek_at = function() {
  var $_STAR_ratom_context_STAR__orig_val__33763$$ = $reagent$ratom$_STAR_ratom_context_STAR_$$;
  $reagent$ratom$_STAR_ratom_context_STAR_$$ = null;
  try {
    return this.$cljs$core$IDeref$_deref$arity$1$(null);
  } finally {
    $reagent$ratom$_STAR_ratom_context_STAR_$$ = $_STAR_ratom_context_STAR__orig_val__33763$$;
  }
};
$JSCompiler_prototypeAlias$$._handle_change = function($sender$jscomp$2$$, $oldval$jscomp$4$$, $newval$jscomp$5$$) {
  return $oldval$jscomp$4$$ === $newval$jscomp$5$$ || this.$dirty_QMARK_$ ? null : null == this.$auto_run$ ? (this.$dirty_QMARK_$ = !0, null == $reagent$ratom$rea_queue$$ && ($reagent$ratom$rea_queue$$ = [], !1 === $reagent$impl$batching$render_queue$$.$scheduled_QMARK_$ && $reagent$impl$batching$render_queue$$.schedule()), $reagent$ratom$rea_queue$$.push(this)) : !0 === this.$auto_run$ ? this._run(!1) : this.$auto_run$.$cljs$core$IFn$_invoke$arity$1$ ? this.$auto_run$.$cljs$core$IFn$_invoke$arity$1$(this) : 
  this.$auto_run$.call(null, this);
};
$JSCompiler_prototypeAlias$$._update_watching = function($G__33997_c__4638__auto___33981_derefed$jscomp$1_seq__33771_33970_temp__5753__auto___33979_w$jscomp$19_w_33986$$) {
  var $c__4638__auto__$jscomp$10_new$$jscomp$6_seq__33806_temp__5753__auto__$jscomp$38$$ = $cljs$core$set$$($G__33997_c__4638__auto___33981_derefed$jscomp$1_seq__33771_33970_temp__5753__auto___33979_w$jscomp$19_w_33986$$), $G__33996_chunk__33807_old$jscomp$7_seq__33806__$1$$ = $cljs$core$set$$(this.$watching$);
  this.$watching$ = $G__33997_c__4638__auto___33981_derefed$jscomp$1_seq__33771_33970_temp__5753__auto___33979_w$jscomp$19_w_33986$$;
  $G__33997_c__4638__auto___33981_derefed$jscomp$1_seq__33771_33970_temp__5753__auto___33979_w$jscomp$19_w_33986$$ = $cljs$core$seq$$($clojure$set$difference$$.$cljs$core$IFn$_invoke$arity$2$($c__4638__auto__$jscomp$10_new$$jscomp$6_seq__33806_temp__5753__auto__$jscomp$38$$, $G__33996_chunk__33807_old$jscomp$7_seq__33806__$1$$));
  for (var $G__33983_G__33995_chunk__33772_33971_count__33808_seq__33771_33980__$1$$ = null, $G__33984_count__33773_33972_i__33809$$ = 0, $G__33982_i__33774_33973$$ = 0;;) {
    if ($G__33982_i__33774_33973$$ < $G__33984_count__33773_33972_i__33809$$) {
      var $w_33974$$ = $G__33983_G__33995_chunk__33772_33971_count__33808_seq__33771_33980__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__33982_i__33774_33973$$);
      $cljs$core$_add_watch$$($w_33974$$, this);
      $G__33982_i__33774_33973$$ += 1;
    } else {
      if ($G__33997_c__4638__auto___33981_derefed$jscomp$1_seq__33771_33970_temp__5753__auto___33979_w$jscomp$19_w_33986$$ = $cljs$core$seq$$($G__33997_c__4638__auto___33981_derefed$jscomp$1_seq__33771_33970_temp__5753__auto___33979_w$jscomp$19_w_33986$$)) {
        $G__33983_G__33995_chunk__33772_33971_count__33808_seq__33771_33980__$1$$ = $G__33997_c__4638__auto___33981_derefed$jscomp$1_seq__33771_33970_temp__5753__auto___33979_w$jscomp$19_w_33986$$, $cljs$core$chunked_seq_QMARK_$$($G__33983_G__33995_chunk__33772_33971_count__33808_seq__33771_33980__$1$$) ? ($G__33997_c__4638__auto___33981_derefed$jscomp$1_seq__33771_33970_temp__5753__auto___33979_w$jscomp$19_w_33986$$ = $cljs$core$_chunked_first$$($G__33983_G__33995_chunk__33772_33971_count__33808_seq__33771_33980__$1$$), 
        $G__33982_i__33774_33973$$ = $cljs$core$_chunked_rest$$($G__33983_G__33995_chunk__33772_33971_count__33808_seq__33771_33980__$1$$), $G__33983_G__33995_chunk__33772_33971_count__33808_seq__33771_33980__$1$$ = $G__33997_c__4638__auto___33981_derefed$jscomp$1_seq__33771_33970_temp__5753__auto___33979_w$jscomp$19_w_33986$$, $G__33984_count__33773_33972_i__33809$$ = $cljs$core$count$$($G__33997_c__4638__auto___33981_derefed$jscomp$1_seq__33771_33970_temp__5753__auto___33979_w$jscomp$19_w_33986$$), 
        $G__33997_c__4638__auto___33981_derefed$jscomp$1_seq__33771_33970_temp__5753__auto___33979_w$jscomp$19_w_33986$$ = $G__33982_i__33774_33973$$) : ($G__33997_c__4638__auto___33981_derefed$jscomp$1_seq__33771_33970_temp__5753__auto___33979_w$jscomp$19_w_33986$$ = $cljs$core$first$$($G__33983_G__33995_chunk__33772_33971_count__33808_seq__33771_33980__$1$$), $cljs$core$_add_watch$$($G__33997_c__4638__auto___33981_derefed$jscomp$1_seq__33771_33970_temp__5753__auto___33979_w$jscomp$19_w_33986$$, 
        this), $G__33997_c__4638__auto___33981_derefed$jscomp$1_seq__33771_33970_temp__5753__auto___33979_w$jscomp$19_w_33986$$ = $cljs$core$next$$($G__33983_G__33995_chunk__33772_33971_count__33808_seq__33771_33980__$1$$), $G__33983_G__33995_chunk__33772_33971_count__33808_seq__33771_33980__$1$$ = null, $G__33984_count__33773_33972_i__33809$$ = 0), $G__33982_i__33774_33973$$ = 0;
      } else {
        break;
      }
    }
  }
  $c__4638__auto__$jscomp$10_new$$jscomp$6_seq__33806_temp__5753__auto__$jscomp$38$$ = $cljs$core$seq$$($clojure$set$difference$$.$cljs$core$IFn$_invoke$arity$2$($G__33996_chunk__33807_old$jscomp$7_seq__33806__$1$$, $c__4638__auto__$jscomp$10_new$$jscomp$6_seq__33806_temp__5753__auto__$jscomp$38$$));
  $G__33996_chunk__33807_old$jscomp$7_seq__33806__$1$$ = null;
  for ($G__33984_count__33773_33972_i__33809$$ = $G__33983_G__33995_chunk__33772_33971_count__33808_seq__33771_33980__$1$$ = 0;;) {
    if ($G__33984_count__33773_33972_i__33809$$ < $G__33983_G__33995_chunk__33772_33971_count__33808_seq__33771_33980__$1$$) {
      $G__33997_c__4638__auto___33981_derefed$jscomp$1_seq__33771_33970_temp__5753__auto___33979_w$jscomp$19_w_33986$$ = $G__33996_chunk__33807_old$jscomp$7_seq__33806__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__33984_count__33773_33972_i__33809$$), $cljs$core$_remove_watch$$($G__33997_c__4638__auto___33981_derefed$jscomp$1_seq__33771_33970_temp__5753__auto___33979_w$jscomp$19_w_33986$$, this), $G__33984_count__33773_33972_i__33809$$ += 1;
    } else {
      if ($c__4638__auto__$jscomp$10_new$$jscomp$6_seq__33806_temp__5753__auto__$jscomp$38$$ = $cljs$core$seq$$($c__4638__auto__$jscomp$10_new$$jscomp$6_seq__33806_temp__5753__auto__$jscomp$38$$)) {
        $G__33996_chunk__33807_old$jscomp$7_seq__33806__$1$$ = $c__4638__auto__$jscomp$10_new$$jscomp$6_seq__33806_temp__5753__auto__$jscomp$38$$, $cljs$core$chunked_seq_QMARK_$$($G__33996_chunk__33807_old$jscomp$7_seq__33806__$1$$) ? ($c__4638__auto__$jscomp$10_new$$jscomp$6_seq__33806_temp__5753__auto__$jscomp$38$$ = $cljs$core$_chunked_first$$($G__33996_chunk__33807_old$jscomp$7_seq__33806__$1$$), $G__33983_G__33995_chunk__33772_33971_count__33808_seq__33771_33980__$1$$ = $cljs$core$_chunked_rest$$($G__33996_chunk__33807_old$jscomp$7_seq__33806__$1$$), 
        $G__33996_chunk__33807_old$jscomp$7_seq__33806__$1$$ = $c__4638__auto__$jscomp$10_new$$jscomp$6_seq__33806_temp__5753__auto__$jscomp$38$$, $G__33997_c__4638__auto___33981_derefed$jscomp$1_seq__33771_33970_temp__5753__auto___33979_w$jscomp$19_w_33986$$ = $cljs$core$count$$($c__4638__auto__$jscomp$10_new$$jscomp$6_seq__33806_temp__5753__auto__$jscomp$38$$), $c__4638__auto__$jscomp$10_new$$jscomp$6_seq__33806_temp__5753__auto__$jscomp$38$$ = $G__33983_G__33995_chunk__33772_33971_count__33808_seq__33771_33980__$1$$, 
        $G__33983_G__33995_chunk__33772_33971_count__33808_seq__33771_33980__$1$$ = $G__33997_c__4638__auto___33981_derefed$jscomp$1_seq__33771_33970_temp__5753__auto___33979_w$jscomp$19_w_33986$$) : ($G__33997_c__4638__auto___33981_derefed$jscomp$1_seq__33771_33970_temp__5753__auto___33979_w$jscomp$19_w_33986$$ = $cljs$core$first$$($G__33996_chunk__33807_old$jscomp$7_seq__33806__$1$$), $cljs$core$_remove_watch$$($G__33997_c__4638__auto___33981_derefed$jscomp$1_seq__33771_33970_temp__5753__auto___33979_w$jscomp$19_w_33986$$, 
        this), $c__4638__auto__$jscomp$10_new$$jscomp$6_seq__33806_temp__5753__auto__$jscomp$38$$ = $cljs$core$next$$($G__33996_chunk__33807_old$jscomp$7_seq__33806__$1$$), $G__33996_chunk__33807_old$jscomp$7_seq__33806__$1$$ = null, $G__33983_G__33995_chunk__33772_33971_count__33808_seq__33771_33980__$1$$ = 0), $G__33984_count__33773_33972_i__33809$$ = 0;
      } else {
        return null;
      }
    }
  }
};
$JSCompiler_prototypeAlias$$._queued_run = function() {
  return this.$dirty_QMARK_$ && null != this.$watching$ ? this._run(!0) : null;
};
$JSCompiler_prototypeAlias$$._try_capture = function($e$jscomp$176_f__$1$jscomp$17$$) {
  try {
    return this.$caught$ = null, $reagent$ratom$deref_capture$$($e$jscomp$176_f__$1$jscomp$17$$, this);
  } catch ($e33812$$) {
    return this.$caught$ = this.state = $e$jscomp$176_f__$1$jscomp$17$$ = $e33812$$, this.$dirty_QMARK_$ = !1;
  }
};
$JSCompiler_prototypeAlias$$._run = function($check_res$jscomp$13$$) {
  var $oldstate$jscomp$3$$ = this.state;
  $check_res$jscomp$13$$ = $cljs$core$truth_$$($check_res$jscomp$13$$) ? this._try_capture(this.f) : $reagent$ratom$deref_capture$$(this.f, this);
  this.$nocache_QMARK_$ || (this.state = $check_res$jscomp$13$$, null == this.$watches$ || $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($oldstate$jscomp$3$$, $check_res$jscomp$13$$) || $reagent$ratom$notify_w$$(this, $oldstate$jscomp$3$$, $check_res$jscomp$13$$));
  return $check_res$jscomp$13$$;
};
$JSCompiler_prototypeAlias$$._set_opts = function($auto_run__$1_p__33813$$) {
  var $map__33815__$1_no_cache$$ = $cljs$core$__destructure_map$$($auto_run__$1_p__33813$$);
  $auto_run__$1_p__33813$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__33815__$1_no_cache$$, $cljs$cst$keyword$auto_DASH_run$$);
  var $on_set$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__33815__$1_no_cache$$, $cljs$cst$keyword$on_DASH_set$$), $on_dispose$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__33815__$1_no_cache$$, $cljs$cst$keyword$on_DASH_dispose$$);
  $map__33815__$1_no_cache$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__33815__$1_no_cache$$, $cljs$cst$keyword$no_DASH_cache$$);
  null != $auto_run__$1_p__33813$$ && (this.$auto_run$ = $auto_run__$1_p__33813$$);
  null != $on_set$$ && (this.$on_set$ = $on_set$$);
  null != $on_dispose$$ && (this.$on_dispose$ = $on_dispose$$);
  return null != $map__33815__$1_no_cache$$ ? this.$nocache_QMARK_$ = $map__33815__$1_no_cache$$ : null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IPrintWithWriter$_pr_writer$arity$3$ = function($a$jscomp$235$$, $w$jscomp$20$$, $opts$jscomp$62$$) {
  return $reagent$ratom$pr_atom$$($w$jscomp$20$$, $opts$jscomp$62$$, "Reaction", new $cljs$core$PersistentArrayMap$$(null, 1, [$cljs$cst$keyword$val$$, this.$cljs$core$IDeref$_deref$arity$1$(null)], null));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IHash$_hash$arity$1$ = function() {
  return $goog$getUid$$(this);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IEquiv$_equiv$arity$2$ = function($o$jscomp$161$$, $other$jscomp$124$$) {
  return this === $other$jscomp$124$$;
};
$JSCompiler_prototypeAlias$$.$reagent$ratom$IDisposable$dispose_BANG_$arity$1$ = function() {
  var $s$jscomp$159_temp__5757__auto__$jscomp$6$$ = this.state, $c__4638__auto___34019_n__4695__auto__$jscomp$2_seq__33823_34008_temp__5753__auto___34017_w_34024_wg$$ = this.$watching$;
  this.$auto_run$ = this.state = this.$watching$ = null;
  this.$dirty_QMARK_$ = !0;
  $c__4638__auto___34019_n__4695__auto__$jscomp$2_seq__33823_34008_temp__5753__auto___34017_w_34024_wg$$ = $cljs$core$seq$$($cljs$core$set$$($c__4638__auto___34019_n__4695__auto__$jscomp$2_seq__33823_34008_temp__5753__auto___34017_w_34024_wg$$));
  for (var $G__34021_chunk__33824_34009_i$jscomp$305_seq__33823_34018__$1$$ = null, $G__34022_count__33825_34010_fexpr__33829_34029$$ = 0, $G__34020_i__33826_34011$$ = 0;;) {
    if ($G__34020_i__33826_34011$$ < $G__34022_count__33825_34010_fexpr__33829_34029$$) {
      var $w_34012$$ = $G__34021_chunk__33824_34009_i$jscomp$305_seq__33823_34018__$1$$.$cljs$core$IIndexed$_nth$arity$2$(null, $G__34020_i__33826_34011$$);
      $cljs$core$_remove_watch$$($w_34012$$, this);
      $G__34020_i__33826_34011$$ += 1;
    } else {
      if ($c__4638__auto___34019_n__4695__auto__$jscomp$2_seq__33823_34008_temp__5753__auto___34017_w_34024_wg$$ = $cljs$core$seq$$($c__4638__auto___34019_n__4695__auto__$jscomp$2_seq__33823_34008_temp__5753__auto___34017_w_34024_wg$$)) {
        $G__34021_chunk__33824_34009_i$jscomp$305_seq__33823_34018__$1$$ = $c__4638__auto___34019_n__4695__auto__$jscomp$2_seq__33823_34008_temp__5753__auto___34017_w_34024_wg$$, $cljs$core$chunked_seq_QMARK_$$($G__34021_chunk__33824_34009_i$jscomp$305_seq__33823_34018__$1$$) ? ($c__4638__auto___34019_n__4695__auto__$jscomp$2_seq__33823_34008_temp__5753__auto___34017_w_34024_wg$$ = $cljs$core$_chunked_first$$($G__34021_chunk__33824_34009_i$jscomp$305_seq__33823_34018__$1$$), $G__34020_i__33826_34011$$ = 
        $cljs$core$_chunked_rest$$($G__34021_chunk__33824_34009_i$jscomp$305_seq__33823_34018__$1$$), $G__34021_chunk__33824_34009_i$jscomp$305_seq__33823_34018__$1$$ = $c__4638__auto___34019_n__4695__auto__$jscomp$2_seq__33823_34008_temp__5753__auto___34017_w_34024_wg$$, $G__34022_count__33825_34010_fexpr__33829_34029$$ = $cljs$core$count$$($c__4638__auto___34019_n__4695__auto__$jscomp$2_seq__33823_34008_temp__5753__auto___34017_w_34024_wg$$), $c__4638__auto___34019_n__4695__auto__$jscomp$2_seq__33823_34008_temp__5753__auto___34017_w_34024_wg$$ = 
        $G__34020_i__33826_34011$$) : ($c__4638__auto___34019_n__4695__auto__$jscomp$2_seq__33823_34008_temp__5753__auto___34017_w_34024_wg$$ = $cljs$core$first$$($G__34021_chunk__33824_34009_i$jscomp$305_seq__33823_34018__$1$$), $cljs$core$_remove_watch$$($c__4638__auto___34019_n__4695__auto__$jscomp$2_seq__33823_34008_temp__5753__auto___34017_w_34024_wg$$, this), $c__4638__auto___34019_n__4695__auto__$jscomp$2_seq__33823_34008_temp__5753__auto___34017_w_34024_wg$$ = $cljs$core$next$$($G__34021_chunk__33824_34009_i$jscomp$305_seq__33823_34018__$1$$), 
        $G__34021_chunk__33824_34009_i$jscomp$305_seq__33823_34018__$1$$ = null, $G__34022_count__33825_34010_fexpr__33829_34029$$ = 0), $G__34020_i__33826_34011$$ = 0;
      } else {
        break;
      }
    }
  }
  null != this.$on_dispose$ && this.$on_dispose$($s$jscomp$159_temp__5757__auto__$jscomp$6$$);
  $s$jscomp$159_temp__5757__auto__$jscomp$6$$ = this.$on_dispose_arr$;
  if (null == $s$jscomp$159_temp__5757__auto__$jscomp$6$$) {
    return null;
  }
  $c__4638__auto___34019_n__4695__auto__$jscomp$2_seq__33823_34008_temp__5753__auto___34017_w_34024_wg$$ = $s$jscomp$159_temp__5757__auto__$jscomp$6$$.length;
  for ($G__34021_chunk__33824_34009_i$jscomp$305_seq__33823_34018__$1$$ = 0;;) {
    if ($G__34021_chunk__33824_34009_i$jscomp$305_seq__33823_34018__$1$$ < $c__4638__auto___34019_n__4695__auto__$jscomp$2_seq__33823_34008_temp__5753__auto___34017_w_34024_wg$$) {
      $G__34022_count__33825_34010_fexpr__33829_34029$$ = $s$jscomp$159_temp__5757__auto__$jscomp$6$$[$G__34021_chunk__33824_34009_i$jscomp$305_seq__33823_34018__$1$$], $G__34022_count__33825_34010_fexpr__33829_34029$$.$cljs$core$IFn$_invoke$arity$1$ ? $G__34022_count__33825_34010_fexpr__33829_34029$$.$cljs$core$IFn$_invoke$arity$1$(this) : $G__34022_count__33825_34010_fexpr__33829_34029$$.call(null, this), $G__34021_chunk__33824_34009_i$jscomp$305_seq__33823_34018__$1$$ += 1;
    } else {
      return null;
    }
  }
};
$JSCompiler_prototypeAlias$$.$cljs$core$IReset$_reset_BANG_$arity$2$ = function($a$jscomp$238_oldval$jscomp$5$$, $newval$jscomp$6$$) {
  $a$jscomp$238_oldval$jscomp$5$$ = this.state;
  this.state = $newval$jscomp$6$$;
  this.$on_set$($a$jscomp$238_oldval$jscomp$5$$, $newval$jscomp$6$$);
  $reagent$ratom$notify_w$$(this, $a$jscomp$238_oldval$jscomp$5$$, $newval$jscomp$6$$);
  return $newval$jscomp$6$$;
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISwap$_swap_BANG_$arity$2$ = function($JSCompiler_temp_const$jscomp$139_a$jscomp$239$$, $JSCompiler_inline_result$jscomp$141_f__$1$jscomp$19$$) {
  $JSCompiler_temp_const$jscomp$139_a$jscomp$239$$ = this.$cljs$core$IReset$_reset_BANG_$arity$2$;
  var $G__33831$jscomp$inline_934$$ = this._peek_at();
  $JSCompiler_inline_result$jscomp$141_f__$1$jscomp$19$$ = $JSCompiler_inline_result$jscomp$141_f__$1$jscomp$19$$.$cljs$core$IFn$_invoke$arity$1$ ? $JSCompiler_inline_result$jscomp$141_f__$1$jscomp$19$$.$cljs$core$IFn$_invoke$arity$1$($G__33831$jscomp$inline_934$$) : $JSCompiler_inline_result$jscomp$141_f__$1$jscomp$19$$.call(null, $G__33831$jscomp$inline_934$$);
  return $JSCompiler_temp_const$jscomp$139_a$jscomp$239$$.call(this, null, $JSCompiler_inline_result$jscomp$141_f__$1$jscomp$19$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISwap$_swap_BANG_$arity$3$ = function($JSCompiler_temp_const$jscomp$142_a$jscomp$240$$, $JSCompiler_inline_result$jscomp$144_f__$1$jscomp$20$$, $x$jscomp$684$$) {
  $JSCompiler_temp_const$jscomp$142_a$jscomp$240$$ = this.$cljs$core$IReset$_reset_BANG_$arity$2$;
  var $G__33832$jscomp$inline_936$$ = this._peek_at();
  $JSCompiler_inline_result$jscomp$144_f__$1$jscomp$20$$ = $JSCompiler_inline_result$jscomp$144_f__$1$jscomp$20$$.$cljs$core$IFn$_invoke$arity$2$ ? $JSCompiler_inline_result$jscomp$144_f__$1$jscomp$20$$.$cljs$core$IFn$_invoke$arity$2$($G__33832$jscomp$inline_936$$, $x$jscomp$684$$) : $JSCompiler_inline_result$jscomp$144_f__$1$jscomp$20$$.call(null, $G__33832$jscomp$inline_936$$, $x$jscomp$684$$);
  return $JSCompiler_temp_const$jscomp$142_a$jscomp$240$$.call(this, null, $JSCompiler_inline_result$jscomp$144_f__$1$jscomp$20$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISwap$_swap_BANG_$arity$4$ = function($JSCompiler_temp_const$jscomp$145_a$jscomp$241$$, $JSCompiler_inline_result$jscomp$147_f__$1$jscomp$21$$, $x$jscomp$685$$, $y$jscomp$275$$) {
  $JSCompiler_temp_const$jscomp$145_a$jscomp$241$$ = this.$cljs$core$IReset$_reset_BANG_$arity$2$;
  var $G__33834$jscomp$inline_938$$ = this._peek_at();
  $JSCompiler_inline_result$jscomp$147_f__$1$jscomp$21$$ = $JSCompiler_inline_result$jscomp$147_f__$1$jscomp$21$$.$cljs$core$IFn$_invoke$arity$3$ ? $JSCompiler_inline_result$jscomp$147_f__$1$jscomp$21$$.$cljs$core$IFn$_invoke$arity$3$($G__33834$jscomp$inline_938$$, $x$jscomp$685$$, $y$jscomp$275$$) : $JSCompiler_inline_result$jscomp$147_f__$1$jscomp$21$$.call(null, $G__33834$jscomp$inline_938$$, $x$jscomp$685$$, $y$jscomp$275$$);
  return $JSCompiler_temp_const$jscomp$145_a$jscomp$241$$.call(this, null, $JSCompiler_inline_result$jscomp$147_f__$1$jscomp$21$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$ISwap$_swap_BANG_$arity$5$ = function($a$jscomp$242$$, $f__$1$jscomp$22$$, $x$jscomp$686$$, $y$jscomp$276$$, $more$jscomp$38$$) {
  return this.$cljs$core$IReset$_reset_BANG_$arity$2$(null, $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$05$$($f__$1$jscomp$22$$, this._peek_at(), $x$jscomp$686$$, $y$jscomp$276$$, $more$jscomp$38$$));
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWatchable$_notify_watches$arity$3$ = function($old$jscomp$8$$, $new$$jscomp$7$$) {
  $reagent$ratom$notify_w$$(this, $old$jscomp$8$$, $new$$jscomp$7$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWatchable$_add_watch$arity$3$ = function($this$$jscomp$190$$, $key$jscomp$182$$, $f__$1$jscomp$23$$) {
  return $reagent$ratom$add_w$$(this, $key$jscomp$182$$, $f__$1$jscomp$23$$);
};
$JSCompiler_prototypeAlias$$.$cljs$core$IWatchable$_remove_watch$arity$2$ = function($this$$jscomp$191_was_empty$$, $key$jscomp$183$$) {
  $this$$jscomp$191_was_empty$$ = $cljs$core$empty_QMARK_$$(this.$watches$);
  $reagent$ratom$remove_w$$(this, $key$jscomp$183$$);
  return !$this$$jscomp$191_was_empty$$ && $cljs$core$empty_QMARK_$$(this.$watches$) && null == this.$auto_run$ ? this.$reagent$ratom$IDisposable$dispose_BANG_$arity$1$(null) : null;
};
$JSCompiler_prototypeAlias$$.$cljs$core$IDeref$_deref$arity$1$ = function() {
  var $non_reactive_34037_oldstate_34038_temp__5757__auto___34035$$ = this.$caught$;
  if (null != $non_reactive_34037_oldstate_34038_temp__5757__auto___34035$$) {
    throw $non_reactive_34037_oldstate_34038_temp__5757__auto___34035$$;
  }
  ($non_reactive_34037_oldstate_34038_temp__5757__auto___34035$$ = null == $reagent$ratom$_STAR_ratom_context_STAR_$$) && $reagent$ratom$flush_BANG_$$();
  $non_reactive_34037_oldstate_34038_temp__5757__auto___34035$$ && null == this.$auto_run$ ? this.$dirty_QMARK_$ && ($non_reactive_34037_oldstate_34038_temp__5757__auto___34035$$ = this.state, this.state = this.f.$cljs$core$IFn$_invoke$arity$0$ ? this.f.$cljs$core$IFn$_invoke$arity$0$() : this.f.call(null), null == this.$watches$ || $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($non_reactive_34037_oldstate_34038_temp__5757__auto___34035$$, this.state) || $reagent$ratom$notify_w$$(this, $non_reactive_34037_oldstate_34038_temp__5757__auto___34035$$, 
  this.state)) : ($reagent$ratom$notify_deref_watcher_BANG_$$(this), this.$dirty_QMARK_$ && this._run(!1));
  return this.state;
};
function $reagent$ratom$make_reaction$$($var_args$jscomp$378$$) {
  for (var $args__4824__auto__$jscomp$34_auto_run$jscomp$inline_943$$ = [], $f$jscomp$inline_940_len__4818__auto___34039_reaction$jscomp$inline_946$$ = arguments.length, $i__4819__auto___34040_on_set$jscomp$inline_944$$ = 0;;) {
    if ($i__4819__auto___34040_on_set$jscomp$inline_944$$ < $f$jscomp$inline_940_len__4818__auto___34039_reaction$jscomp$inline_946$$) {
      $args__4824__auto__$jscomp$34_auto_run$jscomp$inline_943$$.push(arguments[$i__4819__auto___34040_on_set$jscomp$inline_944$$]), $i__4819__auto___34040_on_set$jscomp$inline_944$$ += 1;
    } else {
      break;
    }
  }
  $f$jscomp$inline_940_len__4818__auto___34039_reaction$jscomp$inline_946$$ = arguments[0];
  var $map__33845__$1$jscomp$inline_942_on_dispose$jscomp$inline_945$$ = $cljs$core$__destructure_map$$(1 < $args__4824__auto__$jscomp$34_auto_run$jscomp$inline_943$$.length ? new $cljs$core$IndexedSeq$$($args__4824__auto__$jscomp$34_auto_run$jscomp$inline_943$$.slice(1), 0, null) : null);
  $args__4824__auto__$jscomp$34_auto_run$jscomp$inline_943$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__33845__$1$jscomp$inline_942_on_dispose$jscomp$inline_945$$, $cljs$cst$keyword$auto_DASH_run$$);
  $i__4819__auto___34040_on_set$jscomp$inline_944$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__33845__$1$jscomp$inline_942_on_dispose$jscomp$inline_945$$, $cljs$cst$keyword$on_DASH_set$$);
  $map__33845__$1$jscomp$inline_942_on_dispose$jscomp$inline_945$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__33845__$1$jscomp$inline_942_on_dispose$jscomp$inline_945$$, $cljs$cst$keyword$on_DASH_dispose$$);
  $f$jscomp$inline_940_len__4818__auto___34039_reaction$jscomp$inline_946$$ = new $reagent$ratom$Reaction$$($f$jscomp$inline_940_len__4818__auto___34039_reaction$jscomp$inline_946$$);
  $f$jscomp$inline_940_len__4818__auto___34039_reaction$jscomp$inline_946$$._set_opts(new $cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$keyword$auto_DASH_run$$, $args__4824__auto__$jscomp$34_auto_run$jscomp$inline_943$$, $cljs$cst$keyword$on_DASH_set$$, $i__4819__auto___34040_on_set$jscomp$inline_944$$, $cljs$cst$keyword$on_DASH_dispose$$, $map__33845__$1$jscomp$inline_942_on_dispose$jscomp$inline_945$$], null));
  return $f$jscomp$inline_940_len__4818__auto___34039_reaction$jscomp$inline_946$$;
}
var $reagent$ratom$temp_reaction$$ = $reagent$ratom$make_reaction$$(null);
function $reagent$ratom$run_in_reaction$$($f$jscomp$493$$, $obj$jscomp$136$$) {
  var $opts$jscomp$63$$ = $reagent$impl$component$rat_opts$$, $r$jscomp$46$$ = $reagent$ratom$temp_reaction$$, $res$jscomp$14$$ = $reagent$ratom$deref_capture$$($f$jscomp$493$$, $r$jscomp$46$$);
  null != $r$jscomp$46$$.$watching$ && ($reagent$ratom$temp_reaction$$ = $reagent$ratom$make_reaction$$(null), $r$jscomp$46$$._set_opts($opts$jscomp$63$$), $r$jscomp$46$$.f = $f$jscomp$493$$, $r$jscomp$46$$.$auto_run$ = function() {
    return $reagent$impl$batching$queue_render$$.$cljs$core$IFn$_invoke$arity$1$ ? $reagent$impl$batching$queue_render$$.$cljs$core$IFn$_invoke$arity$1$($obj$jscomp$136$$) : $reagent$impl$batching$queue_render$$.call(null, $obj$jscomp$136$$);
  }, $obj$jscomp$136$$.cljsRatom = $r$jscomp$46$$);
  return $res$jscomp$14$$;
}
;var $reagent$impl$component$_STAR_current_component_STAR_$$;
function $reagent$impl$component$props_argv$$($JSCompiler_temp_const$jscomp$127_c$jscomp$164$$, $JSCompiler_temp$jscomp$126_p$jscomp$90$$) {
  var $JSCompiler_temp_const$jscomp$128_temp__5755__auto__$jscomp$6$$ = $JSCompiler_temp$jscomp$126_p$jscomp$90$$.argv;
  if (null == $JSCompiler_temp_const$jscomp$128_temp__5755__auto__$jscomp$6$$) {
    $JSCompiler_temp_const$jscomp$128_temp__5755__auto__$jscomp$6$$ = $cljs$core$PersistentVector$EMPTY_NODE$$;
    $JSCompiler_temp_const$jscomp$127_c$jscomp$164$$ = $JSCompiler_temp_const$jscomp$127_c$jscomp$164$$.constructor;
    a: {
      for (var $ks$jscomp$inline_953$$ = $goog$object$getKeys$$($JSCompiler_temp$jscomp$126_p$jscomp$90$$), $len$jscomp$inline_954$$ = $ks$jscomp$inline_953$$.length, $G__33517$jscomp$inline_958_m$jscomp$inline_955$$ = $cljs$core$PersistentArrayMap$EMPTY$$, $G__33518$jscomp$inline_959_i$jscomp$inline_956$$ = 0;;) {
        if ($G__33518$jscomp$inline_959_i$jscomp$inline_956$$ < $len$jscomp$inline_954$$) {
          var $k$jscomp$inline_957$$ = $ks$jscomp$inline_953$$[$G__33518$jscomp$inline_959_i$jscomp$inline_956$$];
          $G__33517$jscomp$inline_958_m$jscomp$inline_955$$ = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($G__33517$jscomp$inline_958_m$jscomp$inline_955$$, $cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($k$jscomp$inline_957$$), $goog$object$get$$($JSCompiler_temp$jscomp$126_p$jscomp$90$$, $k$jscomp$inline_957$$));
          $G__33518$jscomp$inline_959_i$jscomp$inline_956$$ += 1;
        } else {
          break a;
        }
      }
    }
    $JSCompiler_temp$jscomp$126_p$jscomp$90$$ = new $cljs$core$PersistentVector$$(null, 2, 5, $JSCompiler_temp_const$jscomp$128_temp__5755__auto__$jscomp$6$$, [$JSCompiler_temp_const$jscomp$127_c$jscomp$164$$, $G__33517$jscomp$inline_958_m$jscomp$inline_955$$], null);
  } else {
    $JSCompiler_temp$jscomp$126_p$jscomp$90$$ = $JSCompiler_temp_const$jscomp$128_temp__5755__auto__$jscomp$6$$;
  }
  return $JSCompiler_temp$jscomp$126_p$jscomp$90$$;
}
function $reagent$impl$component$reagent_class_QMARK_$$($G__33931__$1$jscomp$inline_961_c$jscomp$168$$) {
  var $JSCompiler_temp$jscomp$149$$;
  if ($JSCompiler_temp$jscomp$149$$ = $cljs$core$fn_QMARK_$$($G__33931__$1$jscomp$inline_961_c$jscomp$168$$)) {
    $G__33931__$1$jscomp$inline_961_c$jscomp$168$$ = null == $G__33931__$1$jscomp$inline_961_c$jscomp$168$$ ? null : $G__33931__$1$jscomp$inline_961_c$jscomp$168$$.prototype, $JSCompiler_temp$jscomp$149$$ = null != (null == $G__33931__$1$jscomp$inline_961_c$jscomp$168$$ ? null : $G__33931__$1$jscomp$inline_961_c$jscomp$168$$.$reagentRender$);
  }
  return $JSCompiler_temp$jscomp$149$$;
}
function $reagent$impl$component$wrap_render$$($c$jscomp$171$$, $compiler$$) {
  for (;;) {
    var $f$jscomp$500$$ = $c$jscomp$171$$.$reagentRender$, $res$jscomp$16$$ = !0 === $c$jscomp$171$$.$cljsLegacyRender$ ? $f$jscomp$500$$.call($c$jscomp$171$$, $c$jscomp$171$$) : function() {
      var $v$jscomp$118$$ = $reagent$impl$component$props_argv$$($c$jscomp$171$$, $c$jscomp$171$$.props);
      switch($cljs$core$count$$($v$jscomp$118$$)) {
        case 1:
          return $f$jscomp$500$$.call($c$jscomp$171$$);
        case 2:
          return $f$jscomp$500$$.call($c$jscomp$171$$, $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($v$jscomp$118$$, 1));
        case 3:
          return $f$jscomp$500$$.call($c$jscomp$171$$, $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($v$jscomp$118$$, 1), $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($v$jscomp$118$$, 2));
        case 4:
          return $f$jscomp$500$$.call($c$jscomp$171$$, $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($v$jscomp$118$$, 1), $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($v$jscomp$118$$, 2), $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($v$jscomp$118$$, 3));
        case 5:
          return $f$jscomp$500$$.call($c$jscomp$171$$, $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($v$jscomp$118$$, 1), $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($v$jscomp$118$$, 2), $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($v$jscomp$118$$, 3), $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$02$$($v$jscomp$118$$, 4));
        default:
          return $f$jscomp$500$$.apply($c$jscomp$171$$, $cljs$core$into_array$cljs$0core$0IFn$0_invoke$0arity$02$$($v$jscomp$118$$).slice(1));
      }
    }();
    if ($cljs$core$vector_QMARK_$$($res$jscomp$16$$)) {
      return $reagent$impl$protocols$as_element$$($compiler$$, $res$jscomp$16$$);
    }
    if ($cljs$core$ifn_QMARK_$$($res$jscomp$16$$)) {
      $c$jscomp$171$$.$reagentRender$ = $reagent$impl$component$reagent_class_QMARK_$$($res$jscomp$16$$) ? function($c$jscomp$172$$, $compiler$jscomp$1$$, $f$jscomp$501$$, $_$jscomp$263$$, $res$jscomp$17$$) {
        return function() {
          function $G__34124$$($var_args$jscomp$379$$) {
            var $G__34125__i_args$jscomp$142$$ = null;
            if (0 < arguments.length) {
              $G__34125__i_args$jscomp$142$$ = 0;
              for (var $G__34125__a$$ = Array(arguments.length - 0); $G__34125__i_args$jscomp$142$$ < $G__34125__a$$.length;) {
                $G__34125__a$$[$G__34125__i_args$jscomp$142$$] = arguments[$G__34125__i_args$jscomp$142$$ + 0], ++$G__34125__i_args$jscomp$142$$;
              }
              $G__34125__i_args$jscomp$142$$ = new $cljs$core$IndexedSeq$$($G__34125__a$$, 0, null);
            }
            return $G__34124__delegate$$.call(this, $G__34125__i_args$jscomp$142$$);
          }
          function $G__34124__delegate$$($args$jscomp$141$$) {
            return $reagent$impl$protocols$as_element$$($compiler$jscomp$1$$, $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$03$$($cljs$core$vector$$, $res$jscomp$17$$, $args$jscomp$141$$));
          }
          $G__34124$$.$cljs$lang$maxFixedArity$ = 0;
          $G__34124$$.$cljs$lang$applyTo$ = function($arglist__34127_args$jscomp$143$$) {
            $arglist__34127_args$jscomp$143$$ = $cljs$core$seq$$($arglist__34127_args$jscomp$143$$);
            return $G__34124__delegate$$($arglist__34127_args$jscomp$143$$);
          };
          $G__34124$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__34124__delegate$$;
          return $G__34124$$;
        }();
      }($c$jscomp$171$$, $compiler$$, $f$jscomp$500$$, null, $res$jscomp$16$$) : $res$jscomp$16$$;
    } else {
      return $res$jscomp$16$$;
    }
  }
}
function $reagent$impl$component$do_render$$($c$jscomp$174$$, $compiler$jscomp$2$$) {
  var $_STAR_current_component_STAR__orig_val__33957$$ = $reagent$impl$component$_STAR_current_component_STAR_$$;
  $reagent$impl$component$_STAR_current_component_STAR_$$ = $c$jscomp$174$$;
  try {
    return $reagent$impl$component$wrap_render$$($c$jscomp$174$$, $compiler$jscomp$2$$);
  } finally {
    $reagent$impl$component$_STAR_current_component_STAR_$$ = $_STAR_current_component_STAR__orig_val__33957$$;
  }
}
var $reagent$impl$component$rat_opts$$ = new $cljs$core$PersistentArrayMap$$(null, 1, [$cljs$cst$keyword$no_DASH_cache$$, !0], null);
function $reagent$impl$component$custom_wrapper$$($key$jscomp$187$$, $f$jscomp$502$$) {
  switch($key$jscomp$187$$ instanceof $cljs$core$Keyword$$ ? $key$jscomp$187$$.$fqn$ : null) {
    case "getDefaultProps":
      throw Error("getDefaultProps not supported");
    case "getDerivedStateFromProps":
      return function($JSCompiler_temp$jscomp$1058_p$jscomp$inline_1218_props$jscomp$2$$, $state$jscomp$24$$) {
        var $JSCompiler_temp_const$jscomp$154$$ = $f$jscomp$502$$.call, $temp__5755__auto__$jscomp$inline_965$$ = $JSCompiler_temp$jscomp$1058_p$jscomp$inline_1218_props$jscomp$2$$.argv;
        null != $temp__5755__auto__$jscomp$inline_965$$ && ($JSCompiler_temp$jscomp$1058_p$jscomp$inline_1218_props$jscomp$2$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($temp__5755__auto__$jscomp$inline_965$$, 1, null), $JSCompiler_temp$jscomp$1058_p$jscomp$inline_1218_props$jscomp$2$$ = $cljs$core$map_QMARK_$$($JSCompiler_temp$jscomp$1058_p$jscomp$inline_1218_props$jscomp$2$$) ? $JSCompiler_temp$jscomp$1058_p$jscomp$inline_1218_props$jscomp$2$$ : null);
        return $JSCompiler_temp_const$jscomp$154$$.call($f$jscomp$502$$, null, $JSCompiler_temp$jscomp$1058_p$jscomp$inline_1218_props$jscomp$2$$, $state$jscomp$24$$);
      };
    case "getInitialState":
      return function($c$jscomp$175$$) {
        var $JSCompiler_inline_result$jscomp$153_sa$jscomp$inline_968$$ = $c$jscomp$175$$.$cljsState$;
        $JSCompiler_inline_result$jscomp$153_sa$jscomp$inline_968$$ = null != $JSCompiler_inline_result$jscomp$153_sa$jscomp$inline_968$$ ? $JSCompiler_inline_result$jscomp$153_sa$jscomp$inline_968$$ : $c$jscomp$175$$.$cljsState$ = new $reagent$ratom$RAtom$$(null, null, null, null);
        return $cljs$core$reset_BANG_$$($JSCompiler_inline_result$jscomp$153_sa$jscomp$inline_968$$, $f$jscomp$502$$.call($c$jscomp$175$$, $c$jscomp$175$$));
      };
    case "getSnapshotBeforeUpdate":
      return function($oldprops$$, $oldstate$jscomp$4$$) {
        return $f$jscomp$502$$.call(this, this, $reagent$impl$component$props_argv$$(this, $oldprops$$), $oldstate$jscomp$4$$);
      };
    case "componentWillReceiveProps":
      return function($nextprops$$) {
        return $f$jscomp$502$$.call(this, this, $reagent$impl$component$props_argv$$(this, $nextprops$$));
      };
    case "UNSAFE_componentWillReceiveProps":
      return function($nextprops$jscomp$1$$) {
        return $f$jscomp$502$$.call(this, this, $reagent$impl$component$props_argv$$(this, $nextprops$jscomp$1$$));
      };
    case "shouldComponentUpdate":
      return function($nextprops$jscomp$2$$) {
        if ($cljs$core$truth_$$(!1)) {
          return !1;
        }
        var $old_argv$$ = this.props.argv, $new_argv$$ = $nextprops$jscomp$2$$.argv, $noargv$$ = null == $old_argv$$ || null == $new_argv$$;
        if (null == $f$jscomp$502$$) {
          if ($noargv$$) {
            return $noargv$$;
          }
          try {
            return !$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($old_argv$$, $new_argv$$);
          } catch ($e33969$$) {
            return !1;
          }
        } else {
          return $noargv$$ ? $f$jscomp$502$$.call(this, this, $reagent$impl$component$props_argv$$(this, this.props), $reagent$impl$component$props_argv$$(this, $nextprops$jscomp$2$$)) : $f$jscomp$502$$.call(this, this, $old_argv$$, $new_argv$$);
        }
      };
    case "componentWillUpdate":
      return function($nextprops$jscomp$3$$, $nextstate$jscomp$1$$) {
        return $f$jscomp$502$$.call(this, this, $reagent$impl$component$props_argv$$(this, $nextprops$jscomp$3$$), $nextstate$jscomp$1$$);
      };
    case "UNSAFE_componentWillUpdate":
      return function($nextprops$jscomp$4$$, $nextstate$jscomp$2$$) {
        return $f$jscomp$502$$.call(this, this, $reagent$impl$component$props_argv$$(this, $nextprops$jscomp$4$$), $nextstate$jscomp$2$$);
      };
    case "componentDidUpdate":
      return function($oldprops$jscomp$1$$, $oldstate$jscomp$5$$, $snapshot$$) {
        return $f$jscomp$502$$.call(this, this, $reagent$impl$component$props_argv$$(this, $oldprops$jscomp$1$$), $oldstate$jscomp$5$$, $snapshot$$);
      };
    case "componentWillMount":
      return function() {
        return $f$jscomp$502$$.call(this, this);
      };
    case "UNSAFE_componentWillMount":
      return function() {
        return $f$jscomp$502$$.call(this, this);
      };
    case "componentDidMount":
      return function() {
        return $f$jscomp$502$$.call(this, this);
      };
    case "componentWillUnmount":
      return function() {
        var $G__34003_34150$$ = $goog$object$get$$(this, "cljsRatom");
        null != $G__34003_34150$$ && $reagent$ratom$dispose_BANG_$$($G__34003_34150$$);
        this.cljsIsDirty = !1;
        return null == $f$jscomp$502$$ ? null : $f$jscomp$502$$.call(this, this);
      };
    case "componentDidCatch":
      return function($error$jscomp$3$$, $info$$) {
        return $f$jscomp$502$$.call(this, this, $error$jscomp$3$$, $info$$);
      };
    default:
      return null;
  }
}
var $reagent$impl$component$obligatory$$ = new $cljs$core$PersistentArrayMap$$(null, 2, [$cljs$cst$keyword$shouldComponentUpdate$$, null, $cljs$cst$keyword$componentWillUnmount$$, null], null), $reagent$impl$component$dash_to_method_name$$ = function($f$jscomp$455$$) {
  var $mem$jscomp$1$$ = new $cljs$core$Atom$$($cljs$core$PersistentArrayMap$EMPTY$$);
  return function($arg$jscomp$11$$) {
    var $ret$jscomp$55_v$jscomp$107$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($cljs$core$_deref$$($mem$jscomp$1$$), $arg$jscomp$11$$);
    if (null != $ret$jscomp$55_v$jscomp$107$$) {
      return $ret$jscomp$55_v$jscomp$107$$;
    }
    $ret$jscomp$55_v$jscomp$107$$ = $f$jscomp$455$$.$cljs$core$IFn$_invoke$arity$1$ ? $f$jscomp$455$$.$cljs$core$IFn$_invoke$arity$1$($arg$jscomp$11$$) : $f$jscomp$455$$.call(null, $arg$jscomp$11$$);
    $cljs$core$swap_BANG_$$.$cljs$core$IFn$_invoke$arity$4$($mem$jscomp$1$$, $cljs$core$assoc$$, $arg$jscomp$11$$, $ret$jscomp$55_v$jscomp$107$$);
    return $ret$jscomp$55_v$jscomp$107$$;
  };
}(function($dashed$jscomp$1_first__33303_name_str$jscomp$1_name_str__$1_vec__33301$$) {
  if ("string" === typeof $dashed$jscomp$1_first__33303_name_str$jscomp$1_name_str__$1_vec__33301$$) {
    return $dashed$jscomp$1_first__33303_name_str$jscomp$1_name_str__$1_vec__33301$$;
  }
  $dashed$jscomp$1_first__33303_name_str$jscomp$1_name_str__$1_vec__33301$$ = $cljs$core$name$$($dashed$jscomp$1_first__33303_name_str$jscomp$1_name_str__$1_vec__33301$$);
  $dashed$jscomp$1_first__33303_name_str$jscomp$1_name_str__$1_vec__33301$$ = $clojure$string$replace$$($dashed$jscomp$1_first__33303_name_str$jscomp$1_name_str__$1_vec__33301$$, /(unsafe|UNSAFE)[-_]/, "UNSAFE_");
  $dashed$jscomp$1_first__33303_name_str$jscomp$1_name_str__$1_vec__33301$$ = $clojure$string$split$cljs$0core$0IFn$0_invoke$0arity$03$$($dashed$jscomp$1_first__33303_name_str$jscomp$1_name_str__$1_vec__33301$$);
  var $parts$jscomp$15_seq__33302$$ = $cljs$core$seq$$($dashed$jscomp$1_first__33303_name_str$jscomp$1_name_str__$1_vec__33301$$);
  $dashed$jscomp$1_first__33303_name_str$jscomp$1_name_str__$1_vec__33301$$ = $cljs$core$first$$($parts$jscomp$15_seq__33302$$);
  $parts$jscomp$15_seq__33302$$ = $cljs$core$next$$($parts$jscomp$15_seq__33302$$);
  return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$03$$($cljs$core$str$$, $dashed$jscomp$1_first__33303_name_str$jscomp$1_name_str__$1_vec__33301$$, $cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$($reagent$impl$util$capitalize$$, $parts$jscomp$15_seq__33302$$));
});
function $reagent$impl$component$camelify_map_keys$$($fun_map$$) {
  return $cljs$core$reduce_kv$$(function($m$jscomp$90$$, $k$jscomp$260$$, $v$jscomp$119$$) {
    return $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($m$jscomp$90$$, $cljs$core$keyword$$.$cljs$core$IFn$_invoke$arity$1$($reagent$impl$component$dash_to_method_name$$($k$jscomp$260$$)), $v$jscomp$119$$);
  }, $cljs$core$PersistentArrayMap$EMPTY$$, $fun_map$$);
}
function $reagent$impl$component$wrap_funs$$($fmap$$, $compiler$jscomp$3$$) {
  var $render_fun$$ = function() {
    var $or__4212__auto__$jscomp$52$$ = $cljs$cst$keyword$reagentRender$$.$cljs$core$IFn$_invoke$arity$1$($fmap$$);
    return $cljs$core$truth_$$($or__4212__auto__$jscomp$52$$) ? $or__4212__auto__$jscomp$52$$ : $cljs$cst$keyword$render$$.$cljs$core$IFn$_invoke$arity$1$($fmap$$);
  }(), $legacy_render$$ = null == $cljs$cst$keyword$reagentRender$$.$cljs$core$IFn$_invoke$arity$1$($fmap$$), $name$jscomp$116$$ = function() {
    var $or__4212__auto__$jscomp$53_or__4212__auto____$1$jscomp$17$$ = $cljs$cst$keyword$displayName$$.$cljs$core$IFn$_invoke$arity$1$($fmap$$);
    if ($cljs$core$truth_$$($or__4212__auto__$jscomp$53_or__4212__auto____$1$jscomp$17$$)) {
      return $or__4212__auto__$jscomp$53_or__4212__auto____$1$jscomp$17$$;
    }
    $or__4212__auto__$jscomp$53_or__4212__auto____$1$jscomp$17$$ = $reagent$impl$util$fun_name$$($render_fun$$);
    return $cljs$core$truth_$$($or__4212__auto__$jscomp$53_or__4212__auto____$1$jscomp$17$$) ? $or__4212__auto__$jscomp$53_or__4212__auto____$1$jscomp$17$$ : $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$gensym$cljs$0core$0IFn$0_invoke$0arity$01$$("reagent"));
  }(), $fmap__$1$$ = $cljs$core$reduce_kv$$(function($m$jscomp$91$$, $k$jscomp$261$$, $v$jscomp$120$$) {
    var $JSCompiler_temp_const$jscomp$157$$ = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$, $wrap$jscomp$inline_972$$ = $reagent$impl$component$custom_wrapper$$($k$jscomp$261$$, $v$jscomp$120$$);
    return $JSCompiler_temp_const$jscomp$157$$.call($cljs$core$assoc$$, $m$jscomp$91$$, $k$jscomp$261$$, $cljs$core$truth_$$($wrap$jscomp$inline_972$$) ? $wrap$jscomp$inline_972$$ : $v$jscomp$120$$);
  }, $cljs$core$PersistentArrayMap$EMPTY$$, $fmap$$);
  return $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$variadic$($fmap__$1$$, $cljs$cst$keyword$displayName$$, $name$jscomp$116$$, $cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$cljs$cst$keyword$cljsLegacyRender$$, $legacy_render$$, $cljs$cst$keyword$reagentRender$$, $render_fun$$, $cljs$cst$keyword$render$$, function() {
    var $c$jscomp$188$$ = this;
    if ($reagent$impl$util$_STAR_non_reactive_STAR_$$) {
      return $reagent$impl$component$do_render$$($c$jscomp$188$$, $compiler$jscomp$3$$);
    }
    var $rat$$ = $goog$object$get$$($c$jscomp$188$$, "cljsRatom");
    $c$jscomp$188$$.cljsIsDirty = !1;
    return null == $rat$$ ? $reagent$ratom$run_in_reaction$$(function() {
      return $reagent$impl$component$do_render$$($c$jscomp$188$$, $compiler$jscomp$3$$);
    }, $c$jscomp$188$$) : $rat$$._run(!1);
  }]));
}
function $reagent$impl$component$map_to_js$$($m$jscomp$92$$) {
  return $cljs$core$reduce_kv$$(function($o$jscomp$162$$, $k$jscomp$262_key$jscomp$inline_975$$, $v$jscomp$121$$) {
    $k$jscomp$262_key$jscomp$inline_975$$ = $cljs$core$name$$($k$jscomp$262_key$jscomp$inline_975$$);
    $o$jscomp$162$$[$k$jscomp$262_key$jscomp$inline_975$$] = $v$jscomp$121$$;
    return $o$jscomp$162$$;
  }, {}, $m$jscomp$92$$);
}
function $reagent$impl$component$cljsify$$($body$jscomp$1$$, $compiler$jscomp$4$$) {
  return $reagent$impl$component$wrap_funs$$($cljs$core$merge$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$reagent$impl$component$obligatory$$, $reagent$impl$component$camelify_map_keys$$($body$jscomp$1$$)])), $compiler$jscomp$4$$);
}
var $reagent$impl$component$built_in_static_method_names$$ = new $cljs$core$PersistentVector$$(null, 5, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$keyword$childContextTypes$$, $cljs$cst$keyword$contextTypes$$, $cljs$cst$keyword$contextType$$, $cljs$cst$keyword$getDerivedStateFromProps$$, $cljs$cst$keyword$getDerivedStateFromError$$], null);
function $reagent$impl$component$create_class$$($body$jscomp$2_body__$1$$, $compiler$jscomp$5_methods$$$) {
  function $cmp$$($props$jscomp$3$$, $context$jscomp$2$$, $updater$$) {
    $shadow$js$shim$module$0react$$.Component.call(this, $props$jscomp$3$$, $context$jscomp$2$$, $updater$$);
    $cljs$core$truth_$$($construct$$) && ($construct$$.$cljs$core$IFn$_invoke$arity$2$ ? $construct$$.$cljs$core$IFn$_invoke$arity$2$(this, $props$jscomp$3$$) : $construct$$.call(null, this, $props$jscomp$3$$));
    $cljs$core$truth_$$($get_initial_state$$) && (this.state = $get_initial_state$$.$cljs$core$IFn$_invoke$arity$1$ ? $get_initial_state$$.$cljs$core$IFn$_invoke$arity$1$(this) : $get_initial_state$$.call(null, this));
    this.$cljsMountOrder$ = $reagent$impl$batching$mount_count$$ += 1;
    return this;
  }
  $body$jscomp$2_body__$1$$ = $reagent$impl$component$cljsify$$($body$jscomp$2_body__$1$$, $compiler$jscomp$5_methods$$$);
  $compiler$jscomp$5_methods$$$ = $reagent$impl$component$map_to_js$$($cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($cljs$core$dissoc$$, $body$jscomp$2_body__$1$$, $cljs$cst$keyword$displayName$$, $cljs$cst$keyword$getInitialState$$, $cljs$cst$keyword$constructor$$, $cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$cljs$cst$keyword$render$$, $cljs$cst$keyword$reagentRender$$, $reagent$impl$component$built_in_static_method_names$$])));
  var $static_methods$$ = $reagent$impl$component$map_to_js$$($cljs$core$select_keys$$($body$jscomp$2_body__$1$$)), $display_name$$ = $cljs$cst$keyword$displayName$$.$cljs$core$IFn$_invoke$arity$1$($body$jscomp$2_body__$1$$), $get_initial_state$$ = $cljs$cst$keyword$getInitialState$$.$cljs$core$IFn$_invoke$arity$1$($body$jscomp$2_body__$1$$), $construct$$ = $cljs$cst$keyword$constructor$$.$cljs$core$IFn$_invoke$arity$1$($body$jscomp$2_body__$1$$);
  $goog$object$extend$$($cmp$$.prototype, $shadow$js$shim$module$0react$$.Component.prototype, $compiler$jscomp$5_methods$$$);
  $cljs$core$truth_$$($cljs$cst$keyword$render$$.$cljs$core$IFn$_invoke$arity$1$($body$jscomp$2_body__$1$$)) && ($cmp$$.prototype.render = $cljs$cst$keyword$render$$.$cljs$core$IFn$_invoke$arity$1$($body$jscomp$2_body__$1$$));
  $cljs$core$truth_$$($cljs$cst$keyword$reagentRender$$.$cljs$core$IFn$_invoke$arity$1$($body$jscomp$2_body__$1$$)) && ($cmp$$.prototype.$reagentRender$ = $cljs$cst$keyword$reagentRender$$.$cljs$core$IFn$_invoke$arity$1$($body$jscomp$2_body__$1$$));
  $cljs$core$truth_$$($cljs$cst$keyword$cljsLegacyRender$$.$cljs$core$IFn$_invoke$arity$1$($body$jscomp$2_body__$1$$)) && ($cmp$$.prototype.$cljsLegacyRender$ = $cljs$cst$keyword$cljsLegacyRender$$.$cljs$core$IFn$_invoke$arity$1$($body$jscomp$2_body__$1$$));
  $goog$object$extend$$($cmp$$, $shadow$js$shim$module$0react$$.Component, $static_methods$$);
  $cljs$core$truth_$$($display_name$$) && ($cmp$$.displayName = $display_name$$, $cmp$$.$cljs$lang$ctorStr$ = $display_name$$, $cmp$$.$cljs$lang$ctorPrWriter$ = function($writer$jscomp$62$$) {
    return $cljs$core$_write$$($writer$jscomp$62$$, $display_name$$);
  });
  $cmp$$.$cljs$lang$type$ = !0;
  return $cmp$$.prototype.constructor = $cmp$$;
}
function $reagent$impl$component$cache_react_class$$($compiler$jscomp$7_key$jscomp$inline_979$$, $c$jscomp$190$$, $constructor$$$) {
  $compiler$jscomp$7_key$jscomp$inline_979$$ = $reagent$impl$protocols$get_id$$($compiler$jscomp$7_key$jscomp$inline_979$$);
  return $c$jscomp$190$$[$compiler$jscomp$7_key$jscomp$inline_979$$] = $constructor$$$;
}
function $reagent$impl$component$functional_wrap_render$$($compiler$jscomp$11$$, $c$jscomp$191$$) {
  for (;;) {
    var $f$jscomp$505$$ = $c$jscomp$191$$.$reagentRender$, $argv$jscomp$2$$ = $c$jscomp$191$$.argv, $res$jscomp$19$$ = $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($f$jscomp$505$$, $argv$jscomp$2$$);
    if ($cljs$core$vector_QMARK_$$($res$jscomp$19$$)) {
      return $reagent$impl$protocols$as_element$$($compiler$jscomp$11$$, $res$jscomp$19$$);
    }
    if ($cljs$core$ifn_QMARK_$$($res$jscomp$19$$)) {
      $c$jscomp$191$$.$reagentRender$ = $reagent$impl$component$reagent_class_QMARK_$$($res$jscomp$19$$) ? function($compiler$jscomp$12$$, $c$jscomp$192$$, $f$jscomp$506$$, $_$jscomp$265$$, $argv$jscomp$3$$, $res$jscomp$20$$) {
        return function() {
          function $G__34174$$($var_args$jscomp$380$$) {
            var $G__34175__i_args$jscomp$145$$ = null;
            if (0 < arguments.length) {
              $G__34175__i_args$jscomp$145$$ = 0;
              for (var $G__34175__a$$ = Array(arguments.length - 0); $G__34175__i_args$jscomp$145$$ < $G__34175__a$$.length;) {
                $G__34175__a$$[$G__34175__i_args$jscomp$145$$] = arguments[$G__34175__i_args$jscomp$145$$ + 0], ++$G__34175__i_args$jscomp$145$$;
              }
              $G__34175__i_args$jscomp$145$$ = new $cljs$core$IndexedSeq$$($G__34175__a$$, 0, null);
            }
            return $G__34174__delegate$$.call(this, $G__34175__i_args$jscomp$145$$);
          }
          function $G__34174__delegate$$($args$jscomp$144$$) {
            return $reagent$impl$protocols$as_element$$($compiler$jscomp$12$$, $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$03$$($cljs$core$vector$$, $res$jscomp$20$$, $args$jscomp$144$$));
          }
          $G__34174$$.$cljs$lang$maxFixedArity$ = 0;
          $G__34174$$.$cljs$lang$applyTo$ = function($arglist__34176_args$jscomp$146$$) {
            $arglist__34176_args$jscomp$146$$ = $cljs$core$seq$$($arglist__34176_args$jscomp$146$$);
            return $G__34174__delegate$$($arglist__34176_args$jscomp$146$$);
          };
          $G__34174$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__34174__delegate$$;
          return $G__34174$$;
        }();
      }($compiler$jscomp$11$$, $c$jscomp$191$$, $f$jscomp$505$$, null, $argv$jscomp$2$$, $res$jscomp$19$$) : $res$jscomp$19$$;
    } else {
      return $res$jscomp$19$$;
    }
  }
}
function $reagent$impl$component$functional_do_render$$($compiler$jscomp$13$$, $c$jscomp$193$$) {
  var $_STAR_current_component_STAR__orig_val__34060$$ = $reagent$impl$component$_STAR_current_component_STAR_$$;
  $reagent$impl$component$_STAR_current_component_STAR_$$ = $c$jscomp$193$$;
  try {
    return $reagent$impl$component$functional_wrap_render$$($compiler$jscomp$13$$, $c$jscomp$193$$);
  } finally {
    $reagent$impl$component$_STAR_current_component_STAR_$$ = $_STAR_current_component_STAR__orig_val__34060$$;
  }
}
function $reagent$impl$component$functional_render$$($compiler$jscomp$14$$, $jsprops$jscomp$2_rat$jscomp$1_vec__34073$$) {
  if ($reagent$impl$util$_STAR_non_reactive_STAR_$$) {
    return $reagent$impl$component$functional_do_render$$($compiler$jscomp$14$$, $jsprops$jscomp$2_rat$jscomp$1_vec__34073$$);
  }
  var $argv$jscomp$4$$ = $jsprops$jscomp$2_rat$jscomp$1_vec__34073$$.argv, $tag$jscomp$15$$ = $jsprops$jscomp$2_rat$jscomp$1_vec__34073$$.$reagentRender$;
  $jsprops$jscomp$2_rat$jscomp$1_vec__34073$$ = $shadow$js$shim$module$0react$$.useState(0);
  $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($jsprops$jscomp$2_rat$jscomp$1_vec__34073$$, 0, null);
  var $update_count$jscomp$2$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($jsprops$jscomp$2_rat$jscomp$1_vec__34073$$, 1, null), $state_ref$$ = $shadow$js$shim$module$0react$$.useRef();
  $cljs$core$truth_$$($state_ref$$.current) || function() {
    var $obj$jscomp$137$$ = {forceUpdate:function() {
      return $update_count$jscomp$2$$.$cljs$core$IFn$_invoke$arity$1$ ? $update_count$jscomp$2$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$inc$$) : $update_count$jscomp$2$$.call(null, $cljs$core$inc$$);
    }};
    $obj$jscomp$137$$.$cljsMountOrder$ = $reagent$impl$batching$mount_count$$ += 1;
    $obj$jscomp$137$$.constructor = $tag$jscomp$15$$;
    $obj$jscomp$137$$.$reagentRender$ = $tag$jscomp$15$$;
    return $state_ref$$.current = $obj$jscomp$137$$;
  }();
  var $reagent_state$$ = $state_ref$$.current;
  $jsprops$jscomp$2_rat$jscomp$1_vec__34073$$ = $goog$object$get$$($reagent_state$$, "cljsRatom");
  $shadow$js$shim$module$0react$$.useEffect(function() {
    return function() {
      var $G__34082$$ = $goog$object$get$$($reagent_state$$, "cljsRatom");
      return null == $G__34082$$ ? null : $reagent$ratom$dispose_BANG_$$($G__34082$$);
    };
  }, []);
  $reagent_state$$.argv = $argv$jscomp$4$$;
  $reagent_state$$.cljsIsDirty = !1;
  return null == $jsprops$jscomp$2_rat$jscomp$1_vec__34073$$ ? $reagent$ratom$run_in_reaction$$(function() {
    return $reagent$impl$component$functional_do_render$$($compiler$jscomp$14$$, $reagent_state$$);
  }, $reagent_state$$) : $jsprops$jscomp$2_rat$jscomp$1_vec__34073$$._run(!1);
}
function $reagent$impl$component$functional_render_memo_fn$$($old_argv$jscomp$1_prev_props$$, $new_argv$jscomp$1_next_props$$) {
  $old_argv$jscomp$1_prev_props$$ = $old_argv$jscomp$1_prev_props$$.argv;
  $new_argv$jscomp$1_next_props$$ = $new_argv$jscomp$1_next_props$$.argv;
  try {
    return $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($old_argv$jscomp$1_prev_props$$, $new_argv$jscomp$1_next_props$$);
  } catch ($e34093$$) {
    return !1;
  }
}
function $reagent$impl$component$functional_render_fn$$($compiler$jscomp$15$$, $tag$jscomp$16$$) {
  function $f$jscomp$507$$($jsprops$jscomp$3$$) {
    return $reagent$impl$component$functional_render$$($compiler$jscomp$15$$, $jsprops$jscomp$3$$);
  }
  var $f__$1$jscomp$26_or__4212__auto__$jscomp$54$$ = $goog$object$get$$($tag$jscomp$16$$, $reagent$impl$protocols$get_id$$($compiler$jscomp$15$$));
  if ($cljs$core$truth_$$($f__$1$jscomp$26_or__4212__auto__$jscomp$54$$)) {
    return $f__$1$jscomp$26_or__4212__auto__$jscomp$54$$;
  }
  $f$jscomp$507$$.displayName = $reagent$impl$util$fun_name$$($tag$jscomp$16$$);
  $f__$1$jscomp$26_or__4212__auto__$jscomp$54$$ = $shadow$js$shim$module$0react$$.memo($f$jscomp$507$$, $reagent$impl$component$functional_render_memo_fn$$);
  $reagent$impl$component$cache_react_class$$($compiler$jscomp$15$$, $tag$jscomp$16$$, $f__$1$jscomp$26_or__4212__auto__$jscomp$54$$);
  return $f__$1$jscomp$26_or__4212__auto__$jscomp$54$$;
}
;var $reagent$impl$input$these_inputs_have_selection_api$$ = new $cljs$core$PersistentHashSet$$(null, new $cljs$core$PersistentArrayMap$$(null, 6, ["url", null, "tel", null, "text", null, "textarea", null, "password", null, "search", null], null), null);
function $reagent$impl$input$input_node_set_value$$($node$jscomp$128$$, $rendered_value$$, $dom_value_existing_offset_from_end_new_cursor_offset$$, $component$jscomp$2$$) {
  var $map__34118__$1_on_write$$ = $cljs$core$__destructure_map$$($cljs$core$PersistentArrayMap$EMPTY$$);
  $map__34118__$1_on_write$$ = $cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($map__34118__$1_on_write$$, $cljs$cst$keyword$on_DASH_write$$);
  if ($node$jscomp$128$$ === document.activeElement && $cljs$core$contains_QMARK_$$($reagent$impl$input$these_inputs_have_selection_api$$, $node$jscomp$128$$.type) && "string" === typeof $rendered_value$$ && "string" === typeof $dom_value_existing_offset_from_end_new_cursor_offset$$) {
    var $node_value$$ = $node$jscomp$128$$.value;
    if (!$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($node_value$$, $dom_value_existing_offset_from_end_new_cursor_offset$$)) {
      return $reagent$impl$batching$render_queue$$.add_after_render(function() {
        return $reagent$impl$input$input_component_set_value$$.$cljs$core$IFn$_invoke$arity$1$ ? $reagent$impl$input$input_component_set_value$$.$cljs$core$IFn$_invoke$arity$1$($component$jscomp$2$$) : $reagent$impl$input$input_component_set_value$$.call(null, $component$jscomp$2$$);
      });
    }
    $dom_value_existing_offset_from_end_new_cursor_offset$$ = $cljs$core$count$$($node_value$$) - $node$jscomp$128$$.selectionStart;
    $dom_value_existing_offset_from_end_new_cursor_offset$$ = $cljs$core$count$$($rendered_value$$) - $dom_value_existing_offset_from_end_new_cursor_offset$$;
    $component$jscomp$2$$.$cljsDOMValue$ = $rendered_value$$;
    $node$jscomp$128$$.value = $rendered_value$$;
    $cljs$core$fn_QMARK_$$($map__34118__$1_on_write$$) && ($map__34118__$1_on_write$$.$cljs$core$IFn$_invoke$arity$1$ ? $map__34118__$1_on_write$$.$cljs$core$IFn$_invoke$arity$1$($rendered_value$$) : $map__34118__$1_on_write$$.call(null, $rendered_value$$));
    $node$jscomp$128$$.selectionStart = $dom_value_existing_offset_from_end_new_cursor_offset$$;
    return $node$jscomp$128$$.selectionEnd = $dom_value_existing_offset_from_end_new_cursor_offset$$;
  }
  $component$jscomp$2$$.$cljsDOMValue$ = $rendered_value$$;
  $node$jscomp$128$$.value = $rendered_value$$;
  return $cljs$core$fn_QMARK_$$($map__34118__$1_on_write$$) ? $map__34118__$1_on_write$$.$cljs$core$IFn$_invoke$arity$1$ ? $map__34118__$1_on_write$$.$cljs$core$IFn$_invoke$arity$1$($rendered_value$$) : $map__34118__$1_on_write$$.call(null, $rendered_value$$) : null;
}
function $reagent$impl$input$input_component_set_value$$($this$$jscomp$201$$) {
  if ($cljs$core$truth_$$($this$$jscomp$201$$.$cljsInputLive$)) {
    $this$$jscomp$201$$.$cljsInputDirty$ = !1;
    var $rendered_value$jscomp$1$$ = $this$$jscomp$201$$.$cljsRenderedValue$, $dom_value$jscomp$1$$ = $this$$jscomp$201$$.$cljsDOMValue$, $node$jscomp$129$$ = $this$$jscomp$201$$.$inputEl$;
    return $cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$($rendered_value$jscomp$1$$, $dom_value$jscomp$1$$) ? null : $reagent$impl$input$input_node_set_value$$($node$jscomp$129$$, $rendered_value$jscomp$1$$, $dom_value$jscomp$1$$, $this$$jscomp$201$$);
  }
  return null;
}
function $reagent$impl$input$input_handle_change$$($this$$jscomp$202$$, $on_change$$, $e$jscomp$179$$) {
  $this$$jscomp$202$$.$cljsDOMValue$ = $e$jscomp$179$$.target.value;
  $cljs$core$truth_$$($this$$jscomp$202$$.$cljsInputDirty$) || ($this$$jscomp$202$$.$cljsInputDirty$ = !0, $reagent$impl$batching$render_queue$$.add_after_render(function() {
    return $reagent$impl$input$input_component_set_value$$($this$$jscomp$202$$);
  }));
  return $on_change$$.$cljs$core$IFn$_invoke$arity$1$ ? $on_change$$.$cljs$core$IFn$_invoke$arity$1$($e$jscomp$179$$) : $on_change$$.call(null, $e$jscomp$179$$);
}
function $reagent$impl$input$input_render_setup$$($jsprops$jscomp$4$$) {
  var $this$$jscomp$203$$ = $reagent$impl$component$_STAR_current_component_STAR_$$;
  if ($cljs$core$truth_$$(function() {
    var $and__4210__auto__$jscomp$38_and__4210__auto____$1$jscomp$16$$ = null != $jsprops$jscomp$4$$;
    return $and__4210__auto__$jscomp$38_and__4210__auto____$1$jscomp$16$$ ? ($and__4210__auto__$jscomp$38_and__4210__auto____$1$jscomp$16$$ = $jsprops$jscomp$4$$.hasOwnProperty("onChange"), $cljs$core$truth_$$($and__4210__auto__$jscomp$38_and__4210__auto____$1$jscomp$16$$) ? $jsprops$jscomp$4$$.hasOwnProperty("value") : $and__4210__auto__$jscomp$38_and__4210__auto____$1$jscomp$16$$) : $and__4210__auto__$jscomp$38_and__4210__auto____$1$jscomp$16$$;
  }())) {
    var $v$jscomp$122_value$jscomp$175$$ = $jsprops$jscomp$4$$.value;
    $v$jscomp$122_value$jscomp$175$$ = null == $v$jscomp$122_value$jscomp$175$$ ? "" : $v$jscomp$122_value$jscomp$175$$;
    var $on_change$jscomp$1$$ = $jsprops$jscomp$4$$.onChange, $original_ref_fn$$ = $jsprops$jscomp$4$$.ref;
    $cljs$core$truth_$$($this$$jscomp$203$$.$cljsInputLive$) || ($this$$jscomp$203$$.$cljsInputLive$ = !0, $this$$jscomp$203$$.$cljsDOMValue$ = $v$jscomp$122_value$jscomp$175$$);
    $cljs$core$truth_$$($this$$jscomp$203$$.$reagentRefFn$) || ($this$$jscomp$203$$.$reagentRefFn$ = function($el$$) {
      $this$$jscomp$203$$.$inputEl$ = $el$$;
      return $cljs$core$truth_$$($original_ref_fn$$) ? $original_ref_fn$$.$cljs$core$IFn$_invoke$arity$1$ ? $original_ref_fn$$.$cljs$core$IFn$_invoke$arity$1$($el$$) : $original_ref_fn$$.call(null, $el$$) : null;
    });
    $this$$jscomp$203$$.$cljsRenderedValue$ = $v$jscomp$122_value$jscomp$175$$;
    delete $jsprops$jscomp$4$$.value;
    $jsprops$jscomp$4$$.defaultValue = $v$jscomp$122_value$jscomp$175$$;
    $jsprops$jscomp$4$$.onChange = function($p1__34142_SHARP_$$) {
      return $reagent$impl$input$input_handle_change$$($this$$jscomp$203$$, $on_change$jscomp$1$$, $p1__34142_SHARP_$$);
    };
    $jsprops$jscomp$4$$.ref = $this$$jscomp$203$$.$reagentRefFn$;
  }
}
var $reagent$impl$input$input_spec$$ = new $cljs$core$PersistentArrayMap$$(null, 4, [$cljs$cst$keyword$display_DASH_name$$, "ReagentInput", $cljs$cst$keyword$component_DASH_did_DASH_update$$, $reagent$impl$input$input_component_set_value$$, $cljs$cst$keyword$component_DASH_will_DASH_unmount$$, function($this$$jscomp$204$$) {
  return $this$$jscomp$204$$.$cljsInputLive$ = null;
}, $cljs$cst$keyword$reagent_DASH_render$$, function($argv$jscomp$5$$, $component$jscomp$3$$, $jsprops$jscomp$5$$, $first_child$jscomp$3$$, $compiler$jscomp$16$$) {
  $reagent$impl$input$input_render_setup$$($jsprops$jscomp$5$$);
  return $reagent$impl$protocols$make_element$$($compiler$jscomp$16$$, $argv$jscomp$5$$, $component$jscomp$3$$, $jsprops$jscomp$5$$, $first_child$jscomp$3$$);
}], null);
var $reagent$impl$template$$ = {}, $reagent$impl$template$t_reagent$0impl$0template34288$$, $reagent$impl$template$re_tag$$ = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/, $reagent$impl$template$prop_name_cache$$ = {"class":"className", "for":"htmlFor", charset:"charSet"};
function $reagent$impl$template$cache_get$$($o$jscomp$163$$, $k$jscomp$263$$) {
  return $o$jscomp$163$$.hasOwnProperty($k$jscomp$263$$) ? $goog$object$get$$($o$jscomp$163$$, $k$jscomp$263$$) : null;
}
function $reagent$impl$template$kv_conv$$($o$jscomp$164$$, $JSCompiler_inline_result$jscomp$161_k$jscomp$265_key$jscomp$inline_1227$$, $v$jscomp$124_value$jscomp$inline_992$$) {
  if ($reagent$impl$util$named_QMARK_$$($JSCompiler_inline_result$jscomp$161_k$jscomp$265_key$jscomp$inline_1227$$)) {
    var $temp__5755__auto__$jscomp$inline_987_v$jscomp$inline_988$$ = $reagent$impl$template$cache_get$$($reagent$impl$template$prop_name_cache$$, $cljs$core$name$$($JSCompiler_inline_result$jscomp$161_k$jscomp$265_key$jscomp$inline_1227$$));
    null == $temp__5755__auto__$jscomp$inline_987_v$jscomp$inline_988$$ ? ($temp__5755__auto__$jscomp$inline_987_v$jscomp$inline_988$$ = $reagent$impl$util$dash_to_prop_name$$($JSCompiler_inline_result$jscomp$161_k$jscomp$265_key$jscomp$inline_1227$$), $JSCompiler_inline_result$jscomp$161_k$jscomp$265_key$jscomp$inline_1227$$ = $cljs$core$name$$($JSCompiler_inline_result$jscomp$161_k$jscomp$265_key$jscomp$inline_1227$$), $JSCompiler_inline_result$jscomp$161_k$jscomp$265_key$jscomp$inline_1227$$ = 
    $reagent$impl$template$prop_name_cache$$[$JSCompiler_inline_result$jscomp$161_k$jscomp$265_key$jscomp$inline_1227$$] = $temp__5755__auto__$jscomp$inline_987_v$jscomp$inline_988$$) : $JSCompiler_inline_result$jscomp$161_k$jscomp$265_key$jscomp$inline_1227$$ = $temp__5755__auto__$jscomp$inline_987_v$jscomp$inline_988$$;
  }
  $v$jscomp$124_value$jscomp$inline_992$$ = $reagent$impl$template$convert_prop_value$$.$cljs$core$IFn$_invoke$arity$1$ ? $reagent$impl$template$convert_prop_value$$.$cljs$core$IFn$_invoke$arity$1$($v$jscomp$124_value$jscomp$inline_992$$) : $reagent$impl$template$convert_prop_value$$.call(null, $v$jscomp$124_value$jscomp$inline_992$$);
  $o$jscomp$164$$[$JSCompiler_inline_result$jscomp$161_k$jscomp$265_key$jscomp$inline_1227$$] = $v$jscomp$124_value$jscomp$inline_992$$;
  return $o$jscomp$164$$;
}
function $reagent$impl$template$convert_prop_value$$($x$jscomp$693$$) {
  return "object" !== $goog$typeOf$$($x$jscomp$693$$) ? $x$jscomp$693$$ : $reagent$impl$util$named_QMARK_$$($x$jscomp$693$$) ? $cljs$core$name$$($x$jscomp$693$$) : $cljs$core$map_QMARK_$$($x$jscomp$693$$) ? $cljs$core$reduce_kv$$($reagent$impl$template$kv_conv$$, {}, $x$jscomp$693$$) : $cljs$core$coll_QMARK_$$($x$jscomp$693$$) ? $cljs$core$clj__GT_js$$($x$jscomp$693$$) : $cljs$core$ifn_QMARK_$$($x$jscomp$693$$) ? function() {
    function $G__34305$$($var_args$jscomp$381$$) {
      var $G__34306__i_args$jscomp$148$$ = null;
      if (0 < arguments.length) {
        $G__34306__i_args$jscomp$148$$ = 0;
        for (var $G__34306__a$$ = Array(arguments.length - 0); $G__34306__i_args$jscomp$148$$ < $G__34306__a$$.length;) {
          $G__34306__a$$[$G__34306__i_args$jscomp$148$$] = arguments[$G__34306__i_args$jscomp$148$$ + 0], ++$G__34306__i_args$jscomp$148$$;
        }
        $G__34306__i_args$jscomp$148$$ = new $cljs$core$IndexedSeq$$($G__34306__a$$, 0, null);
      }
      return $G__34305__delegate$$.call(this, $G__34306__i_args$jscomp$148$$);
    }
    function $G__34305__delegate$$($args$jscomp$147$$) {
      return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($x$jscomp$693$$, $args$jscomp$147$$);
    }
    $G__34305$$.$cljs$lang$maxFixedArity$ = 0;
    $G__34305$$.$cljs$lang$applyTo$ = function($arglist__34307_args$jscomp$149$$) {
      $arglist__34307_args$jscomp$149$$ = $cljs$core$seq$$($arglist__34307_args$jscomp$149$$);
      return $G__34305__delegate$$($arglist__34307_args$jscomp$149$$);
    };
    $G__34305$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__34305__delegate$$;
    return $G__34305$$;
  }() : $cljs$core$clj__GT_js$$($x$jscomp$693$$);
}
var $reagent$impl$template$custom_prop_name_cache$$ = {};
function $reagent$impl$template$custom_kv_conv$$($o$jscomp$165$$, $JSCompiler_inline_result$jscomp$162_k$jscomp$267_key$jscomp$inline_1231$$, $v$jscomp$126_value$jscomp$inline_1004$$) {
  if ($reagent$impl$util$named_QMARK_$$($JSCompiler_inline_result$jscomp$162_k$jscomp$267_key$jscomp$inline_1231$$)) {
    var $temp__5755__auto__$jscomp$inline_999_v$jscomp$inline_1000$$ = $reagent$impl$template$cache_get$$($reagent$impl$template$custom_prop_name_cache$$, $cljs$core$name$$($JSCompiler_inline_result$jscomp$162_k$jscomp$267_key$jscomp$inline_1231$$));
    null == $temp__5755__auto__$jscomp$inline_999_v$jscomp$inline_1000$$ ? ($temp__5755__auto__$jscomp$inline_999_v$jscomp$inline_1000$$ = $reagent$impl$util$dash_to_prop_name$$($JSCompiler_inline_result$jscomp$162_k$jscomp$267_key$jscomp$inline_1231$$), $JSCompiler_inline_result$jscomp$162_k$jscomp$267_key$jscomp$inline_1231$$ = $cljs$core$name$$($JSCompiler_inline_result$jscomp$162_k$jscomp$267_key$jscomp$inline_1231$$), $JSCompiler_inline_result$jscomp$162_k$jscomp$267_key$jscomp$inline_1231$$ = 
    $reagent$impl$template$custom_prop_name_cache$$[$JSCompiler_inline_result$jscomp$162_k$jscomp$267_key$jscomp$inline_1231$$] = $temp__5755__auto__$jscomp$inline_999_v$jscomp$inline_1000$$) : $JSCompiler_inline_result$jscomp$162_k$jscomp$267_key$jscomp$inline_1231$$ = $temp__5755__auto__$jscomp$inline_999_v$jscomp$inline_1000$$;
  }
  $v$jscomp$126_value$jscomp$inline_1004$$ = $reagent$impl$template$convert_prop_value$$($v$jscomp$126_value$jscomp$inline_1004$$);
  $o$jscomp$165$$[$JSCompiler_inline_result$jscomp$162_k$jscomp$267_key$jscomp$inline_1231$$] = $v$jscomp$126_value$jscomp$inline_1004$$;
  return $o$jscomp$165$$;
}
function $reagent$impl$template$convert_custom_prop_value$$($x$jscomp$694$$) {
  return "object" !== $goog$typeOf$$($x$jscomp$694$$) ? $x$jscomp$694$$ : $reagent$impl$util$named_QMARK_$$($x$jscomp$694$$) ? $cljs$core$name$$($x$jscomp$694$$) : $cljs$core$map_QMARK_$$($x$jscomp$694$$) ? $cljs$core$reduce_kv$$($reagent$impl$template$custom_kv_conv$$, {}, $x$jscomp$694$$) : $cljs$core$coll_QMARK_$$($x$jscomp$694$$) ? $cljs$core$clj__GT_js$$($x$jscomp$694$$) : $cljs$core$ifn_QMARK_$$($x$jscomp$694$$) ? function() {
    function $G__34312$$($var_args$jscomp$382$$) {
      var $G__34313__i_args$jscomp$151$$ = null;
      if (0 < arguments.length) {
        $G__34313__i_args$jscomp$151$$ = 0;
        for (var $G__34313__a$$ = Array(arguments.length - 0); $G__34313__i_args$jscomp$151$$ < $G__34313__a$$.length;) {
          $G__34313__a$$[$G__34313__i_args$jscomp$151$$] = arguments[$G__34313__i_args$jscomp$151$$ + 0], ++$G__34313__i_args$jscomp$151$$;
        }
        $G__34313__i_args$jscomp$151$$ = new $cljs$core$IndexedSeq$$($G__34313__a$$, 0, null);
      }
      return $G__34312__delegate$$.call(this, $G__34313__i_args$jscomp$151$$);
    }
    function $G__34312__delegate$$($args$jscomp$150$$) {
      return $cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($x$jscomp$694$$, $args$jscomp$150$$);
    }
    $G__34312$$.$cljs$lang$maxFixedArity$ = 0;
    $G__34312$$.$cljs$lang$applyTo$ = function($arglist__34314_args$jscomp$152$$) {
      $arglist__34314_args$jscomp$152$$ = $cljs$core$seq$$($arglist__34314_args$jscomp$152$$);
      return $G__34312__delegate$$($arglist__34314_args$jscomp$152$$);
    };
    $G__34312$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__34312__delegate$$;
    return $G__34312$$;
  }() : $cljs$core$clj__GT_js$$($x$jscomp$694$$);
}
function $reagent$impl$template$make_element$$($this$$jscomp$206$$, $argv$jscomp$6$$, $component$jscomp$4$$, $jsprops$jscomp$6$$, $first_child$jscomp$4$$) {
  switch($cljs$core$count$$($argv$jscomp$6$$) - $first_child$jscomp$4$$) {
    case 0:
      return $shadow$js$shim$module$0react$$.createElement($component$jscomp$4$$, $jsprops$jscomp$6$$);
    case 1:
      return $shadow$js$shim$module$0react$$.createElement($component$jscomp$4$$, $jsprops$jscomp$6$$, $reagent$impl$protocols$as_element$$($this$$jscomp$206$$, $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($argv$jscomp$6$$, $first_child$jscomp$4$$, null)));
    default:
      return $shadow$js$shim$module$0react$$.createElement.apply(null, $cljs$core$reduce_kv$$(function($a$jscomp$250$$, $k$jscomp$268$$, $v$jscomp$127$$) {
        $k$jscomp$268$$ >= $first_child$jscomp$4$$ && $a$jscomp$250$$.push($reagent$impl$protocols$as_element$$($this$$jscomp$206$$, $v$jscomp$127$$));
        return $a$jscomp$250$$;
      }, [$component$jscomp$4$$, $jsprops$jscomp$6$$], $argv$jscomp$6$$));
  }
}
function $reagent$impl$template$HiccupTag$$($tag$jscomp$19$$, $id$jscomp$9$$, $className$jscomp$3$$, $custom$$) {
  this.tag = $tag$jscomp$19$$;
  this.id = $id$jscomp$9$$;
  this.className = $className$jscomp$3$$;
  this.$custom$ = $custom$$;
}
function $reagent$impl$template$reag_element$$($JSCompiler_temp$jscomp$1060_c$jscomp$195_tag$jscomp$22$$, $temp__5757__auto___34325_v$jscomp$128$$, $compiler$jscomp$17_jsprops$jscomp$7$$) {
  var $res$jscomp$inline_1238_spec$jscomp$inline_1236_temp__5755__auto__$jscomp$inline_1010_withrender$jscomp$inline_1237$$ = $goog$object$get$$($JSCompiler_temp$jscomp$1060_c$jscomp$195_tag$jscomp$22$$, $reagent$impl$protocols$get_id$$($compiler$jscomp$17_jsprops$jscomp$7$$));
  null == $res$jscomp$inline_1238_spec$jscomp$inline_1236_temp__5755__auto__$jscomp$inline_1010_withrender$jscomp$inline_1237$$ ? $reagent$impl$component$reagent_class_QMARK_$$($JSCompiler_temp$jscomp$1060_c$jscomp$195_tag$jscomp$22$$) ? $JSCompiler_temp$jscomp$1060_c$jscomp$195_tag$jscomp$22$$ = $reagent$impl$component$cache_react_class$$($compiler$jscomp$17_jsprops$jscomp$7$$, $JSCompiler_temp$jscomp$1060_c$jscomp$195_tag$jscomp$22$$, $JSCompiler_temp$jscomp$1060_c$jscomp$195_tag$jscomp$22$$) : 
  ($res$jscomp$inline_1238_spec$jscomp$inline_1236_temp__5755__auto__$jscomp$inline_1010_withrender$jscomp$inline_1237$$ = $cljs$core$meta$$($JSCompiler_temp$jscomp$1060_c$jscomp$195_tag$jscomp$22$$), $res$jscomp$inline_1238_spec$jscomp$inline_1236_temp__5755__auto__$jscomp$inline_1010_withrender$jscomp$inline_1237$$ = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($res$jscomp$inline_1238_spec$jscomp$inline_1236_temp__5755__auto__$jscomp$inline_1010_withrender$jscomp$inline_1237$$, $cljs$cst$keyword$reagent_DASH_render$$, 
  $JSCompiler_temp$jscomp$1060_c$jscomp$195_tag$jscomp$22$$), $res$jscomp$inline_1238_spec$jscomp$inline_1236_temp__5755__auto__$jscomp$inline_1010_withrender$jscomp$inline_1237$$ = $reagent$impl$component$create_class$$($res$jscomp$inline_1238_spec$jscomp$inline_1236_temp__5755__auto__$jscomp$inline_1010_withrender$jscomp$inline_1237$$, $compiler$jscomp$17_jsprops$jscomp$7$$), $JSCompiler_temp$jscomp$1060_c$jscomp$195_tag$jscomp$22$$ = $reagent$impl$component$cache_react_class$$($compiler$jscomp$17_jsprops$jscomp$7$$, 
  $JSCompiler_temp$jscomp$1060_c$jscomp$195_tag$jscomp$22$$, $res$jscomp$inline_1238_spec$jscomp$inline_1236_temp__5755__auto__$jscomp$inline_1010_withrender$jscomp$inline_1237$$)) : $JSCompiler_temp$jscomp$1060_c$jscomp$195_tag$jscomp$22$$ = $res$jscomp$inline_1238_spec$jscomp$inline_1236_temp__5755__auto__$jscomp$inline_1010_withrender$jscomp$inline_1237$$;
  $compiler$jscomp$17_jsprops$jscomp$7$$ = {};
  $compiler$jscomp$17_jsprops$jscomp$7$$.argv = $temp__5757__auto___34325_v$jscomp$128$$;
  $temp__5757__auto___34325_v$jscomp$128$$ = $reagent$impl$util$react_key_from_vec$$($temp__5757__auto___34325_v$jscomp$128$$);
  null != $temp__5757__auto___34325_v$jscomp$128$$ && ($compiler$jscomp$17_jsprops$jscomp$7$$.key = $temp__5757__auto___34325_v$jscomp$128$$);
  return $shadow$js$shim$module$0react$$.createElement($JSCompiler_temp$jscomp$1060_c$jscomp$195_tag$jscomp$22$$, $compiler$jscomp$17_jsprops$jscomp$7$$);
}
function $reagent$impl$template$function_element$$($tag$jscomp$23$$, $temp__5757__auto___34328_v$jscomp$129$$, $JSCompiler_inline_result$jscomp$1053_first_arg$$, $compiler$jscomp$18$$) {
  var $jsprops$jscomp$8$$ = {};
  $jsprops$jscomp$8$$.$reagentRender$ = $tag$jscomp$23$$;
  var $end$jscomp$inline_1242$$ = $cljs$core$count$$($temp__5757__auto___34328_v$jscomp$129$$);
  $JSCompiler_inline_result$jscomp$1053_first_arg$$ = $cljs$core$build_subvec$$(null, $temp__5757__auto___34328_v$jscomp$129$$, $JSCompiler_inline_result$jscomp$1053_first_arg$$ | 0, $end$jscomp$inline_1242$$ | 0, null);
  $jsprops$jscomp$8$$.argv = $JSCompiler_inline_result$jscomp$1053_first_arg$$;
  $temp__5757__auto___34328_v$jscomp$129$$ = $reagent$impl$util$react_key_from_vec$$($temp__5757__auto___34328_v$jscomp$129$$);
  null != $temp__5757__auto___34328_v$jscomp$129$$ && ($jsprops$jscomp$8$$.key = $temp__5757__auto___34328_v$jscomp$129$$);
  return $shadow$js$shim$module$0react$$.createElement($reagent$impl$component$functional_render_fn$$($compiler$jscomp$18$$, $tag$jscomp$23$$), $jsprops$jscomp$8$$);
}
function $reagent$impl$template$maybe_function_element$$($tag$jscomp$24$$, $v$jscomp$130$$, $compiler$jscomp$19$$) {
  var $G__33933__$1$jscomp$inline_1247_JSCompiler_temp$jscomp$inline_1245$$;
  if ($G__33933__$1$jscomp$inline_1247_JSCompiler_temp$jscomp$inline_1245$$ = $cljs$core$fn_QMARK_$$($tag$jscomp$24$$)) {
    $G__33933__$1$jscomp$inline_1247_JSCompiler_temp$jscomp$inline_1245$$ = null == $tag$jscomp$24$$ ? null : $tag$jscomp$24$$.prototype, $G__33933__$1$jscomp$inline_1247_JSCompiler_temp$jscomp$inline_1245$$ = null != (null == $G__33933__$1$jscomp$inline_1247_JSCompiler_temp$jscomp$inline_1245$$ ? null : $G__33933__$1$jscomp$inline_1247_JSCompiler_temp$jscomp$inline_1245$$.render);
  }
  return $G__33933__$1$jscomp$inline_1247_JSCompiler_temp$jscomp$inline_1245$$ ? $reagent$impl$template$reag_element$$($tag$jscomp$24$$, $v$jscomp$130$$, $compiler$jscomp$19$$) : $reagent$impl$template$function_element$$($tag$jscomp$24$$, $v$jscomp$130$$, 1, $compiler$jscomp$19$$);
}
var $reagent$impl$template$tag_name_cache$$ = {};
function $reagent$impl$template$native_element$$($parsed$$, $argv$jscomp$8$$, $first$jscomp$9_first_child$jscomp$6$$, $compiler$jscomp$21$$) {
  var $component$jscomp$5$$ = $parsed$$.tag, $props$jscomp$7$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($argv$jscomp$8$$, $first$jscomp$9_first_child$jscomp$6$$, null), $hasprops$jscomp$1$$ = null == $props$jscomp$7$$ || $cljs$core$map_QMARK_$$($props$jscomp$7$$), $jsprops$jscomp$10$$ = function() {
    var $JSCompiler_temp$jscomp$inline_1294_class$$jscomp$inline_1292_or__4212__auto__$jscomp$57_props$jscomp$inline_1249_props__$1$jscomp$inline_1252$$ = $hasprops$jscomp$1$$ ? $props$jscomp$7$$ : null;
    var $JSCompiler_inline_result$jscomp$inline_1297_class$$jscomp$inline_1251_props$jscomp$inline_1289$$ = $cljs$cst$keyword$class$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_temp$jscomp$inline_1294_class$$jscomp$inline_1292_or__4212__auto__$jscomp$57_props$jscomp$inline_1249_props__$1$jscomp$inline_1252$$);
    $JSCompiler_inline_result$jscomp$inline_1297_class$$jscomp$inline_1251_props$jscomp$inline_1289$$ = $cljs$core$truth_$$($JSCompiler_inline_result$jscomp$inline_1297_class$$jscomp$inline_1251_props$jscomp$inline_1289$$) ? $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($JSCompiler_temp$jscomp$inline_1294_class$$jscomp$inline_1292_or__4212__auto__$jscomp$57_props$jscomp$inline_1249_props__$1$jscomp$inline_1252$$, $cljs$cst$keyword$class$$, $reagent$impl$util$class_names$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$inline_1297_class$$jscomp$inline_1251_props$jscomp$inline_1289$$)) : 
    $JSCompiler_temp$jscomp$inline_1294_class$$jscomp$inline_1292_or__4212__auto__$jscomp$57_props$jscomp$inline_1249_props__$1$jscomp$inline_1252$$;
    var $G__34208__$1$jscomp$inline_1293_id$jscomp$inline_1291$$ = $parsed$$.id;
    $JSCompiler_temp$jscomp$inline_1294_class$$jscomp$inline_1292_or__4212__auto__$jscomp$57_props$jscomp$inline_1249_props__$1$jscomp$inline_1252$$ = $parsed$$.className;
    $G__34208__$1$jscomp$inline_1293_id$jscomp$inline_1291$$ = null != $G__34208__$1$jscomp$inline_1293_id$jscomp$inline_1291$$ && null == $cljs$cst$keyword$id$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$inline_1297_class$$jscomp$inline_1251_props$jscomp$inline_1289$$) ? $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($JSCompiler_inline_result$jscomp$inline_1297_class$$jscomp$inline_1251_props$jscomp$inline_1289$$, $cljs$cst$keyword$id$$, $G__34208__$1$jscomp$inline_1293_id$jscomp$inline_1291$$) : 
    $JSCompiler_inline_result$jscomp$inline_1297_class$$jscomp$inline_1251_props$jscomp$inline_1289$$;
    if ($cljs$core$truth_$$($JSCompiler_temp$jscomp$inline_1294_class$$jscomp$inline_1292_or__4212__auto__$jscomp$57_props$jscomp$inline_1249_props__$1$jscomp$inline_1252$$)) {
      var $JSCompiler_temp_const$jscomp$inline_1295$$ = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$, $JSCompiler_temp_const$jscomp$inline_1296$$ = $reagent$impl$util$class_names$$.$cljs$core$IFn$_invoke$arity$2$, $or__4212__auto__$jscomp$inline_1298$$ = $cljs$cst$keyword$class$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$inline_1297_class$$jscomp$inline_1251_props$jscomp$inline_1289$$);
      $JSCompiler_inline_result$jscomp$inline_1297_class$$jscomp$inline_1251_props$jscomp$inline_1289$$ = $cljs$core$truth_$$($or__4212__auto__$jscomp$inline_1298$$) ? $or__4212__auto__$jscomp$inline_1298$$ : $cljs$cst$keyword$className$$.$cljs$core$IFn$_invoke$arity$1$($JSCompiler_inline_result$jscomp$inline_1297_class$$jscomp$inline_1251_props$jscomp$inline_1289$$);
      $JSCompiler_temp$jscomp$inline_1294_class$$jscomp$inline_1292_or__4212__auto__$jscomp$57_props$jscomp$inline_1249_props__$1$jscomp$inline_1252$$ = $JSCompiler_temp_const$jscomp$inline_1295$$.call($cljs$core$assoc$$, $G__34208__$1$jscomp$inline_1293_id$jscomp$inline_1291$$, $cljs$cst$keyword$class$$, $JSCompiler_temp_const$jscomp$inline_1296$$.call($reagent$impl$util$class_names$$, $JSCompiler_temp$jscomp$inline_1294_class$$jscomp$inline_1292_or__4212__auto__$jscomp$57_props$jscomp$inline_1249_props__$1$jscomp$inline_1252$$, 
      $JSCompiler_inline_result$jscomp$inline_1297_class$$jscomp$inline_1251_props$jscomp$inline_1289$$));
    } else {
      $JSCompiler_temp$jscomp$inline_1294_class$$jscomp$inline_1292_or__4212__auto__$jscomp$57_props$jscomp$inline_1249_props__$1$jscomp$inline_1252$$ = $G__34208__$1$jscomp$inline_1293_id$jscomp$inline_1291$$;
    }
    $JSCompiler_temp$jscomp$inline_1294_class$$jscomp$inline_1292_or__4212__auto__$jscomp$57_props$jscomp$inline_1249_props__$1$jscomp$inline_1252$$ = $cljs$core$truth_$$($parsed$$.$custom$) ? $reagent$impl$template$convert_custom_prop_value$$($JSCompiler_temp$jscomp$inline_1294_class$$jscomp$inline_1292_or__4212__auto__$jscomp$57_props$jscomp$inline_1249_props__$1$jscomp$inline_1252$$) : $reagent$impl$template$convert_prop_value$$($JSCompiler_temp$jscomp$inline_1294_class$$jscomp$inline_1292_or__4212__auto__$jscomp$57_props$jscomp$inline_1249_props__$1$jscomp$inline_1252$$);
    return $cljs$core$truth_$$($JSCompiler_temp$jscomp$inline_1294_class$$jscomp$inline_1292_or__4212__auto__$jscomp$57_props$jscomp$inline_1249_props__$1$jscomp$inline_1252$$) ? $JSCompiler_temp$jscomp$inline_1294_class$$jscomp$inline_1292_or__4212__auto__$jscomp$57_props$jscomp$inline_1249_props__$1$jscomp$inline_1252$$ : {};
  }();
  $first$jscomp$9_first_child$jscomp$6$$ += $hasprops$jscomp$1$$ ? 1 : 0;
  a: {
    switch($component$jscomp$5$$) {
      case "input":
      case "textarea":
        var $JSCompiler_inline_result$jscomp$160_input_class_temp__5757__auto___34340$$ = !0;
        break a;
      default:
        $JSCompiler_inline_result$jscomp$160_input_class_temp__5757__auto___34340$$ = !1;
    }
  }
  if ($JSCompiler_inline_result$jscomp$160_input_class_temp__5757__auto___34340$$) {
    return $JSCompiler_inline_result$jscomp$160_input_class_temp__5757__auto___34340$$ = function() {
      var $or__4212__auto__$jscomp$58_x$jscomp$696$$ = $compiler$jscomp$21$$.$reagentInput$;
      if ($cljs$core$truth_$$($or__4212__auto__$jscomp$58_x$jscomp$696$$)) {
        return $or__4212__auto__$jscomp$58_x$jscomp$696$$;
      }
      $or__4212__auto__$jscomp$58_x$jscomp$696$$ = $reagent$impl$component$create_class$$($reagent$impl$input$input_spec$$, $compiler$jscomp$21$$);
      return $compiler$jscomp$21$$.$reagentInput$ = $or__4212__auto__$jscomp$58_x$jscomp$696$$;
    }(), $reagent$impl$protocols$as_element$$($compiler$jscomp$21$$, $cljs$core$with_meta$$(new $cljs$core$PersistentVector$$(null, 6, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$JSCompiler_inline_result$jscomp$160_input_class_temp__5757__auto___34340$$, $argv$jscomp$8$$, $component$jscomp$5$$, $jsprops$jscomp$10$$, $first$jscomp$9_first_child$jscomp$6$$, $compiler$jscomp$21$$], null), $cljs$core$meta$$($argv$jscomp$8$$)));
  }
  $JSCompiler_inline_result$jscomp$160_input_class_temp__5757__auto___34340$$ = $reagent$impl$util$get_react_key$$($cljs$core$meta$$($argv$jscomp$8$$));
  null != $JSCompiler_inline_result$jscomp$160_input_class_temp__5757__auto___34340$$ && ($jsprops$jscomp$10$$.key = $JSCompiler_inline_result$jscomp$160_input_class_temp__5757__auto___34340$$);
  return $reagent$impl$protocols$make_element$$($compiler$jscomp$21$$, $argv$jscomp$8$$, $component$jscomp$5$$, $jsprops$jscomp$10$$, $first$jscomp$9_first_child$jscomp$6$$);
}
function $reagent$impl$template$expand_seq$$($s$jscomp$161$$, $compiler$jscomp$23$$) {
  return $cljs$core$into_array$cljs$0core$0IFn$0_invoke$0arity$02$$($cljs$core$map$$.$cljs$core$IFn$_invoke$arity$2$(function($p1__34266_SHARP_$$) {
    return $reagent$impl$protocols$as_element$$($compiler$jscomp$23$$, $p1__34266_SHARP_$$);
  }, $s$jscomp$161$$));
}
function $reagent$impl$template$vec_to_elem$$($G__34351$jscomp$inline_1025_JSCompiler_temp$jscomp$169_v$jscomp$133_v$jscomp$inline_1020$$, $G__34352$jscomp$inline_1026_compiler$jscomp$27_compiler$jscomp$inline_1021$$, $JSCompiler_inline_result$jscomp$1062_comp$jscomp$inline_1254_first_child$jscomp$inline_1267_fn_to_element_hasprops$jscomp$inline_1264_n$jscomp$inline_1023_tag$jscomp$inline_1022_tag$jscomp$inline_1312_x$jscomp$inline_1270$$) {
  null == $G__34352$jscomp$inline_1026_compiler$jscomp$27_compiler$jscomp$inline_1021$$ && console.error("vec-to-elem", $cljs$core$pr_str_with_opts$$($cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$G__34351$jscomp$inline_1025_JSCompiler_temp$jscomp$169_v$jscomp$133_v$jscomp$inline_1020$$]), $cljs$core$pr_opts$$()));
  var $jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34351$jscomp$inline_1025_JSCompiler_temp$jscomp$169_v$jscomp$133_v$jscomp$inline_1020$$, 0, null);
  switch($jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$ instanceof $cljs$core$Keyword$$ ? $jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$.$fqn$ : 
  null) {
    case "\x3e":
      return $JSCompiler_inline_result$jscomp$1062_comp$jscomp$inline_1254_first_child$jscomp$inline_1267_fn_to_element_hasprops$jscomp$inline_1264_n$jscomp$inline_1023_tag$jscomp$inline_1022_tag$jscomp$inline_1312_x$jscomp$inline_1270$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34351$jscomp$inline_1025_JSCompiler_temp$jscomp$169_v$jscomp$133_v$jscomp$inline_1020$$, 1, null), $reagent$impl$template$native_element$$(new $reagent$impl$template$HiccupTag$$($JSCompiler_inline_result$jscomp$1062_comp$jscomp$inline_1254_first_child$jscomp$inline_1267_fn_to_element_hasprops$jscomp$inline_1264_n$jscomp$inline_1023_tag$jscomp$inline_1022_tag$jscomp$inline_1312_x$jscomp$inline_1270$$, 
      null, null, null), $G__34351$jscomp$inline_1025_JSCompiler_temp$jscomp$169_v$jscomp$133_v$jscomp$inline_1020$$, 2, $G__34352$jscomp$inline_1026_compiler$jscomp$27_compiler$jscomp$inline_1021$$);
    case "r\x3e":
      $JSCompiler_inline_result$jscomp$1062_comp$jscomp$inline_1254_first_child$jscomp$inline_1267_fn_to_element_hasprops$jscomp$inline_1264_n$jscomp$inline_1023_tag$jscomp$inline_1022_tag$jscomp$inline_1312_x$jscomp$inline_1270$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34351$jscomp$inline_1025_JSCompiler_temp$jscomp$169_v$jscomp$133_v$jscomp$inline_1020$$, 1, null);
      $jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34351$jscomp$inline_1025_JSCompiler_temp$jscomp$169_v$jscomp$133_v$jscomp$inline_1020$$, 2, null);
      $jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$ = $cljs$core$truth_$$($jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$) ? 
      $jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$ : {};
      var $id$jscomp$inline_1303_temp__5757__auto___34336$jscomp$inline_1268_temp__5757__auto___34344$jscomp$inline_1259$$ = $reagent$impl$util$get_react_key$$($cljs$core$meta$$($G__34351$jscomp$inline_1025_JSCompiler_temp$jscomp$169_v$jscomp$133_v$jscomp$inline_1020$$));
      null != $id$jscomp$inline_1303_temp__5757__auto___34336$jscomp$inline_1268_temp__5757__auto___34344$jscomp$inline_1259$$ && ($jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$.key = $id$jscomp$inline_1303_temp__5757__auto___34336$jscomp$inline_1268_temp__5757__auto___34344$jscomp$inline_1259$$);
      return $reagent$impl$protocols$make_element$$($G__34352$jscomp$inline_1026_compiler$jscomp$27_compiler$jscomp$inline_1021$$, $G__34351$jscomp$inline_1025_JSCompiler_temp$jscomp$169_v$jscomp$133_v$jscomp$inline_1020$$, $JSCompiler_inline_result$jscomp$1062_comp$jscomp$inline_1254_first_child$jscomp$inline_1267_fn_to_element_hasprops$jscomp$inline_1264_n$jscomp$inline_1023_tag$jscomp$inline_1022_tag$jscomp$inline_1312_x$jscomp$inline_1270$$, $jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$, 
      3);
    case "f\x3e":
      return $reagent$impl$template$function_element$$($cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34351$jscomp$inline_1025_JSCompiler_temp$jscomp$169_v$jscomp$133_v$jscomp$inline_1020$$, 1, null), $G__34351$jscomp$inline_1025_JSCompiler_temp$jscomp$169_v$jscomp$133_v$jscomp$inline_1020$$, 2, $G__34352$jscomp$inline_1026_compiler$jscomp$27_compiler$jscomp$inline_1021$$);
    case "\x3c\x3e":
      return $jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34351$jscomp$inline_1025_JSCompiler_temp$jscomp$169_v$jscomp$133_v$jscomp$inline_1020$$, 1, null), $JSCompiler_inline_result$jscomp$1062_comp$jscomp$inline_1254_first_child$jscomp$inline_1267_fn_to_element_hasprops$jscomp$inline_1264_n$jscomp$inline_1023_tag$jscomp$inline_1022_tag$jscomp$inline_1312_x$jscomp$inline_1270$$ = 
      null == $jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$ || $cljs$core$map_QMARK_$$($jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$), 
      $jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$ = $reagent$impl$template$convert_prop_value$$($JSCompiler_inline_result$jscomp$1062_comp$jscomp$inline_1254_first_child$jscomp$inline_1267_fn_to_element_hasprops$jscomp$inline_1264_n$jscomp$inline_1023_tag$jscomp$inline_1022_tag$jscomp$inline_1312_x$jscomp$inline_1270$$ ? 
      $jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$ : null), $jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$ = 
      $cljs$core$truth_$$($jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$) ? $jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$ : 
      {}, $JSCompiler_inline_result$jscomp$1062_comp$jscomp$inline_1254_first_child$jscomp$inline_1267_fn_to_element_hasprops$jscomp$inline_1264_n$jscomp$inline_1023_tag$jscomp$inline_1022_tag$jscomp$inline_1312_x$jscomp$inline_1270$$ = 1 + ($JSCompiler_inline_result$jscomp$1062_comp$jscomp$inline_1254_first_child$jscomp$inline_1267_fn_to_element_hasprops$jscomp$inline_1264_n$jscomp$inline_1023_tag$jscomp$inline_1022_tag$jscomp$inline_1312_x$jscomp$inline_1270$$ ? 1 : 0), $id$jscomp$inline_1303_temp__5757__auto___34336$jscomp$inline_1268_temp__5757__auto___34344$jscomp$inline_1259$$ = 
      $reagent$impl$util$react_key_from_vec$$($G__34351$jscomp$inline_1025_JSCompiler_temp$jscomp$169_v$jscomp$133_v$jscomp$inline_1020$$), null != $id$jscomp$inline_1303_temp__5757__auto___34336$jscomp$inline_1268_temp__5757__auto___34344$jscomp$inline_1259$$ && ($jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$.key = 
      $id$jscomp$inline_1303_temp__5757__auto___34336$jscomp$inline_1268_temp__5757__auto___34344$jscomp$inline_1259$$), $reagent$impl$protocols$make_element$$($G__34352$jscomp$inline_1026_compiler$jscomp$27_compiler$jscomp$inline_1021$$, $G__34351$jscomp$inline_1025_JSCompiler_temp$jscomp$169_v$jscomp$133_v$jscomp$inline_1020$$, $shadow$js$shim$module$0react$$.Fragment, $jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$, 
      $JSCompiler_inline_result$jscomp$1062_comp$jscomp$inline_1254_first_child$jscomp$inline_1267_fn_to_element_hasprops$jscomp$inline_1264_n$jscomp$inline_1023_tag$jscomp$inline_1022_tag$jscomp$inline_1312_x$jscomp$inline_1270$$);
    default:
      if ($reagent$impl$util$named_QMARK_$$($jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$) || "string" === typeof $jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$) {
        a: {
          for (;;) {
            switch($JSCompiler_inline_result$jscomp$1062_comp$jscomp$inline_1254_first_child$jscomp$inline_1267_fn_to_element_hasprops$jscomp$inline_1264_n$jscomp$inline_1023_tag$jscomp$inline_1022_tag$jscomp$inline_1312_x$jscomp$inline_1270$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($G__34351$jscomp$inline_1025_JSCompiler_temp$jscomp$169_v$jscomp$133_v$jscomp$inline_1020$$, 0, null), $JSCompiler_inline_result$jscomp$1062_comp$jscomp$inline_1254_first_child$jscomp$inline_1267_fn_to_element_hasprops$jscomp$inline_1264_n$jscomp$inline_1023_tag$jscomp$inline_1022_tag$jscomp$inline_1312_x$jscomp$inline_1270$$ = 
            $cljs$core$name$$($JSCompiler_inline_result$jscomp$1062_comp$jscomp$inline_1254_first_child$jscomp$inline_1267_fn_to_element_hasprops$jscomp$inline_1264_n$jscomp$inline_1023_tag$jscomp$inline_1022_tag$jscomp$inline_1312_x$jscomp$inline_1270$$), $jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$ = 
            $JSCompiler_inline_result$jscomp$1062_comp$jscomp$inline_1254_first_child$jscomp$inline_1267_fn_to_element_hasprops$jscomp$inline_1264_n$jscomp$inline_1023_tag$jscomp$inline_1022_tag$jscomp$inline_1312_x$jscomp$inline_1270$$.indexOf("\x3e"), $jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$) {
              case -1:
                $jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$ = $reagent$impl$template$cache_get$$($reagent$impl$template$tag_name_cache$$, $JSCompiler_inline_result$jscomp$1062_comp$jscomp$inline_1254_first_child$jscomp$inline_1267_fn_to_element_hasprops$jscomp$inline_1264_n$jscomp$inline_1023_tag$jscomp$inline_1022_tag$jscomp$inline_1312_x$jscomp$inline_1270$$);
                if (null == $jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$) {
                  var $className$jscomp$inline_1304_className__$1$jscomp$inline_1305_vec__34233$jscomp$inline_1301$$ = $cljs$core$next$$($cljs$core$re_matches$$($reagent$impl$template$re_tag$$, $cljs$core$name$$($JSCompiler_inline_result$jscomp$1062_comp$jscomp$inline_1254_first_child$jscomp$inline_1267_fn_to_element_hasprops$jscomp$inline_1264_n$jscomp$inline_1023_tag$jscomp$inline_1022_tag$jscomp$inline_1312_x$jscomp$inline_1270$$)));
                  $jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($className$jscomp$inline_1304_className__$1$jscomp$inline_1305_vec__34233$jscomp$inline_1301$$, 0, null);
                  $id$jscomp$inline_1303_temp__5757__auto___34336$jscomp$inline_1268_temp__5757__auto___34344$jscomp$inline_1259$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($className$jscomp$inline_1304_className__$1$jscomp$inline_1305_vec__34233$jscomp$inline_1301$$, 1, null);
                  $className$jscomp$inline_1304_className__$1$jscomp$inline_1305_vec__34233$jscomp$inline_1301$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($className$jscomp$inline_1304_className__$1$jscomp$inline_1305_vec__34233$jscomp$inline_1301$$, 2, null);
                  $className$jscomp$inline_1304_className__$1$jscomp$inline_1305_vec__34233$jscomp$inline_1301$$ = null == $className$jscomp$inline_1304_className__$1$jscomp$inline_1305_vec__34233$jscomp$inline_1301$$ ? null : $clojure$string$replace$$($className$jscomp$inline_1304_className__$1$jscomp$inline_1305_vec__34233$jscomp$inline_1301$$, /\./, " ");
                  var $JSCompiler_inline_result$jscomp$1310_y$jscomp$inline_1318$$ = $jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$.indexOf("-");
                  $JSCompiler_inline_result$jscomp$1310_y$jscomp$inline_1318$$ = !$cljs$core$_EQ_$$.$cljs$core$IFn$_invoke$arity$2$(-1, $JSCompiler_inline_result$jscomp$1310_y$jscomp$inline_1318$$);
                  $jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$ = new $reagent$impl$template$HiccupTag$$($jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$, 
                  $id$jscomp$inline_1303_temp__5757__auto___34336$jscomp$inline_1268_temp__5757__auto___34344$jscomp$inline_1259$$, $className$jscomp$inline_1304_className__$1$jscomp$inline_1305_vec__34233$jscomp$inline_1301$$, $JSCompiler_inline_result$jscomp$1310_y$jscomp$inline_1318$$);
                  $JSCompiler_inline_result$jscomp$1062_comp$jscomp$inline_1254_first_child$jscomp$inline_1267_fn_to_element_hasprops$jscomp$inline_1264_n$jscomp$inline_1023_tag$jscomp$inline_1022_tag$jscomp$inline_1312_x$jscomp$inline_1270$$ = $reagent$impl$template$tag_name_cache$$[$JSCompiler_inline_result$jscomp$1062_comp$jscomp$inline_1254_first_child$jscomp$inline_1267_fn_to_element_hasprops$jscomp$inline_1264_n$jscomp$inline_1023_tag$jscomp$inline_1022_tag$jscomp$inline_1312_x$jscomp$inline_1270$$] = 
                  $jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$;
                } else {
                  $JSCompiler_inline_result$jscomp$1062_comp$jscomp$inline_1254_first_child$jscomp$inline_1267_fn_to_element_hasprops$jscomp$inline_1264_n$jscomp$inline_1023_tag$jscomp$inline_1022_tag$jscomp$inline_1312_x$jscomp$inline_1270$$ = $jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$;
                }
                $G__34351$jscomp$inline_1025_JSCompiler_temp$jscomp$169_v$jscomp$133_v$jscomp$inline_1020$$ = $reagent$impl$template$native_element$$($JSCompiler_inline_result$jscomp$1062_comp$jscomp$inline_1254_first_child$jscomp$inline_1267_fn_to_element_hasprops$jscomp$inline_1264_n$jscomp$inline_1023_tag$jscomp$inline_1022_tag$jscomp$inline_1312_x$jscomp$inline_1270$$, $G__34351$jscomp$inline_1025_JSCompiler_temp$jscomp$169_v$jscomp$133_v$jscomp$inline_1020$$, 1, $G__34352$jscomp$inline_1026_compiler$jscomp$27_compiler$jscomp$inline_1021$$);
                break a;
              case 0:
                $G__34351$jscomp$inline_1025_JSCompiler_temp$jscomp$169_v$jscomp$133_v$jscomp$inline_1020$$ = null;
                break a;
              default:
                $G__34351$jscomp$inline_1025_JSCompiler_temp$jscomp$169_v$jscomp$133_v$jscomp$inline_1020$$ = $cljs$core$with_meta$$(new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$JSCompiler_inline_result$jscomp$1062_comp$jscomp$inline_1254_first_child$jscomp$inline_1267_fn_to_element_hasprops$jscomp$inline_1264_n$jscomp$inline_1023_tag$jscomp$inline_1022_tag$jscomp$inline_1312_x$jscomp$inline_1270$$.substring(0, $jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$), 
                $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($cljs$core$with_meta$$($G__34351$jscomp$inline_1025_JSCompiler_temp$jscomp$169_v$jscomp$133_v$jscomp$inline_1020$$, null), 0, $JSCompiler_inline_result$jscomp$1062_comp$jscomp$inline_1254_first_child$jscomp$inline_1267_fn_to_element_hasprops$jscomp$inline_1264_n$jscomp$inline_1023_tag$jscomp$inline_1022_tag$jscomp$inline_1312_x$jscomp$inline_1270$$.substring($jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$ + 
                1))], null), $cljs$core$meta$$($G__34351$jscomp$inline_1025_JSCompiler_temp$jscomp$169_v$jscomp$133_v$jscomp$inline_1020$$));
            }
          }
        }
      } else {
        $G__34351$jscomp$inline_1025_JSCompiler_temp$jscomp$169_v$jscomp$133_v$jscomp$inline_1020$$ = $JSCompiler_inline_result$jscomp$1062_comp$jscomp$inline_1254_first_child$jscomp$inline_1267_fn_to_element_hasprops$jscomp$inline_1264_n$jscomp$inline_1023_tag$jscomp$inline_1022_tag$jscomp$inline_1312_x$jscomp$inline_1270$$.$cljs$core$IFn$_invoke$arity$3$ ? $JSCompiler_inline_result$jscomp$1062_comp$jscomp$inline_1254_first_child$jscomp$inline_1267_fn_to_element_hasprops$jscomp$inline_1264_n$jscomp$inline_1023_tag$jscomp$inline_1022_tag$jscomp$inline_1312_x$jscomp$inline_1270$$.$cljs$core$IFn$_invoke$arity$3$($jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$, 
        $G__34351$jscomp$inline_1025_JSCompiler_temp$jscomp$169_v$jscomp$133_v$jscomp$inline_1020$$, $G__34352$jscomp$inline_1026_compiler$jscomp$27_compiler$jscomp$inline_1021$$) : $JSCompiler_inline_result$jscomp$1062_comp$jscomp$inline_1254_first_child$jscomp$inline_1267_fn_to_element_hasprops$jscomp$inline_1264_n$jscomp$inline_1023_tag$jscomp$inline_1022_tag$jscomp$inline_1312_x$jscomp$inline_1270$$.call(null, $jsprops$jscomp$inline_1258_jsprops$jscomp$inline_1265_or__4212__auto__$jscomp$inline_1266_pos$jscomp$inline_1024_props$jscomp$inline_1257_props$jscomp$inline_1263_tag$jscomp$26_tag$jscomp$inline_1302_temp__5755__auto__$jscomp$inline_1271_v$jscomp$inline_1272$$, 
        $G__34351$jscomp$inline_1025_JSCompiler_temp$jscomp$169_v$jscomp$133_v$jscomp$inline_1020$$, $G__34352$jscomp$inline_1026_compiler$jscomp$27_compiler$jscomp$inline_1021$$);
      }
      return $G__34351$jscomp$inline_1025_JSCompiler_temp$jscomp$169_v$jscomp$133_v$jscomp$inline_1020$$;
  }
}
var $reagent$impl$template$default_compiler$$ = function($opts$jscomp$65$$) {
  var $id$jscomp$12$$ = $cljs$core$gensym$cljs$0core$0IFn$0_invoke$0arity$01$$("G__"), $fn_to_element$jscomp$2$$ = $cljs$core$truth_$$($cljs$cst$keyword$function_DASH_components$$.$cljs$core$IFn$_invoke$arity$1$($opts$jscomp$65$$)) ? $reagent$impl$template$maybe_function_element$$ : $reagent$impl$template$reag_element$$;
  if ("undefined" === typeof $reagent$$ || "undefined" === typeof $reagent$impl$$ || "undefined" === typeof $reagent$impl$template$$ || "undefined" === typeof $reagent$impl$template$t_reagent$0impl$0template34288$$) {
    $reagent$impl$template$t_reagent$0impl$0template34288$$ = function($opts$jscomp$66$$, $id$jscomp$13$$, $fn_to_element$jscomp$3$$, $meta34289$$) {
      this.$opts$ = $opts$jscomp$66$$;
      this.id = $id$jscomp$13$$;
      this.$fn_to_element$ = $fn_to_element$jscomp$3$$;
      this.$meta34289$ = $meta34289$$;
      this.$cljs$lang$protocol_mask$partition0$$ = 393216;
      this.$cljs$lang$protocol_mask$partition1$$ = 0;
    }, $reagent$impl$template$t_reagent$0impl$0template34288$$.prototype.$cljs$core$IWithMeta$_with_meta$arity$2$ = function($_34290$$, $meta34289__$1$$) {
      return new $reagent$impl$template$t_reagent$0impl$0template34288$$(this.$opts$, this.id, this.$fn_to_element$, $meta34289__$1$$);
    }, $reagent$impl$template$t_reagent$0impl$0template34288$$.prototype.$cljs$core$IMeta$_meta$arity$1$ = function() {
      return this.$meta34289$;
    }, $reagent$impl$template$t_reagent$0impl$0template34288$$.prototype.$reagent$impl$protocols$Compiler$get_id$arity$1$ = function() {
      return this.id;
    }, $reagent$impl$template$t_reagent$0impl$0template34288$$.prototype.$reagent$impl$protocols$Compiler$as_element$arity$2$ = function($this$$jscomp$209$$, $x$jscomp$699$$) {
      return "object" !== $goog$typeOf$$($x$jscomp$699$$) ? $x$jscomp$699$$ : $cljs$core$vector_QMARK_$$($x$jscomp$699$$) ? $reagent$impl$template$vec_to_elem$$($x$jscomp$699$$, this, this.$fn_to_element$) : (null == $x$jscomp$699$$ ? 0 : null != $x$jscomp$699$$ ? $x$jscomp$699$$.$cljs$lang$protocol_mask$partition0$$ & 64 || $cljs$core$PROTOCOL_SENTINEL$$ === $x$jscomp$699$$.$cljs$core$ISeq$$ || ($x$jscomp$699$$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ISeq$$, 
      $x$jscomp$699$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$ISeq$$, $x$jscomp$699$$)) ? $reagent$impl$template$expand_seq$$($x$jscomp$699$$, this) : $reagent$impl$util$named_QMARK_$$($x$jscomp$699$$) ? $cljs$core$name$$($x$jscomp$699$$) : (null != $x$jscomp$699$$ ? $x$jscomp$699$$.$cljs$lang$protocol_mask$partition0$$ & 2147483648 || $cljs$core$PROTOCOL_SENTINEL$$ === $x$jscomp$699$$.$cljs$core$IPrintWithWriter$$ || ($x$jscomp$699$$.$cljs$lang$protocol_mask$partition0$$ ? 0 : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IPrintWithWriter$$, 
      $x$jscomp$699$$)) : $cljs$core$native_satisfies_QMARK_$$($cljs$core$IPrintWithWriter$$, $x$jscomp$699$$)) ? $cljs$core$pr_str_with_opts$$($cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$([$x$jscomp$699$$]), $cljs$core$pr_opts$$()) : $x$jscomp$699$$;
    }, $reagent$impl$template$t_reagent$0impl$0template34288$$.prototype.$reagent$impl$protocols$Compiler$make_element$arity$5$ = function($this$$jscomp$210$$, $argv$jscomp$10$$, $component$jscomp$6$$, $jsprops$jscomp$12$$, $first_child$jscomp$7$$) {
      return $reagent$impl$template$make_element$$(this, $argv$jscomp$10$$, $component$jscomp$6$$, $jsprops$jscomp$12$$, $first_child$jscomp$7$$);
    }, $reagent$impl$template$t_reagent$0impl$0template34288$$.$cljs$lang$type$ = !0, $reagent$impl$template$t_reagent$0impl$0template34288$$.$cljs$lang$ctorStr$ = "reagent.impl.template/t_reagent$impl$template34288", $reagent$impl$template$t_reagent$0impl$0template34288$$.$cljs$lang$ctorPrWriter$ = function($writer__4451__auto__$jscomp$97$$) {
      return $cljs$core$_write$$($writer__4451__auto__$jscomp$97$$, "reagent.impl.template/t_reagent$impl$template34288");
    };
  }
  return new $reagent$impl$template$t_reagent$0impl$0template34288$$($opts$jscomp$65$$, $id$jscomp$12$$, $fn_to_element$jscomp$2$$, $cljs$core$PersistentArrayMap$EMPTY$$);
}($cljs$core$PersistentArrayMap$EMPTY$$);
var $shadow$js$shim$module$0express$$ = require("express");
var $shadow$js$shim$module$0cookie_parser$$ = require("cookie-parser");
var $shadow$js$shim$module$0body_parser$$ = require("body-parser");
var $shadow$js$shim$module$0serve_static$$ = require("serve-static");
var $shadow$js$shim$module$0express_session$$ = require("express-session");
var $shadow$js$shim$module$0morgan$$ = require("morgan");
var $shadow$js$shim$module$0node_html_parser$$ = require("node-html-parser");
var $shadow$js$shim$module$0csurf$$ = require("csurf");
var $shadow$js$shim$module$0keyv$$ = require("keyv");
var $sitefox$deps$parse_html$$ = $shadow$js$shim$module$0node_html_parser$$.parse;
var $shadow$js$shim$module$0path$$ = require("path");
var $shadow$js$shim$module$0util$$ = require("util");
var $shadow$js$shim$module$0rotating_file_stream$$ = require("rotating-file-stream");
function $sitefox$util$env$cljs$0core$0IFn$0_invoke$0arity$0variadic$$($k$jscomp$269_or__4212__auto__$jscomp$60$$, $default$$jscomp$1_p__33127$$) {
  $default$$jscomp$1_p__33127$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($default$$jscomp$1_p__33127$$, 0, null);
  $k$jscomp$269_or__4212__auto__$jscomp$60$$ = process.env[$k$jscomp$269_or__4212__auto__$jscomp$60$$];
  return $cljs$core$truth_$$($k$jscomp$269_or__4212__auto__$jscomp$60$$) ? $k$jscomp$269_or__4212__auto__$jscomp$60$$ : $default$$jscomp$1_p__33127$$;
}
;var $sitefox$db$database_url$$ = $sitefox$util$env$cljs$0core$0IFn$0_invoke$0arity$0variadic$$("DATABASE_URL", $cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["sqlite://./database.sqlite"]));
var $sitefox$web$server_dir$$, $or__4212__auto__$jscomp$inline_1032$$ = __dirname;
$sitefox$web$server_dir$$ = $cljs$core$truth_$$($or__4212__auto__$jscomp$inline_1032$$) ? $or__4212__auto__$jscomp$inline_1032$$ : "./";
function $sitefox$web$create_store$$($kv$$) {
  var $e$jscomp$181$$ = new $shadow$js$shim$module$0express_session$$.Store;
  $e$jscomp$181$$.destroy = function($sid$$, $callback$jscomp$59$$) {
    return $promesa$protocols$_bind$$(null, function() {
      return $promesa$protocols$_bind$$($kv$$["delete"].call($kv$$, $sid$$), function($result$jscomp$83$$) {
        return $promesa$protocols$_bind$$(null, function() {
          return $promesa$protocols$_bind$$($cljs$core$truth_$$($callback$jscomp$59$$) ? $callback$jscomp$59$$.$cljs$core$IFn$_invoke$arity$0$ ? $callback$jscomp$59$$.$cljs$core$IFn$_invoke$arity$0$() : $callback$jscomp$59$$.call(null) : null, function() {
            return $promesa$protocols$_promise$$($result$jscomp$83$$);
          });
        });
      });
    });
  };
  $e$jscomp$181$$.get = function($sid$jscomp$1$$, $callback$jscomp$60$$) {
    return $promesa$protocols$_bind$$(null, function() {
      return $promesa$protocols$_bind$$($kv$$.get.call($kv$$, $sid$jscomp$1$$), function($result$jscomp$84$$) {
        return $promesa$protocols$_bind$$(null, function() {
          return $promesa$protocols$_bind$$($callback$jscomp$60$$.$cljs$core$IFn$_invoke$arity$2$ ? $callback$jscomp$60$$.$cljs$core$IFn$_invoke$arity$2$(null, $result$jscomp$84$$) : $callback$jscomp$60$$.call(null, null, $result$jscomp$84$$), function() {
            return $promesa$protocols$_promise$$($result$jscomp$84$$);
          });
        });
      });
    });
  };
  $e$jscomp$181$$.set = function($sid$jscomp$2$$, $session$$, $callback$jscomp$61$$) {
    return $promesa$protocols$_bind$$(null, function() {
      return $promesa$protocols$_bind$$($kv$$.set.call($kv$$, $sid$jscomp$2$$, $session$$), function($result$jscomp$85$$) {
        return $promesa$protocols$_bind$$(null, function() {
          return $promesa$protocols$_bind$$($cljs$core$truth_$$($callback$jscomp$61$$) ? $callback$jscomp$61$$.$cljs$core$IFn$_invoke$arity$0$ ? $callback$jscomp$61$$.$cljs$core$IFn$_invoke$arity$0$() : $callback$jscomp$61$$.call(null) : null, function() {
            return $promesa$protocols$_promise$$($result$jscomp$85$$);
          });
        });
      });
    });
  };
  $e$jscomp$181$$.touch = function($sid$jscomp$3$$, $session$jscomp$1$$, $callback$jscomp$62$$) {
    return $promesa$protocols$_bind$$(null, function() {
      return $promesa$protocols$_bind$$($kv$$.set.call($kv$$, $sid$jscomp$3$$, $session$jscomp$1$$), function($result$jscomp$86$$) {
        return $promesa$protocols$_bind$$(null, function() {
          return $promesa$protocols$_bind$$($cljs$core$truth_$$($callback$jscomp$62$$) ? $callback$jscomp$62$$.$cljs$core$IFn$_invoke$arity$0$ ? $callback$jscomp$62$$.$cljs$core$IFn$_invoke$arity$0$() : $callback$jscomp$62$$.call(null) : null, function() {
            return $promesa$protocols$_promise$$($result$jscomp$86$$);
          });
        });
      });
    });
  };
  $e$jscomp$181$$.clear = function($callback$jscomp$63$$) {
    return $promesa$protocols$_bind$$(null, function() {
      return $promesa$protocols$_bind$$(call($kv$$, $cljs$cst$keyword$clear$$), function($result$jscomp$87$$) {
        return $promesa$protocols$_bind$$(null, function() {
          return $promesa$protocols$_bind$$($cljs$core$truth_$$($callback$jscomp$63$$) ? $callback$jscomp$63$$.$cljs$core$IFn$_invoke$arity$0$ ? $callback$jscomp$63$$.$cljs$core$IFn$_invoke$arity$0$() : $callback$jscomp$63$$.call(null) : null, function() {
            return $promesa$protocols$_promise$$($result$jscomp$87$$);
          });
        });
      });
    });
  };
  return $e$jscomp$181$$;
}
function $sitefox$web$add_default_middleware$$($app$jscomp$1$$) {
  var $kv_session_33955_logs_33953$$ = $shadow$js$shim$module$0path$$.join($sitefox$web$server_dir$$, "/logs"), $access_log_33954$$ = $shadow$js$shim$module$0rotating_file_stream$$.createStream("access.log", {interval:"7d", path:$kv_session_33955_logs_33953$$});
  $kv_session_33955_logs_33953$$ = new $shadow$js$shim$module$0keyv$$($sitefox$db$database_url$$, $cljs$core$clj__GT_js$$(new $cljs$core$PersistentArrayMap$$(null, 1, [$cljs$cst$keyword$namespace$$, "session"], null)));
  var $store_33956$$ = $sitefox$web$create_store$$($kv_session_33955_logs_33953$$);
  $app$jscomp$1$$.use(function() {
    var $G__33900$$ = {secret:$sitefox$util$env$cljs$0core$0IFn$0_invoke$0arity$0variadic$$("SECRET", $cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["DEVMODE"])), saveUninitialized:!1, resave:!0, cookie:{secure:"auto", httpOnly:!0, maxAge:31536E7}, store:$store_33956$$};
    return $shadow$js$shim$module$0express_session$$.$cljs$core$IFn$_invoke$arity$1$ ? $shadow$js$shim$module$0express_session$$.$cljs$core$IFn$_invoke$arity$1$($G__33900$$) : $shadow$js$shim$module$0express_session$$.call(null, $G__33900$$);
  }());
  $app$jscomp$1$$.use(function() {
    var $G__33906$$ = {stream:$access_log_33954$$};
    return $shadow$js$shim$module$0morgan$$.$cljs$core$IFn$_invoke$arity$2$ ? $shadow$js$shim$module$0morgan$$.$cljs$core$IFn$_invoke$arity$2$("combined", $G__33906$$) : $shadow$js$shim$module$0morgan$$.call(null, "combined", $G__33906$$);
  }());
  $app$jscomp$1$$.set("trust proxy", "loopback");
  $app$jscomp$1$$.use(function() {
    var $G__33907$$ = $sitefox$util$env$cljs$0core$0IFn$0_invoke$0arity$0variadic$$("SECRET", $cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["DEVMODE"]));
    return $shadow$js$shim$module$0cookie_parser$$.$cljs$core$IFn$_invoke$arity$1$ ? $shadow$js$shim$module$0cookie_parser$$.$cljs$core$IFn$_invoke$arity$1$($G__33907$$) : $shadow$js$shim$module$0cookie_parser$$.call(null, $G__33907$$);
  }());
  $app$jscomp$1$$.use($shadow$js$shim$module$0body_parser$$.json({limit:"10mb", extended:!0, parameterLimit:1000}));
  $app$jscomp$1$$.use($shadow$js$shim$module$0body_parser$$.urlencoded({extended:!0}));
  $app$jscomp$1$$.use($shadow$js$shim$module$0csurf$$.$cljs$core$IFn$_invoke$arity$0$ ? $shadow$js$shim$module$0csurf$$.$cljs$core$IFn$_invoke$arity$0$() : $shadow$js$shim$module$0csurf$$.call(null));
  return $app$jscomp$1$$;
}
function $sitefox$web$static_folder$$($app$jscomp$2$$, $route$$, $G__33915$jscomp$inline_1034_JSCompiler_inline_result$jscomp$176_dir$jscomp$8$$) {
  var $JSCompiler_temp_const$jscomp$174$$ = $app$jscomp$2$$.use;
  $G__33915$jscomp$inline_1034_JSCompiler_inline_result$jscomp$176_dir$jscomp$8$$ = $shadow$js$shim$module$0path$$.join($sitefox$web$server_dir$$, $G__33915$jscomp$inline_1034_JSCompiler_inline_result$jscomp$176_dir$jscomp$8$$);
  $G__33915$jscomp$inline_1034_JSCompiler_inline_result$jscomp$176_dir$jscomp$8$$ = $shadow$js$shim$module$0serve_static$$.$cljs$core$IFn$_invoke$arity$1$ ? $shadow$js$shim$module$0serve_static$$.$cljs$core$IFn$_invoke$arity$1$($G__33915$jscomp$inline_1034_JSCompiler_inline_result$jscomp$176_dir$jscomp$8$$) : $shadow$js$shim$module$0serve_static$$.call(null, $G__33915$jscomp$inline_1034_JSCompiler_inline_result$jscomp$176_dir$jscomp$8$$);
  $JSCompiler_temp_const$jscomp$174$$.call($app$jscomp$2$$, $route$$, $G__33915$jscomp$inline_1034_JSCompiler_inline_result$jscomp$176_dir$jscomp$8$$);
  return $app$jscomp$2$$;
}
function $sitefox$web$reset_routes$$($app$jscomp$3$$) {
  var $router$$ = $app$jscomp$3$$._router;
  $cljs$core$truth_$$($router$$) && (console.error(["Deleting ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($router$$.stack.length), " routes"].join("")), $app$jscomp$3$$._router = null);
  $sitefox$web$add_default_middleware$$($app$jscomp$3$$);
}
function $sitefox$web$serve$$($app$jscomp$4$$) {
  var $host$$ = $sitefox$util$env$cljs$0core$0IFn$0_invoke$0arity$0variadic$$("BIND_ADDRESS", $cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["127.0.0.1"])), $port$jscomp$1$$ = $sitefox$util$env$cljs$0core$0IFn$0_invoke$0arity$0variadic$$("PORT", $cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["8000"])), $srv$$ = $app$jscomp$4$$.listen.bind($app$jscomp$4$$, $port$jscomp$1$$, $host$$);
  return new Promise(function($res$jscomp$22$$) {
    function $G__33929$$() {
      var $G__33930$$ = new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$host$$, $port$jscomp$1$$], null);
      return $res$jscomp$22$$.$cljs$core$IFn$_invoke$arity$1$ ? $res$jscomp$22$$.$cljs$core$IFn$_invoke$arity$1$($G__33930$$) : $res$jscomp$22$$.call(null, $G__33930$$);
    }
    return $srv$$.$cljs$core$IFn$_invoke$arity$1$ ? $srv$$.$cljs$core$IFn$_invoke$arity$1$($G__33929$$) : $srv$$.call(null, $G__33929$$);
  });
}
function $sitefox$web$start$$() {
  var $app$jscomp$5$$ = $sitefox$web$add_default_middleware$$($shadow$js$shim$module$0express$$.$cljs$core$IFn$_invoke$arity$0$ ? $shadow$js$shim$module$0express$$.$cljs$core$IFn$_invoke$arity$0$() : $shadow$js$shim$module$0express$$.call(null));
  return $sitefox$web$serve$$($app$jscomp$5$$).then(function($p__33932_port$jscomp$2$$) {
    var $host$jscomp$1$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__33932_port$jscomp$2$$, 0, null);
    $p__33932_port$jscomp$2$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__33932_port$jscomp$2$$, 1, null);
    return new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$app$jscomp$5$$, $host$jscomp$1$$, $p__33932_port$jscomp$2$$], null);
  });
}
;(function() {
  var $log_fn_logs$$ = [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$(__dirname), "/logs"].join(""), $error_log$$ = $shadow$js$shim$module$0rotating_file_stream$$.createStream("error.log", $cljs$core$clj__GT_js$$(new $cljs$core$PersistentArrayMap$$(null, 3, [$cljs$cst$keyword$interval$$, "7d", $cljs$cst$keyword$path$$, $log_fn_logs$$, $cljs$cst$keyword$teeToStdout$$, !0], null)));
  $log_fn_logs$$ = function() {
    function $G__33115$$($var_args$jscomp$385$$) {
      var $G__33116__i_args$jscomp$154$$ = null;
      if (0 < arguments.length) {
        $G__33116__i_args$jscomp$154$$ = 0;
        for (var $G__33116__a$$ = Array(arguments.length - 0); $G__33116__i_args$jscomp$154$$ < $G__33116__a$$.length;) {
          $G__33116__a$$[$G__33116__i_args$jscomp$154$$] = arguments[$G__33116__i_args$jscomp$154$$ + 0], ++$G__33116__i_args$jscomp$154$$;
        }
        $G__33116__i_args$jscomp$154$$ = new $cljs$core$IndexedSeq$$($G__33116__a$$, 0, null);
      }
      return $G__33115__delegate$$.call(this, $G__33116__i_args$jscomp$154$$);
    }
    function $G__33115__delegate$$($args$jscomp$153_out$jscomp$12$$) {
      var $vec__33010_vec__33013$$ = (new Date).toISOString().split("T"), $d$jscomp$123$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__33010_vec__33013$$, 0, null);
      $vec__33010_vec__33013$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__33010_vec__33013$$, 1, null).split(".");
      var $t__$1$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__33010_vec__33013$$, 0, null);
      $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($vec__33010_vec__33013$$, 1, null);
      $args$jscomp$153_out$jscomp$12$$ = [$cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($d$jscomp$123$$), " ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($t__$1$$), " ", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$($shadow$js$shim$module$0util$$.format, $cljs$core$clj__GT_js$$($args$jscomp$153_out$jscomp$12$$))), "\n"].join("");
      return $error_log$$.write($args$jscomp$153_out$jscomp$12$$);
    }
    $G__33115$$.$cljs$lang$maxFixedArity$ = 0;
    $G__33115$$.$cljs$lang$applyTo$ = function($arglist__33117_args$jscomp$155$$) {
      $arglist__33117_args$jscomp$155$$ = $cljs$core$seq$$($arglist__33117_args$jscomp$155$$);
      return $G__33115__delegate$$($arglist__33117_args$jscomp$155$$);
    };
    $G__33115$$.$cljs$core$IFn$_invoke$arity$variadic$ = $G__33115__delegate$$;
    return $G__33115$$;
  }();
  console.log = $log_fn_logs$$;
  console.error = $log_fn_logs$$;
  console._logstream = $error_log$$;
  return $log_fn_logs$$;
})();
var $rogule$server$server$$ = new $cljs$core$Atom$$(null), $rogule$server$template$$ = $shadow$js$shim$module$0fs$$.readFileSync("public/index.html");
function $rogule$server$my_page$$() {
  return new $cljs$core$PersistentVector$$(null, 4, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$keyword$main$$, new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$keyword$h1$$, "My page"], null), new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$keyword$p$$, "This is a server rendered page."], null), new $cljs$core$PersistentVector$$(null, 2, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$keyword$p$$, 
  new $cljs$core$PersistentVector$$(null, 3, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$cljs$cst$keyword$a$$, new $cljs$core$PersistentArrayMap$$(null, 1, [$cljs$cst$keyword$href$$, "/"], null), "Return to the app"], null)], null)], null);
}
function $rogule$server$api_example$$($_req$$, $res$jscomp$24$$) {
  return $res$jscomp$24$$.json($cljs$core$clj__GT_js$$(new $cljs$core$PersistentArrayMap$$(null, 1, [$cljs$cst$keyword$question$$, 42], null)));
}
function $rogule$server$setup_routes$$($app$jscomp$6$$) {
  $sitefox$web$reset_routes$$($app$jscomp$6$$);
  $app$jscomp$6$$.get.call($app$jscomp$6$$, "/mypage", function($JSCompiler_temp_const$jscomp$171_p1__7096_SHARP_$$, $p2__7095_SHARP_$$) {
    $JSCompiler_temp_const$jscomp$171_p1__7096_SHARP_$$ = $p2__7095_SHARP_$$.send;
    var $reagent_forms$jscomp$inline_1038$$ = new $cljs$core$PersistentVector$$(null, 1, 5, $cljs$core$PersistentVector$EMPTY_NODE$$, [$rogule$server$my_page$$], null), $t$jscomp$inline_1039$$ = $sitefox$deps$parse_html$$.$cljs$core$IFn$_invoke$arity$1$ ? $sitefox$deps$parse_html$$.$cljs$core$IFn$_invoke$arity$1$($rogule$server$template$$) : $sitefox$deps$parse_html$$.call(null, $rogule$server$template$$);
    var $el$jscomp$inline_1040$$ = $t$jscomp$inline_1039$$.querySelector("body");
    a: {
      $reagent$ratom$flush_BANG_$$();
      var $_STAR_non_reactive_STAR__orig_val__34322$jscomp$inline_1308$$ = $reagent$impl$util$_STAR_non_reactive_STAR_$$;
      $reagent$impl$util$_STAR_non_reactive_STAR_$$ = !0;
      try {
        var $rendered$jscomp$inline_1041$$ = $shadow$js$shim$module$0react_dom$0server$$.renderToStaticMarkup($reagent$impl$protocols$as_element$$($reagent$impl$template$default_compiler$$, $reagent_forms$jscomp$inline_1038$$));
        break a;
      } finally {
        $reagent$impl$util$_STAR_non_reactive_STAR_$$ = $_STAR_non_reactive_STAR__orig_val__34322$jscomp$inline_1308$$;
      }
      $rendered$jscomp$inline_1041$$ = void 0;
    }
    if (null == $el$jscomp$inline_1040$$ || !1 === $el$jscomp$inline_1040$$) {
      throw Error(['HTML element not found: "', $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$("body"), '"'].join(""));
    }
    $el$jscomp$inline_1040$$.set_content.call($el$jscomp$inline_1040$$, $rendered$jscomp$inline_1041$$);
    return $JSCompiler_temp_const$jscomp$171_p1__7096_SHARP_$$.call($p2__7095_SHARP_$$, $t$jscomp$inline_1039$$.toString());
  });
  $app$jscomp$6$$.get.call($app$jscomp$6$$, "/api/example.json", $rogule$server$api_example$$);
  $sitefox$web$static_folder$$($app$jscomp$6$$, "/twemoji", "node_modules/twemoji-emojis/vendor");
  return $sitefox$web$static_folder$$($app$jscomp$6$$, "/", "public");
}
;$cljs$core$apply$cljs$0core$0IFn$0_invoke$0arity$02$$(function() {
  return $promesa$protocols$_bind$$(null, function() {
    return $promesa$protocols$_bind$$($sitefox$web$start$$(), function($p__7097$$) {
      var $app$jscomp$7$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__7097$$, 0, null), $host$jscomp$3$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__7097$$, 1, null), $port$jscomp$3$$ = $cljs$core$nth$cljs$0core$0IFn$0_invoke$0arity$03$$($p__7097$$, 2, null);
      return $promesa$protocols$_bind$$(null, function() {
        return $promesa$protocols$_bind$$($cljs$core$reset_BANG_$$($rogule$server$server$$, $app$jscomp$7$$), function() {
          return $promesa$protocols$_bind$$($rogule$server$setup_routes$$($app$jscomp$7$$), function() {
            var $JSCompiler_temp$jscomp$1056_objs$jscomp$inline_1277_opts$jscomp$inline_1280$$ = $cljs$core$prim_seq$cljs$0core$0IFn$0_invoke$0arity$02$$(["Serving on", ["http://", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($host$jscomp$3$$), ":", $cljs$core$str$$.$cljs$core$IFn$_invoke$arity$1$($port$jscomp$3$$)].join("")]), $opts$jscomp$inline_1278$$ = $cljs$core$assoc$$.$cljs$core$IFn$_invoke$arity$3$($cljs$core$pr_opts$$(), $cljs$cst$keyword$readably$$, !1);
            $cljs$core$string_print$$($cljs$core$pr_str_with_opts$$($JSCompiler_temp$jscomp$1056_objs$jscomp$inline_1277_opts$jscomp$inline_1280$$, $opts$jscomp$inline_1278$$));
            $cljs$core$truth_$$($cljs$core$_STAR_print_newline_STAR_$$) ? ($JSCompiler_temp$jscomp$1056_objs$jscomp$inline_1277_opts$jscomp$inline_1280$$ = $cljs$core$pr_opts$$(), $cljs$core$string_print$$("\n"), $JSCompiler_temp$jscomp$1056_objs$jscomp$inline_1277_opts$jscomp$inline_1280$$ = ($cljs$core$get$$.$cljs$core$IFn$_invoke$arity$2$($JSCompiler_temp$jscomp$1056_objs$jscomp$inline_1277_opts$jscomp$inline_1280$$, $cljs$cst$keyword$flush_DASH_on_DASH_newline$$), null)) : $JSCompiler_temp$jscomp$1056_objs$jscomp$inline_1277_opts$jscomp$inline_1280$$ = 
            null;
            return $promesa$protocols$_promise$$($JSCompiler_temp$jscomp$1056_objs$jscomp$inline_1277_opts$jscomp$inline_1280$$);
          });
        });
      });
    });
  });
}, process.argv.slice(2));

})();

//# sourceMappingURL=server.js.map
