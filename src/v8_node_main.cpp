#include <node.h>
#include <v8.h>

namespace {

using namespace v8;

Handle<Value> Method(const Arguments& args) {
  HandleScope scope;
  return scope.Close(String::New("world"));
}

// Main entrypoint
void init(Handle<Object> exports) 
{
	exports->Set(String::NewSymbol("hello"),
      FunctionTemplate::New(Method)->GetFunction());
}

} // unnamed namespace

NODE_MODULE(v8_node, init)