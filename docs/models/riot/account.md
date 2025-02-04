# Account 

Module: `pyot.models.riot.account` 

### _class_ Account

Type: `PyotCore` 

Definitions: 
* `__init__` -> `None` 
  * `puuid`: `str = None` 
  * `game_name`: `str = None` 
  * `tag_line`: `str = None` 
  * `region`: `str = models.riot.DEFAULT_REGION` 

Endpoints: 
* `account_v1_by_puuid`: `['puuid']` 
* `account_v1_by_riot_id`: `['game_name', 'tag_line']` 

Methods: 
* _method_ `active_shard` -> `None` 
  * `game`: `str` 

Attributes: 
* `puuid` -> `str` 
* `game_name` -> `str` 
* `tag_line` -> `str` 

Properties: 
* _property_ `region` -> `str` 


### _class_ ActiveShard

Type: `PyotCore` 

Definitions: 
* `__init__` -> `None` 
  * `puuid`: `str = None` 
  * `game`: `str = None` 
  * `region`: `str = models.riot.DEFAULT_REGION` 

Endpoints: 
* `account_v1_active_shard`: `['puuid', 'game']` 

Attributes: 
* `puuid` -> `str` 
* `game` -> `str` 
* `active_shard` -> `str` 

Properties: 
* _property_ `account` -> `None` 
* _property_ `region` -> `str` 


