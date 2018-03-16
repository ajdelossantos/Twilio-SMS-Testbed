class Api::MessagesController < ApplicationController
  def show
    @message = Message.find(params[:id])
  end

  def index
    @messages = Message.all
  end

  def destroy; end
end