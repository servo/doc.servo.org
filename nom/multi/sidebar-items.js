initSidebarItems({"fn":[["fill","Runs the embedded parser repeatedly, filling the given slice with results. This parser fails if the input runs out before the given slice is full."],["fold_many0","Applies a parser until it fails and accumulates the results using a given function and initial value."],["fold_many1","Applies a parser until it fails and accumulates the results using a given function and initial value. Fails if the embedded parser does not succeed at least once."],["fold_many_m_n","Applies a parser `n` times or until it fails and accumulates the results using a given function and initial value. Fails if the embedded parser does not succeed at least `m` times."],["length_data","Gets a number from the parser and returns a subslice of the input of that size. If the parser returns `Incomplete`, `length_data` will return an error."],["length_value","Gets a number from the first parser, takes a subslice of the input of that size, then applies the second parser on that subslice. If the second parser returns `Incomplete`, `length_value` will return an error."],["many0_count","Repeats the embedded parser until it fails and returns the number of successful iterations."],["many1_count","Repeats the embedded parser until it fails and returns the number of successful iterations. Fails if the embedded parser does not succeed at least once."]],"mod":[["macros","Parsers for applying parsers multiple times"]]});