initSidebarItems({"enum":[["Transitions","A representation of transitions in an NFA."]],"fn":[["escape","Return the given byte as its escaped string form."],["get_two_mut","Safely return two mutable borrows to two different locations in the given slice."],["sparse_iter","Iterate over all possible byte transitions given a sparse set."]],"struct":[["AllBytesIter","An iterator over every byte value."],["Builder","A simple builder for configuring the NFA construction of Aho-Corasick."],["Compiler","A compiler uses a builder configuration and builds up the NFA formulation of an Aho-Corasick automaton. This roughly corresponds to the standard formulation described in textbooks."],["Dense","Represents the transitions for a single dense state."],["IterTransitionsMut","Iterator over transitions in a state, skipping transitions to `fail_id()`."],["NFA","An Aho-Corasick automaton, represented as an NFA."],["QueuedSet","A set of state identifiers used to avoid revisiting the same state multiple times when filling in failure transitions."],["State","A representation of an NFA state for an Aho-Corasick automaton."]],"type":[["PatternID","The identifier for a pattern, which is simply the position of the pattern in the sequence of patterns given by the caller."],["PatternLength","The length of a pattern, in bytes."]]});