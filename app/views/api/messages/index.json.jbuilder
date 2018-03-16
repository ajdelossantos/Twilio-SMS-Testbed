json.messages do
  @messages.each do |message|
    json.set! message.id do
      json.id message.id
      json.from message.prettify_phone_number
      json.body message.body
    end
  end
end
