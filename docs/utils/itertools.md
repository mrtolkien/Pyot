# Itertools 

Module: `pyot.utils.itertools` 

### _class_ FrozenGenerator

> Generator that isolates the original list by returning copies of objects when iterated.
> Used for preventing memory leaks of self-filled objects at the cost of performance.

Extends: 
* `Generic` 

Definitions: 
* `__init__` -> `None` 
  * `li`: `List[~T]` 
* `__iter__` -> `Iterator[~T]` 
* `__new__` -> `None` 
  * `cls`: `None` 
  * `args`: `None` 
  * `kwds`: `None` 


### _alias_ `frozen_generator` ~ `FrozenGenerator` 


### _function_ `swapped_dict` -> `Dict[~V, ~K]` 
* `dic`: `Dict[~K, ~V]` 
> Swap keys and values of a dictionary 


