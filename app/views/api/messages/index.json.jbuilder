json.messages do
  @messages.each do |message|
    json.set! message.id do
      json.id message.id
      json.from message.from
      json.body message.body
    end
  end
end
