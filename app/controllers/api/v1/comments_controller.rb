require 'httparty'
class API::V1::CommentsController < ApplicationController

  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new
    @comment.user = current_user
  end

  private

  def comment_params
    params.require(:comment).permit(:time, :commentBody)
  end
end
