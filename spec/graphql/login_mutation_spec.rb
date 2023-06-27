require "rails_helper"

RSpec.describe "LoginMutation" do
  describe "#resolve" do
    subject(:execute) { AppSchema.execute(gql, variables: { input: }) }

    let(:input) { { email:, password: } }

    let(:gql) do
      <<~GQL
        mutation Login($input: LoginInput!) {
          result: login(input: $input) {
            authentication { id }
            error
          }
        }
      GQL
    end

    let!(:user) { create(:user, password: "password") }

    context "with a valid credentials" do
      let(:email) { user.email }
      let(:password) { "password" }

      it { expect(execute["errors"]).to be_nil }
      it { expect(execute["data"]["result"]["authentication"]).to be_present }
      it { expect(execute["data"]["result"]["error"]).to be_blank }
    end

    context "with a invalid credentials" do
      let(:email) { user.email }
      let(:password) { "wordpass" }

      it { expect(execute["errors"]).to be_nil }
      it { expect(execute["data"]["result"]["authentication"]).to be_blank }
      it { expect(execute["data"]["result"]["error"]).to be_present }
    end
  end
end
