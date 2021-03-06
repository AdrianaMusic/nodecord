const PERMISSIONS = {
    CREATE_INSTANT_INVITE: 0x00000001,
    KICK_MEMBERS: 0x00000002,
    BAN_MEMBERS: 0x00000004,
    ADMINISTRATOR: 0x00000008,
    MANAGE_CHANNELS: 0x00000010,
    MANAGE_GUILD: 0x00000020,
    ADD_REACTIONS: 0x00000040,
    VIEW_AUDIT_LOG: 0x00000080,
    VIEW_CHANNEL: 0x00000400,
    SEND_MESSAGES: 0x00000800,
    SEND_TTS_MESSAGES: 0x00001000,
    MANAGE_MESSAGES: 0x00002000,
    EMBED_LINKS: 0x00004000,
    ATTACH_FILES: 0x00008000,
    READ_MESSAGE_HISTORY: 0x00010000,
    MENTION_EVERYONE: 0x00020000,
    USE_EXTERNAL_EMOJIS: 0x00040000,
    CONNECT: 0x00100000,
    SPEAK: 0x00200000,
    MUTE_MEMBERS: 0x00400000,
    DEAFEN_MEMBERS: 0x00800000,
    MOVE_MEMBERS: 0x01000000,
    USE_VAD: 0x02000000,
    CHANGE_NICKNAME: 0x04000000,
    MANAGE_NICKNAMES: 0x08000000,
    MANAGE_ROLES: 0x10000000,
    MANAGE_WEBHOOKS: 0x20000000,
    MANAGE_EMOJIS: 0x40000000
};

const arr = Object.values(PERMISSIONS);
PERMISSIONS.ALL = arr.reduce((x, y) => x | y);

module.exports = {
    baseURL: 'https://discordapp.com/api/v7',
    UserAgent: `Discord-Bot (https://github.com/nodecord/nodecord, ${require('../../package.json').version})`,
    guildSettings: {
        messageNotifications: [0, 1, 'ALL_MESSAGES', 'ONLY_MENTIONS'],
        verificationLevel: [0, 1, 2, 3, 4, 'NONE', 'LOW', 'MEDIUM', 'HIGH', 'VERY_HIGH'],
        explicitContentFilter: []
    },
    voiceRegions: [
        'brazil',
        'eu-central',
        'eu-west',
        'hongkong',
        'japan',
        'russia',
        'singapore',
        'southafrica',
        'sydney',
        'us-central',
        'us-east',
        'us-south',
        'us-west'
    ],
    OPCodes: {
        DISPATCH: 0,
        HEARTBEAT: 1,
        IDENTIFY: 2,
        STATUS_UPDATE: 3,
        VOICE_STATE_UPDATE: 4,
        VOICE_SERVER_PING: 5,
        RESUME: 6,
        RECONNECT: 7,
        REQUEST_GUILD_MEMBERS: 8,
        INVALID_SESSION: 9,
        HELLO: 10,
        HEARTBEAT_ACK: 11
    },
    permissions: PERMISSIONS
}