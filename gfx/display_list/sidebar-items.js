initSidebarItems({"mod":[["optimizer","Transforms a display list to produce a visually-equivalent, but cheaper-to-paint, one."]],"enum":[["BoxShadowClipMode","How a box shadow should be clipped."],["DisplayItem","One drawing command in the list."],["DisplayItemIterator",""],["TextOrientation",""]],"fn":[["find_stacking_context_with_layer_id","Returns the stacking context in the given tree of stacking contexts with a specific layer ID."]],"struct":[["BaseDisplayItem","Information common to all display items."],["BorderDisplayItem","Paints a border."],["BorderRadii","Information about the border radii."],["BoxShadowDisplayItem","Paints a box shadow per CSS-BACKGROUNDS."],["ClippingRegion","A clipping region for a display item. Currently, this can describe rectangles, rounded rectangles (for `border-radius`), or arbitrary intersections of the two. Arbitrary transforms are not supported because those are handled by the higher-level `StackingContext` abstraction."],["ComplexClippingRegion","A complex clipping region. These don't as easily admit arbitrary intersection operations, so they're stored in a list over to the side. Currently a complex clipping region is just a rounded rectangle, but the CSS WGs will probably make us throw more stuff in here eventually."],["DisplayItemMetadata","Metadata attached to each display item. This is useful for performing auxiliary tasks with the display list involving hit testing: finding the originating DOM node and determining the cursor to use when the element is hovered over."],["DisplayList","Display items that make up a stacking context. \"Steps\" here refer to the steps in CSS 2.1 Appendix E."],["GradientDisplayItem","Paints a gradient."],["GradientStop",""],["ImageDisplayItem","Paints an image."],["LineDisplayItem","Paints a line segment."],["OpaqueNode","An opaque handle to a node. The only safe operation that can be performed on this node is to compare it to another opaque handle or to another node."],["SolidColorDisplayItem","Paints a solid color."],["StackingContext","Represents one CSS stacking context, which may or may not have a hardware layer."],["TextDisplayItem","Paints text."]],"static":[["BLUR_INFLATION_FACTOR","The factor that we multiply the blur radius by in order to inflate the boundaries of display items that involve a blur. This ensures that the display item boundaries include all the ink."]]});