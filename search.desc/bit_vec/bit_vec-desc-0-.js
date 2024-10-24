searchState.loadedDescShard("bit_vec", 0, "Description\nAbstracts over a pile of bits (basically unsigned …\nThe bitvector type.\nAn iterator over the blocks of a <code>BitVec</code>.\nAn iterator for <code>BitVec</code>.\nAn iterator for mutable references to the bits in a <code>BitVec</code>.\nReturns <code>true</code> if all bits are 1.\nCalculates the bitwise <code>and</code> of two bitvectors.\nReturns <code>true</code> if any bit is 1.\nMoves all bits from <code>other</code> into <code>Self</code>, leaving <code>other</code> empty.\nHow many bits it has\nIterator over the underlying blocks of data\nComputes how many blocks are needed to store that many bits\nIterator over mutable refs to the underlying blocks of …\nHow many bytes it has\nReturns the capacity in bits for this bit vector. …\nClears all bits in this vector.\nCount the number of 1’s in the bitwise repr\nReturns the number of ones in the binary representation.\nCount the number of 0’s in the bitwise repr\nReturns the number of zeros in the binary representation.\nCalculates the difference between two bitvectors.\nEnsure the invariant for the last block.\nCompares a <code>BitVec</code> to a slice of <code>bool</code>s. Both the <code>BitVec</code> and …\nAn operation might screw up the unused bits in the last …\nOperations such as change detection for xnor, nor and nand …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert a byte into this type (lowest-order bits set)\nTransforms a byte-vector into a <code>BitVec</code>. Each byte becomes …\nCreates a <code>BitVec</code> that holds <code>nbits</code> elements, setting each …\nCreates a <code>BitVec</code> of the specified length where the value …\nRetrieves the value at index <code>i</code>, or <code>None</code> if the index is …\nRetrieves a smart pointer to the value at index <code>i</code>, or <code>None</code> …\nRetrieves the value at index <code>i</code>, without doing bounds …\nRetrieves a smart pointer to the value at index <code>i</code>, without …\nGrows the <code>BitVec</code> in-place, adding <code>n</code> copies of <code>value</code> to the …\nInserts a given bit at index <code>at</code>, shifting all bits after …\nCalculates the intersection of two bitvectors. This acts …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if there are no bits in this vector\nCheck whether last block’s invariant is fine.\nReturns an iterator over the elements of the vector in …\nReturns an iterator over mutable smart pointers to the …\nHelper for procedures involving spare space in the last …\nHelper for procedures involving spare space in the last …\nReturns the total number of bits in this vector\nComputes the bitmask for the final word of the vector\nCalculates the nand of two bitvectors.\nThe number of valid bits in the internal representation\nFlips all bits.\nCreates an empty <code>BitVec</code>.\nReturns <code>true</code> if all bits are 0.\nCalculates the nor of two bitvectors.\nGet <code>1</code>\nCalculates the bitwise <code>or</code> of two bitvectors.\nRemoves the last bit from the <code>BitVec</code>, and returns it. …\nApplies the given operation to the blocks of self and …\nPushes a <code>bool</code> onto the end.\nReserves capacity for at least <code>additional</code> more bits to be …\nReserves the minimum capacity for exactly <code>additional</code> more …\nSets the value of a bit at an index <code>i</code>.\nSets all bits to 1.\nSets the number of bits that this <code>BitVec</code> considers …\nShrinks the capacity of the underlying storage as much as …\nSplits the <code>BitVec</code> into two at the given bit, retaining the …\nExposes the raw block storage of this <code>BitVec</code>.\nInternal representation of the bit vector\nExposes the raw block storage of this <code>BitVec</code>.\nOrganises the bits into bytes, such that the first bit in …\nShortens a <code>BitVec</code>, dropping excess elements.\nCalculates the union of two bitvectors. This acts like the …\nConstructs a new, empty <code>BitVec</code> with the specified capacity.\nCalculates the xnor of two bitvectors.\nCalculates the xor of two bitvectors.\nGet <code>0</code>")