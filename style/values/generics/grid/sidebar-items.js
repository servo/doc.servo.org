initSidebarItems({"constant":[["MAX_GRID_LINE","See above."],["MIN_GRID_LINE","These are the limits that we choose to clamp grid line numbers to. http://drafts.csswg.org/css-grid/#overlarge-grids line_num is clamped to this range at parse time."]],"enum":[["GenericGridTemplateComponent","Variants for `<grid-template-rows> | <grid-template-columns>`"],["GenericTrackBreadth","A track breadth for explicit grid track sizing. It’s generic solely to avoid re-implementing it for the computed type."],["GenericTrackListValue","Track list values. Can be  or "],["GenericTrackSize","A `<track-size>` type for explicit grid track sizing. Like `<track-breadth>`, this is generic only to avoid code bloat. It only takes `<length-percentage>`"],["RepeatCount","The initial argument of the `repeat` function."]],"fn":[["concat_serialize_idents","Helper function for serializing identifiers with a prefix and suffix, used for serializing  (in grid)."]],"struct":[["GenericGridLine","A `<grid-line>` type."],["GenericImplicitGridTracks","A `<track-size>+`. We use the empty slice as `auto`, and always parse `auto` as an empty slice. This means it’s impossible to have a slice containing only one auto item."],["GenericTrackList","A grid `<track-list>` type."],["GenericTrackRepeat","The structure containing `<line-names>` and `<track-size>` values."],["LineNameList","The `<line-name-list>` for subgrids."]]});