class UserController < ApplicationController
  before_action :authorize_user, except: [:show]


  def show
    
  end
end
