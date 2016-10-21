class Api::V1::CommentsController < ApplicationController
  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user = current_user
    if @comment.save
     flash[:notice] = 'Success!'
   else
     @comment.errors.any?
     flash[:alert] = @comment.errors.full_messages.join("\n")
   end
  end

  private

  def comment_params
    params.require(:fullComment).permit(:time, :comment)
  end
end
