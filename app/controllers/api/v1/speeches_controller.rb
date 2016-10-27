class Api::V1::SpeechesController < ApplicationController

  def index
    @speeches = Speech.all
    respond_to do |format|
      format.json { render json: { speeches: @speeches } }
      format.json
    end
  end

  def show
    @speech = Speech.find(params[:id])
    @comments = @speech.comments.sort{ |a,b| a.time <=> b.time }
    respond_to do |format|
      format.json { render json: { speech: @speech, comment: @comments }}
      format.json
    end
  end

  def new
    @speech = Speech.new
  end

  def create
    @speech = Speech.new(speech_params)
    @speech.user_id = current_user.id
    if @speech.save
      flash[:notice] = "Speech has been added"
    else
      flash[:notice] = @speech.errors.full_messages.join(',')
    end
  end

  private

  def speech_params
    params.require(:speech).permit(:title, :media)
  end
end
