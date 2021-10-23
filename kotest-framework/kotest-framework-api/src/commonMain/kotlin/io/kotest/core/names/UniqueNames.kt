package io.kotest.core.names

object UniqueNames {

   /**
    * Returns a unique ident for the given ident and current idents.
    *
    * @param genNext returns the next ident to consider, using the iteration count and the raw ident
    */
   fun unique(
      ident: String,
      indents: Set<String>,
      genNext: (String, Int) -> String = { s, k -> "($k) $s" }
   ): String? {
      if (!indents.contains(ident)) return null
      var n = 1
      fun next() = genNext(ident, n)
      while (indents.contains(next()))
         n++
      return next()
   }
}
