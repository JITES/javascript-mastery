In order to achieve asynchronicity, node uses an event loop. The event loop is a single-threaded semi-infinite loop, which uses an event queue to queue all the io and/or timer callbacks and execute them one by one sequentially. The event queue is not a single queue, rather a collection of queues and heaps.

Event loop

The above diagram shows the event loop's order of execution. Each box will be referred to as a phase of the event loop.

Phases of event loop
Event loop consists of the following phases.

Timers - in this phase callbacks of expired timers added using setTimeout or interval functions added using setInterval are executed.

Pending callbacks - executes I/O callbacks deferred to the next loop iteration.

Idle handlers - perform some libuv internal stuff, used internally.

Prepare handlers - perform some prep-work before polling for I/O, used internally.

I/O poll - retrieve new I/O events; execute I/O related callbacks.

Check handlers - setImmediate() callbacks are invoked here.

Close callbacks - execute close handlers



----
