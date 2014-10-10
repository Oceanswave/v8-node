This folder contains clones of v8 branches.

for instance:

git clone -b 3.29 https://github.com/v8/v8.git

then, in the 3.29 folder, exec stuff from
https://code.google.com/p/v8/wiki/BuildingWithGYP

You should already have python 2.x.x installed -- use choco on windows if not.

```
svn co http://src.chromium.org/svn/trunk/deps/third_party/cygwin third_party/cygwin --revision 66844
```

```
svn co https://src.chromium.org/chrome/trunk/deps/third_party/icu52 third_party/icu --revision 277999
```

```
svn co http://googletest.googlecode.com/svn/trunk testing/gtest --revision 643
```

```
svn co http://googlemock.googlecode.com/svn/trunk testing/gmock --revision 410
```

[Reference](https://code.google.com/p/v8/wiki/BuildingWithGYP)