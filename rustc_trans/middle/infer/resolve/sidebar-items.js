initSidebarItems({"fn":[["fully_resolve","Full type resolution replaces all type and region variables with their concrete results. If any variable cannot be replaced (never unified, etc) then an `Err` result is returned."]],"struct":[["OpportunisticTypeResolver","The opportunistic type resolver can be used at any time. It simply replaces type variables that have been unified with the things they have been unified with (similar to `shallow_resolve`, but deep). This is useful for printing messages etc but also required at various points for correctness."]]});