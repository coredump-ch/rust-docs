var searchIndex = {};
searchIndex["telegram_groups_bot"] = {"doc":"# Telegram Groups Bot","items":[[0,"types","telegram_groups_bot","Types used in this bot implementation.",null,null],[3,"Command","telegram_groups_bot::types","A stateless command.",null,null],[12,"name","","Command name, without a leading slash character.",0,null],[12,"receiver","","Command receiver when text contains @ notation (e.g. `/help@BotName`).",0,null],[12,"params","","List of command parameters. May be empty.",0,null],[11,"clone","","",0,null],[11,"fmt","","",0,null],[11,"try_from","","",0,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"fmt","","",0,null],[0,"errors","telegram_groups_bot","Errors used in this bot implementation.",null,null],[4,"CommandParseError","telegram_groups_bot::errors","An enumeration of possible erorrs that can happen\nduring the parsing of a message.",null,null],[13,"NoCommand","","",1,null],[11,"fmt","","",1,null],[11,"fmt","","",1,null],[11,"description","","",1,null],[0,"commands","telegram_groups_bot","Implementations of the command handlers.",null,null],[5,"handle_log","telegram_groups_bot::commands","Log the command, don&#39;t do anything else.",null,{"inputs":[{"name":"command"},{"name":"message"},{"name":"option"}],"output":{"name":"option"}}],[5,"handle_help","","Return help output.",null,{"inputs":[{"name":"command"},{"name":"message"},{"name":"option"}],"output":{"name":"option"}}],[5,"handle_list","","Return list of groups.",null,{"inputs":[{"name":"command"},{"name":"message"},{"name":"option"}],"output":{"name":"option"}}],[5,"handle_add","","Add a new topic group.",null,{"inputs":[{"name":"command"},{"name":"message"},{"name":"option"}],"output":{"name":"option"}}],[0,"datastore","telegram_groups_bot","Data storage backend.",null,null],[4,"DatastoreError","telegram_groups_bot::datastore","",null,null],[13,"Redis","","Redis error",2,null],[13,"PoolTimeout","","R2D2 pool error",2,null],[5,"save_group","","Save a topic group to Redis.",null,{"inputs":[{"name":"i64"},{"name":"str"},{"name":"url"},{"name":"redispool"}],"output":{"name":"result"}}],[5,"get_groups","","Return list of all groups within that namespace from Redis.",null,{"inputs":[{"name":"i64"},{"name":"redispool"}],"output":{"name":"result"}}],[6,"RedisPool","","",null,null],[11,"fmt","","",2,null],[11,"fmt","","",2,null],[11,"description","","",2,null],[11,"cause","","",2,null],[11,"from","","",2,{"inputs":[{"name":"rediserror"}],"output":{"name":"datastoreerror"}}],[11,"from","","",2,{"inputs":[{"name":"gettimeout"}],"output":{"name":"datastoreerror"}}],[0,"utils","telegram_groups_bot","Utility functions.",null,null],[5,"escape_markdown","telegram_groups_bot::utils","",null,{"inputs":[{"name":"str"}],"output":{"name":"string"}}]],"paths":[[3,"Command"],[4,"CommandParseError"],[4,"DatastoreError"]]};
initSearch(searchIndex);
