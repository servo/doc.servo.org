initSidebarItems({"enum":[["ClipItemKeyKind",""],["ClipItemKind",""],["ClipNodeKind","Helper to identify simple clips (normal rects) from other kinds of clips, which can often be handled via fast code paths."],["ClipResult",""],["ClipSpaceConversion","A helper struct for converting between coordinate systems of clip sources and primitives."]],"fn":[["add_clip_node_to_current_chain",""],["compute_box_shadow_parameters",""],["projected_rect_contains",""],["rounded_rectangle_contains_point",""]],"struct":[["ClipChainBuilder","A helper used during scene building to construct (internal) clip chains from the public API definitions (a hierarchy of ClipIds)"],["ClipChainId",""],["ClipChainInstance",""],["ClipChainLevel","Maintains a (flattened) list of clips for a given level in the surface level stack."],["ClipChainNode",""],["ClipChainStack","Maintains a stack of clip chain ids that are currently active, when a clip exists on a picture that has no surface, and is passed on down to the child primitive(s)."],["ClipInstance","Defines a clip that is positioned by a specific spatial node"],["ClipInternData","The data available about an interned clip node during scene building"],["ClipItem",""],["ClipItemKey",""],["ClipNode",""],["ClipNodeFlags",""],["ClipNodeInfo",""],["ClipNodeInstance",""],["ClipNodeRange",""],["ClipRegion",""],["ClipStore","The main clipping public interface that other modules access."],["ClipTemplate","A clip template defines clips in terms of the public API. Specifically, this is a parent `ClipId` and some number of clip instances. See the CLIPPING_AND_POSITIONING.md document in doc/ for more information."],["ComplexTranslateIter",""],["Geometry","Represents a local rect and a device space rectangles that are either outside or inside bounds."]],"type":[["ClipDataHandle",""],["ClipDataStore",""]]});