class UserController < ApplicationController
  before_action :authorize_user, except: [:show]

end
