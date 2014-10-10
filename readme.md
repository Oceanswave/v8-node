v8-node
====================

This module builds the V8 engine and wraps it, allowing for v8 to be accessable to node.

Yeah, some of you might be saying wha?


In the quest for the perfect sandbox, one that is able to execute untrusted code, one needs to think differently.

A separate v8 instance acts as a perfect sandbox as it is uncluttered with node.js globals.

