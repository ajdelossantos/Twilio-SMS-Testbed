# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

msg_1 = {from: "+15103036481", body: "Hello world from the seeds!"}
msg_2 = {from: "+15103036481", body: "Hello again, from the seeds!"}
msg_3 = {from: "+15103036481", body: "This is the last seeded message.", metadata: "{'number': 42}"}

Message.create(msg_1)
Message.create(msg_2)
Message.create(msg_3)