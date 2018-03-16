client = Twilio::REST::Client.new
  client.messages.create({
    from: Rails.application.secrets.twilio_phone_number,
    to: ' 15103036481',
    body: 'Hello there! This is a test.'
  })