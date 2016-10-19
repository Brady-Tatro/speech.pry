require 'rails_helper'

describe Comment do
  let!(:user) { User.new(id: 1, username: 'partybody200', email: '2hard2party@example.com',password: '123qwe') }
  let!(:speech) { Speech.new(id: 1, title: 'Addicted to Chaos', media: 'https://www.youtube.com/watch?v=FWnTJjAKwdY&index=28&list=PLKG--4mRoNpBn8WvKrLdNLkTxrqjx0hue', user_id: user.id) }
  it 'is valid if it recieves a time' do
    if user.save && speech.save
      expect(Comment.new(user_id: user.id, speech_id: speech.id, log_time: "20:00")).to be_valid
    end
  end
  it 'should fail if not passed anything' do
    if user.save && speech.save
      expect(Comment.new(user_id: user.id, speech_id: speech.id, log_time: "")).to_not be_valid
    end
  end
end
