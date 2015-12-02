var searchIndex = {};
searchIndex['spaceapi_server'] = {"items":[[0,"","spaceapi_server","The main entry point for the Space API server.",null,null],[0,"api","","",null,null],[0,"optional","spaceapi_server::api","Useful stuff related to the spaceapi.",null,null],[11,"unwrap","spaceapi::optional","Moves the value `v` out of the `Optional<T>` if it is `Value(v)`.",0,{"inputs":[{"name":"optional"}],"output":{"name":"t"}}],[11,"unwrap_or_else","","Returns the contained value or computes it from a closure.",0,{"inputs":[{"name":"optional"},{"name":"f"}],"output":{"name":"t"}}],[11,"map","","Maps an `Optional<T>` to `Optional<U>` by applying a function to a contained value",0,{"inputs":[{"name":"optional"},{"name":"f"}],"output":{"name":"optional"}}],[11,"map_or","","Applies a function to the contained value or returns a default.  see\n[`std::option::Option<T>::map_or`](http://doc.rust-lang.org/std/option/enum.Option.html#method.map_or)",0,{"inputs":[{"name":"optional"},{"name":"u"},{"name":"f"}],"output":{"name":"u"}}],[11,"as_mut","","Converts from `Optional<T>` to `Optional<&mut T>`",0,{"inputs":[{"name":"optional"}],"output":{"name":"optional"}}],[11,"as_ref","","Converts from `Optional<T>` to `Optional<&T>`",0,{"inputs":[{"name":"optional"}],"output":{"name":"optional"}}],[11,"and_then","","Returns `Absent` if the optional is `Absent`, otherwise calls `f` with the\nwrapped value and returns the result.",0,{"inputs":[{"name":"optional"},{"name":"f"}],"output":{"name":"optional"}}],[11,"is_absent","","Returns `true` if the optional is a `Absent` value",0,{"inputs":[{"name":"optional"}],"output":{"name":"bool"}}],[11,"hash","","",0,null],[11,"fmt","","",0,{"inputs":[{"name":"optional"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"cmp","","",0,{"inputs":[{"name":"optional"},{"name":"optional"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"optional"},{"name":"optional"}],"output":{"name":"option"}}],[11,"lt","","",0,{"inputs":[{"name":"optional"},{"name":"optional"}],"output":{"name":"bool"}}],[11,"le","","",0,{"inputs":[{"name":"optional"},{"name":"optional"}],"output":{"name":"bool"}}],[11,"gt","","",0,{"inputs":[{"name":"optional"},{"name":"optional"}],"output":{"name":"bool"}}],[11,"ge","","",0,{"inputs":[{"name":"optional"},{"name":"optional"}],"output":{"name":"bool"}}],[11,"eq","","",0,{"inputs":[{"name":"optional"},{"name":"optional"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"optional"},{"name":"optional"}],"output":{"name":"bool"}}],[11,"clone","","",0,{"inputs":[{"name":"optional"}],"output":{"name":"optional"}}],[11,"into","","Convert Optional<T> into Option<T>",0,{"inputs":[{"name":"optional"}],"output":{"name":"option"}}],[11,"clone","spaceapi::sensors","",1,{"inputs":[{"name":"peoplenowpresentsensortemplate"}],"output":{"name":"peoplenowpresentsensortemplate"}}],[11,"fmt","","",1,{"inputs":[{"name":"peoplenowpresentsensortemplate"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"to_sensor","","",1,null],[11,"clone","","",2,{"inputs":[{"name":"temperaturesensortemplate"}],"output":{"name":"temperaturesensortemplate"}}],[11,"fmt","","",2,{"inputs":[{"name":"temperaturesensortemplate"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"to_sensor","","",2,null],[11,"clone","","",3,{"inputs":[{"name":"peoplenowpresentsensor"}],"output":{"name":"peoplenowpresentsensor"}}],[11,"fmt","","",3,{"inputs":[{"name":"peoplenowpresentsensor"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"temperaturesensor"}],"output":{"name":"temperaturesensor"}}],[11,"fmt","","",4,{"inputs":[{"name":"temperaturesensor"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"sensors"}],"output":{"name":"sensors"}}],[11,"fmt","","",5,{"inputs":[{"name":"sensors"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"to_json","","",5,{"inputs":[{"name":"sensors"}],"output":{"name":"json"}}],[11,"to_json","","",3,{"inputs":[{"name":"peoplenowpresentsensor"}],"output":{"name":"json"}}],[11,"to_json","","",4,{"inputs":[{"name":"temperaturesensor"}],"output":{"name":"json"}}],[11,"clone","spaceapi::status","",6,{"inputs":[{"name":"location"}],"output":{"name":"location"}}],[11,"fmt","","",6,{"inputs":[{"name":"location"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",7,{"inputs":[{"name":"spacefed"}],"output":{"name":"spacefed"}}],[11,"fmt","","",7,{"inputs":[{"name":"spacefed"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",8,{"inputs":[{"name":"icon"}],"output":{"name":"icon"}}],[11,"fmt","","",8,{"inputs":[{"name":"icon"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",9,{"inputs":[{"name":"state"}],"output":{"name":"state"}}],[11,"fmt","","",9,{"inputs":[{"name":"state"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",10,{"inputs":[{"name":"event"}],"output":{"name":"event"}}],[11,"fmt","","",10,{"inputs":[{"name":"event"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",11,{"inputs":[{"name":"contact"}],"output":{"name":"contact"}}],[11,"fmt","","",11,{"inputs":[{"name":"contact"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",12,{"inputs":[{"name":"feed"}],"output":{"name":"feed"}}],[11,"fmt","","",12,{"inputs":[{"name":"feed"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",13,{"inputs":[{"name":"feeds"}],"output":{"name":"feeds"}}],[11,"fmt","","",13,{"inputs":[{"name":"feeds"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",14,{"inputs":[{"name":"cache"}],"output":{"name":"cache"}}],[11,"fmt","","",14,{"inputs":[{"name":"cache"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",15,{"inputs":[{"name":"radioshow"}],"output":{"name":"radioshow"}}],[11,"fmt","","",15,{"inputs":[{"name":"radioshow"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",16,{"inputs":[{"name":"status"}],"output":{"name":"status"}}],[11,"fmt","","",16,{"inputs":[{"name":"status"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create a new Status object with only the absolutely required fields.",16,{"inputs":[{"name":"status"},{"name":"s"},{"name":"s"},{"name":"s"},{"name":"location"},{"name":"contact"},{"name":"vec"}],"output":{"name":"status"}}],[11,"to_json","","",16,{"inputs":[{"name":"status"}],"output":{"name":"json"}}],[11,"to_json","","",6,{"inputs":[{"name":"location"}],"output":{"name":"json"}}],[11,"to_json","","",7,{"inputs":[{"name":"spacefed"}],"output":{"name":"json"}}],[11,"to_json","","",8,{"inputs":[{"name":"icon"}],"output":{"name":"json"}}],[11,"to_json","","",9,{"inputs":[{"name":"state"}],"output":{"name":"json"}}],[11,"to_json","","",10,{"inputs":[{"name":"event"}],"output":{"name":"json"}}],[11,"to_json","","",11,{"inputs":[{"name":"contact"}],"output":{"name":"json"}}],[11,"to_json","","",12,{"inputs":[{"name":"feed"}],"output":{"name":"json"}}],[11,"to_json","","",13,{"inputs":[{"name":"feeds"}],"output":{"name":"json"}}],[11,"to_json","","",14,{"inputs":[{"name":"cache"}],"output":{"name":"json"}}],[11,"to_json","","",15,{"inputs":[{"name":"radioshow"}],"output":{"name":"json"}}],[4,"Optional","spaceapi_server::api::optional","An ``Optional`` can contain ``Optional::Value<T>`` or ``Optional::Absent``.\nIt is similar to an ``Option``, but ``Optional::Absent`` means it will be\nomitted when serialized, while ``None`` will be serialized to ``null``.",null,null],[13,"Value","","",0,null],[13,"Absent","","",0,null],[0,"sensors","spaceapi_server::api","Module defining all sensor related structures.",null,null],[8,"SensorTemplate","spaceapi_server::api::sensors","A trait for all possible sensor templates.",null,null],[10,"to_sensor","","",17,null],[3,"PeopleNowPresentSensorTemplate","","",null,null],[12,"location","","",1,null],[12,"name","","",1,null],[12,"names","","",1,null],[12,"description","","",1,null],[3,"TemperatureSensorTemplate","","",null,null],[12,"unit","","",2,null],[12,"location","","",2,null],[12,"name","","",2,null],[12,"description","","",2,null],[3,"PeopleNowPresentSensor","","",null,null],[12,"location","","",3,null],[12,"name","","",3,null],[12,"names","","",3,null],[12,"description","","",3,null],[12,"value","","",3,null],[3,"TemperatureSensor","","",null,null],[12,"unit","","",4,null],[12,"location","","",4,null],[12,"name","","",4,null],[12,"description","","",4,null],[12,"value","","",4,null],[3,"Sensors","","",null,null],[12,"people_now_present","","",5,null],[12,"temperature","","",5,null],[3,"Location","spaceapi_server::api","",null,null],[12,"address","","",6,null],[12,"lat","","",6,null],[12,"lon","","",6,null],[3,"Event","","",null,null],[12,"name","","",10,null],[12,"_type","","",10,null],[12,"timestamp","","",10,null],[12,"extra","","",10,null],[8,"SensorTemplate","","A trait for all possible sensor templates.",null,null],[10,"to_sensor","","",17,null],[3,"Contact","","",null,null],[12,"irc","","",11,null],[12,"twitter","","",11,null],[12,"foursquare","","",11,null],[12,"email","","",11,null],[3,"State","","",null,null],[12,"open","","",9,null],[12,"lastchange","","",9,null],[12,"trigger_person","","",9,null],[12,"message","","",9,null],[12,"icon","","",9,null],[3,"PeopleNowPresentSensor","","",null,null],[12,"location","","",3,null],[12,"name","","",3,null],[12,"names","","",3,null],[12,"description","","",3,null],[12,"value","","",3,null],[3,"Cache","","",null,null],[12,"schedule","","",14,null],[3,"Feed","","",null,null],[12,"_type","","",12,null],[12,"url","","",12,null],[4,"Optional","","An ``Optional`` can contain ``Optional::Value<T>`` or ``Optional::Absent``.\nIt is similar to an ``Option``, but ``Optional::Absent`` means it will be\nomitted when serialized, while ``None`` will be serialized to ``null``.",null,null],[13,"Value","","",0,null],[13,"Absent","","",0,null],[3,"TemperatureSensor","","",null,null],[12,"unit","","",4,null],[12,"location","","",4,null],[12,"name","","",4,null],[12,"description","","",4,null],[12,"value","","",4,null],[3,"RadioShow","","",null,null],[12,"name","","",15,null],[12,"url","","",15,null],[12,"_type","","",15,null],[12,"start","","",15,null],[12,"end","","",15,null],[3,"Icon","","",null,null],[12,"open","","",8,null],[12,"close","","",8,null],[3,"Status","","The main Space API status object.",null,null],[12,"api","","",16,null],[12,"space","","",16,null],[12,"logo","","",16,null],[12,"url","","",16,null],[12,"location","","",16,null],[12,"contact","","",16,null],[12,"spacefed","","",16,null],[12,"projects","","",16,null],[12,"cam","","",16,null],[12,"feeds","","",16,null],[12,"events","","",16,null],[12,"radio_show","","",16,null],[12,"cache","","",16,null],[12,"issue_report_channels","","",16,null],[12,"state","","",16,null],[12,"sensors","","",16,null],[3,"Spacefed","","",null,null],[12,"spacenet","","",7,null],[12,"spacesaml","","",7,null],[12,"spacephone","","",7,null],[3,"Feeds","","",null,null],[12,"blog","","",13,null],[12,"wiki","","",13,null],[12,"calendar","","",13,null],[12,"flickr","","",13,null],[3,"Sensors","","",null,null],[12,"people_now_present","","",5,null],[12,"temperature","","",5,null],[3,"SpaceapiServer","spaceapi_server","A Space API server instance.",null,null],[4,"SpaceapiServerError","","",null,null],[13,"Redis","","",18,null],[11,"new","","",19,{"inputs":[{"name":"spaceapiserver"},{"name":"ipv4addr"},{"name":"u16"},{"name":"status"},{"name":"t"},{"name":"vec"}],"output":{"name":"result"}}],[11,"serve","","Start a HTTP server listening on ``self.host:self.port``.",19,{"inputs":[{"name":"spaceapiserver"}],"output":null}],[11,"register_sensor","","Register a new sensor.",19,{"inputs":[{"name":"spaceapiserver"},{"name":"box"},{"name":"string"}],"output":null}],[11,"fmt","","",18,{"inputs":[{"name":"spaceapiservererror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",18,{"inputs":[{"name":"spaceapiservererror"},{"name":"rediserror"}],"output":{"name":"spaceapiservererror"}}],[11,"fmt","","",18,{"inputs":[{"name":"spaceapiservererror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",18,{"inputs":[{"name":"spaceapiservererror"}],"output":{"name":"str"}}],[11,"cause","","",18,{"inputs":[{"name":"spaceapiservererror"}],"output":{"name":"option"}}],[0,"sensors","","Sensor related stuff.",null,null],[3,"SensorSpec","spaceapi_server::sensors","A specification of a sensor.",null,null],[12,"template","","",20,null],[12,"data_key","","",20,null],[4,"SensorError","","A ``SensorError`` wraps problems that can occur when reading or updating sensor values.",null,null],[13,"UnknownSensor","","",21,null],[13,"Redis","","",21,null],[6,"SafeSensorSpecs","","A vector of sensor specs, wrapped in an Arc and a Mutex. Safe for use in multithreaded situations.\nTODO: Maybe we could use a RwLock instead of a Mutex?",null,null],[8,"ErrorDisplay","","",null,null],[10,"error_fmt","","",22,{"inputs":[{"name":"errordisplay"},{"name":"formatter"}],"output":{"name":"result"}}],[8,"ErrorDescription","","",null,null],[10,"error_desc","","",23,{"inputs":[{"name":"errordescription"}],"output":{"name":"str"}}],[8,"ErrorCause","","",null,null],[10,"error_cause","","",24,{"inputs":[{"name":"errorcause"}],"output":{"name":"option"}}],[11,"fmt","","",21,{"inputs":[{"name":"sensorerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",21,{"inputs":[{"name":"sensorerror"},{"name":"string"}],"output":{"name":"sensorerror"}}],[11,"from","","",21,{"inputs":[{"name":"sensorerror"},{"name":"rediserror"}],"output":{"name":"sensorerror"}}],[11,"fmt","","",21,{"inputs":[{"name":"sensorerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",21,{"inputs":[{"name":"sensorerror"}],"output":{"name":"str"}}],[11,"cause","","",21,{"inputs":[{"name":"sensorerror"}],"output":{"name":"option"}}],[11,"get_sensor_value","","Retrieve sensor value from Redis.",20,{"inputs":[{"name":"sensorspec"},{"name":"connectioninfo"}],"output":{"name":"result"}}],[11,"set_sensor_value","","Set sensor value in Redis.",20,{"inputs":[{"name":"sensorspec"},{"name":"connectioninfo"},{"name":"str"}],"output":{"name":"result"}}],[0,"modifiers","spaceapi_server","",null,null],[3,"StateFromPeopleNowPresent","spaceapi_server::modifiers","",null,null],[8,"StatusModifier","","`StatusModifier`s are used to modify the status",null,null],[10,"modify","","Called after all registered sensors are read",25,{"inputs":[{"name":"statusmodifier"},{"name":"status"}],"output":null}],[11,"modify","","",26,{"inputs":[{"name":"statefrompeoplenowpresent"},{"name":"status"}],"output":null}]],"paths":[[4,"Optional"],[3,"PeopleNowPresentSensorTemplate"],[3,"TemperatureSensorTemplate"],[3,"PeopleNowPresentSensor"],[3,"TemperatureSensor"],[3,"Sensors"],[3,"Location"],[3,"Spacefed"],[3,"Icon"],[3,"State"],[3,"Event"],[3,"Contact"],[3,"Feed"],[3,"Feeds"],[3,"Cache"],[3,"RadioShow"],[3,"Status"],[8,"SensorTemplate"],[4,"SpaceapiServerError"],[3,"SpaceapiServer"],[3,"SensorSpec"],[4,"SensorError"],[8,"ErrorDisplay"],[8,"ErrorDescription"],[8,"ErrorCause"],[8,"StatusModifier"],[3,"StateFromPeopleNowPresent"]]};
initSearch(searchIndex);
