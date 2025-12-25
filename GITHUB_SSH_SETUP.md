# GitHub SSH Key Setup

## Your SSH Public Key

Your SSH public key has been generated and saved. Here's your public key:

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOMDpOymHw7F+c5HF8DnV7QB9i4PYpc2tiUjTtI/ZHVp github-baytech
```

## Step 1: Add SSH Key to GitHub

1. **Copy your public key** (the entire line above, starting with `ssh-ed25519`)

2. **Go to GitHub Settings**:
   - Visit: https://github.com/settings/keys
   - Or: GitHub → Your Profile Picture → **Settings** → **SSH and GPG keys**

3. **Add New SSH Key**:
   - Click **New SSH key** button
   - **Title**: `baytech-repo` (or any descriptive name)
   - **Key type**: `Authentication Key`
   - **Key**: Paste your public key (the entire line)
   - Click **Add SSH key**

4. **Verify** (optional):
   - You should see your new key listed
   - The key should show as "Never used" initially

## Step 2: Test SSH Connection

Run this command to test your SSH connection:

```powershell
ssh -T git@github.com
```

**Note:** The first time you connect, you may be prompted to verify GitHub's host key. Type `yes` to continue.

You should see a message like:
```
Hi brixoton1199! You've successfully authenticated, but GitHub does not provide shell access.
```

If you see this, your SSH key is working correctly! (The exit code 1 is normal - GitHub doesn't provide shell access, but authentication succeeded.)

## Step 3: Update Git Remote to Use SSH

If you haven't added the remote yet, use SSH:

```powershell
git remote add origin git@github.com:YOUR_USERNAME/baytech.git
```

If you already added it with HTTPS, update it:

```powershell
git remote set-url origin git@github.com:brixoton1199/baytech.cloud.git
```

**Note:** Your remote has already been updated to use SSH!

Verify the remote URL:

```powershell
git remote -v
```

You should see `git@github.com` instead of `https://github.com`

## Step 4: Push to GitHub

Now you can push without entering credentials:

```powershell
git push -u origin main
```

## Troubleshooting

### Permission Denied Error

If you get "Permission denied (publickey)":

1. **Verify key is added to GitHub**: Check https://github.com/settings/keys
2. **Test SSH connection**: Run `ssh -T git@github.com`
3. **Check SSH agent**: 
   ```powershell
   ssh-add $env:USERPROFILE\.ssh\id_ed25519_baytech
   ```

### Key Not Found Error

If SSH can't find your key:

1. **Check key exists**:
   ```powershell
   Test-Path $env:USERPROFILE\.ssh\id_ed25519_baytech
   ```

2. **Add key to SSH agent**:
   ```powershell
   ssh-add $env:USERPROFILE\.ssh\id_ed25519_baytech
   ```

3. **Verify SSH config**: Check that `~/.ssh/config` exists and has the correct settings

### Still Having Issues?

- Make sure you copied the **entire** public key (starts with `ssh-ed25519` and ends with `github-baytech`)
- Ensure there are no extra spaces or line breaks
- Try generating a new key if needed

## Security Notes

- **Never share your private key** (`id_ed25519_baytech`) - keep it secure
- The public key (`id_ed25519_baytech.pub`) is safe to share and add to GitHub
- Your private key is stored at: `C:\Users\LocalAdmin\.ssh\id_ed25519_baytech`
- Your public key is stored at: `C:\Users\LocalAdmin\.ssh\id_ed25519_baytech.pub`

