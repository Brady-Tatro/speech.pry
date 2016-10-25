class Api::V1::MembersController < ApplicationController

  def index

    @speeches = current_user.speeches
    respond_to do |format|
      format.json { render json: { speeches: @speeches } }
      format.json
    end
  end


end
