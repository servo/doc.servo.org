initSidebarItems({"enum":[["ClipScrollNodeType",""],["ClipType",""],["DisplayItem","One drawing command in the list."],["DisplayListSection","Display list sections that make up a stacking context. Each section  here refers to the steps in CSS 2.1 Appendix E."],["StackingContextType",""],["TextOrientation",""]],"fn":[["empty_common_item_properties",""]],"static":[["BLUR_INFLATION_FACTOR","The factor that we multiply the blur radius by in order to inflate the boundaries of display items that involve a blur. This ensures that the display item boundaries include all the ink."]],"struct":[["BaseDisplayItem","Information common to all display items."],["ClipScrollNode","Defines a clip scroll node."],["ClipScrollNodeIndex","An index into the vector of ClipScrollNodes. During WebRender conversion these nodes are given ClipIds."],["ClippingAndScrolling","A set of indices into the clip scroll node vector for a given item."],["ClippingRegion","A clipping region for a display item. Currently, this can describe rectangles, rounded rectangles (for `border-radius`), or arbitrary intersections of the two. Arbitrary transforms are not supported because those are handled by the higher-level `StackingContext` abstraction."],["CommonDisplayItem",""],["DefineClipScrollNodeItem","Starts a group of items inside a particular scroll root."],["DisplayItemMetadata","Metadata attached to each display item. This is useful for performing auxiliary threads with the display list involving hit testing: finding the originating DOM node and determining the cursor to use when the element is hovered over."],["DisplayList",""],["IframeDisplayItem","Paints an iframe."],["OpaqueNode","An opaque handle to a node, which, unlike UnsafeNode, cannot be transformed back into a non-opaque representation. The only safe operation that can be performed on this node is to compare it to another opaque handle or to another OpaqueNode."],["PopAllTextShadowsDisplayItem","Defines a text shadow that affects all items until the next PopTextShadow."],["PopStackingContextItem","Defines a stacking context."],["PushStackingContextItem","Defines a stacking context."],["PushTextShadowDisplayItem","Defines a text shadow that affects all items until the paired PopTextShadow."],["StackingContext","Represents one CSS stacking context, which may or may not have a hardware layer."],["StickyFrameData",""],["WebRenderImageInfo",""]],"type":[["ScrollOffsetMap","The type of the scroll offset list. This is only populated if WebRender is in use."]]});