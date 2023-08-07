import { Resolvers } from "./types"

export const resolvers: Resolvers = {
    Query: {
        tracksForHome : (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome();
        },
        track : (_, {id}, {dataSources}) =>  {
            return dataSources.trackAPI.getTrack(id);
        }
    },
    Track: {
        author: ({authorId}, __, { dataSources}) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
        modules: ({id}, _, {dataSources}) => {
            return dataSources.trackAPI.getTrackModules(id);
        }
    }
}