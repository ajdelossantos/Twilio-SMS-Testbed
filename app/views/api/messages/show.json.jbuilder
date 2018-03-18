require 'json'

json.message do
  json.partial! 'api/messages/message', message: @message
  json.metadata @message.parse_metadata
end