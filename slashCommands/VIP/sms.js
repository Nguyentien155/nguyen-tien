const { MessageEmbed } = require("discord.js")
const ayarlar = require('../../ayarlar.json');
var version = ayarlar.versionbot;
var roleID = ayarlar.roleID;
var img = ayarlar.img;

module.exports = {
    name: 'spam',
    description: 'SPAM SMS !',
    type: 'CHAT_INPUT',
    cooldown: 0,
    options: [
    {
      name: "phone",
      description: " SPAM SMS",
      required: true,
      type: "STRING",
    },
  ],

  run: async (client, interaction) => {

    if (!interaction.member.roles.cache.has(roleID))
      return interaction.reply({
        embeds: [
          new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Chỉ có <@&${roleID}> mới được dùng lệnh này \n Liên Hệ Nguyen Xuan Truong#9483 Để Mua Nhé !`)
            .setFooter({ text: "© Developer: Nguyen Xuan Truong#9483" })
            .setTimestamp(),
        ],
      });
    const phone = interaction.options.getString("phone")

    var exec = require('child_process').exec
      exec(`py sms.py ${phone} 100`, (error, stdout, stderr) => {
    });

    console.log('Một cuộc tấn công khởi chạy ID Discord:' +  interaction.guild.id)
      const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(version)
        .addFields(
          {
            name: "`𝗦𝗣𝗔𝗠 𝗣𝗛𝗢𝗡𝗘 𝗗𝗢𝗡𝗘𝗘`",
            value: ` ***[ ${interaction.user.username} ]*** `,
            inline: true,
          },
          {
            name: "`💥 𝑃ℎ𝑜𝑛𝑒 :`",
            value: ` ***[ ${phone} ]*** `,
            inline: true,
          },
        )
          .setFooter('© Developer: Nguyen Xuan Truong#9483', img)
          .setTimestamp();
            const countdownEmbed = new MessageEmbed()
              .setColor('RANDOM')
              .setTitle(version)
              .setDescription("WAIT LOAD CHECK PHONE NUKER...")
              .setImage("https://media4.giphy.com/media/Y5wlazC8lSVuU/giphy.gif")
              .setFooter('© Developer: Nguyen Xuan Truong#9483', img)
              .setTimestamp()
            interaction.reply({ embeds: [countdownEmbed] }).then((message) => {
                setTimeout(function () {
                  interaction.editReply({ embeds: [embed] });
                }, 1)
              })
      }
  }