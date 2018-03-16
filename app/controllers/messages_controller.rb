class MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token
  # skip_before_action :authenticate_user!, :only => "reply"

  def reply
    message_body = params["Body"]
    from_number = params["From"]
    message_params = { from: from_number, body: message_body, metadata: "" }

    boot_twilio
    @message = Message.new(message_params)

    if @message.save
      sms = @client.messages.create(
      from: Rails.application.secrets.twilio_phone_number,
      to: from_number,
      body: "Message saved! Thanks for your support. Your number is #{from_number}."
      )
    else
      sms = @client.messages.create(
      from: Rails.application.secrets.twilio_phone_number,
      to: from_number,
      body: "Oh no! Your message did not save. Your number is #{from_number}."
      )
    end

  end

  private

  def boot_twilio
    account_sid = Rails.application.secrets.twilio_account_sid
    auth_token = Rails.application.secrets.twilio_auth_token

    @client = Twilio::REST::Client.new account_sid, auth_token
  end
end

# Parameters: {"ToCountry"=>"US", "ToState"=>"CA", "SmsMessageSid"=>"SMfb5badbe2bcd0a4fd05965287070d2d9", "NumMedia"=>"0", "ToCity"=>"OAKLAND", "FromZip"=>"94705", "SmsSid"=>"SMfb5badbe2bcd0a4fd05965287070d2d9", "FromState"=>"CA", "SmsStatus"=>"received", "FromCity"=>"HAYWARD", "Body"=>"Hi for the third time!", "FromCountry"=>"US", "To"=>"+15103301783", "ToZip"=>"95035", "NumSegments"=>"1", "MessageSid"=>"SMfb5badbe2bcd0a4fd05965287070d2d9", "AccountSid"=>"ACd526261628bb31e00cfb7e71ceee823c", "From"=>"+15103036481", "ApiVersion"=>"2010-04-01"}