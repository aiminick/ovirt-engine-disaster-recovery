package jobs.services;

import drp.OvirtApi;
import dto.response.ServiceResponse;
import helpers.ShellHelper;
import models.Configuration;
import org.ovirt.engine.sdk.Api;
import play.Logger;
import play.jobs.Job;

/**
 * Created by jandrad on 31/01/16.
 */
public class ManagerJob extends Job {

    @Override
    public Boolean doJobWithResult() throws Exception {

        ServiceResponse serviceResponse = null;

        Configuration configuration = Configuration.generalConfiguration();
        String host = configuration.apiURL;
        if (host!=null && !host.isEmpty()) {
            try {
                String[] parts = host.split("/");
                String hostName = parts[2];
                int port = 80;
                int index = hostName.indexOf(':');
                if (index != -1) {
                    port = Integer.valueOf(hostName.substring(index+1, hostName.length()));
                    hostName = hostName.substring(0, index);
                }

                String keyLocation = configuration.managerKeyLocation;
                String user = configuration.managerUser;
                String ip = configuration.managerIp;
                String bin = configuration.managerBinLocation;
                String operation = configuration.managerCommand;

                String command = "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -i " + keyLocation + " " + user + "@" + ip + " " + bin + " " + operation;
                int result = ShellHelper.executeCommand(command);

                if (result == 0) {

                    long startTime = System.currentTimeMillis();
                    Api api = null;
                    do {

                        Thread.sleep(10000);

                        try {
                            api = OvirtApi.getApi();
                        } catch (Exception e) {
                            Logger.debug("Api not ready yet");
                        }

                    } while (api == null && (System.currentTimeMillis() - startTime) < 120000);

                    api.close();
                    return api != null;
                }

                return false;

            } catch (Exception e) {
                Logger.error(e, "Could not get manager status");
            }
        }

        return false;
    }
}
