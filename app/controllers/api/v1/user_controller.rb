class UserController < ApplicationController
  before_action :authorize_user, except: [:show, :index]

  def index
    @speeches = Speech.all
    respond_to do |format|
      format.json { render json: { speeches: @speeches } }
      format.json
    end
  end
end
